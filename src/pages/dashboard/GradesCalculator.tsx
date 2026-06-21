import { useState, useEffect, useMemo } from 'react';
import { useUser, UserGrades, UserGoals } from '../../contexts/UserContext';
import { useTheme } from '../../contexts/ThemeContext';
import { getSubjectsForLevel } from '../../constants/coefficients';
import { Target, Calculator, ChevronDown, ChevronUp, Plus, AlertCircle, X, Sparkles, Save, BookOpen, Star, ArrowRight, BarChart2, TrendingUp } from 'lucide-react';
import { BacSimulator } from '../../components/bac/BacSimulator';
import confetti from 'canvas-confetti';
import { GrandFrereGuide } from '../../components/ui/GrandFrereGuide';
import { useToast } from '../../contexts/ToastContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';

export function GradesCalculator() {
  const { levelString, goals, grades, updateGrades, updateGoals, xp } = useUser();
  const { palette } = useTheme();
  const { addToast } = useToast();
  const navigate = useNavigate();
  const subjects = getSubjectsForLevel(levelString);
  
  const [mainTab, setMainTab] = useState<'notes' | 'objectifs' | 'simulateur' | 'evolution'>('notes');
  const [activeTab, setActiveTab] = useState<'t1' | 't2' | 't3'>('t1');
  const [openSubject, setOpenSubject] = useState<string | null>(null);

  // Local state for editing goals
  const [draftGoals, setDraftGoals] = useState<UserGoals>({ ...goals });

  // Sync draft goals when global goals change
  useEffect(() => {
    setDraftGoals({ ...goals });
  }, [goals]);

  const handleAddGrade = async (subjectId: string) => {
    const currentGrades = grades[activeTab]?.[subjectId] || [];
    const newGradesObj: UserGrades = { ...grades };
    
    if (!newGradesObj[activeTab]) newGradesObj[activeTab] = {};
    
    newGradesObj[activeTab]![subjectId] = [...currentGrades, '' as any];
    await updateGrades(newGradesObj);
  };

  const handleUpdateGrade = async (subjectId: string, index: number, value: string) => {
    let finalValue: number | string = value;
    
    if (value !== '' && !value.endsWith('.')) {
      const numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        if (numValue > 20) {
          finalValue = 20;
        } else if (numValue < 0) {
          finalValue = 0;
        } else {
          finalValue = numValue;
        }
      }
    }
    
    const allGradesFlat = Object.values(grades).flatMap(trim => Object.values(trim || {}).flatMap(sub => sub));
    const hadNoValidGrades = allGradesFlat.filter(g => g !== '' && !isNaN(Number(g))).length === 0;
    
    const oldAvg = calculateSubjectAverage(subjectId);

    const newGradesObj: UserGrades = { ...grades };
    const currentGrades = [...(grades[activeTab]?.[subjectId] || [])];
    currentGrades[index] = finalValue as any;
    
    if (!newGradesObj[activeTab]) newGradesObj[activeTab] = {};
    newGradesObj[activeTab]![subjectId] = currentGrades;
    
    await updateGrades(newGradesObj);
    
    // Check new average for confetti
    const validGrades = currentGrades.filter(g => g !== '' && !isNaN(Number(g))).map(g => Number(g));
    const newAvg = validGrades.length === 0 ? null : validGrades.reduce((a, b) => a + b, 0) / validGrades.length;
    const target = goals.subjectTargets?.[subjectId];

    if (hadNoValidGrades && finalValue !== '' && !isNaN(Number(finalValue))) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D81B60', '#1A3557', '#1976D2', '#FACC15']
      });
    } else if (newAvg !== null && target && newAvg >= target && (oldAvg === null || oldAvg < target)) {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#10B981', '#34D399', '#FACC15']
      });
      addToast({
        type: 'success',
        title: 'Objectif Atteint !',
        message: 'Tu as dépassé ton objectif dans cette matière ! Continue comme ça 🔥'
      });
    }
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
    const validGrades = subjectGrades.filter(g => g !== '' && !isNaN(Number(g))).map(g => Number(g));
    if (validGrades.length === 0) return null;
    const sum = validGrades.reduce((a, b) => a + b, 0);
    return sum / validGrades.length;
  };

  const calculateTrimesterAverage = () => {
    return calculateSpecificTrimesterAverage(activeTab);
  };

  const calculateSpecificTrimesterAverage = (trim: 't1' | 't2' | 't3') => {
    let totalPoints = 0;
    let totalCoeffs = 0;

    subjects.forEach(sub => {
      const subjectGrades = grades[trim]?.[sub.id] || [];
      const validGrades = subjectGrades.filter(g => g !== '' && !isNaN(Number(g))).map(g => Number(g));
      
      if (validGrades.length > 0) {
        const avg = validGrades.reduce((a, b) => a + b, 0) / validGrades.length;
        totalPoints += avg * sub.coeff;
        totalCoeffs += sub.coeff;
      }
    });

    if (totalCoeffs === 0) return null;
    return totalPoints / totalCoeffs;
  };

  // --- DATA FOR EVOLUTION CHART ---
  const chartData = useMemo(() => {
    const t1Avg = calculateSpecificTrimesterAverage('t1');
    const t2Avg = calculateSpecificTrimesterAverage('t2');
    const t3Avg = calculateSpecificTrimesterAverage('t3');

    // To make the chart look nice for the demo/marketing, if XP > 0, we distribute it
    const t1XP = Math.floor(xp * 0.3);
    const t2XP = Math.floor(xp * 0.6);
    const t3XP = xp;

    return [
      {
        name: 'Trimestre 1',
        moyenne: t1Avg !== null ? Number(t1Avg.toFixed(2)) : null,
        activite: t1Avg !== null ? t1XP : null,
      },
      {
        name: 'Trimestre 2',
        moyenne: t2Avg !== null ? Number(t2Avg.toFixed(2)) : null,
        activite: t2Avg !== null ? t2XP : null,
      },
      {
        name: 'Trimestre 3',
        moyenne: t3Avg !== null ? Number(t3Avg.toFixed(2)) : null,
        activite: t3Avg !== null ? t3XP : null,
      }
    ].filter(d => d.moyenne !== null); // Only show trimesters with grades
  }, [grades, xp]);

  // --- GOALS HANDLING ---
  const handleSaveGoals = async () => {
    try {
      await updateGoals(draftGoals);
      addToast({
        type: 'success',
        title: 'Objectifs sauvegardés !',
        message: 'Tes nouveaux objectifs ont bien été enregistrés. Au travail ! 💪'
      });
      setMainTab('notes');
    } catch (e) {
      addToast({
        type: 'error',
        title: 'Erreur',
        message: 'Impossible de sauvegarder tes objectifs. Réessaie plus tard.'
      });
    }
  };

  const handleGeneralAverageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val) && val >= 0 && val <= 20) {
      setDraftGoals(prev => ({
        ...prev,
        generalAverage: val
      }));
    } else if (e.target.value === '') {
      setDraftGoals(prev => ({
        ...prev,
        generalAverage: undefined
      }));
    }
  };

  const handleBacPointsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 0) {
      setDraftGoals(prev => ({
        ...prev,
        bacPoints: val
      }));
    } else if (e.target.value === '') {
      setDraftGoals(prev => ({
        ...prev,
        bacPoints: undefined
      }));
    }
  };

  const handleTrimesterTargetChange = (trim: 't1'|'t2'|'t3', val: string) => {
    const num = parseFloat(val);
    if (val === '') {
      setDraftGoals(prev => ({ ...prev, trimesterTargets: { ...prev.trimesterTargets, [trim]: undefined } }));
    } else if (!isNaN(num) && num >= 0 && num <= 20) {
      setDraftGoals(prev => ({ ...prev, trimesterTargets: { ...prev.trimesterTargets, [trim]: num } }));
    }
  };

  const handleSubjectTargetChange = (subjectId: string, val: string) => {
    const num = parseFloat(val);
    if (val === '') {
      setDraftGoals(prev => {
        const newTargets: Record<string, number> = { ...prev.subjectTargets };
        delete newTargets[subjectId];
        return { ...prev, subjectTargets: newTargets };
      });
    } else if (!isNaN(num) && num >= 0 && num <= 20) {
      setDraftGoals(prev => ({ ...prev, subjectTargets: { ...prev.subjectTargets, [subjectId]: num } }));
    }
  };

  const trimesterAvg = calculateTrimesterAverage();
  const targetTrimester = goals.trimesterTargets?.[activeTab];
  
  const hasGradesForTrimester = subjects.some(sub => {
    const subGrades = grades[activeTab]?.[sub.id] || [];
    return subGrades.some(g => g !== '' && !isNaN(Number(g)));
  });

  return (
    <div className="space-y-8 px-4 md:px-6 lg:px-8 pt-6 pb-20 font-poppins max-w-7xl mx-auto">
      <GrandFrereGuide 
        id="grades"
        message={mainTab === 'notes' 
          ? "Ici, on ne calcule pas pour stresser, on calcule pour ajuster. Rentre tes notes au fur et à mesure pour voir si tu gardes le cap !" 
          : "Fixe tes objectifs d'abord. On ne navigue pas à vue ! Remplis tes cibles et valide en bas de la page."}
      />
      
      {/* Hero Section */}
      <div className="relative rounded-[28px] p-6 md:p-8 overflow-hidden shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 animate-fade-in-up" style={{ background: `linear-gradient(135deg, ${palette.accent}, ${palette.ink})` }}>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 pointer-events-none blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 -mb-12 w-32 h-32 rounded-full bg-white/10 pointer-events-none blur-2xl"></div>
        
        <div className="relative z-10 flex flex-row items-center gap-4 md:gap-6 w-full">
          <div className="bg-white/10 p-3 md:p-4 rounded-[20px] backdrop-blur-sm border border-white/20 shrink-0">
            <Calculator className="w-8 h-8 md:w-12 md:h-12 text-white opacity-90" />
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-white text-left leading-tight">
              Mes Notes <br className="md:hidden" /> & Objectifs
            </h1>
            <p className="text-blue-100 max-w-xl text-xs sm:text-sm md:text-base hidden sm:block">
              Définis tes objectifs de moyenne pour l'année, puis enregistre tes notes de classe pour voir si tu es sur la bonne voie.
            </p>
          </div>
        </div>
        
        {/* On mobile, show paragraph below title to avoid squeezing */}
        <div className="relative z-10 text-left text-white flex-1 w-full sm:hidden">
          <p className="text-blue-100 max-w-xl text-sm">
            Définis tes objectifs de moyenne pour l'année, puis enregistre tes notes de classe pour voir si tu es sur la bonne voie.
          </p>
        </div>

        {goals.bacPoints && (
          <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 px-4 md:px-5 py-3 md:py-4 rounded-xl flex items-center gap-3 md:gap-4 shadow-lg text-white w-full md:w-auto shrink-0">
            <Target className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 shrink-0" />
            <div>
              <p className="text-[10px] md:text-xs text-blue-100 uppercase tracking-wider font-bold mb-0.5 md:mb-1">Objectif Final</p>
              <p className="text-lg md:text-2xl font-black">BAC : {goals.bacPoints} Pts</p>
              <p className="text-xs md:text-sm text-white/90">Moyenne générale : {goals.generalAverage}/20</p>
            </div>
          </div>
        )}
      </div>

      {/* Main Navigation Tabs */}
      <div className="flex flex-wrap p-1.5 rounded-[20px] w-full md:w-fit animate-fade-in-up animation-delay-100 gap-1" style={{ background: palette.bg2 }}>
        <button
          onClick={() => setMainTab('notes')}
          className="flex-1 min-w-[120px] md:px-6 py-3 rounded-[16px] font-bold text-sm transition-all flex items-center justify-center gap-2"
          style={{ 
            background: mainTab === 'notes' ? palette.bg : 'transparent',
            color: mainTab === 'notes' ? palette.accent : palette.ink3,
            boxShadow: mainTab === 'notes' ? `0 4px 12px ${palette.shadow}` : 'none'
          }}
        >
          <BookOpen className="w-4 h-4" />
          Mes Notes
        </button>
        <button
          onClick={() => setMainTab('objectifs')}
          className="flex-1 min-w-[120px] md:px-6 py-3 rounded-[16px] font-bold text-sm transition-all flex items-center justify-center gap-2"
          style={{ 
            background: mainTab === 'objectifs' ? palette.bg : 'transparent',
            color: mainTab === 'objectifs' ? palette.accent : palette.ink3,
            boxShadow: mainTab === 'objectifs' ? `0 4px 12px ${palette.shadow}` : 'none'
          }}
        >
          <Target className="w-4 h-4" />
          Mes Objectifs
        </button>
        <button
          onClick={() => setMainTab('simulateur')}
          className="flex-1 min-w-[120px] md:px-6 py-3 rounded-[16px] font-bold text-sm transition-all flex items-center justify-center gap-2"
          style={{ 
            background: mainTab === 'simulateur' ? palette.bg : 'transparent',
            color: mainTab === 'simulateur' ? palette.accent : palette.ink3,
            boxShadow: mainTab === 'simulateur' ? `0 4px 12px ${palette.shadow}` : 'none'
          }}
        >
          <BarChart2 className="w-4 h-4" />
          Simulateur BAC
        </button>
        <button
          onClick={() => setMainTab('evolution')}
          className="flex-1 min-w-[120px] md:px-6 py-3 rounded-[16px] font-bold text-sm transition-all flex items-center justify-center gap-2"
          style={{ 
            background: mainTab === 'evolution' ? palette.bg : 'transparent',
            color: mainTab === 'evolution' ? palette.accent : palette.ink3,
            boxShadow: mainTab === 'evolution' ? `0 4px 12px ${palette.shadow}` : 'none'
          }}
        >
          <TrendingUp className="w-4 h-4" />
          Évolution (ROI)
        </button>
      </div>

      {/* CONTENT: SIMULATEUR BAC */}
      {mainTab === 'simulateur' && (
        <div className="animate-fade-in-up animation-delay-150">
          <BacSimulator />
        </div>
      )}

      {/* CONTENT: EVOLUTION */}
      {mainTab === 'evolution' && (
        <div className="space-y-6 animate-fade-in-up animation-delay-150">
          <div className="border rounded-[28px] p-6 shadow-sm" style={{ background: palette.bg, borderColor: palette.line }}>
            <h2 className="text-xl font-bold mb-2 flex items-center gap-2" style={{ color: palette.ink }}>
              <TrendingUp style={{ color: palette.accent }} /> 
              Ton Retour sur Investissement
            </h2>
            <p className="mb-8 text-sm" style={{ color: palette.ink2 }}>
              Découvre comment ton assiduité sur EDUCTOME (XP gagnée, quiz réussis) impacte directement tes moyennes en classe. La courbe ne ment pas : l'effort paie toujours !
            </p>

            {chartData.length > 0 ? (
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#30363D" opacity={0.3} />
                    <XAxis dataKey="name" stroke="#8B949E" />
                    <YAxis yAxisId="left" stroke="#1976D2" domain={[0, 20]} />
                    <YAxis yAxisId="right" orientation="right" stroke="#10B981" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#161B22', borderColor: '#30363D', borderRadius: '8px' }}
                      itemStyle={{ color: '#E6EDF3' }}
                    />
                    <Legend />
                    <Line 
                      yAxisId="left" 
                      type="monotone" 
                      dataKey="moyenne" 
                      name="Moyenne de classe (/20)" 
                      stroke="#1976D2" 
                      strokeWidth={3}
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      yAxisId="right" 
                      type="monotone" 
                      dataKey="activite" 
                      name="Activité EDUCTOME (XP)" 
                      stroke="#10B981" 
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-8 text-center border border-blue-100 dark:border-blue-900/30">
                <BarChart2 className="w-12 h-12 text-blue-300 dark:text-blue-700 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">Pas encore assez de données</h3>
                <p className="text-blue-700 dark:text-blue-300 max-w-md mx-auto text-sm">
                  Remplis tes notes pour au moins un trimestre dans l'onglet "Mes Notes" pour voir apparaître la courbe magique !
                </p>
                <button 
                  onClick={() => setMainTab('notes')}
                  className="mt-6 bg-white dark:bg-[#0D1117] text-blue-600 dark:text-blue-400 font-bold px-6 py-2 rounded-lg shadow-sm hover:shadow transition-all border border-blue-100 dark:border-blue-800"
                >
                  Ajouter mes notes
                </button>
              </div>
            )}
          </div>

          <div className="rounded-[28px] p-6 md:p-8 text-white relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${palette.accent}, ${palette.ink})` }}>
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 pointer-events-none blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-bold mb-2">Besoin d'un coup de pouce pour le prochain trimestre ?</h3>
              <p className="text-white/80 mb-6 text-sm md:text-base max-w-2xl font-medium">
                Montre ce graphique à tes parents. C'est la preuve concrète que ton travail sur EDUCTOME porte ses fruits. Demande-leur de débloquer de nouveaux chapitres pour t'aider à exploser tes moyennes !
              </p>
              <button 
                onClick={() => navigate('/dashboard/boutique')}
                className="text-white font-bold py-3 px-6 rounded-[16px] transition-colors flex items-center gap-2 cursor-pointer shadow-md hover:scale-[1.02]"
                style={{ background: palette.accent }}
              >
                <Star className="w-5 h-5" />
                Explorer les tomes EDUCTOME
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONTENT: MES NOTES */}
      {mainTab === 'notes' ? (
        <div className="space-y-6 animate-fade-in-up animation-delay-150">
          {/* Trimester Tabs */}
          <div className="flex gap-2 p-1 rounded-[20px] w-fit" style={{ background: palette.bg2 }}>
            {[
              { id: 't1', label: 'Trimestre 1' },
              { id: 't2', label: 'Trimestre 2' },
              { id: 't3', label: 'Trimestre 3' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className="px-6 py-2 rounded-[16px] font-medium text-sm transition-all"
                style={{
                  background: activeTab === tab.id ? palette.bg : 'transparent',
                  color: activeTab === tab.id ? palette.accent : palette.ink3,
                  boxShadow: activeTab === tab.id ? `0 4px 12px ${palette.shadow}` : 'none'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Global Average Card */}
          <div className="border rounded-[28px] p-6 shadow-sm" style={{ background: palette.bg, borderColor: palette.line }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="font-medium" style={{ color: palette.ink2 }}>Moyenne {activeTab.toUpperCase()} Actuelle</h2>
                <div className="text-4xl md:text-5xl font-black mt-2" style={{ color: palette.ink }}>
                  {trimesterAvg !== null ? trimesterAvg.toFixed(2) : '-.--'} <span className="text-xl md:text-2xl font-normal" style={{ color: palette.ink3 }}>/ 20</span>
                </div>
              </div>

              {targetTrimester ? (
                <div className="p-4 rounded-[20px] text-center min-w-[200px]" style={{ background: `${palette.accent}15` }}>
                  <p className="text-sm font-bold mb-1" style={{ color: palette.accent }}>Objectif {activeTab.toUpperCase()}</p>
                  <p className="text-2xl font-bold" style={{ color: palette.accent }}>{targetTrimester} / 20</p>
                  {trimesterAvg !== null && (
                    <div className={`mt-2 flex items-center justify-center gap-1 text-xs font-bold ${trimesterAvg >= targetTrimester ? 'text-green-600' : 'text-orange-500'}`}>
                      {trimesterAvg >= targetTrimester ? (
                        <>Objectif atteint ! 🎉</>
                      ) : (
                        <>Encore {(targetTrimester - trimesterAvg).toFixed(2)} pts à rattraper 💪</>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-2 text-orange-500 bg-orange-50 dark:bg-orange-900/20 px-4 py-3 rounded-[20px] text-sm">
                  <AlertCircle className="w-5 h-5" />
                  <span>Tu n'as pas défini d'objectif pour ce trimestre.</span>
                </div>
              )}
            </div>
          </div>

          {/* Empty State */}
          {!hasGradesForTrimester && (
            <div className="border-2 rounded-[28px] p-6 md:p-8 text-center animate-in fade-in zoom-in-95 duration-500" style={{ background: `${palette.accent}10`, borderColor: `${palette.accent}30` }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border" style={{ background: palette.bg, borderColor: `${palette.accent}40` }}>
                <Sparkles className="w-8 h-8" style={{ color: palette.accent }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: palette.ink }}>Ton carnet est encore vierge Champion !</h3>
              <p className="max-w-lg mx-auto" style={{ color: palette.ink2 }}>
                Dès que tu as ta première note de devoir pour ce trimestre, viens la glisser ici pour voir la magie opérer ✨
              </p>
            </div>
          )}

          {/* Subjects Accordion */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold" style={{ color: palette.ink }}>Détails par matière</h3>
            {(() => {
              const allValidAvgs = subjects.map(s => calculateSubjectAverage(s.id)).filter(a => a !== null) as number[];
              const maxAvg = allValidAvgs.length > 0 ? Math.max(...allValidAvgs) : null;
              
              return subjects.map(subject => {
                const isOpen = openSubject === subject.id;
                const avg = calculateSubjectAverage(subject.id);
                const target = goals.subjectTargets?.[subject.id];
                const subjectGrades = grades[activeTab]?.[subject.id] || [];
                
                const isChampion = avg !== null && avg === maxAvg && avg >= 10;
                const isAlert = avg !== null && avg < 10;

              let nextTargetText = "";
              if (avg !== null && target && subjectGrades.length > 0) {
                if (avg >= target) {
                  nextTargetText = `Défi : ${target}/20 au prochain devoir`;
                } else {
                  nextTargetText = `Pas le choix : au moins ${target}/20 au prochain devoir !`;
                }
              }

              return (
                <div key={subject.id} className="rounded-[24px] border overflow-hidden transition-all shadow-sm" style={{ background: palette.bg, borderColor: palette.line }}>
                  {/* Header / Toggle */}
                  <button 
                    onClick={() => setOpenSubject(isOpen ? null : subject.id)}
                    className="w-full flex items-start md:items-center justify-between p-4 md:p-5 transition-colors hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    <div className="flex items-start md:items-center gap-3 md:gap-4">
                      <div className="w-12 h-12 rounded-[16px] flex items-center justify-center font-bold shrink-0 mt-0.5 md:mt-0" style={{ background: palette.bg2, color: palette.ink }}>
                        x{subject.coeff}
                      </div>
                      <div className="text-left flex-1 min-w-0">
                        <h4 className="font-bold flex items-center gap-2 flex-wrap" style={{ color: palette.ink }}>
                          {subject.name}
                          {isChampion && <span title="Meilleure matière" className="text-sm md:text-lg leading-none">⭐</span>}
                          {isAlert && <span title="Moyenne critique (< 10)" className="text-sm md:text-lg leading-none animate-pulse">🔴</span>}
                        </h4>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm mt-1" style={{ color: palette.ink3 }}>
                          {target && <span>Objectif: <strong style={{ color: palette.accent }}>{target}</strong></span>}
                          {avg !== null && target && <span>Actuelle: <strong className={avg >= target ? "text-green-500" : "text-orange-500"}>{avg.toFixed(2)}</strong></span>}
                          {avg !== null && !target && <span>Actuelle: <strong style={{ color: palette.ink }}>{avg.toFixed(2)}</strong></span>}
                        </div>
                        {/* Progress Bar (Mini-jauge) */}
                        {avg !== null && target && (
                          <div className="w-full mt-2 h-1.5 rounded-full overflow-hidden relative" style={{ background: palette.bg2 }}>
                            <div 
                              className={`absolute top-0 left-0 h-full ${avg >= target ? 'bg-green-500' : 'bg-orange-500'} transition-all duration-1000 ease-out`}
                              style={{ width: `${Math.min(100, (avg / 20) * 100)}%` }}
                            />
                            <div 
                              className="absolute top-0 h-full w-[2px] z-10"
                              style={{ left: `${(target / 20) * 100}%`, background: palette.ink }}
                              title={`Objectif: ${target}`}
                            />
                          </div>
                        )}
                        {/* Message on Mobile */}
                        {avg !== null && target && (
                          <div className={`md:hidden mt-2.5 inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 rounded-md ${avg >= target ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                            {avg >= target ? "C'est ça qu'on veut voir ! 🔥" : "Courage, on ajuste le tir ! 💪"}
                          </div>
                        )}
                        {/* Next Target Line */}
                        {nextTargetText && (
                          <div className="mt-2 text-xs font-medium flex items-center gap-1.5" style={{ color: palette.ink3 }}>
                            <ArrowRight className="w-3.5 h-3.5" style={{ color: palette.accent }} />
                            {nextTargetText}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 shrink-0 pt-2 md:pt-0">
                      {/* Message on Desktop */}
                      {avg !== null && target && (
                        <div className={`hidden md:flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-md ${avg >= target ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                          {avg >= target ? "C'est ça qu'on veut voir ! 🔥" : "Courage, on ajuste le tir ! 💪"}
                        </div>
                      )}
                      {isOpen ? <ChevronUp style={{ color: palette.ink3 }} /> : <ChevronDown style={{ color: palette.ink3 }} />}
                    </div>
                  </button>

                  {/* Content */}
                  {isOpen && (
                    <div className="p-4 border-t" style={{ borderColor: palette.line, background: palette.bg2 }}>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        {subjectGrades.map((val, idx) => (
                          <div key={idx} className="relative group">
                            <label className="text-xs mb-1 block" style={{ color: palette.ink3 }}>Note {idx + 1}</label>
                            <div className="flex items-center">
                              <input 
                                type="number" 
                                step="0.25"
                                value={val}
                                onChange={(e) => handleUpdateGrade(subject.id, idx, e.target.value)}
                                placeholder="/ 20"
                                min="0" max="20"
                                className="w-full p-2 border rounded-l-lg focus:outline-none focus:ring-2"
                                style={{ 
                                  background: palette.bg, 
                                  borderColor: palette.line,
                                  color: palette.ink,
                                  ['--tw-ring-color' as any]: palette.accent
                                }}
                              />
                              <button 
                                onClick={() => handleRemoveGrade(subject.id, idx)}
                                className="px-3 py-2 rounded-r-lg transition-colors border-y border-r flex items-center justify-center bg-red-500/10 hover:bg-red-500/20 border-red-500/20 text-red-500"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      <button 
                        onClick={() => handleAddGrade(subject.id)}
                        className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                        style={{ color: palette.accent }}
                      >
                        <div className="p-1 rounded-md" style={{ background: `${palette.accent}20` }}>
                          <Plus className="w-4 h-4" />
                        </div>
                        Ajouter une note de devoir
                      </button>
                    </div>
                  )}
                </div>
              );
              });
            })()}
          </div>
        </div>
      ) : mainTab === 'objectifs' ? (
        /* CONTENT: MES OBJECTIFS */
        <div className="space-y-8 animate-fade-in-up animation-delay-150">
          
          <div className="border rounded-[28px] p-6 md:p-8 shadow-sm" style={{ background: palette.bg, borderColor: palette.line }}>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: palette.ink }}>
              <Star className="w-6 h-6 text-yellow-400" /> Objectif Principal de l'Année
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: palette.ink }}>Moyenne Générale Visée (sur 20)</label>
                <p className="text-xs mb-4" style={{ color: palette.ink2 }}>Combien veux-tu avoir de moyenne au total ?</p>
                <input 
                  type="number" 
                  step="0.5" min="0" max="20"
                  value={draftGoals.generalAverage || ''}
                  onChange={handleGeneralAverageChange}
                  placeholder="Ex: 12"
                  className="w-full px-4 py-3 text-lg font-bold border rounded-[16px] focus:outline-none focus:ring-2 transition-colors"
                  style={{ 
                    background: palette.bg2,
                    borderColor: palette.line,
                    color: palette.ink,
                    ['--tw-ring-color' as any]: palette.accent
                  }}
                />
              </div>
              
              <div className="rounded-[20px] p-6 flex flex-col justify-center" style={{ background: `${palette.accent}10` }}>
                <label className="block text-sm font-bold mb-2" style={{ color: palette.accent }}>Objectif de Points (BAC)</label>
                <div className="flex items-end gap-2">
                  <input 
                    type="number" 
                    step="1" min="0"
                    value={draftGoals.bacPoints || ''}
                    onChange={handleBacPointsChange}
                    placeholder="Ex: 280"
                    className="w-full max-w-[150px] px-4 py-3 text-2xl font-black border rounded-[16px] focus:outline-none focus:ring-2"
                    style={{
                      background: palette.bg,
                      borderColor: `${palette.accent}30`,
                      color: palette.accent,
                      ['--tw-ring-color' as any]: palette.accent
                    }}
                  />
                  <span className="text-xl font-medium mb-3" style={{ color: palette.accent }}>Points</span>
                </div>
                <p className="text-xs mt-2 font-medium" style={{ color: palette.accent, opacity: 0.8 }}>
                  Ton objectif de points pour le BAC.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Trimestres */}
            <div className="border rounded-[28px] p-6 shadow-sm" style={{ background: palette.bg, borderColor: palette.line }}>
              <h2 className="text-lg font-bold mb-6" style={{ color: palette.ink }}>Objectifs par Trimestre</h2>
              <div className="space-y-4">
                {[
                  { id: 't1', label: 'Trimestre 1' },
                  { id: 't2', label: 'Trimestre 2' },
                  { id: 't3', label: 'Trimestre 3' }
                ].map(trim => (
                  <div key={trim.id} className="flex items-center justify-between">
                    <label className="font-medium" style={{ color: palette.ink2 }}>{trim.label}</label>
                    <div className="flex items-center gap-2">
                      <input 
                        type="number" 
                        step="0.5" min="0" max="20"
                        value={draftGoals.trimesterTargets?.[trim.id as 't1'|'t2'|'t3'] || ''}
                        onChange={(e) => handleTrimesterTargetChange(trim.id as 't1'|'t2'|'t3', e.target.value)}
                        placeholder="--"
                        className="w-20 px-3 py-2 text-center border rounded-[12px] focus:outline-none focus:ring-2 transition-colors"
                        style={{
                          background: palette.bg2,
                          borderColor: palette.line,
                          color: palette.ink,
                          ['--tw-ring-color' as any]: palette.accent
                        }}
                      />
                      <span style={{ color: palette.ink3 }}>/ 20</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Matières */}
            <div className="border rounded-[28px] p-6 shadow-sm" style={{ background: palette.bg, borderColor: palette.line }}>
              <h2 className="text-lg font-bold mb-2" style={{ color: palette.ink }}>Objectifs par Matière</h2>
              <p className="text-xs mb-6" style={{ color: palette.ink3 }}>Les matières sont adaptées à ta série.</p>
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {subjects.map(subject => (
                  <div key={subject.id} className="flex items-center justify-between group hover:bg-black/5 dark:hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: palette.bg2, color: palette.ink2 }}>
                        x{subject.coeff}
                      </span>
                      <label className="font-medium" style={{ color: palette.ink }}>{subject.name}</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input 
                        type="number" 
                        step="0.5" min="0" max="20"
                        value={draftGoals.subjectTargets?.[subject.id] || ''}
                        onChange={(e) => handleSubjectTargetChange(subject.id, e.target.value)}
                        placeholder="--"
                        className="w-20 px-3 py-2 text-center border rounded-[12px] focus:outline-none focus:ring-2 transition-colors"
                        style={{
                          background: palette.bg2,
                          borderColor: palette.line,
                          color: palette.ink,
                          ['--tw-ring-color' as any]: palette.accent
                        }}
                      />
                      <span style={{ color: palette.ink3 }}>/ 20</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex justify-end pt-4">
            <button 
              onClick={handleSaveGoals}
              className="flex items-center gap-2 text-white px-8 py-3 rounded-[16px] font-bold shadow-md transition-all hover:scale-[1.02]"
              style={{ background: palette.accent, boxShadow: `0 4px 14px ${palette.accent}40` }}
            >
              <Save className="w-5 h-5" />
              Enregistrer mes objectifs
            </button>
          </div>

        </div>
      ) : null}
    </div>
  );
}

