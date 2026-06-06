import { useState, useEffect } from 'react';
import { useUser, UserGrades, UserGoals } from '../../contexts/UserContext';
import { getSubjectsForLevel } from '../../constants/coefficients';
import { Target, Calculator, ChevronDown, ChevronUp, Plus, AlertCircle, X, Sparkles, Save, BookOpen, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GrandFrereGuide } from '../../components/ui/GrandFrereGuide';
import { useToast } from '../../contexts/ToastContext';

export function GradesCalculator() {
  const { levelString, goals, grades, updateGrades, updateGoals } = useUser();
  const { addToast } = useToast();
  const subjects = getSubjectsForLevel(levelString);
  
  const [mainTab, setMainTab] = useState<'notes' | 'objectifs'>('notes');
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
    
    const newGradesObj: UserGrades = { ...grades };
    const currentGrades = [...(grades[activeTab]?.[subjectId] || [])];
    currentGrades[index] = finalValue as any;
    
    if (!newGradesObj[activeTab]) newGradesObj[activeTab] = {};
    newGradesObj[activeTab]![subjectId] = currentGrades;
    
    await updateGrades(newGradesObj);
    
    if (hadNoValidGrades && finalValue !== '' && !isNaN(Number(finalValue))) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D81B60', '#1A3557', '#1976D2', '#FACC15']
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
      const totalCoeffs = subjects.reduce((sum, sub) => sum + sub.coeff, 0);
      const points = Math.round(val * totalCoeffs);
      setDraftGoals(prev => ({
        ...prev,
        generalAverage: val,
        bacPoints: points
      }));
    } else if (e.target.value === '') {
      setDraftGoals(prev => ({
        ...prev,
        generalAverage: undefined,
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
      <div className="relative bg-gradient-to-r from-eductome-marine to-eductome-sky rounded-2xl p-6 md:p-8 overflow-hidden shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 animate-fade-in-up">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 -mb-12 w-32 h-32 rounded-full bg-white opacity-10 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 flex-1 w-full">
          <div className="bg-white/10 p-3 md:p-4 rounded-2xl backdrop-blur-sm border border-white/20 shrink-0">
            <Calculator className="w-8 h-8 md:w-12 md:h-12 text-white" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-3xl font-playfair font-bold text-white text-left leading-tight">
              Mes Notes <br className="md:hidden" /> & Objectifs
            </h1>
            <p className="text-blue-100 max-w-xl text-sm md:text-base">
              Définis tes objectifs de moyenne pour l'année, puis enregistre tes notes de classe pour voir si tu es sur la bonne voie.
            </p>
          </div>
        </div>

        {goals.bacPoints && (
          <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-4 rounded-xl flex items-center gap-4 shadow-lg text-white w-full md:w-auto shrink-0">
            <Target className="w-8 h-8 text-yellow-400 shrink-0" />
            <div>
              <p className="text-xs text-blue-100 uppercase tracking-wider font-bold mb-1">Objectif Final : BAC</p>
              <p className="text-2xl font-black">{goals.bacPoints} Points</p>
              <p className="text-sm text-white/90">Moyenne générale {goals.generalAverage}/20</p>
            </div>
          </div>
        )}
      </div>

      {/* Main Navigation Tabs */}
      <div className="flex bg-gray-100 dark:bg-[#0D1117] p-1.5 rounded-xl w-full md:w-fit animate-fade-in-up animation-delay-100">
        <button
          onClick={() => setMainTab('notes')}
          className={`flex-1 md:px-8 py-3 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 ${
            mainTab === 'notes' 
              ? 'bg-white dark:bg-[#161B22] text-eductome-magenta shadow-sm' 
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          Mes Notes
        </button>
        <button
          onClick={() => setMainTab('objectifs')}
          className={`flex-1 md:px-8 py-3 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 ${
            mainTab === 'objectifs' 
              ? 'bg-white dark:bg-[#161B22] text-eductome-magenta shadow-sm' 
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
          }`}
        >
          <Target className="w-4 h-4" />
          Mes Objectifs
        </button>
      </div>

      {/* CONTENT: MES NOTES */}
      {mainTab === 'notes' ? (
        <div className="space-y-6 animate-fade-in-up animation-delay-150">
          {/* Trimester Tabs */}
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
                        <>Encore {(targetTrimester - trimesterAvg).toFixed(2)} pts à rattraper 💪</>
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

          {/* Empty State */}
          {!hasGradesForTrimester && (
            <div className="bg-[#D81B60]/10 border-2 border-[#D81B60]/20 rounded-2xl p-6 md:p-8 text-center animate-in fade-in zoom-in-95 duration-500">
              <div className="bg-white dark:bg-[#161B22] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border border-[#D81B60]/30">
                <Sparkles className="w-8 h-8 text-[#D81B60]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A3557] dark:text-white mb-2">Ton carnet est encore vierge Champion !</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
                Dès que tu as ta première note de devoir pour ce trimestre, viens la glisser ici pour voir la magie opérer ✨
              </p>
            </div>
          )}

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
                        <div className="hidden md:flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-md bg-gray-100 dark:bg-[#0D1117]">
                          {avg >= target ? <span className="text-green-500">C'est ça qu'on veut voir ! 🔥</span> : <span className="text-orange-500">Pas de panique, on ajuste le tir ! 💪</span>}
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
                                value={val}
                                onChange={(e) => handleUpdateGrade(subject.id, idx, e.target.value)}
                                placeholder="/ 20"
                                min="0" max="20"
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
      ) : (
        /* CONTENT: MES OBJECTIFS */
        <div className="space-y-8 animate-fade-in-up animation-delay-150">
          
          <div className="bg-white dark:bg-[#161B22] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-400" /> Objectif Principal de l'Année
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Moyenne Générale Visée (sur 20)</label>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Combien veux-tu avoir de moyenne au total ?</p>
                <input 
                  type="number" 
                  step="0.5" min="0" max="20"
                  value={draftGoals.generalAverage || ''}
                  onChange={handleGeneralAverageChange}
                  placeholder="Ex: 12"
                  className="w-full px-4 py-3 text-lg font-bold border rounded-xl focus:ring-2 focus:ring-eductome-magenta focus:border-eductome-magenta transition-colors border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 flex flex-col justify-center">
                <p className="text-sm font-bold text-blue-800 dark:text-blue-300 mb-2">Ce qui correspond à :</p>
                <div className="text-4xl font-black text-blue-600 dark:text-blue-400">
                  {draftGoals.bacPoints || '-'} <span className="text-xl font-medium">Points</span>
                </div>
                <p className="text-xs text-blue-600/70 dark:text-blue-300/70 mt-2">
                  Ton objectif de points pour le BAC.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Trimestres */}
            <div className="bg-white dark:bg-[#161B22] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Objectifs par Trimestre</h2>
              <div className="space-y-4">
                {[
                  { id: 't1', label: 'Trimestre 1' },
                  { id: 't2', label: 'Trimestre 2' },
                  { id: 't3', label: 'Trimestre 3' }
                ].map(trim => (
                  <div key={trim.id} className="flex items-center justify-between">
                    <label className="font-medium text-gray-700 dark:text-gray-300">{trim.label}</label>
                    <div className="flex items-center gap-2">
                      <input 
                        type="number" 
                        step="0.5" min="0" max="20"
                        value={draftGoals.trimesterTargets?.[trim.id as 't1'|'t2'|'t3'] || ''}
                        onChange={(e) => handleTrimesterTargetChange(trim.id as 't1'|'t2'|'t3', e.target.value)}
                        placeholder="--"
                        className="w-20 px-3 py-2 text-center border rounded-lg focus:ring-2 focus:ring-eductome-magenta focus:border-eductome-magenta transition-colors border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      />
                      <span className="text-gray-400">/ 20</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Matières */}
            <div className="bg-white dark:bg-[#161B22] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Objectifs par Matière</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">Les matières sont adaptées à ta série.</p>
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {subjects.map(subject => (
                  <div key={subject.id} className="flex items-center justify-between group hover:bg-gray-50 dark:hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="bg-gray-100 dark:bg-gray-800 text-xs font-bold px-2 py-1 rounded text-gray-600 dark:text-gray-300">
                        x{subject.coeff}
                      </span>
                      <label className="font-medium text-gray-700 dark:text-gray-300">{subject.name}</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input 
                        type="number" 
                        step="0.5" min="0" max="20"
                        value={draftGoals.subjectTargets?.[subject.id] || ''}
                        onChange={(e) => handleSubjectTargetChange(subject.id, e.target.value)}
                        placeholder="--"
                        className="w-20 px-3 py-2 text-center border rounded-lg focus:ring-2 focus:ring-eductome-magenta focus:border-eductome-magenta transition-colors border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      />
                      <span className="text-gray-400">/ 20</span>
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
              className="flex items-center gap-2 bg-eductome-magenta hover:bg-pink-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg transition-colors"
            >
              <Save className="w-5 h-5" />
              Enregistrer mes objectifs
            </button>
          </div>

        </div>
      )}
    </div>
  );
}

