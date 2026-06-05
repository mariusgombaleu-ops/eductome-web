import { useState } from 'react';
import { useUser, UserGrades } from '../../contexts/UserContext';
import { getSubjectsForLevel } from '../../constants/coefficients';
import { Target, Calculator, ChevronDown, ChevronUp, Plus, AlertCircle, X } from 'lucide-react';

export function GradesCalculator() {
  const { levelString, goals, grades, updateGrades } = useUser();
  const subjects = getSubjectsForLevel(levelString);
  const [activeTab, setActiveTab] = useState<'t1' | 't2' | 't3'>('t1');
  const [openSubject, setOpenSubject] = useState<string | null>(null);

  const handleAddGrade = async (subjectId: string) => {
    const currentGrades = grades[activeTab]?.[subjectId] || [];
    const newGradesObj: UserGrades = { ...grades };
    
    if (!newGradesObj[activeTab]) newGradesObj[activeTab] = {};
    
    newGradesObj[activeTab]![subjectId] = [...currentGrades, 0]; // Add a default 0, will be edited
    await updateGrades(newGradesObj);
  };

  const handleUpdateGrade = async (subjectId: string, index: number, value: string) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return;
    
    const newGradesObj: UserGrades = { ...grades };
    const currentGrades = [...(grades[activeTab]?.[subjectId] || [])];
    currentGrades[index] = numValue;
    
    if (!newGradesObj[activeTab]) newGradesObj[activeTab] = {};
    newGradesObj[activeTab]![subjectId] = currentGrades;
    
    await updateGrades(newGradesObj);
  };

  const handleRemoveGrade = async (subjectId: string, index: number) => {
    const newGradesObj: UserGrades = { ...grades };
    const currentGrades = [...(grades[activeTab]?.[subjectId] || [])];
    currentGrades.splice(index, 1);
    
    if (!newGradesObj[activeTab]) newGradesObj[activeTab] = {};
    newGradesObj[activeTab]![subjectId] = currentGrades;
    
    await updateGrades(newGradesObj);
  };

  const calculateSubjectAverage = (subjectId: string) => {
    const subjectGrades = grades[activeTab]?.[subjectId] || [];
    if (subjectGrades.length === 0) return null;
    const sum = subjectGrades.reduce((a, b) => a + b, 0);
    return sum / subjectGrades.length;
  };

  const calculateTrimesterAverage = () => {
    let totalPoints = 0;
    let totalCoeffs = 0;

    subjects.forEach(sub => {
      const avg = calculateSubjectAverage(sub.id);
      if (avg !== null) {
        totalPoints += avg * sub.coeff;
        totalCoeffs += sub.coeff;
      }
    });

    if (totalCoeffs === 0) return null;
    return totalPoints / totalCoeffs;
  };

  const trimesterAvg = calculateTrimesterAverage();
  const targetTrimester = goals.trimesterTargets?.[activeTab];

  return (
    <div className="space-y-6 px-4 md:px-6 lg:px-8 pt-6 pb-20 font-poppins">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#1A3557] dark:text-white flex items-center gap-3">
            <Calculator className="w-8 h-8 text-[#D81B60]" />
            Mes Notes & Objectifs
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Renseigne tes notes pour calculer tes moyennes en temps réel.
          </p>
        </div>
        {goals.bacPoints && (
          <div className="bg-[#1A3557] text-white px-4 py-2 rounded-xl flex items-center gap-3 shadow-lg">
            <Target className="w-5 h-5 text-[#D81B60]" />
            <div>
              <p className="text-xs text-white/70">Objectif Final</p>
              <p className="font-bold">{goals.bacPoints} Points / Moyenne {goals.generalAverage}/20</p>
            </div>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-gray-100 dark:bg-[#0D1117] p-1 rounded-xl w-fit">
        {[
          { id: 't1', label: 'Trimestre 1' },
          { id: 't2', label: 'Trimestre 2' },
          { id: 't3', label: 'Trimestre 3' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-6 py-2 rounded-lg font-medium text-sm transition-all ${
              activeTab === tab.id 
                ? 'bg-white dark:bg-[#161B22] text-[#D81B60] shadow-sm' 
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Global Average Card */}
      <div className="bg-gradient-to-br from-white to-gray-50 dark:from-[#161B22] dark:to-[#0D1117] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-gray-500 dark:text-gray-400 font-medium">Moyenne {activeTab.toUpperCase()} Actuelle</h2>
            <div className="text-4xl md:text-5xl font-black text-[#1A3557] dark:text-white mt-2">
              {trimesterAvg !== null ? trimesterAvg.toFixed(2) : '-.--'} <span className="text-xl md:text-2xl text-gray-400 font-normal">/ 20</span>
            </div>
          </div>

          {targetTrimester ? (
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl text-center min-w-[200px]">
              <p className="text-blue-600 dark:text-blue-400 text-sm font-bold mb-1">Objectif {activeTab.toUpperCase()}</p>
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{targetTrimester} / 20</p>
              {trimesterAvg !== null && (
                <div className={`mt-2 flex items-center justify-center gap-1 text-xs font-bold ${trimesterAvg >= targetTrimester ? 'text-green-600' : 'text-orange-500'}`}>
                  {trimesterAvg >= targetTrimester ? (
                    <>Objectif atteint ! 🎉</>
                  ) : (
                    <>Encore ${(targetTrimester - trimesterAvg).toFixed(2)} pts à rattraper 💪</>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2 text-orange-500 bg-orange-50 dark:bg-orange-900/20 px-4 py-3 rounded-xl text-sm">
              <AlertCircle className="w-5 h-5" />
              <span>Tu n'as pas défini d'objectif pour ce trimestre.</span>
            </div>
          )}
        </div>
      </div>

      {/* Subjects Accordion */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Détails par matière</h3>
        {subjects.map(subject => {
          const isOpen = openSubject === subject.id;
          const avg = calculateSubjectAverage(subject.id);
          const target = goals.subjectTargets?.[subject.id];
          const subjectGrades = grades[activeTab]?.[subject.id] || [];

          return (
            <div key={subject.id} className="bg-white dark:bg-[#161B22] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-all shadow-sm">
              {/* Header / Toggle */}
              <button 
                onClick={() => setOpenSubject(isOpen ? null : subject.id)}
                className="w-full flex items-center justify-between p-4 md:p-5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 dark:bg-[#0D1117] w-12 h-12 rounded-lg flex items-center justify-center font-bold text-[#1A3557] dark:text-white">
                    x{subject.coeff}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 dark:text-white">{subject.name}</h4>
                    <div className="flex gap-3 text-sm mt-1">
                      {target && <span className="text-gray-500">Objectif: <strong className="text-[#D81B60]">{target}</strong></span>}
                      {avg !== null && <span className="text-gray-500">Actuelle: <strong className="text-blue-600 dark:text-blue-400">{avg.toFixed(2)}</strong></span>}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {avg !== null && target && (
                    <div className="hidden md:flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-md bg-gray-100 dark:bg-[#0D1117]">
                      {avg >= target ? <span className="text-green-500">↑ Avance</span> : <span className="text-orange-500">↓ Retard</span>}
                    </div>
                  )}
                  {isOpen ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
                </div>
              </button>

              {/* Content */}
              {isOpen && (
                <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#0D1117]/50">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {subjectGrades.map((val, idx) => (
                      <div key={idx} className="relative group">
                        <label className="text-xs text-gray-500 mb-1 block">Note {idx + 1}</label>
                        <div className="flex items-center">
                          <input 
                            type="number" 
                            step="0.25"
                            value={val === 0 ? '' : val}
                            onChange={(e) => handleUpdateGrade(subject.id, idx, e.target.value)}
                            placeholder="/ 20"
                            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-l-lg focus:ring-[#D81B60] focus:border-[#D81B60] bg-white dark:bg-[#161B22] dark:text-white"
                          />
                          <button 
                            onClick={() => handleRemoveGrade(subject.id, idx)}
                            className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-3 py-2 rounded-r-lg hover:bg-red-200 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => handleAddGrade(subject.id)}
                    className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 transition-colors"
                  >
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-md">
                      <Plus className="w-4 h-4" />
                    </div>
                    Ajouter une note de devoir
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
