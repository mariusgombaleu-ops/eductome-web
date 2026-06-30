import { useState, useMemo, useEffect, useRef } from 'react';
import { useUser } from '../../contexts/UserContext';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { db } from '../../config/firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { getSubjectsForLevel } from '../../constants/coefficients';
import { BacPointsGauge } from './BacPointsGauge';
import { BacSubjectRow } from './BacSubjectRow';
import { BacOrientationPredictor, rankFilieres } from './BacOrientationPredictor';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts';
import { AlertTriangle, RefreshCw, PenLine, Coins, Award, Share2 } from 'lucide-react';
import { Collapsible } from '../ui/system';
import { useToast } from '../../contexts/ToastContext';

type SimMode = 'notes' | 'points' | 'mention';
type MentionKey = 'P' | 'AB' | 'B' | 'TB';
type Scenario = { moyenne: number; points: number };

const MENTIONS: { key: MentionKey; label: string; seuil: number }[] = [
  { key: 'P', label: 'Passable', seuil: 10 },
  { key: 'AB', label: 'Assez Bien', seuil: 12 },
  { key: 'B', label: 'Bien', seuil: 14 },
  { key: 'TB', label: 'Très Bien', seuil: 16 },
];

export function BacSimulator() {
  const { levelString, grades } = useUser();
  const { currentUser } = useAuth();
  const { palette } = useTheme();
  const { addToast } = useToast();
  const subjects = getSubjectsForLevel(levelString);

  // Le simulateur est AUTONOME : il ne lit ni l'objectif (Objectifs), ni les
  // moyennes trimestrielles. 3 portes d'entrée : notes / points / mention.
  const [mode, setMode] = useState<SimMode>('notes');
  const [notesSimulees, setNotesSimulees] = useState<Record<string, number | null>>({});
  const [simPoints, setSimPoints] = useState<number | null>(null);
  const [simMention, setSimMention] = useState<MentionKey>('B');
  const [scenarios, setScenarios] = useState<{ prudent: Scenario | null; ambitieux: Scenario | null }>({ prudent: null, ambitieux: null });
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalCoeff = useMemo(() => subjects.reduce((s, sub) => s + sub.coeff, 0), [subjects]);
  const maxPoints = totalCoeff * 20;

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

  // Valeur par défaut au passage en mode « points » (évite l'état 0 pts / —).
  useEffect(() => {
    if (mode === 'points' && simPoints === null && maxPoints > 0) {
      setSimPoints(Math.round(maxPoints * 0.6));
    }
  }, [mode, simPoints, maxPoints]);

  // Moyennes de classe — UNIQUEMENT pour le radar « en option » (comparaison).
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

  // Agrégat des notes hypothétiques (mode « notes »).
  const notesAgg = useMemo(() => {
    let pts = 0;
    let coeff = 0;
    subjects.forEach(sub => {
      const note = notesSimulees[sub.id];
      if (note !== null && note !== undefined) {
        pts += note * sub.coeff;
        coeff += sub.coeff;
      }
    });
    return { pts, coeff, moy: coeff > 0 ? pts / coeff : null };
  }, [notesSimulees, subjects]);

  // Résultat unifié selon le mode actif.
  const { pointsSimules, moyenneSimulee } = useMemo(() => {
    if (mode === 'points') {
      const moy = simPoints !== null && totalCoeff > 0 ? simPoints / totalCoeff : null;
      return { pointsSimules: simPoints ?? 0, moyenneSimulee: moy };
    }
    if (mode === 'mention') {
      const seuil = MENTIONS.find(m => m.key === simMention)!.seuil;
      return { pointsSimules: seuil * totalCoeff, moyenneSimulee: seuil };
    }
    return { pointsSimules: notesAgg.pts, moyenneSimulee: notesAgg.moy };
  }, [mode, simPoints, simMention, totalCoeff, notesAgg]);

  // Le prédicteur ne reçoit le détail par matière qu'en mode « notes ».
  const notesPourOrientation = mode === 'notes' ? notesSimulees : {};

  const chartData = useMemo(() => {
    return subjects.map(sub => ({
      subject: sub.name.length > 10 ? sub.name.substring(0, 10) + '...' : sub.name,
      actuel: moyennesParMatiere[sub.id] ? Number(moyennesParMatiere[sub.id]!.toFixed(1)) : 0,
      simule: notesSimulees[sub.id] !== null && notesSimulees[sub.id] !== undefined
        ? Number(notesSimulees[sub.id]!.toFixed(1))
        : 0,
      fullMark: 20,
    }));
  }, [subjects, moyennesParMatiere, notesSimulees]);

  const handleCatastrophe = () => {
    const strongestSubject = [...subjects].sort((a, b) => b.coeff - a.coeff)[0];
    if (strongestSubject) {
      setNotesSimulees({ ...notesSimulees, [strongestSubject.id]: 7 });
    }
  };

  const handleReset = () => setNotesSimulees({});
  const handleChange = (id: string, val: number | null) => {
    setNotesSimulees(prev => ({ ...prev, [id]: val }));
  };

  const mentionFromMoy = (m: number): string | null =>
    [...MENTIONS].reverse().find(x => m >= x.seuil)?.label ?? null;

  const saveScenario = (slot: 'prudent' | 'ambitieux') => {
    if (moyenneSimulee === null) return;
    setScenarios(prev => ({ ...prev, [slot]: { moyenne: moyenneSimulee, points: Math.round(pointsSimules) } }));
  };

  const fmt = (n: number) => n.toFixed(2).replace('.', ',');

  // Récap texte de la simulation (pour les parents / partage).
  const buildRecap = (): string => {
    const lines = ['📊 Ma simulation BAC — EDUCTOME', ''];
    if (moyenneSimulee !== null) {
      lines.push(`Moyenne : ${fmt(moyenneSimulee)}/20  (${Math.round(pointsSimules)} pts sur ${maxPoints})`);
      const m = mentionFromMoy(moyenneSimulee);
      lines.push(`Mention visée : ${m ?? 'décrocher le BAC'}`);
    } else {
      lines.push('Simulation en cours…');
    }
    const fl = rankFilieres(levelString, moyenneSimulee);
    if (fl.length > 0) {
      lines.push('', 'Orientations possibles :');
      fl.forEach(f => lines.push(`• ${f.name} — ${f.compat}% de compatibilité`));
    }
    return lines.join('\n');
  };

  const handleShare = async () => {
    const text = buildRecap();
    if (typeof navigator !== 'undefined' && navigator.share) {
      try { await navigator.share({ title: 'Ma simulation BAC', text }); } catch { /* annulé */ }
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        addToast({ type: 'success', title: 'Copié !', message: 'Le récap est copié — tu peux le coller pour tes parents.' });
      } catch {
        addToast({ type: 'info', title: 'Partage', message: 'Copie indisponible sur cet appareil.' });
      }
    } else {
      addToast({ type: 'info', title: 'Partage', message: 'Partage indisponible sur cet appareil.' });
    }
  };

  const modeTabs: { id: SimMode; label: string; Icon: typeof PenLine }[] = [
    { id: 'notes', label: 'Par notes', Icon: PenLine },
    { id: 'points', label: 'Par points', Icon: Coins },
    { id: 'mention', label: 'Par mention', Icon: Award },
  ];

  return (
    <div className="space-y-6">
      {/* Sélecteur de mode */}
      <div className="grid grid-cols-3 gap-2">
        {modeTabs.map(({ id, label, Icon }) => {
          const active = mode === id;
          return (
            <button
              key={id}
              onClick={() => setMode(id)}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-[14px] text-[13px] font-bold transition-colors"
              style={{
                background: active ? palette.accent : palette.bg3,
                color: active ? palette.onAccent : palette.ink2,
                boxShadow: active ? `0 4px 12px ${palette.accent}33` : 'none',
              }}
            >
              <Icon size={15} className="shrink-0" />
              <span className="truncate">{label}</span>
            </button>
          );
        })}
      </div>

      {/* Entrée points / mention — AU-DESSUS de la jauge (la jauge = résultat) */}
      {mode === 'points' && (
        <div className="bg-[var(--ed-bg2)] border border-[var(--ed-line)] rounded-[20px] p-6 shadow-sm">
          <h2 className="text-lg font-bold text-[var(--ed-ink)] mb-1" style={{ fontFamily: palette.display }}>Entre ton total de points visé</h2>
          <p className="text-xs text-[var(--ed-ink3)] mb-4">
            Tape le total que tu vises au BAC (ou utilise le curseur) — le simulateur en déduit ta moyenne et ta mention.
          </p>
          <div className="flex items-baseline justify-center gap-2 mb-5">
            <input
              type="number" min={0} max={maxPoints} step={5}
              value={simPoints ?? ''}
              placeholder={String(Math.round(maxPoints * 0.6))}
              onChange={(e) => {
                const raw = e.target.value;
                if (raw === '') { setSimPoints(null); return; }
                const n = parseInt(raw, 10);
                if (!isNaN(n)) setSimPoints(Math.min(maxPoints, Math.max(0, n)));
              }}
              className="w-32 bg-transparent text-center text-5xl font-black text-[var(--ed-ink)] focus:outline-none border-b-2"
              style={{ borderColor: palette.accent, fontFamily: palette.display }}
              aria-label="Total de points visé"
            />
            <span className="text-lg font-semibold text-[var(--ed-ink3)]">/ {maxPoints} pts</span>
          </div>
          <input
            type="range" min={0} max={maxPoints} step={5}
            value={simPoints ?? Math.round(maxPoints * 0.6)}
            onChange={(e) => setSimPoints(parseInt(e.target.value, 10))}
            className="w-full accent-[var(--ed-accent)]"
          />
          <div className="flex justify-between text-[11px] text-[var(--ed-ink3)] mt-1">
            <span>0</span><span>{maxPoints} pts</span>
          </div>
        </div>
      )}

      {mode === 'mention' && (
        <div className="bg-[var(--ed-bg2)] border border-[var(--ed-line)] rounded-[20px] p-6 shadow-sm">
          <h2 className="text-lg font-bold text-[var(--ed-ink)] mb-1" style={{ fontFamily: palette.display }}>Vise une mention</h2>
          <p className="text-xs text-[var(--ed-ink3)] mb-4">
            Choisis la mention visée — le simulateur en déduit le total de points et la moyenne nécessaires.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {MENTIONS.map(m => {
              const active = simMention === m.key;
              return (
                <button
                  key={m.key}
                  onClick={() => setSimMention(m.key)}
                  className="py-3 rounded-[14px] text-sm font-bold transition-colors flex flex-col items-center gap-0.5"
                  style={{ background: active ? palette.accent : palette.bg3, color: active ? palette.onAccent : palette.ink2 }}
                >
                  {m.label}
                  <span className="text-[10px] font-semibold opacity-80">≥ {m.seuil}/20</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <BacPointsGauge
        mode={mode}
        pointsSimules={pointsSimules}
        moyenneSimulee={moyenneSimulee}
        maxPoints={maxPoints}
      />

      {/* Enregistrer la simulation courante comme scénario */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-semibold text-[var(--ed-ink3)]">Enregistrer comme :</span>
        <button
          onClick={() => saveScenario('prudent')}
          disabled={moyenneSimulee === null}
          className="text-xs font-bold px-3 py-1.5 rounded-full transition-opacity disabled:opacity-40 hover:opacity-80"
          style={{ background: palette.bg3, color: palette.ink2 }}
        >
          🛡️ Prudent
        </button>
        <button
          onClick={() => saveScenario('ambitieux')}
          disabled={moyenneSimulee === null}
          className="text-xs font-bold px-3 py-1.5 rounded-full transition-opacity disabled:opacity-40 hover:opacity-80"
          style={{ background: palette.bg3, color: palette.ink2 }}
        >
          🚀 Ambitieux
        </button>
      </div>

      {/* Entrée selon le mode */}
      {mode === 'notes' && (
        <div className="bg-[var(--ed-bg2)] border border-[var(--ed-line)] rounded-[20px] p-6 shadow-sm flex flex-col">
          <div className="mb-4">
            <h2 className="text-lg font-bold text-[var(--ed-ink)] mb-1" style={{ fontFamily: palette.display }}>Tes notes hypothétiques au BAC</h2>
            <p className="text-xs text-[var(--ed-ink3)]">
              Imagine tes notes par matière — le simulateur calcule ton total et ta mention.
            </p>
          </div>

          <div className="space-y-4 mb-6 flex-1 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {subjects.map(sub => (
              <BacSubjectRow
                key={sub.id}
                subject={sub}
                value={notesSimulees[sub.id] ?? null}
                onChange={handleChange}
              />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[var(--ed-line)]">
            <button
              onClick={handleCatastrophe}
              className="flex-1 py-2.5 rounded-[14px] text-sm font-bold flex items-center justify-center gap-2 transition-opacity hover:opacity-80"
              style={{ background: palette.warnBg, color: palette.warnBar }}
            >
              <AlertTriangle size={16} /> Scénario Catastrophe
            </button>
            <button
              onClick={handleReset}
              className="sm:w-12 py-2.5 rounded-[14px] flex items-center justify-center transition-opacity hover:opacity-80"
              style={{ background: palette.bg3, color: palette.ink2 }}
              title="Réinitialiser"
            >
              <RefreshCw size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Aperçu Radar — comparaison avec le niveau de classe (en option) */}
      <Collapsible title="Aperçu visuel · Radar (vs niveau de classe)" defaultOpen={false}>
        <p className="text-xs text-[var(--ed-ink3)] mb-4">
          Comparaison optionnelle : ton niveau actuel en classe vs les notes hypothétiques saisies.
        </p>
        <div className="w-full h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
              <PolarGrid stroke={palette.line} />
              <PolarAngleAxis dataKey="subject" tick={{ fill: palette.ink2, fontSize: 11, fontWeight: 600 }} />
              <PolarRadiusAxis angle={30} domain={[0, 20]} tick={{ fill: palette.ink3, fontSize: 10 }} />
              <Tooltip
                contentStyle={{ borderRadius: '12px', border: `1px solid ${palette.line}`, background: palette.bg2, color: palette.ink, boxShadow: `0 4px 14px ${palette.shadow}` }}
                itemStyle={{ fontWeight: 'bold', color: palette.ink }}
              />
              <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', fontWeight: 600, paddingTop: '20px' }} />
              <Radar name="Niveau Actuel (classe)" dataKey="actuel" stroke={palette.accent2} fill={palette.accent2} fillOpacity={0.3} />
              <Radar name="Notes simulées" dataKey="simule" stroke={palette.accent} fill={palette.accent} fillOpacity={0.5} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </Collapsible>

      {/* Comparaison de scénarios */}
      {(scenarios.prudent || scenarios.ambitieux) && (
        <Collapsible title="Comparer mes scénarios" defaultOpen={!!(scenarios.prudent && scenarios.ambitieux)}>
          <div className="grid grid-cols-2 gap-3">
            {(['prudent', 'ambitieux'] as const).map(slot => {
              const sc = scenarios[slot];
              const label = slot === 'prudent' ? '🛡️ Prudent' : '🚀 Ambitieux';
              const filieres = sc ? rankFilieres(levelString, sc.moyenne) : [];
              return (
                <div key={slot} className="rounded-[14px] border p-3" style={{ borderColor: palette.line, background: palette.bg }}>
                  <p className="text-xs font-bold mb-2" style={{ color: palette.ink }}>{label}</p>
                  {sc ? (
                    <>
                      <p className="text-2xl font-black leading-none" style={{ color: palette.ink, fontFamily: palette.display }}>
                        {fmt(sc.moyenne)}<span className="text-xs font-semibold ml-0.5" style={{ color: palette.ink3 }}>/20</span>
                      </p>
                      <p className="text-[11px] mt-1" style={{ color: palette.ink2 }}>
                        {sc.points} pts · {mentionFromMoy(sc.moyenne) ?? 'Sous 10/20'}
                      </p>
                      <div className="mt-2 pt-2 space-y-1 border-t" style={{ borderColor: palette.line }}>
                        {filieres.length > 0 ? filieres.map(f => (
                          <div key={f.id} className="flex items-center justify-between gap-1 text-[11px]">
                            <span className="truncate" style={{ color: palette.ink2 }}>{f.icon} {f.name}</span>
                            <span className="font-bold shrink-0" style={{ color: f.compat >= 75 ? palette.tipBar : f.compat >= 45 ? palette.anaBar : palette.warnBar }}>{f.compat}%</span>
                          </div>
                        )) : (
                          <p className="text-[11px]" style={{ color: palette.ink3 }}>Aucune filière éligible pour ta série.</p>
                        )}
                      </div>
                    </>
                  ) : (
                    <p className="text-[11px]" style={{ color: palette.ink3 }}>
                      Pas encore enregistré. Règle une simulation puis clique « {label} ».
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </Collapsible>
      )}

      {/* Prédicteur d'orientation — repliable */}
      <Collapsible title="Où peux-tu être orienté ?" defaultOpen={false}>
        <BacOrientationPredictor
          levelString={levelString}
          notesSimulees={notesPourOrientation}
          moyenneSimulee={moyenneSimulee}
          showSubjectDetail={mode === 'notes'}
        />
      </Collapsible>

      {/* Récap pour les parents + partage */}
      <Collapsible title="Récap pour mes parents" defaultOpen={false}>
        {moyenneSimulee === null ? (
          <p className="text-xs text-[var(--ed-ink3)]">Lance une simulation (notes, points ou mention) pour générer un récap.</p>
        ) : (
          <>
            <div className="rounded-[14px] p-4 relative overflow-hidden" style={{ background: palette.heroBg }}>
              <p className="text-[11px] uppercase tracking-wide font-bold text-white/80">Ma simulation BAC</p>
              <p className="text-3xl font-black text-white mt-1" style={{ fontFamily: palette.display }}>
                {fmt(moyenneSimulee)}<span className="text-base font-semibold text-white/70 ml-1">/20</span>
              </p>
              <p className="text-sm text-white/90 mt-1">
                {Math.round(pointsSimules)} pts · {mentionFromMoy(moyenneSimulee) ? `Mention ${mentionFromMoy(moyenneSimulee)}` : 'Objectif : le BAC'}
              </p>
            </div>

            {rankFilieres(levelString, moyenneSimulee).length > 0 && (
              <div className="mt-3 space-y-1.5">
                <p className="text-[11px] font-bold uppercase tracking-wide" style={{ color: palette.ink3 }}>Orientations possibles</p>
                {rankFilieres(levelString, moyenneSimulee).map(f => (
                  <div key={f.id} className="flex items-center justify-between text-xs">
                    <span style={{ color: palette.ink2 }}>{f.icon} {f.name}</span>
                    <span className="font-bold" style={{ color: f.compat >= 75 ? palette.tipBar : f.compat >= 45 ? palette.anaBar : palette.warnBar }}>{f.compat}%</span>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={handleShare}
              className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-[14px] font-bold text-white transition-transform hover:scale-[1.01]"
              style={{ background: palette.accent, boxShadow: `0 4px 14px ${palette.accent}40` }}
            >
              <Share2 size={16} /> Partager / montrer à mes parents
            </button>
          </>
        )}
      </Collapsible>
    </div>
  );
}
