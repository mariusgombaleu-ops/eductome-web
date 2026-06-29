// ============================================================================
// Simulateur d'Examen — « La Salle de Composition »
// Page-orchestratrice : machine à états du Devoir Surveillé et de l'Interro QCM.
// Route : /dashboard/simulateur  (et /dashboard/simulateur/:examId)
// ============================================================================

import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { ArrowLeft, Award, Zap } from 'lucide-react';
import { db } from '../../config/firebase';
import { SEO } from '../../components/SEO';
import { useTheme } from '../../contexts/ThemeContext';
import { useUser } from '../../contexts/UserContext';
import { useAuth } from '../../contexts/AuthContext';

import { getExam } from '../../data/examens';
import { useExamTimer } from '../../hooks/useExamTimer';
import { useSimulateurProgress } from '../../hooks/useSimulateurProgress';
import {
  exercicePoints, noteSur20, pointsFor,
  xpDevoir, xpInterro,
} from '../../utils/examen-utils';
import type {
  CorrectionState, ExamLevel, ExamMode, InterroResult,
} from '../../types/examen';

import { ExamHall } from '../../components/examen/ExamHall';
import { Convocation } from '../../components/examen/Convocation';
import { Composition } from '../../components/examen/Composition';
import { Sonnerie } from '../../components/examen/Sonnerie';
import { CorrectionBareme } from '../../components/examen/CorrectionBareme';
import { BilanDevoir, type Faiblesse } from '../../components/examen/BilanDevoir';
import { QcmRunner } from '../../components/examen/QcmRunner';
import { GrandFrereBubble } from '../../components/examen/GrandFrereBubble';

type Screen = 'hall' | 'convocation' | 'composition' | 'sonnerie' | 'correction' | 'bilanDevoir' | 'qcm';

export function Simulateur() {
  const { examId = 't1-limites' } = useParams();
  const navigate = useNavigate();
  const { palette } = useTheme();
  const { statut, gainXp } = useUser();
  const { currentUser } = useAuth();
  const { progress, recordResult } = useSimulateurProgress();

  const exam = getExam(examId);

  const [screen, setScreen] = useState<Screen>('hall');
  const [mode, setMode] = useState<ExamMode>('devoir');
  const [level, setLevel] = useState<ExamLevel>('MOYEN');
  const [submittedEarly, setSubmittedEarly] = useState(false);
  const [corrections, setCorrections] = useState<Record<string, CorrectionState>>({});
  const [unlocked, setUnlocked] = useState<ExamLevel[]>([]);

  const devoirCfg = exam ? exam.devoir[level] : undefined;
  const interroCfg = exam ? exam.interro[level] : undefined;

  const timerKey = `eductome_sim_${examId}_devoir_${level}`;
  const timer = useExamTimer(
    devoirCfg ? devoirCfg.dureeMin * 60 : 3600,
    timerKey,
    () => { setSubmittedEarly(false); setScreen('sonnerie'); },
  );

  // ── Bilan Devoir : calculs dérivés des auto-évaluations ───────────────────
  const bilan = useMemo(() => {
    if (!devoirCfg) return null;
    const parExercice = devoirCfg.exercices.map(ex => {
      const exStates: Record<string, CorrectionState> = {};
      ex.questions.forEach(q => { exStates[q.id] = corrections[`${ex.id}:${q.id}`] ?? null; });
      const { obtenus, total } = exercicePoints(ex, exStates);
      return { titre: ex.titre, obtenus, total };
    });
    const pointsObtenus = parExercice.reduce((s, e) => s + e.obtenus, 0);
    const pointsTotal = parExercice.reduce((s, e) => s + e.total, 0);
    const note = noteSur20(pointsObtenus, pointsTotal);

    const faiblesses: Faiblesse[] = [];
    devoirCfg.exercices.forEach(ex => {
      ex.questions.forEach(q => {
        const st = corrections[`${ex.id}:${q.id}`] ?? null;
        if (st && st !== 'reussi') {
          const lost = q.points - pointsFor(q, st);
          if (lost > 0) faiblesses.push({
            label: q.notePiege ? q.notePiege.replace(/\.$/, '') : `${ex.titre} · question`,
            delta: lost, severe: st === 'manque',
          });
        }
      });
    });
    faiblesses.sort((a, b) => b.delta - a.delta);

    return { parExercice, pointsObtenus, pointsTotal, note, faiblesses: faiblesses.slice(0, 4) };
  }, [devoirCfg, corrections]);

  // ── Garde-fou : examen introuvable ────────────────────────────────────────
  if (!exam || !devoirCfg || !interroCfg) {
    return (
      <div style={{ minHeight: '100vh', background: palette.bg, paddingTop: 96, textAlign: 'center', color: palette.ink2 }}>
        <p>Aucun simulateur disponible pour « {examId} ».</p>
        <button onClick={() => navigate('/dashboard')} style={{ marginTop: 12, color: palette.accent }}>Retour au tableau de bord</button>
      </div>
    );
  }

  // ── Actions ────────────────────────────────────────────────────────────────
  const launch = (m: ExamMode, lv: ExamLevel) => {
    setMode(m); setLevel(lv);
    if (m === 'devoir') { timer.reset(exam.devoir[lv].dureeMin * 60); setCorrections({}); setScreen('convocation'); }
    else { setScreen('qcm'); }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startCompo = () => { timer.start(); setScreen('composition'); };
  const submitCopy = () => { timer.stop(); setSubmittedEarly(true); setScreen('sonnerie'); };

  const finishCorrection = async (states: Record<string, CorrectionState>) => {
    setCorrections(states);
    setScreen('bilanDevoir');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // recalcul direct (l'état React n'est pas encore propagé au useMemo)
    let pObt = 0, pTot = 0;
    const parEx = devoirCfg.exercices.map(ex => {
      const exStates: Record<string, CorrectionState> = {};
      ex.questions.forEach(q => { exStates[q.id] = states[`${ex.id}:${q.id}`] ?? null; });
      const { obtenus, total } = exercicePoints(ex, exStates);
      pObt += obtenus; pTot += total;
      return { exerciceId: ex.id, obtenus, total };
    });
    const note = noteSur20(pObt, pTot);
    const xp = xpDevoir(level);

    gainXp(xp, `Devoir ${level} — ${exam.tome} : ${String(note).replace('.', ',')}/20`, `devoir_${examId}_${level}_${Date.now()}`);
    const newly = await recordResult('devoir', level, note);
    if (newly.length) setUnlocked(newly);
    if (currentUser) {
      try {
        await addDoc(collection(db, 'examResults'), {
          userId: currentUser.uid, type: 'devoir', examId, level, note,
          pointsObtenus: pObt, pointsTotal: pTot, parExercice: parEx, statut,
          completedAt: serverTimestamp(),
        });
      } catch (e) { console.error('save devoir result', e); }
    }
  };

  const finishInterro = async (res: InterroResult) => {
    const xp = xpInterro(res.level);
    res.xpGagne = statut === 'famille' ? xp * 2 : xp;
    gainXp(xp, `Interro ${res.level} — ${exam.tome} : ${res.bonnes}/${res.total}`, `interro_${examId}_${res.level}_${Date.now()}`);
    const newly = await recordResult('interro', res.level, res.note);
    if (newly.length) setUnlocked(newly);
    if (currentUser) {
      try {
        await addDoc(collection(db, 'examResults'), {
          userId: currentUser.uid, type: 'interro', examId, level: res.level,
          note: res.note, bonnes: res.bonnes, total: res.total,
          parCompetence: res.parCompetence, statut, completedAt: serverTimestamp(),
        });
      } catch (e) { console.error('save interro result', e); }
    }
  };

  const backToHall = () => { setScreen('hall'); setUnlocked([]); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const openModule = () => navigate(`/dashboard/course/${exam.moduleRedirect.courseId}`);

  const xpPreview = mode === 'devoir' ? xpDevoir(level) : xpInterro(level);

  return (
    <div style={{ minHeight: '100vh', background: palette.bg, paddingTop: 80, paddingBottom: 96, transition: 'background .3s' }}>
      <SEO title="Simulateur d'Examen — EDUCTOME" description="Compose en conditions réelles : Devoir Surveillé au barème et Interrogation QCM, par niveaux débloquables." />

      <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 16px' }}>
        {/* Barre retour */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
          <button onClick={screen === 'hall' ? () => navigate('/dashboard') : backToHall}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer', color: palette.ink2, font: '600 14px/1 Poppins, sans-serif' }}>
            <ArrowLeft size={16} /> {screen === 'hall' ? 'Tableau de bord' : "Quitter l'examen"}
          </button>
          {screen === 'hall' && (
            <span style={{ font: '700 11px/1 Poppins, sans-serif', letterSpacing: '.12em', textTransform: 'uppercase', color: palette.accent, background: palette.accentSoft, padding: '8px 12px', borderRadius: 999 }}>
              {exam.tome}
            </span>
          )}
        </div>

        {/* En-tête éditorial (Hall seulement) */}
        {screen === 'hall' && (
          <div style={{ marginBottom: 26 }}>
            <div style={{ font: '700 12px/1 Poppins, sans-serif', letterSpacing: '.16em', textTransform: 'uppercase', color: '#D81B60' }}>Mode Examen</div>
            <h1 style={{ margin: '10px 0 0', font: '800 32px/1.08 Poppins, sans-serif', letterSpacing: '-.01em', color: palette.ink }}>
              La Salle de Composition
            </h1>
            <p style={{ margin: '10px 0 0', font: "400 15px/1.6 'Newsreader', serif", color: palette.ink2, maxWidth: 560 }}>
              Deux épreuves, un même esprit. L'<b>Interrogation QCM</b> teste tes formules &amp; méthodes (auto-corrigée) ; le <b>Devoir Surveillé</b> te met en conditions réelles sur ta feuille (auto-évaluation au barème).
            </p>
          </div>
        )}

        {/* Écrans */}
        {screen === 'hall' && <ExamHall exam={exam} progress={progress} onLaunch={launch} />}
        {screen === 'convocation' && <Convocation exam={exam} cfg={devoirCfg} onStart={startCompo} />}
        {screen === 'composition' && (
          <Composition cfg={devoirCfg} remaining={timer.remaining} total={timer.total} ratio={timer.ratio} phase={timer.phase} onSubmit={submitCopy} />
        )}
        {screen === 'sonnerie' && <Sonnerie early={submittedEarly} onContinue={() => setScreen('correction')} />}
        {screen === 'correction' && <CorrectionBareme cfg={devoirCfg} onComplete={finishCorrection} />}
        {screen === 'bilanDevoir' && bilan && (
          <BilanDevoir exam={exam} note={bilan.note} xpGagne={statut === 'famille' ? xpDevoir(level) * 2 : xpDevoir(level)}
            parExercice={bilan.parExercice} faiblesses={bilan.faiblesses}
            onRestart={backToHall} onHistory={() => navigate('/dashboard/objectifs')} onRedirect={openModule}
            onRevision={() => navigate('/dashboard/revisions')} />
        )}
        {screen === 'qcm' && (
          <QcmRunner exam={exam} cfg={interroCfg} storageKey={`eductome_sim_${examId}_interro_${level}`}
            onResult={finishInterro} onRestart={() => launch('interro', level)} onUp={backToHall} onRedirect={openModule}
            onRevision={() => navigate('/dashboard/revisions')} />
        )}

        {/* XP en aperçu sous le Hall */}
        {screen === 'hall' && (
          <div style={{ maxWidth: 640, margin: '18px auto 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, font: '500 12px/1.4 Poppins, sans-serif', color: palette.ink3 }}>
            <Zap size={13} fill="#F0C419" stroke="none" /> Jusqu'à +{statut === 'famille' ? xpPreview * 2 : xpPreview} XP par épreuve réussie{statut === 'famille' ? ' (Famille ×2)' : ''}.
          </div>
        )}
      </div>

      {/* Overlay : palier débloqué */}
      {unlocked.length > 0 && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 60, background: 'rgba(8,12,18,.6)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}
          onClick={() => setUnlocked([])}>
          <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: 380, background: palette.accent2, borderRadius: 24, padding: '36px 28px', textAlign: 'center', color: '#fff', position: 'relative', overflow: 'hidden' }}>
            <div style={{ width: 100, height: 100, margin: '0 auto', borderRadius: 999, background: 'rgba(240,196,25,.14)', border: '1.5px solid rgba(240,196,25,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Award size={48} color="#F0C419" />
            </div>
            <div style={{ marginTop: 20, font: '700 10px/1 Poppins, sans-serif', letterSpacing: '.2em', textTransform: 'uppercase', color: '#9FC0E4' }}>Palier franchi</div>
            <h2 style={{ margin: '12px 0 0', font: '800 28px/1.12 Poppins, sans-serif' }}>Niveau {unlocked.join(' & ')} débloqué&nbsp;! 🎉</h2>
            <p style={{ margin: '12px 0 0', font: "400 15px/1.6 'Newsreader', serif", color: '#C8D6E8', fontStyle: 'italic' }}>
              Tu as prouvé que tu maîtrises le niveau actuel. Le terrain supérieur s'ouvre à toi.
            </p>
            <div style={{ marginTop: 22, textAlign: 'left' }}>
              <GrandFrereBubble variant="panel">« Voilà le travail, champion ! Maintenant on joue dans la cour des grands. Vas-y sans trembler. »</GrandFrereBubble>
            </div>
            <button onClick={() => setUnlocked([])}
              style={{ marginTop: 22, width: '100%', padding: 15, border: 'none', cursor: 'pointer', borderRadius: 16, background: '#F0C419', color: palette.accent2, font: '800 15px/1 Poppins, sans-serif' }}>
              Continuer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
