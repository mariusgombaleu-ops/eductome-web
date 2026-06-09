import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ChevronRight, ChevronLeft, ChevronUp, ChevronDown, Lightbulb, AlertTriangle,
  Activity, CheckCircle, X,
  List, ArrowLeft, ArrowRight, Edit3, Flag, Send, Save,
  Lock, Download
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import { useTheme } from '../../contexts/ThemeContext';
import { useToast } from '../../contexts/ToastContext';
import { courseT1 } from '../../data/course-t1';
import { courseT2 } from '../../data/course-t2';
import { courseT3 } from '../../data/course-t3';
import { courseT11 } from '../../data/course-t11';
import { QuizBlock, Tome, ExerciceBlock } from '../../types/course';
import { BlockRenderer, parseMarkdown } from '../../components/blocks/BlockRenderer';
import { ChapterLock } from '../../components/ui/ChapterLock';
import { SelarPaymentModal } from '../../components/payment/SelarPaymentModal';
import { fireConfetti } from '../../utils/confetti';
import { useUser } from '../../contexts/UserContext';
import { XP } from '../../constants/xp';

declare global {
  interface Window { MathJax?: any; }
}

const renderMathJax = () => {
  if (window.MathJax?.typesetPromise) {
    if (window.MathJax.typesetClear) {
      window.MathJax.typesetClear();
    }
    window.MathJax.typesetPromise().catch(() => {});
  }
};

// ──────────────────────────────────────────────
// Quiz Component
// ──────────────────────────────────────────────
const QuizSection = ({ quiz, onComplete, courseId, chapterId }: { quiz: QuizBlock[]; onComplete: () => void; courseId: string; chapterId: string }) => {
  const { addToast } = useToast();
  const { gainXp, hasActionBeenRewarded } = useUser();
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [results, setResults] = useState<boolean[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [attempts, setAttempts] = useState(1);

  useEffect(() => {
    const t = setTimeout(() => renderMathJax(), 50);
    return () => clearTimeout(t);
  }, [qi, quizFinished]);

  const handleValidate = () => {
    if (selected === null) return;
    
    const isCorrect = selected === quiz[qi].bonneReponse;
    const newResults = [...results, isCorrect];
    setResults(newResults);

    if (qi < quiz.length - 1) {
      setQi(q => q + 1);
      setSelected(null);
    } else {
      setQuizFinished(true);
      const score = newResults.filter(r => r).length;
      if (score >= quiz.length - 1) {
        fireConfetti();
        const actionId = `quiz_${courseId}_${chapterId}`;
        if (!hasActionBeenRewarded(actionId)) {
          const xpAmount = attempts === 1 ? XP.QUIZ_FIRST : (attempts === 2 ? XP.QUIZ_SECOND : 10);
          gainXp(xpAmount, attempts === 1 ? 'Quiz validé du premier coup !' : 'Quiz validé !', actionId);
        } else {
          addToast({
            type: 'success',
            title: 'Quiz validé !',
            message: 'Félicitations, tu as terminé ce chapitre.'
          });
        }
      }
    }
  };

  const restart = () => {
    setQi(0);
    setSelected(null);
    setResults([]);
    setQuizFinished(false);
    setAttempts(a => a + 1);
  };

  if (!quiz.length) return null;

  if (quizFinished) {
    const score = results.filter(r => r).length;
    const passed = score >= quiz.length - 1;
    const failedQuestions = quiz.map((q, i) => ({ q, index: i + 1 })).filter((_, i) => !results[i]);

    return (
      <div className={`mt-12 rounded-2xl border-2 overflow-hidden text-center p-6 md:p-8 transition-colors duration-300 ${passed ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800/50' : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800/50'}`}>
        <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-colors duration-300 ${passed ? 'bg-green-200 dark:bg-green-800/50 text-green-700 dark:text-green-300' : 'bg-red-200 dark:bg-red-800/50 text-red-700 dark:text-red-300'}`}>
          {passed ? <CheckCircle className="w-8 h-8" /> : <AlertTriangle className="w-8 h-8" />}
        </div>
        <h3 className="text-xl font-bold mb-2 text-[#1A1A2E] dark:text-white transition-colors duration-300">
          {passed ? 'Chapitre Validé !' : 'Chapitre Non Validé'}
        </h3>
        <p className="mb-6 text-[#6B7280] dark:text-[#E6EDF3] transition-colors duration-300">
          Vous avez obtenu <strong>{score} / {quiz.length}</strong> bonnes réponses.
          <br/><br/>
          {passed 
            ? "Félicitations, vous maîtrisez les notions de ce chapitre." 
            : "Vous n'avez pas atteint le score requis (minimum " + (quiz.length - 1) + "). Prenez le temps de lire le bilan ci-dessous avant de recommencer."}
        </p>

        {failedQuestions.length > 0 && (
          <div className="mt-6 text-left border-t border-[#E1E4E8] dark:border-[#30363D] pt-6 mb-8 transition-colors duration-300">
            <h4 className="font-bold mb-4 text-[#1A1A2E] dark:text-white transition-colors duration-300">📋 Bilan de vos erreurs :</h4>
            <div className="space-y-4">
              {failedQuestions.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white dark:bg-[#0D1117] border border-[#E1E4E8] dark:border-[#30363D] shadow-sm transition-colors duration-300">
                  <div className="text-xs font-bold uppercase tracking-wider mb-2 text-red-600 dark:text-red-400">Question {item.index}</div>
                  <div className="font-medium text-sm mb-3 pb-3 border-b border-[#E1E4E8] dark:border-[#30363D] text-[#1A1A2E] dark:text-[#E6EDF3] transition-colors duration-300" dangerouslySetInnerHTML={{ __html: item.q.question }} />
                  <div className="flex gap-3">
                    <Lightbulb className="w-5 h-5 shrink-0 mt-0.5 text-yellow-500 dark:text-yellow-400" />
                    <div className="text-sm leading-relaxed text-[#6B7280] dark:text-[#8B949E] transition-colors duration-300" dangerouslySetInnerHTML={{ __html: item.q.explication }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {passed ? (
          <button onClick={onComplete} className="px-6 py-3 rounded-xl font-bold text-white bg-[#1976D2] hover:bg-blue-600 transition-colors w-full md:w-auto shadow-md">
            Passer au chapitre suivant →
          </button>
        ) : (
          <button onClick={restart} className="px-6 py-3 rounded-xl font-bold transition-colors w-full md:w-auto bg-white dark:bg-[#161B22] text-[#1A1A2E] dark:text-white border border-[#E1E4E8] dark:border-[#30363D] shadow-sm hover:bg-[#F8F9FA] dark:hover:bg-[#30363D]">
            ↺ Relire la leçon et recommencer
          </button>
        )}
      </div>
    );
  }

  const q = quiz[qi];

  return (
    <div className="mt-12 rounded-2xl border border-[#E1E4E8] dark:border-[#30363D] overflow-hidden bg-white dark:bg-[#161B22] shadow-sm transition-colors duration-300">
      <div className="px-4 py-4 bg-blue-50 dark:bg-blue-900/20 border-b border-blue-100 dark:border-blue-900/30 transition-colors duration-300">
        <div className="flex items-center gap-2 mb-3">
          <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="font-bold text-base text-blue-700 dark:text-blue-400 transition-colors duration-300">Quiz de validation — {qi + 1}/{quiz.length}</span>
        </div>
        <div className="flex gap-1.5">
          {quiz.map((_, i) => {
            let bgCls = 'bg-gray-200 dark:bg-gray-700';
            if (i < qi) {
              bgCls = 'bg-blue-500 dark:bg-blue-600';
            } else if (i === qi) {
              bgCls = 'bg-blue-400 dark:bg-blue-400';
            }
            return <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${bgCls}`} />;
          })}
        </div>
      </div>

      <div className="p-5">
        <div className="text-base font-medium mb-6 leading-relaxed text-[#1A1A2E] dark:text-white transition-colors duration-300"
          dangerouslySetInnerHTML={{ __html: q.question }} />

        <div className="space-y-3">
          {q.options.map((opt, i) => {
            const isSelected = selected === i;
            return (
              <button key={i} onClick={() => setSelected(i)}
                className={`w-full text-left px-4 py-3.5 rounded-xl border-2 text-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-md
                  ${isSelected 
                    ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-400 text-blue-800 dark:text-blue-200 shadow-md' 
                    : 'bg-[#F8F9FA] dark:bg-[#0D1117] border-[#E1E4E8] dark:border-[#30363D] hover:border-gray-300 dark:hover:border-gray-600 text-[#1A1A2E] dark:text-[#E6EDF3]'
                  }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 transition-colors duration-300 ${isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-300 dark:border-gray-600'}`}>
                    {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <span className="flex-1" dangerouslySetInnerHTML={{ __html: opt }} />
                </div>
              </button>
            );
          })}
        </div>

        <button onClick={handleValidate} disabled={selected === null}
          className={`mt-6 w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-300 ${selected !== null ? 'bg-[#1976D2] hover:bg-blue-600 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'}`}>
          Valider ma réponse
        </button>
      </div>
    </div>
  );
};

// ──────────────────────────────────────────────
// MAIN COURSE READER
// ──────────────────────────────────────────────
export const CourseReader = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { addToast } = useToast();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktopSidebarCollapsed, setIsDesktopSidebarCollapsed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mathjaxReady, setMathjaxReady] = useState(false);

  // Modals state
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [noteContent, setNoteContent] = useState('');
  const [reportContent, setReportContent] = useState('');

  // Payment state
  const { unlockedCourses } = useUser();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [paymentItemName, setPaymentItemName] = useState('');
  const [paymentType, setPaymentType] = useState<'chapter' | 'tome' | 'collection'>('chapter');

  useEffect(() => {
    if (isNotesOpen && courseId) {
      const savedNote = localStorage.getItem(`eductome_course_notes_${courseId}`);
      if (savedNote) setNoteContent(savedNote);
    }
  }, [isNotesOpen, courseId]);

  const courseRegistry: Record<string, Tome> = {
    't1-limites': courseT1,
    't2-derivees': courseT2,
    't3-primitives': courseT3,
    't11-eq-diff': courseT11
  };

  const course = courseId && courseRegistry[courseId] ? courseRegistry[courseId] : courseT1;
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const chapter = course.chapitres[activeChapterIndex] || course.chapitres[0];
  const [activeSectionId, setActiveSectionId] = useState<string>(
    () => chapter.sections[0]?.id ?? ''
  );
  const [expandedSections, setExpandedSections] = useState<Set<string>>(() => {
    const firstId = chapter.sections[0]?.id;
    return firstId ? new Set([firstId]) : new Set<string>();
  });
  const chapterDisplayNumber = chapter.number ?? activeChapterIndex;

  const isUnlocked = chapter.gratuit ||
    unlockedCourses.includes(courseId || '') ||
    (localStorage.getItem('eductome_unlocked_tomes') || '').includes(courseId || '') ||
    (localStorage.getItem('eductome_unlocked_chapters') || '').includes(chapter.id);

  // Possession réelle (achat du chapitre ou du tome) — distinct de isUnlocked,
  // qui inclut aussi les chapitres offerts. Les corrections détaillées et le PDF
  // hors-ligne sont réservés au contenu possédé (brief §5.2), pas au contenu offert.
  const hasFullAccess =
    unlockedCourses.includes(courseId || '') ||
    unlockedCourses.includes(chapter.id) ||
    (localStorage.getItem('eductome_unlocked_tomes') || '').includes(courseId || '') ||
    (localStorage.getItem('eductome_unlocked_chapters') || '').includes(chapter.id);

  const handleUnlockChapter = () => {
    setPaymentAmount(300);
    setPaymentItemName(chapter.titre);
    setPaymentType('chapter');
    setIsPaymentModalOpen(true);
  };

  // Calcul global du Booster Déductible pour ce tome
  const chaptersInTome = course.chapitres.map(c => c.id);
  const ownedChapters = chaptersInTome.filter(cId => unlockedCourses.includes(cId));
  const deduction = ownedChapters.length * 300;
  const finalTomePrice = Math.max(0, 1500 - deduction);

  const handleUnlockTome = () => {
    setPaymentAmount(finalTomePrice);
    setPaymentItemName(deduction > 0 ? `Le Tome Complet (-${deduction}F déduits pour tes chapitres)` : 'Le Tome Complet (Tous les chapitres)');
    setPaymentType('tome');
    setIsPaymentModalOpen(true);
  };

  const handleUnlockCollection = () => {
    setPaymentAmount(10000);
    setPaymentItemName('La Collection Complète EDUCTOME');
    setPaymentType('collection');
    setIsPaymentModalOpen(true);
  };

  // Ancienne fonction de succès de paiement retirée car c'est géré via Selar et Firebase maintenant

  const downloadCorrectionsPDF = async () => {
    try {
      const html2canvasLib = (await import('html2canvas')).default;

      // Collect exercise blocks from raw data — avoids capturing collapsed accordion DOM
      const exerciseBlocks: ExerciceBlock[] = [];
      for (const section of chapter.sections) {
        for (const block of section.blocs) {
          if (block.type === 'exercise') {
            exerciseBlocks.push(block as ExerciceBlock);
          }
        }
      }

      if (exerciseBlocks.length === 0) {
        addToast({ type: 'error', title: 'Aucun exercice trouvé', message: '' });
        return;
      }

      const chapLabel =
        chapterDisplayNumber != null && chapterDisplayNumber > 0
          ? `Chapitre ${chapterDisplayNumber} — ${chapter.titre}`
          : chapter.titre;

      // Off-screen render target — never captures app DOM
      const container = document.createElement('div');
      container.id = 'pdf-render-target';
      container.style.cssText = 'position:absolute;left:-9999px;top:0;width:794px;background:#ffffff;font-family:Poppins,sans-serif;';

      // Header
      const headerEl = document.createElement('div');
      headerEl.style.cssText = 'background:#1A3557;padding:28px 36px 24px;';
      headerEl.innerHTML = `
        <div style="color:#ffffff;font-size:22px;font-weight:700;">EDUCTOME</div>
        <div style="color:#B4D2F0;font-size:11px;margin-top:4px;">Corrections détaillées</div>
        <div style="color:#E6EDF3;font-size:14px;font-weight:600;margin-top:10px;">${chapLabel}</div>
      `;
      container.appendChild(headerEl);

      // Body — each exercise fully expanded, no accordion
      const bodyEl = document.createElement('div');
      bodyEl.style.cssText = 'padding:24px 36px;';

      exerciseBlocks.forEach((ex, idx) => {
        const card = document.createElement('div');
        card.style.cssText = 'margin-bottom:32px;border:1px solid #E1E4E8;border-radius:16px;overflow:hidden;background:#ffffff;';

        // Card header
        const cardHeader = document.createElement('div');
        cardHeader.style.cssText = 'background:#EBF5FB;padding:12px 16px;border-bottom:1px solid #BEE3F8;';
        cardHeader.innerHTML = `<span style="font-size:12px;font-weight:700;color:#1976D2;">Exercice ${idx + 1}${ex.niveau ? ' — ' + ex.niveau : ''}</span>`;
        card.appendChild(cardHeader);

        // Énoncé
        const enonceEl = document.createElement('div');
        enonceEl.style.cssText = 'padding:16px;font-size:14px;line-height:1.7;color:#1A1A2E;border-bottom:1px solid #F0F0F0;';
        enonceEl.innerHTML = parseMarkdown(ex.enonce);
        card.appendChild(enonceEl);

        // Steps — all visible, no toggle
        const stepsEl = document.createElement('div');
        stepsEl.style.cssText = 'padding:16px;';
        ex.etapes.forEach((step, stepIdx) => {
          let stepName = `Étape ${stepIdx + 1}`;
          let stepContent: string = typeof step === 'string' ? step : '';
          if (typeof step === 'object' && step !== null) {
            stepName = (step as { name: string; contenu: string }).name || stepName;
            stepContent = (step as { name: string; contenu: string }).contenu || '';
          }
          const stepEl = document.createElement('div');
          stepEl.style.cssText = 'margin-bottom:10px;padding:12px;background:#F8F9FA;border-radius:10px;';
          stepEl.innerHTML = `
            <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#9CA3AF;margin-bottom:6px;">${stepName}</div>
            <div style="font-size:13px;color:#374151;line-height:1.6;">${parseMarkdown(stepContent)}</div>
          `;
          stepsEl.appendChild(stepEl);
        });
        card.appendChild(stepsEl);

        // Result
        if (ex.reponse) {
          const resultEl = document.createElement('div');
          resultEl.style.cssText = 'margin:0 16px 16px;padding:12px;background:#F0FFF4;border:2px solid #86EFAC;border-radius:10px;';
          resultEl.innerHTML = `
            <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#16A34A;margin-bottom:6px;">✓ Résultat</div>
            <div style="font-size:14px;font-weight:700;color:#15803D;line-height:1.6;">${parseMarkdown(ex.reponse)}</div>
          `;
          card.appendChild(resultEl);
        }

        bodyEl.appendChild(card);
      });

      container.appendChild(bodyEl);

      // Footer
      const footerEl = document.createElement('div');
      footerEl.style.cssText = 'padding:16px 36px;border-top:1px solid #E1E4E8;text-align:center;color:#9CA3AF;font-size:10px;font-style:italic;';
      footerEl.textContent = 'EDUCTOME — Apprendre sans limites';
      container.appendChild(footerEl);

      document.body.appendChild(container);

      const canvas = await html2canvasLib(container, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
      });

      document.body.removeChild(container);

      // Multi-page PDF
      const doc = new jsPDF({ unit: 'mm', format: 'a4' });
      const pw = doc.internal.pageSize.getWidth();
      const ph = doc.internal.pageSize.getHeight();
      const pageContentH = ph - 10;

      const imgData = canvas.toDataURL('image/jpeg', 0.92);
      const totalH = (canvas.height / canvas.width) * pw;

      const drawFooter = () => {
        doc.setFontSize(8);
        doc.setFont('helvetica', 'italic');
        doc.setTextColor(150, 150, 150);
        doc.text('EDUCTOME — Apprendre sans limites', pw / 2, ph - 4, { align: 'center' });
      };

      let srcY = 0;
      let remaining = totalH;
      let firstPage = true;

      while (remaining > 0) {
        if (!firstPage) doc.addPage();
        firstPage = false;
        doc.addImage(imgData, 'JPEG', 0, -srcY, pw, totalH);
        drawFooter();
        srcY += pageContentH;
        remaining -= pageContentH;
      }

      const filename = `eductome-${courseId || 'cours'}-${chapter.id}-corrections.pdf`;
      doc.save(filename);
      addToast({ type: 'success', title: 'Corrections téléchargées !', message: '' });
    } catch (err) {
      console.error(err);
      addToast({ type: 'error', title: 'Erreur — réessaie', message: '' });
    }
  };

  useEffect(() => { const t = setTimeout(() => renderMathJax(), 200); return () => clearTimeout(t); }, [activeChapterIndex]);

  useEffect(() => {
    const promise = window.MathJax?.startup?.promise;
    if (promise) {
      promise.then(() => setMathjaxReady(true)).catch(() => setMathjaxReady(true));
    } else {
      setMathjaxReady(true);
    }
  }, []);

  useEffect(() => {
    if (courseId) {
      localStorage.setItem('eductome_last_chapter_read', courseId);
    }
  }, [courseId]);

  // Reset active section + accordion when chapter changes
  useEffect(() => {
    const firstId = chapter.sections[0]?.id;
    setActiveSectionId(firstId ?? '');
    setExpandedSections(firstId ? new Set([firstId]) : new Set<string>());
  }, [activeChapterIndex]);

  // Highlight which section is currently in the viewport
  useEffect(() => {
    if (!isUnlocked || chapter.sections.length === 0) return;
    const observers: IntersectionObserver[] = [];
    chapter.sections.forEach(sec => {
      const el = document.getElementById(`section-${sec.id}`);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSectionId(sec.id); },
        { rootMargin: '-10% 0px -75% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(obs => obs.disconnect());
  }, [activeChapterIndex, isUnlocked]);

  // Auto-expand the active section on scroll
  useEffect(() => {
    if (!activeSectionId) return;
    setExpandedSections(prev => {
      if (prev.has(activeSectionId)) return prev;
      const next = new Set(prev);
      next.add(activeSectionId);
      return next;
    });
  }, [activeSectionId]);

  // Auto-scroll the sidebar nav to keep the active section item visible
  useEffect(() => {
    if (!activeSectionId) return;
    document.querySelectorAll<HTMLElement>(`[data-section-id="${activeSectionId}"]`).forEach(el =>
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    );
  }, [activeSectionId]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scroll = totalScroll / windowHeight;
        setScrollProgress(scroll * 100);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToChapter = useCallback((idx: number) => {
    setActiveChapterIndex(idx);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNextChapter = () => {
    if (activeChapterIndex < course.chapitres.length - 1) {
      goToChapter(activeChapterIndex + 1);
    }
  };

  // ── Sidebar (shared for mobile drawer & desktop) ─
  const SidebarContent = () => (
    <>
      <button onClick={() => navigate('/dashboard/courses')}
        className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors text-[#6B7280] dark:text-[#8B949E] hover:text-[#1A1A2E] dark:hover:text-white">
        <ChevronLeft className="w-3 h-3" /> Retour
      </button>

      <div className="mb-1 px-1 text-[10px] uppercase tracking-widest font-bold text-[#6B7280] dark:text-[#8B949E]">Sommaire</div>
      <h2 className="text-sm font-bold mb-4 leading-tight text-[#1A1A2E] dark:text-white">{course.titre}</h2>

      <nav className="space-y-1">
        {course.chapitres.map((chap, idx) => {
          const isActive = activeChapterIndex === idx;
          return (
            <div key={chap.id}>
              <button
                onClick={() => goToChapter(idx)}
                className={`w-full text-left px-3 py-2.5 rounded-xl transition-all duration-300 ${isActive
                  ? 'bg-[#EBF5FB] dark:bg-[#1A3557] text-[#1A3557] dark:text-white font-bold'
                  : 'text-[#6B7280] dark:text-[#8B949E] hover:bg-[#F8F9FA] dark:hover:bg-[#161B22] hover:text-[#1A1A2E] dark:hover:text-white'
                }`}
              >
                {chap.number != null ? chap.number > 0 : idx > 0 ? (
                  <span className={`text-[10px] uppercase font-bold tracking-wider mb-1 block ${isActive ? 'text-[#1976D2] dark:text-[#D81B60]' : 'text-[#9CA3AF] dark:text-[#6E7681]'}`}>
                    Chap. {chap.number ?? idx}
                  </span>
                ) : null}
                <span className={`text-xs leading-snug ${isActive ? 'font-bold' : 'font-medium'}`}>{chap.titre}</span>
              </button>

              {/* Sections du chapitre actif */}
              {isActive && chap.sections.filter(s => s.titre).length > 0 && (
                <div className="ml-3 my-2 space-y-0.5">
                  {chap.sections.filter(s => s.titre).map(sec => (
                    <a key={sec.id} href={`#section-${sec.id}`}
                      data-section-id={sec.id}
                      onClick={e => {
                        e.preventDefault();
                        setSidebarOpen(false);
                        setExpandedSections(prev => { const next = new Set(prev); next.add(sec.id); return next; });
                        setTimeout(() => {
                          document.getElementById(`section-${sec.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 100);
                      }}
                      className={`block text-[13px] py-1.5 px-2 rounded-lg transition-all duration-200 leading-snug border-l-2 ${
                        activeSectionId === sec.id
                          ? 'border-[#1A3557] dark:border-[#1976D2] text-[#1A3557] dark:text-blue-300 font-bold bg-[#EBF5FB]/60 dark:bg-[#1A3557]/20'
                          : 'border-transparent text-[#6B7280] dark:text-[#8B949E] hover:text-[#1976D2] dark:hover:text-white hover:bg-[#F8F9FA] dark:hover:bg-[#161B22] font-medium'
                      }`}
                    >
                      {sec.titre}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#0D1117] transition-colors duration-300 font-poppins">

      {/* ── Fixed Top Bar ── */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#161B22]/95 backdrop-blur-md border-b border-[#E1E4E8] dark:border-[#30363D] transition-colors duration-300">
        <div className="flex items-center gap-3 px-4 py-3 h-16">
          <button onClick={() => navigate('/dashboard/courses')}
            className="p-2 rounded-xl text-[#6B7280] dark:text-[#8B949E] hover:bg-[#F8F9FA] dark:hover:bg-[#30363D] transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="flex-1 min-w-0 flex items-center justify-center text-center">
            <div className="max-w-xl truncate">
              {chapterDisplayNumber != null && chapterDisplayNumber > 0 && (
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D81B60] block mb-0.5">Chapitre {chapterDisplayNumber}</span>
              )}
              <span className="text-sm sm:text-base font-bold truncate text-[#1A1A2E] dark:text-white">{chapter.titre}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <button onClick={() => setIsNotesOpen(true)} title="Prendre des notes"
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl text-[#6B7280] dark:text-[#8B949E] hover:bg-[#F8F9FA] dark:hover:bg-[#30363D] transition-colors">
              <Edit3 className="w-5 h-5" />
            </button>
            <button onClick={() => setIsReportOpen(true)} title="Signaler une erreur"
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl text-red-500 hover:text-red-600 dark:text-red-400 hover:bg-[#F8F9FA] dark:hover:bg-[#30363D] transition-colors">
              <Flag className="w-5 h-5" />
            </button>
            <button onClick={() => setSidebarOpen(true)}
              className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl text-[#6B7280] dark:text-[#8B949E] hover:bg-[#F8F9FA] dark:hover:bg-[#30363D] transition-colors">
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
        {/* ProgressBar de lecture */}
        <div className="absolute bottom-0 left-0 h-1 bg-[#F8F9FA] dark:bg-[#30363D] w-full">
          <div 
            className="h-full bg-[#D81B60] progress-glow transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <div className="relative z-10 w-72 h-full flex flex-col p-5 overflow-y-auto bg-white dark:bg-[#161B22] border-r border-[#E1E4E8] dark:border-[#30363D] transition-colors duration-300">
            <button onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-[#6B7280] dark:text-[#8B949E] hover:bg-[#F8F9FA] dark:hover:bg-[#30363D]">
              <X className="w-5 h-5" />
            </button>
            <div className="mt-8">
              <SidebarContent />
            </div>
          </div>
        </div>
      )}

      <div className="flex pt-16 relative">

        {/* ── Desktop Sidebar ── */}
        <aside className={`hidden lg:flex lg:flex-col shrink-0 border-r fixed top-16 bottom-0 overflow-y-auto transition-all duration-300 ease-in-out z-20 bg-[#F8F9FA] dark:bg-[#0D1117] border-[#E1E4E8] dark:border-[#30363D] ${isDesktopSidebarCollapsed ? '-translate-x-full w-0 p-0 border-r-0' : 'w-72 xl:w-80 p-5 translate-x-0'}`}>
          <SidebarContent />
        </aside>

        {/* ── Main Content ── */}
        <main className={`flex-1 min-w-0 px-4 py-8 lg:px-8 lg:py-12 pb-24 transition-all duration-300 ease-in-out bg-white dark:bg-[#0D1117] ${isDesktopSidebarCollapsed ? 'lg:ml-0' : 'lg:ml-72 xl:ml-80'}`}>
          
          {/* Toggle button relative to main content */}
          <button
            onClick={() => setIsDesktopSidebarCollapsed(!isDesktopSidebarCollapsed)}
            className="hidden lg:flex fixed top-20 z-30 p-2 rounded-full border shadow-md transition-all duration-300 hover:scale-110 bg-white dark:bg-[#161B22] border-[#E1E4E8] dark:border-[#30363D] text-[#6B7280] dark:text-[#8B949E] hover:text-[#1976D2] dark:hover:text-[#D81B60] -ml-4 lg:-ml-6"
          >
            {isDesktopSidebarCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>

          <div className={`mx-auto transition-all duration-300 ${isDesktopSidebarCollapsed ? 'max-w-4xl' : 'max-w-3xl'}`}>

            {/* Chapter Header */}
            <div className="mb-10 animate-in fade-in slide-in-from-bottom-4">
              {chapterDisplayNumber != null && chapterDisplayNumber > 0 && (
                <span className="inline-flex items-center px-3 py-1 mb-4 rounded-full text-xs font-bold tracking-wider bg-[#EBF5FB] dark:bg-[#1A3557] text-[#1976D2] dark:text-[#E6EDF3]">
                  CHAPITRE {chapterDisplayNumber}
                </span>
              )}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold leading-tight text-[#1A1A2E] dark:text-white">
                {chapter.titre}
              </h1>
              <div className="mt-6 h-1.5 w-20 rounded-full bg-[#1976D2] dark:bg-[#D81B60]" />
            </div>

            {!isUnlocked ? (
              <ChapterLock 
                chapterTitle={chapter.titre}
                tomePrice={finalTomePrice}
                deduction={deduction}
                onUnlockChapter={handleUnlockChapter}
                onUnlockTome={handleUnlockTome}
                onUnlockCollection={handleUnlockCollection}
              />
            ) : (
              <>
                {/* Sections & Blocks */}
                <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 delay-150">
                  {chapter.sections.map(section => {
                    const hasTitre = Boolean(section.titre);
                    const isExpanded = expandedSections.has(section.id);
                    const isActiveSec = activeSectionId === section.id;
                    return (
                      <section key={section.id} id={`section-${section.id}`} className="scroll-mt-24">
                        {hasTitre && (
                          <button
                            type="button"
                            onClick={() => setExpandedSections(prev => {
                              const next = new Set(prev);
                              if (next.has(section.id)) next.delete(section.id);
                              else next.add(section.id);
                              return next;
                            })}
                            className={`w-full text-left flex items-center justify-between gap-3 mt-10 mb-2 pb-2 border-b transition-colors duration-300 cursor-pointer ${
                              isActiveSec
                                ? 'border-[#1A3557] dark:border-[#1976D2]'
                                : 'border-[#E1E4E8] dark:border-[#30363D]'
                            }`}
                          >
                            <h2 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                              isActiveSec ? 'text-[#1A3557] dark:text-blue-300' : 'text-[#1A1A2E] dark:text-white'
                            }`}>
                              {section.titre}
                            </h2>
                            <ChevronDown className={`w-5 h-5 shrink-0 transition-all duration-300 ${
                              isExpanded ? 'rotate-180' : ''
                            } ${isActiveSec ? 'text-[#1A3557] dark:text-blue-300' : 'text-gray-400 dark:text-gray-600'}`} />
                          </button>
                        )}
                        <div className={`grid transition-all duration-500 ease-in-out ${
                          isExpanded || !hasTitre ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}>
                          <div className="min-h-0 overflow-hidden">
                            <div className="space-y-6 pt-2">
                              {section.blocs.map((block, blockIdx) => (
                                <div key={block.id} data-block-type={block.type === 'exercise' ? 'exercise' : undefined} style={{ animationDelay: `${blockIdx * 60}ms` }}>
                                  <BlockRenderer block={block} isDark={theme === 'dark'} courseId={courseId || 'unknown'} chapterId={chapter.id} sectionId={section.id} mathjaxReady={mathjaxReady} />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </section>
                    );
                  })}
                  {chapter.quiz && chapter.quiz.length > 0 && (
                    <QuizSection
                      quiz={chapter.quiz}
                      onComplete={handleNextChapter}
                      courseId={courseId || 'unknown'}
                      chapterId={chapter.id}
                    />
                  )}

                  {/* Corrections détaillées & PDF hors-ligne — réservés au contenu possédé (brief §5.2) */}
                  <div className={`mt-12 rounded-2xl border-2 overflow-hidden transition-colors duration-300 ${
                    hasFullAccess
                      ? 'bg-[#EBF5FB] dark:bg-[#1A3557]/20 border-[#1A3557]/20 dark:border-[#1A3557]/40'
                      : 'bg-red-50 dark:bg-red-900/10 border-[#C62828]/20 dark:border-[#C62828]/30'
                  }`}>
                    <div className="p-6 md:p-8 text-center">
                      <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        hasFullAccess
                          ? 'bg-[#1A3557]/10 dark:bg-[#1A3557]/40 text-[#1A3557] dark:text-white'
                          : 'bg-[#C62828]/10 text-[#C62828]'
                      }`}>
                        {hasFullAccess ? <Download className="w-7 h-7" /> : <Lock className="w-7 h-7" />}
                      </div>

                      <h3 className="text-lg font-bold mb-3 text-[#1A1A2E] dark:text-white transition-colors duration-300">
                        Corrections détaillées & PDF hors-ligne
                      </h3>

                      <div className="relative max-w-md mx-auto mb-6">
                        <p className={`text-sm leading-relaxed transition-all duration-300 text-[#6B7280] dark:text-[#8B949E] ${!hasFullAccess ? 'blur-[4px] select-none' : ''}`}>
                          {hasFullAccess
                            ? "Tu as un accès complet aux corrections pas-à-pas de chaque exercice de ce chapitre. Télécharge le PDF pour réviser hors-ligne, où que tu sois — même dans le gbaka, sans réseau."
                            : "Solution étape par étape : on identifie la forme indéterminée, on factorise par le terme dominant, puis on conclut sur la limite recherchée pour chaque exercice de ce chapitre…"}
                        </p>
                        {!hasFullAccess && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="px-3 py-1.5 rounded-full bg-white dark:bg-[#161B22] text-xs font-bold text-[#C62828] border border-[#C62828]/30 shadow-sm flex items-center gap-1.5">
                              <Lock className="w-3.5 h-3.5" /> Réservé aux élèves qui possèdent ce chapitre
                            </span>
                          </div>
                        )}
                      </div>

                      {hasFullAccess ? (
                        <button
                          onClick={downloadCorrectionsPDF}
                          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#1A3557] hover:bg-[#1976D2] transition-colors duration-300 shadow-md shadow-blue-900/20"
                        >
                          <Download className="w-5 h-5" /> Télécharger le PDF
                        </button>
                      ) : (
                        <button
                          onClick={handleUnlockChapter}
                          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#C62828] hover:bg-red-700 transition-colors duration-300 shadow-md shadow-red-900/20"
                        >
                          <Lock className="w-5 h-5" /> Débloquer ce chapitre — 300 F
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}

              {/* Chapter Navigation */}
            <div className="mt-16 flex flex-col md:flex-row gap-4 pt-8 border-t border-[#E1E4E8] dark:border-[#30363D] transition-colors duration-300">
              {activeChapterIndex > 0 ? (
                <button
                  onClick={() => goToChapter(activeChapterIndex - 1)}
                  className="flex-1 flex items-center justify-between gap-3 px-6 py-4 rounded-2xl transition-all border border-[#E1E4E8] dark:border-[#30363D] bg-white dark:bg-[#161B22] hover:bg-[#F8F9FA] dark:hover:bg-[#0D1117] shadow-sm hover:shadow-md group"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <ArrowLeft className="w-5 h-5 shrink-0 text-[#6B7280] dark:text-[#8B949E] group-hover:-translate-x-1 transition-transform" />
                    <div className="text-left min-w-0">
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-[#6B7280] dark:text-[#8B949E]">Chapitre Précédent</span>
                      <span className="block text-sm font-bold truncate text-[#1A1A2E] dark:text-white">
                        {course.chapitres[activeChapterIndex - 1].titre}
                      </span>
                    </div>
                  </div>
                </button>
              ) : <div className="flex-1" />}
              
              {activeChapterIndex < course.chapitres.length - 1 ? (
                <button
                  onClick={() => goToChapter(activeChapterIndex + 1)}
                  className="flex-1 flex items-center justify-between gap-3 px-6 py-4 rounded-2xl transition-all border border-transparent bg-[#1A3557] hover:bg-[#1976D2] dark:bg-[#1976D2] dark:hover:bg-blue-600 text-white shadow-sm hover:shadow-md group"
                >
                  <div className="text-right min-w-0 flex-1">
                    <span className="block text-[10px] uppercase font-bold tracking-wider text-blue-200">Chapitre Suivant</span>
                    <span className="block text-sm font-bold truncate">
                      {course.chapitres[activeChapterIndex + 1].titre}
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 shrink-0 text-blue-200 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : <div className="flex-1" />}
            </div>

          </div>
        </main>
      </div>

      {/* ── Notes Drawer ── */}
      {isNotesOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsNotesOpen(false)} />
          <div className="relative z-10 w-full max-w-sm lg:max-w-md h-full bg-white dark:bg-[#161B22] shadow-2xl border-l border-[#E1E4E8] dark:border-[#30363D] flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between p-5 border-b border-[#E1E4E8] dark:border-[#30363D]">
              <div className="flex items-center gap-2 font-bold text-lg text-[#1A1A2E] dark:text-white">
                <Edit3 className="w-6 h-6 text-[#1976D2]" />
                Mon Carnet de Notes
              </div>
              <button onClick={() => setIsNotesOpen(false)} className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-[#30363D] rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 p-5 flex flex-col">
              <p className="text-sm text-[#6B7280] dark:text-[#8B949E] mb-4">
                Prends des notes pendant ta lecture. Elles seront liées à ce tome et accessibles depuis ton profil.
              </p>
              <textarea
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                placeholder="Ex: Astuce pour calculer la limite en l'infini..."
                className="flex-1 w-full p-4 rounded-xl border border-[#E1E4E8] dark:border-[#30363D] bg-gray-50 dark:bg-[#0D1117] text-[#1A1A2E] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1976D2] resize-none mb-4"
              />
              <button onClick={() => {
                if (courseId) {
                  localStorage.setItem(`eductome_course_notes_${courseId}`, noteContent);
                  const coursesWithNotes = JSON.parse(localStorage.getItem('eductome_courses_with_notes') || '[]');
                  if (!coursesWithNotes.includes(courseId)) {
                    coursesWithNotes.push(courseId);
                    localStorage.setItem('eductome_courses_with_notes', JSON.stringify(coursesWithNotes));
                  }
                }
                setIsNotesOpen(false);
                addToast({ type: 'success', title: 'Notes sauvegardées', message: 'Tes notes ont été enregistrées avec succès dans ton profil.' });
              }} className="w-full py-3.5 text-base font-bold text-white bg-[#1976D2] hover:bg-blue-700 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20">
                <Save className="w-5 h-5" /> Sauvegarder mes notes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Report Modal ── */}
      {isReportOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsReportOpen(false)} />
          <div className="relative z-10 w-full max-w-lg bg-white dark:bg-[#161B22] rounded-2xl shadow-2xl overflow-hidden border border-[#E1E4E8] dark:border-[#30363D]">
            <div className="flex items-center justify-between p-4 border-b border-[#E1E4E8] dark:border-[#30363D]">
              <div className="flex items-center gap-2 font-bold text-[#1A1A2E] dark:text-white">
                <Flag className="w-5 h-5 text-red-500" />
                Signaler une erreur
              </div>
              <button onClick={() => setIsReportOpen(false)} className="p-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-[#30363D] rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Une formule s'affiche mal ? Une erreur dans le texte ? Dis-le nous pour qu'on puisse corriger ça rapidement !
              </p>
              <textarea
                value={reportContent}
                onChange={(e) => setReportContent(e.target.value)}
                placeholder="Décris le problème rencontré (ex: Formule illisible dans la section 2...)"
                className="w-full h-32 p-3 rounded-xl border border-[#E1E4E8] dark:border-[#30363D] bg-gray-50 dark:bg-[#0D1117] text-[#1A1A2E] dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
              />
              <div className="mt-4 flex justify-end gap-3">
                <button onClick={() => setIsReportOpen(false)} className="px-4 py-2 text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#30363D] rounded-xl transition-colors">
                  Annuler
                </button>
                <button onClick={() => {
                  const reportData = { courseId, text: reportContent, date: new Date().toISOString() };
                  const reports = JSON.parse(localStorage.getItem('eductome_error_reports') || '[]');
                  reports.push(reportData);
                  localStorage.setItem('eductome_error_reports', JSON.stringify(reports));

                  setReportContent('');
                  setIsReportOpen(false);
                  addToast({ type: 'success', title: 'Signalement envoyé', message: 'Merci de nous aider à améliorer nos cours !' });
                }} className="px-4 py-2 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl transition-colors flex items-center gap-2" disabled={!reportContent.trim()}>
                  <Send className="w-4 h-4" /> Envoyer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isPaymentModalOpen && (
        <SelarPaymentModal
          isOpen={isPaymentModalOpen}
          tomeTitle={paymentItemName}
          price={paymentAmount}
          isChapter={paymentType === 'chapter'}
          isCollection={paymentType === 'collection'}
          onClose={() => setIsPaymentModalOpen(false)}
        />
      )}

      {/* ── Back to Top ── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Remonter en haut"
        className={`fixed bottom-6 right-6 z-30 w-12 h-12 rounded-full flex items-center justify-center bg-[#1A3557] text-white shadow-lg transition-all duration-300 ${scrollProgress > 30 ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </div>
  );
};
