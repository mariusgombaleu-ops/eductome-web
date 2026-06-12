import { useState, useMemo, useEffect, useRef } from 'react';
import { useUser } from '../../contexts/UserContext';
import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../config/firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { getSubjectsForLevel } from '../../constants/coefficients';
import { BacPointsGauge } from './BacPointsGauge';
import { BacSubjectRow } from './BacSubjectRow';
import { BacOrientationPredictor } from './BacOrientationPredictor';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts';
import { BrainCircuit, AlertTriangle, RefreshCw } from 'lucide-react';

export function BacSimulator() {
  const { levelString, goals, grades } = useUser();
  const { currentUser } = useAuth();
  const subjects = getSubjectsForLevel(levelString);

  const [notesSimulees, setNotesSimulees] = useState<Record<string, number | null>>({});
  const [isSmartDistribution, setIsSmartDistribution] = useState(true);
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!currentUser) return;
    getDoc(doc(db, 'users', currentUser.uid)).then(snap => {
      const data = snap.data();
      if (data?.bacSimulation) setNotesSimulees(data.bacSimulation);
    }).catch(() => {});
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser) return;
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => {
      updateDoc(doc(db, 'users', currentUser.uid), { bacSimulation: notesSimulees }).catch(() => {});
    }, 1000);
    return () => { if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current); };
  }, [notesSimulees, currentUser]);

  const moyennesParMatiere = useMemo(() => {
    const result: Record<string, number | null> = {};
    subjects.forEach(sub => {
      const allGrades: number[] = [];
      (['t1', 't2', 't3'] as const).forEach(trim => {
        (grades[trim]?.[sub.id] || [])
          .filter(g => g !== '' && !isNaN(Number(g)))
          .forEach(g => allGrades.push(Number(g)));
      });
      result[sub.id] = allGrades.length > 0
        ? allGrades.reduce((a, b) => a + b, 0) / allGrades.length
        : null;
    });
    return result;
  }, [grades, subjects]);

  const totalCoeff = useMemo(() => subjects.reduce((s, sub) => s + sub.coeff, 0), [subjects]);

  const moyenneClasseGlobale = useMemo(() => {
    let totalPts = 0;
    let totalC = 0;
    subjects.forEach(sub => {
      const avg = moyennesParMatiere[sub.id];
      if (avg !== null && avg !== undefined) {
        totalPts += avg * sub.coeff;
        totalC += sub.coeff;
      }
    });
    return totalC > 0 ? totalPts / totalC : null;
  }, [moyennesParMatiere, subjects]);

  const { pointsSimules, moyenneSimulee, noteMinParMatiere } = useMemo(() => {
    const objectifPoints = goals.bacPoints ?? 0;
    let pts = 0;
    let coeffSaisi = 0;

    subjects.forEach(sub => {
      const note = notesSimulees[sub.id];
      if (note !== null && note !== undefined) {
        pts += note * sub.coeff;
        coeffSaisi += sub.coeff;
      }
    });

    const moy = coeffSaisi > 0 ? pts / coeffSaisi : null;
    const pointsRestants = objectifPoints - pts;
    const coeffRestants = totalCoeff - coeffSaisi;

    const noteMin: Record<string, number | null> = {};
    
    // Répartition intelligente : calcule le poids historique de chaque matière restante
    const remainingSubjects = subjects.filter(sub => notesSimulees[sub.id] === null || notesSimulees[sub.id] === undefined);
    let sumHistoryPoints = 0;
    remainingSubjects.forEach(sub => {
       const histAvg = moyennesParMatiere[sub.id] || 10; // Si pas de note, on suppose 10
       sumHistoryPoints += histAvg * sub.coeff;
    });

    subjects.forEach(sub => {
      const note = notesSimulees[sub.id];
      if (note === null || note === undefined) {
        if (isSmartDistribution && sumHistoryPoints > 0) {
           const histAvg = moyennesParMatiere[sub.id] || 10;
           let calculatedNote = (pointsRestants * histAvg) / sumHistoryPoints;
           if (calculatedNote > 20) calculatedNote = 20;
           noteMin[sub.id] = Math.max(0, calculatedNote);
        } else {
           noteMin[sub.id] = coeffRestants > 0 ? pointsRestants / coeffRestants : null;
        }
      } else {
        noteMin[sub.id] = null;
      }
    });

    return { pointsSimules: pts, moyenneSimulee: moy, noteMinParMatiere: noteMin };
  }, [notesSimulees, subjects, goals.bacPoints, totalCoeff, moyennesParMatiere, isSmartDistribution]);

  const chartData = useMemo(() => {
    return subjects.map(sub => ({
      subject: sub.name.length > 10 ? sub.name.substring(0, 10) + '...' : sub.name,
      actuel: moyennesParMatiere[sub.id] ? Number(moyennesParMatiere[sub.id]!.toFixed(1)) : 0,
      simule: notesSimulees[sub.id] !== null && notesSimulees[sub.id] !== undefined 
        ? Number(notesSimulees[sub.id]!.toFixed(1)) 
        : (noteMinParMatiere[sub.id] ? Number(noteMinParMatiere[sub.id]!.toFixed(1)) : 0),
      fullMark: 20
    }));
  }, [subjects, moyennesParMatiere, notesSimulees, noteMinParMatiere]);

  const handleCatastrophe = () => {
    // Trouve la matière avec le plus fort coefficient
    const strongestSubject = [...subjects].sort((a, b) => b.coeff - a.coeff)[0];
    if (strongestSubject) {
      setNotesSimulees({
        ...notesSimulees,
        [strongestSubject.id]: 7 // On simule un accident (7/20)
      });
    }
  };

  const handleReset = () => {
    setNotesSimulees({});
  };

  const handleChange = (id: string, val: number | null) => {
    setNotesSimulees(prev => ({ ...prev, [id]: val }));
  };

  if (!goals.bacPoints) {
    return (
      <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-2xl p-8 text-center">
        <p className="text-orange-700 dark:text-orange-300 font-medium">
          Définis ton objectif BAC dans l'onglet <strong>Mes Objectifs</strong> pour activer le simulateur.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <BacPointsGauge
        pointsSimules={pointsSimules}
        objectifPoints={goals.bacPoints}
        moyenneSimulee={moyenneSimulee}
        totalCoeff={totalCoeff}
        moyenneClasseGlobale={moyenneClasseGlobale}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-[#161B22] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-[#1A3557] dark:text-white mb-1">Tes Cibles par Matière</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Ajuste tes notes. Les cases vides calculent ce qu'il te manque pour le BAC.
              </p>
            </div>
            <button 
              onClick={() => setIsSmartDistribution(!isSmartDistribution)}
              className={`p-2 rounded-lg transition-colors flex items-center gap-2 text-xs font-bold ${isSmartDistribution ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'}`}
              title="Répartition Intelligente : demande plus de points dans tes points forts."
            >
              <BrainCircuit size={16} /> <span className="hidden sm:inline">Répartition {isSmartDistribution ? 'Intelligente' : 'Égale'}</span>
            </button>
          </div>
          
          <div className="space-y-4 mb-6 flex-1 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {subjects.map(sub => (
              <BacSubjectRow
                key={sub.id}
                subject={sub}
                value={notesSimulees[sub.id] ?? null}
                onChange={handleChange}
                noteMinRequise={noteMinParMatiere[sub.id]}
                moyenneClasse={moyennesParMatiere[sub.id]}
              />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
            <button 
              onClick={handleCatastrophe}
              className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 dark:bg-red-900/20 dark:hover:bg-red-900/40 dark:text-red-400 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <AlertTriangle size={16} /> Scénario Catastrophe
            </button>
            <button 
              onClick={handleReset}
              className="sm:w-12 bg-gray-100 hover:bg-gray-200 text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 py-2.5 rounded-xl flex items-center justify-center transition-colors"
              title="Réinitialiser"
            >
              <RefreshCw size={16} />
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-[#161B22] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm flex flex-col">
          <h2 className="text-lg font-bold text-[#1A3557] dark:text-white mb-1">Aperçu Visuel (Radar)</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
            Compare ton niveau actuel avec les notes dont tu as besoin (simulées/requises).
          </p>
          <div className="flex-1 w-full min-h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 11, fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 20]} tick={{ fill: '#9ca3af', fontSize: 10 }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontWeight: 'bold' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', fontWeight: 600, paddingTop: '20px' }} />
                <Radar name="Niveau Actuel" dataKey="actuel" stroke="#1A3557" fill="#1A3557" fillOpacity={0.3} />
                <Radar name="Cible (Simulé)" dataKey="simule" stroke="#D81B60" fill="#D81B60" fillOpacity={0.5} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <BacOrientationPredictor
        levelString={levelString}
        notesSimulees={notesSimulees}
        moyennesParMatiere={moyennesParMatiere}
        moyenneSimulee={moyenneSimulee}
      />
    </div>
  );
}
