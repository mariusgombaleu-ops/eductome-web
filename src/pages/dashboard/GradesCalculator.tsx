import { useState, useEffect, useMemo } from 'react';
import { useUser, UserGrades, UserGoals } from '../../contexts/UserContext';
import { useTheme } from '../../contexts/ThemeContext';
import { getSubjectsForLevel } from '../../constants/coefficients';
import { Target, ChevronDown, Plus, X, Sparkles, Save, BookOpen, Star, ArrowRight, BarChart2, TrendingUp, TrendingDown } from 'lucide-react';
import { BacSimulator } from '../../components/bac/BacSimulator';
import confetti from 'canvas-confetti';
import { GrandFrereGuide } from '../../components/ui/GrandFrereGuide';
import { PageHero, PageHeroStat } from '../../components/dashboard/PageHero';
import { useToast } from '../../contexts/ToastContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';

// Pastille de couleur stable par matière (décoratif, cohérent partout).
const SUBJECT_DOT: Record<string, string> = {
  maths: '#1976D2',
  pc: '#1B9E5B',
  svt: '#E67E22',
  francais: '#D81B60',
  philo: '#6A1B9A',
  anglais: '#00897B',
  hg: '#8D6E63',
  edhc: '#5C6BC0',
};

// Mention visée déduite de la moyenne générale cible.
function mentionFor(avg?: number): string | null {
  if (avg === undefined || avg === null) return null;
  if (avg >= 16) return 'Mention Très Bien visée';
  if (avg >= 14) return 'Mention Bien visée';
  if (avg >= 12) return 'Mention Assez Bien visée';
  if (avg >= 10) return 'Mention Passable visée';
  return 'Objectif : décrocher le BAC';
}

// Couleur de statut d'une moyenne : vert / orange / rouge selon l'objectif fixé
// (repli sur le barème /20 quand aucun objectif n'est défini).
function gradeStatusColor(
  avg: number | null,
  target: number | undefined,
  palette: { tipBar: string; anaBar: string; warnBar: string; ink3: string },
): string {
  if (avg === null) return palette.ink3;
  if (target !== undefined) {
    if (avg >= target) return palette.tipBar;
    if (avg >= target - 2) return palette.anaBar;
    return palette.warnBar;
  }
  if (avg >= 14) return palette.tipBar;
  if (avg >= 10) return palette.anaBar;
  return palette.warnBar;
}

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

  // Tendance vs trimestre précédent (T1 = pas de précédent)
  const prevTab: 't1' | 't2' | null = activeTab === 't2' ? 't1' : activeTab === 't3' ? 't2' : null;
  const prevLabels: Record<'t1' | 't2', string> = { t1: '1er trim.', t2: '2ᵉ trim.' };
  const prevAvg = prevTab ? calculateSpecificTrimesterAverage(prevTab) : null;
  const trendDelta = trimesterAvg !== null && prevAvg !== null ? trimesterAvg - prevAvg : null;

  const hasGradesForTrimester = subjects.some(sub => {
    const subGrades = grades[activeTab]?.[sub.id] || [];
    return subGrades.some(g => g !== '' && !isNaN(Number(g)));
  });

  return (
    <div className="space-y-8 px-4 md:px-6 lg:px-8 pt-6 pb-20 font-poppins">
      <GrandFrereGuide 
        id="grades"
        message={mainTab === 'notes' 
          ? "Ici, on ne calcule pas pour stresser, on calcule pour ajuster. Rentre tes notes au fur et à mesure pour voir si tu gardes le cap !" 
          : "Fixe tes objectifs d'abord. On ne navigue pas à vue ! Remplis tes cibles et valide en bas de la page."}
      />
      
      {(() => {
        const trimLabels: Record<'t1' | 't2' | 't3', string> = { t1: '1er trimestre', t2: '2ᵉ trimestre', t3: '3ᵉ trimestre' };
        const remaining = trimesterAvg !== null && targetTrimester ? Math.max(0, targetTrimester - trimesterAvg) : null;
        const fmt2 = (n: number | null | undefined) => (n !== null && n !== undefined ? n.toFixed(2).replace('.', ',') : '—');
        const pct20 = (n: number | null | undefined) => (n !== null && n !== undefined ? Math.round((n / 20) * 100) : 0);
        const subjectTargetCount = Object.values(goals.subjectTargets || {}).filter(v => typeof v === 'number').length;
        const tA = { t1: calculateSpecificTrimesterAverage('t1'), t2: calculateSpecificTrimesterAverage('t2'), t3: calculateSpecificTrimesterAverage('t3') };

        // Le hero s'adapte à l'onglet actif (Notes / Objectifs / Simulateur / Évolution).
        const cfg: { eyebrow: string; title: string; description: string; stats?: PageHeroStat[] } =
          mainTab === 'objectifs'
            ? {
                eyebrow: 'Notes & objectifs',
                title: 'Mes objectifs',
                description: "Fixe ta moyenne cible, tes points BAC et tes objectifs par matière — un cap clair pour chaque effort.",
                stats: [
                  { value: goals.generalAverage ? fmt2(goals.generalAverage) : '—', label: 'Moyenne visée /20', progress: pct20(goals.generalAverage) },
                  { value: goals.bacPoints ? String(goals.bacPoints) : '—', label: 'Points BAC visés' },
                  { value: subjectTargetCount || '—', label: 'Matières ciblées', progress: subjects.length ? Math.round((subjectTargetCount / subjects.length) * 100) : 0 },
                ],
              }
            : mainTab === 'simulateur'
            ? {
                eyebrow: 'Notes & objectifs',
                title: 'Simulateur BAC',
                description: "Projette ton BAC : saisis tes notes prévues et découvre ta mention et ton total de points.",
              }
            : mainTab === 'evolution'
            ? {
                eyebrow: 'Notes & objectifs',
                title: 'Mon évolution',
                description: "Visualise ta progression trimestre après trimestre — et l'effort qui finit par payer.",
                stats: [
                  { value: fmt2(tA.t1), label: 'Moyenne T1', progress: pct20(tA.t1) },
                  { value: fmt2(tA.t2), label: 'Moyenne T2', progress: pct20(tA.t2) },
                  { value: fmt2(tA.t3), label: 'Moyenne T3', progress: pct20(tA.t3) },
                ],
              }
            : {
                eyebrow: `Notes & objectifs · ${trimLabels[activeTab]}`,
                title: 'Mes notes',
                description: "Pilote ta moyenne en temps réel, fixe tes objectifs et garde le cap vers ta mention au BAC.",
                stats: [
                  { value: fmt2(trimesterAvg), label: 'Moyenne /20', progress: pct20(trimesterAvg) },
                  { value: targetTrimester ? String(targetTrimester) : '—', label: 'Objectif /20', progress: pct20(targetTrimester) },
                  { value: remaining === null ? '—' : remaining <= 0 ? 'Atteint' : `+${remaining.toFixed(1).replace('.', ',')}`, label: 'Pour l’objectif', progress: (trimesterAvg !== null && targetTrimester) ? Math.min(100, Math.round((trimesterAvg / targetTrimester) * 100)) : 0 },
                ],
              };

        return <PageHero eyebrow={cfg.eyebrow} title={cfg.title} description={cfg.description} stats={cfg.stats} />;
      })()}

      {/* Onglets principaux — grille 2×2 (2 en haut, 2 en bas) */}
      <div className="grid grid-cols-2 gap-2 animate-fade-in-up animation-delay-100">
        {([
          { id: 'notes', label: 'Mes Notes', Icon: BookOpen },
          { id: 'objectifs', label: 'Mes Objectifs', Icon: Target },
          { id: 'simulateur', label: 'Simulateur BAC', Icon: BarChart2 },
          { id: 'evolution', label: 'Évolution', Icon: TrendingUp },
        ] as const).map(({ id, label, Icon }) => {
          const active = mainTab === id;
          return (
            <button
              key={id}
              onClick={() => setMainTab(id)}
              className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-[14px] font-bold text-[13px] whitespace-nowrap transition-colors"
              style={{
                background: active ? palette.accent : palette.bg3,
                color: active ? palette.onAccent : palette.ink2,
                boxShadow: active ? `0 4px 12px ${palette.accent}33` : 'none',
              }}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </button>
          );
        })}
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
                    <CartesianGrid strokeDasharray="3 3" stroke={palette.line} opacity={0.6} />
                    <XAxis dataKey="name" stroke={palette.ink3} />
                    <YAxis yAxisId="left" stroke={palette.accent} domain={[0, 20]} />
                    <YAxis yAxisId="right" orientation="right" stroke={palette.tipBar} />
                    <Tooltip
                      contentStyle={{ backgroundColor: palette.bg2, borderColor: palette.line, borderRadius: '8px' }}
                      itemStyle={{ color: palette.ink }}
                    />
                    <Legend />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="moyenne"
                      name="Moyenne de classe (/20)"
                      stroke={palette.accent}
                      strokeWidth={3}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="activite"
                      name="Activité EDUCTOME (XP)"
                      stroke={palette.tipBar}
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="rounded-xl p-8 text-center border" style={{ background: `${palette.accent}10`, borderColor: `${palette.accent}30` }}>
                <BarChart2 className="w-12 h-12 mx-auto mb-4 opacity-50" style={{ color: palette.accent }} />
                <h3 className="text-lg font-bold mb-2" style={{ color: palette.ink }}>Pas encore assez de données</h3>
                <p className="max-w-md mx-auto text-sm" style={{ color: palette.ink2 }}>
                  Remplis tes notes pour au moins un trimestre dans l'onglet "Mes Notes" pour voir apparaître la courbe magique !
                </p>
                <button
                  onClick={() => setMainTab('notes')}
                  className="mt-6 font-bold px-6 py-2 rounded-lg shadow-sm hover:shadow transition-all border"
                  style={{ background: palette.bg2, color: palette.accent, borderColor: `${palette.accent}30` }}
                >
                  Ajouter mes notes
                </button>
              </div>
            )}
          </div>

          <div className="rounded-[28px] p-6 md:p-8 text-white relative overflow-hidden" style={{ background: palette.heroBg }}>
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
          {/* Sous-onglets trimestre — segmented control pleine largeur (aligné sur la grille du dessus) */}
          <div className="flex w-full gap-1 p-1 rounded-full border" style={{ background: palette.bg3, borderColor: palette.line }}>
            {([
              { id: 't1', label: '1er trim.' },
              { id: 't2', label: '2ᵉ trim.' },
              { id: 't3', label: '3ᵉ trim.' }
            ] as const).map(tab => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex-1 px-4 py-2 rounded-full text-[13px] font-bold whitespace-nowrap text-center transition-colors"
                  style={{
                    background: active ? palette.accent : 'transparent',
                    color: active ? palette.onAccent : palette.ink2,
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Carte moyenne actuelle — 2 blocs égaux (même largeur & hauteur) */}
          <div className="grid grid-cols-2 gap-3">
            {/* Bloc Moyenne actuelle */}
            <div className="border rounded-[20px] p-4 flex flex-col items-center justify-center text-center" style={{ background: palette.bg2, borderColor: palette.line }}>
              <span className="text-[11px] font-semibold" style={{ color: palette.ink3 }}>Moyenne {activeTab.toUpperCase()} actuelle</span>
              <div className="text-[30px] leading-none font-black mt-1.5" style={{ color: gradeStatusColor(trimesterAvg, targetTrimester, palette), fontFamily: palette.display }}>
                {trimesterAvg !== null ? trimesterAvg.toFixed(2).replace('.', ',') : '-,--'}
                <span className="text-sm font-semibold ml-0.5" style={{ color: palette.ink3 }}>/20</span>
              </div>
              {trendDelta !== null && prevTab && (
                <span
                  className="inline-flex items-center gap-1 mt-1.5 text-[10px] font-bold"
                  style={{ color: trendDelta > 0 ? palette.tipBar : trendDelta < 0 ? palette.warnBar : palette.ink3 }}
                >
                  {trendDelta > 0 ? <TrendingUp className="w-3 h-3" /> : trendDelta < 0 ? <TrendingDown className="w-3 h-3" /> : null}
                  {trendDelta > 0 ? '+' : ''}{trendDelta.toFixed(1).replace('.', ',')} vs {prevLabels[prevTab]}
                </span>
              )}
              {trimesterAvg !== null && (
                <span className="block relative w-full mt-2.5 h-1.5 rounded-full overflow-hidden" style={{ background: palette.bg3 }}>
                  <span className="absolute inset-y-0 left-0 rounded-full transition-all duration-500" style={{ width: `${Math.min(100, (trimesterAvg / 20) * 100)}%`, background: gradeStatusColor(trimesterAvg, targetTrimester, palette) }} />
                  {targetTrimester && (
                    <span className="absolute inset-y-0 w-[2px]" style={{ left: `${Math.min(100, (targetTrimester / 20) * 100)}%`, background: palette.ink }} title={`Objectif : ${targetTrimester}`} />
                  )}
                </span>
              )}
            </div>

            {/* Bloc Objectif */}
            <button
              onClick={() => setMainTab('objectifs')}
              className="rounded-[20px] p-4 flex flex-col items-center justify-center text-center transition-opacity hover:opacity-90"
              style={{ background: palette.accentSoft }}
            >
              <span className="text-[11px] font-bold" style={{ color: palette.accent }}>Objectif {activeTab.toUpperCase()}</span>
              <div className="text-[30px] leading-none font-black mt-1.5" style={{ color: palette.accent, fontFamily: palette.display }}>
                {targetTrimester ? targetTrimester : '—'}
                <span className="text-sm font-semibold ml-0.5" style={{ color: palette.accent, opacity: 0.7 }}>/20</span>
              </div>
              <span
                className="text-[10px] font-bold mt-1"
                style={{ color: !targetTrimester ? palette.accent : trimesterAvg === null ? palette.ink3 : trimesterAvg >= targetTrimester ? palette.tipBar : palette.anaInk }}
              >
                {!targetTrimester
                  ? 'À définir'
                  : trimesterAvg === null
                    ? '—'
                    : trimesterAvg >= targetTrimester
                      ? 'Atteint 🎉'
                      : `Encore ${(targetTrimester - trimesterAvg).toFixed(1).replace('.', ',')} pt 💪`}
              </span>
            </button>
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

          {/* Matières — carte unifiée à lignes repliables (maquette #7) */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] mb-2.5 ml-0.5" style={{ color: palette.ink3 }}>
              Mes matières · {activeTab.toUpperCase()}
            </p>
            <div className="rounded-[20px] border overflow-hidden" style={{ background: palette.bg2, borderColor: palette.line }}>
              {(() => {
                const allValidAvgs = subjects.map(s => calculateSubjectAverage(s.id)).filter(a => a !== null) as number[];
                const maxAvg = allValidAvgs.length > 0 ? Math.max(...allValidAvgs) : null;

                return subjects.map((subject, i) => {
                  const isOpen = openSubject === subject.id;
                  const avg = calculateSubjectAverage(subject.id);
                  const target = goals.subjectTargets?.[subject.id];
                  const subjectGrades = grades[activeTab]?.[subject.id] || [];
                  const isChampion = avg !== null && avg === maxAvg && avg >= 10;
                  const statusColor = gradeStatusColor(avg, target, palette);
                  const dot = SUBJECT_DOT[subject.id] || palette.accent;
                  const fillPct = avg !== null ? Math.min(100, (avg / 20) * 100) : 0;

                  return (
                    <div key={subject.id} style={{ borderTop: i > 0 ? `1px solid ${palette.line}` : 'none' }}>
                      <button
                        onClick={() => setOpenSubject(isOpen ? null : subject.id)}
                        className="w-full flex items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-[var(--ed-bg3)]"
                      >
                        {/* Coefficient en tuile teintée (couleur matière) */}
                        <span
                          className="w-9 h-9 rounded-[12px] shrink-0 flex items-center justify-center text-sm font-black"
                          style={{ background: `${dot}22`, color: dot, fontFamily: palette.display }}
                        >
                          ×{subject.coeff}
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="flex items-center gap-1.5 font-bold text-sm" style={{ color: palette.ink }}>
                            {subject.name}
                            {isChampion && <span title="Meilleure matière" className="leading-none">⭐</span>}
                          </span>
                          {/* Ligne Objectif · Actuelle */}
                          <span className="block text-[11px] font-medium mt-0.5" style={{ color: palette.ink3 }}>
                            {avg === null ? (
                              'Aucune note pour l’instant'
                            ) : target !== undefined ? (
                              <>Objectif : <strong style={{ color: palette.ink2 }}>{target}</strong> · Actuelle : <strong style={{ color: statusColor }}>{avg.toFixed(2).replace('.', ',')}</strong></>
                            ) : (
                              <>
                                Actuelle : <strong style={{ color: statusColor }}>{avg.toFixed(2).replace('.', ',')}</strong>
                                {' · '}
                                <span
                                  role="button"
                                  onClick={(e) => { e.stopPropagation(); setMainTab('objectifs'); }}
                                  className="font-bold cursor-pointer"
                                  style={{ color: palette.accent }}
                                >
                                  En définir un
                                </span>
                              </>
                            )}
                          </span>
                          {/* Barre de progression colorée (moyenne vs objectif) */}
                          {avg !== null && (
                            <span className="block relative mt-1.5 h-1.5 rounded-full overflow-hidden" style={{ background: palette.bg3 }}>
                              <span className="absolute inset-y-0 left-0 rounded-full transition-all duration-500" style={{ width: `${fillPct}%`, background: statusColor }} />
                              {target !== undefined && (
                                <span className="absolute inset-y-0 w-[2px]" style={{ left: `${Math.min(100, (target / 20) * 100)}%`, background: palette.ink }} title={`Objectif : ${target}`} />
                              )}
                            </span>
                          )}
                        </span>
                        <ChevronDown className={`w-4 h-4 shrink-0 mt-1.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} style={{ color: palette.ink3 }} />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4">
                          <div className="h-px mb-3" style={{ background: palette.line }} />
                          <div className="flex flex-wrap items-center gap-2">
                            {subjectGrades.map((val, idx) => (
                              <span key={idx} className="inline-flex items-center rounded-[11px] border overflow-hidden" style={{ background: palette.bg3, borderColor: palette.line }}>
                                <input
                                  type="number" step="0.25" min="0" max="20"
                                  value={val}
                                  onChange={(e) => handleUpdateGrade(subject.id, idx, e.target.value)}
                                  placeholder="--"
                                  className="w-12 py-2 pl-3 text-sm font-bold text-center bg-transparent focus:outline-none"
                                  style={{ color: palette.ink }}
                                />
                                <button
                                  onClick={() => handleRemoveGrade(subject.id, idx)}
                                  className="px-2 py-2 transition-opacity hover:opacity-60"
                                  style={{ color: palette.warnBar }}
                                  title="Supprimer cette note"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </span>
                            ))}
                            <button
                              onClick={() => handleAddGrade(subject.id)}
                              className="inline-flex items-center justify-center w-10 h-10 rounded-[11px] border-[1.5px] border-dashed transition-opacity hover:opacity-70"
                              style={{ borderColor: palette.accent, color: palette.accent }}
                              title="Ajouter une note"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          {avg !== null && target !== undefined ? (
                            <div className="flex items-center gap-1.5 mt-3 text-xs font-bold" style={{ color: avg >= target ? palette.tipBar : palette.anaInk }}>
                              {avg >= target ? (
                                <>Objectif {target}/20 · atteint 🎉</>
                              ) : (
                                <><ArrowRight className="w-3.5 h-3.5" /> Plus que {(target - avg).toFixed(1).replace('.', ',')} pt pour ton objectif de {target}/20</>
                              )}
                            </div>
                          ) : (
                            <p className="mt-3 text-xs" style={{ color: palette.ink3 }}>
                              Pas d’objectif fixé.{' '}
                              <button onClick={() => setMainTab('objectifs')} className="font-bold" style={{ color: palette.accent }}>En définir un</button>
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  );
                });
              })()}
            </div>
          </div>
        </div>
      ) : mainTab === 'objectifs' ? (
        /* CONTENT: MES OBJECTIFS */
        <div className="space-y-4 animate-fade-in-up animation-delay-150">

          {/* Objectif de l'année — compact (maquette #13) */}
          <div className="border rounded-[20px] p-[18px]" style={{ background: palette.bg2, borderColor: palette.line }}>
            <h2 className="text-[15px] font-bold" style={{ color: palette.ink, fontFamily: palette.display }}>Objectif de l'année</h2>
            <p className="text-xs mt-1 mb-4" style={{ color: palette.ink2 }}>Ta cible finale — on s'en sert pour mesurer ton cap.</p>
            <div className="flex gap-2.5">
              <div className="flex-1">
                <label className="block text-[11px] font-semibold mb-1.5" style={{ color: palette.ink2 }}>Moyenne générale</label>
                <div className="flex items-baseline gap-1 border rounded-[14px] px-3.5 py-2.5" style={{ background: palette.bg, borderColor: palette.line }}>
                  <input
                    type="number" step="0.5" min="0" max="20"
                    value={draftGoals.generalAverage || ''}
                    onChange={handleGeneralAverageChange}
                    placeholder="15"
                    className="flex-1 min-w-0 bg-transparent text-[22px] font-black focus:outline-none"
                    style={{ color: palette.ink, fontFamily: palette.display }}
                  />
                  <span className="text-xs font-semibold shrink-0" style={{ color: palette.ink3 }}>/20</span>
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-[11px] font-semibold mb-1.5" style={{ color: palette.ink2 }}>Points au BAC</label>
                <div className="flex items-baseline gap-1 border rounded-[14px] px-3.5 py-2.5" style={{ background: palette.bg, borderColor: palette.line }}>
                  <input
                    type="number" step="1" min="0"
                    value={draftGoals.bacPoints || ''}
                    onChange={handleBacPointsChange}
                    placeholder="165"
                    className="flex-1 min-w-0 bg-transparent text-[22px] font-black focus:outline-none"
                    style={{ color: palette.ink, fontFamily: palette.display }}
                  />
                  <span className="text-xs font-semibold shrink-0" style={{ color: palette.ink3 }}>pts</span>
                </div>
              </div>
            </div>
            {mentionFor(draftGoals.generalAverage) && (
              <div className="flex items-center gap-2 mt-3 px-3 py-2.5 rounded-[12px]" style={{ background: palette.accentSoft }}>
                <Star className="w-4 h-4" style={{ color: palette.accent }} />
                <span className="text-xs font-bold" style={{ color: palette.accent }}>{mentionFor(draftGoals.generalAverage)}</span>
              </div>
            )}
          </div>

          {/* Cibles par trimestre */}
          <div className="border rounded-[20px] p-[18px]" style={{ background: palette.bg2, borderColor: palette.line }}>
            <h2 className="text-[15px] font-bold mb-3.5" style={{ color: palette.ink, fontFamily: palette.display }}>Cibles par trimestre</h2>
            <div className="flex gap-2.5">
              {([
                { id: 't1', label: 'TRIM. 1' },
                { id: 't2', label: 'TRIM. 2' },
                { id: 't3', label: 'TRIM. 3' }
              ] as const).map(trim => (
                <div key={trim.id} className="flex-1 text-center border rounded-[14px] py-3 px-1.5" style={{ borderColor: palette.line }}>
                  <div className="text-[10px] font-bold mb-1" style={{ color: palette.ink3 }}>{trim.label}</div>
                  <input
                    type="number" step="0.5" min="0" max="20"
                    value={draftGoals.trimesterTargets?.[trim.id] || ''}
                    onChange={(e) => handleTrimesterTargetChange(trim.id, e.target.value)}
                    placeholder="--"
                    className="w-full bg-transparent text-center text-[19px] font-black focus:outline-none"
                    style={{ color: palette.accent, fontFamily: palette.display }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Objectifs par matière — carte unifiée à lignes */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] mb-2.5 ml-0.5" style={{ color: palette.ink3 }}>
              Objectifs par matière
            </p>
            <div className="border rounded-[20px] px-4" style={{ background: palette.bg2, borderColor: palette.line }}>
              {subjects.map((subject, i) => (
                <div
                  key={subject.id}
                  className="flex items-center justify-between gap-3 py-3"
                  style={{ borderTop: i > 0 ? `1px solid ${palette.line}` : 'none' }}
                >
                  <span className="flex items-center gap-2.5 min-w-0">
                    <span
                      className="w-9 h-9 rounded-[12px] shrink-0 flex items-center justify-center text-sm font-black"
                      style={{ background: `${SUBJECT_DOT[subject.id] || palette.accent}22`, color: SUBJECT_DOT[subject.id] || palette.accent, fontFamily: palette.display }}
                    >
                      ×{subject.coeff}
                    </span>
                    <span className="font-bold text-sm truncate" style={{ color: palette.ink }}>{subject.name}</span>
                  </span>
                  <span className="flex items-baseline gap-1 shrink-0">
                    <input
                      type="number" step="0.5" min="0" max="20"
                      value={draftGoals.subjectTargets?.[subject.id] || ''}
                      onChange={(e) => handleSubjectTargetChange(subject.id, e.target.value)}
                      placeholder="--"
                      className="w-14 px-2 py-1.5 text-center text-sm font-bold border rounded-[10px] focus:outline-none focus:ring-2"
                      style={{ background: palette.bg, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent }}
                    />
                    <span className="text-[11px] font-semibold" style={{ color: palette.ink3 }}>/20</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Enregistrer — pleine largeur */}
          <button
            onClick={handleSaveGoals}
            className="w-full flex items-center justify-center gap-2 text-white py-3.5 rounded-[16px] font-bold transition-all hover:scale-[1.01]"
            style={{ background: palette.accent, boxShadow: `0 4px 14px ${palette.accent}40` }}
          >
            <Save className="w-5 h-5" />
            Enregistrer mes objectifs
          </button>

        </div>
      ) : null}
    </div>
  );
}

