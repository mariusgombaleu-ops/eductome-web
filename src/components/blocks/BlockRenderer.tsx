import { useState } from 'react';
import { ChevronRight, ChevronDown, Activity, AlertTriangle, Star } from 'lucide-react';
import { AnyBlock, TextBlock, MathBlock, EncadreBlock, DialogueBlock, AnalogyBlock, TableBlock, FigureBlock, ExerciceBlock } from '../../types/course';
import { useUser } from '../../contexts/UserContext';
import { XP } from '../../constants/xp';
import { fireConfetti } from '../../utils/confetti';
import katex from 'katex';
import { motion, AnimatePresence } from 'framer-motion';

const KATEX_FALLBACK = (tex: string) =>
  `<code style="font-family:monospace;background:rgba(0,0,0,0.06);padding:2px 6px;border-radius:4px;font-size:0.875em">${tex}</code>`;

export const renderMath = (html: string): string => {
  // Display: $$...$$ (process before $...$ to avoid double-matching)
  html = html.replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => {
    try { return katex.renderToString(tex.trim(), { displayMode: true, throwOnError: false, output: 'html' }); }
    catch { return KATEX_FALLBACK(tex); }
  });
  // Display: \[...\]
  html = html.replace(/\\\[([\s\S]+?)\\\]/g, (_, tex) => {
    try { return katex.renderToString(tex.trim(), { displayMode: true, throwOnError: false, output: 'html' }); }
    catch { return KATEX_FALLBACK(tex); }
  });
  // Inline: \(...\)
  html = html.replace(/\\\((.+?)\\\)/gs, (_, tex) => {
    const trimmed = tex.trim();
    const formula = trimmed.includes('\\frac') ? `\\displaystyle ${trimmed}` : trimmed;
    try { return katex.renderToString(formula, { displayMode: false, throwOnError: false, output: 'html' }); }
    catch { return KATEX_FALLBACK(tex); }
  });
  // Inline: $...$ (single dollar, not inside already-replaced content)
  html = html.replace(/(?<!\$)\$([^$\n]+?)\$(?!\$)/g, (_, tex) => {
    const trimmed = tex.trim();
    const formula = trimmed.includes('\\frac') ? `\\displaystyle ${trimmed}` : trimmed;
    try { return katex.renderToString(formula, { displayMode: false, throwOnError: false, output: 'html' }); }
    catch { return KATEX_FALLBACK(tex); }
  });
  return html;
};

export const parseMarkdown = (text: string | undefined | null) => {
  if (!text) return '';
  let html = renderMath(text);
  html = html.replace(/\n/g, '<br/>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/(^|\s)\*([^*]+)\*(?=\s|$|[.,:;!?])/g, '$1<em>$2</em>');
  return html;
};

const markdownTableToHtml = (md: string, isDark: boolean): string => {
  const lines = md.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  if (lines.length < 2) return `<p>${md}</p>`;

  const headerLine = lines[0];
  const dataLines = lines.slice(2);

  const headerCells = headerLine.split('|').map(c => c.trim()).filter(c => c.length > 0);
  const rows = dataLines.map(l => l.split('|').map(c => c.trim()).filter(c => c.length > 0));

  const thClass = isDark
    ? 'px-3 py-2 text-left text-xs font-bold uppercase tracking-wider text-blue-300 bg-gray-700/80 border-b border-gray-600'
    : 'px-3 py-2 text-left text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border-b border-blue-100';
  const tdClass = isDark
    ? 'px-3 py-2 text-sm text-gray-300 border-b border-gray-700/50'
    : 'px-3 py-2 text-sm text-gray-700 border-b border-gray-100';
  const trEvenClass = isDark ? 'bg-gray-800/30' : 'bg-gray-50/50';

  const headerHtml = `<thead><tr>${headerCells.map(c => `<th class="${thClass}">${renderMath(c)}</th>`).join('')}</tr></thead>`;
  const bodyHtml = `<tbody>${rows.map((row, i) =>
    `<tr class="${i % 2 === 0 ? '' : trEvenClass}">${row.map(c => `<td class="${tdClass}">${renderMath(c)}</td>`).join('')}</tr>`
  ).join('')}</tbody>`;

  return `<table class="w-full border-collapse">${headerHtml}${bodyHtml}</table>`;
};

const InteractiveExercise = ({ block, isDark, courseId, chapterId, sectionId }: { block: ExerciceBlock; isDark: boolean; courseId?: string; chapterId?: string; sectionId?: string }) => {
  const { gainXp, hasActionBeenRewarded } = useUser();
  const [step, setStep] = useState(-1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showXP, setShowXP] = useState(false);
  
  const isMiniEx = (block.id && block.id.includes('micro-ex')) || (block.enonce && block.enonce.toLowerCase().includes("à toi de jouer"));

  let containerBg = isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-sm';
  let headerExpandedBg = isDark ? 'bg-blue-900/30 border-b border-blue-900/30' : 'bg-blue-50 border-b border-blue-100';
  let headerBg = isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50';
  let iconTextClass = isDark ? 'text-blue-400' : 'text-blue-600';
  let titleTextClass = isDark ? 'text-blue-300' : 'text-blue-700';

  if (isMiniEx) {
    containerBg = isDark ? 'bg-indigo-900/20 border-indigo-800/50' : 'bg-indigo-50/50 border-indigo-200 shadow-sm';
    headerExpandedBg = isDark ? 'bg-indigo-900/40 border-b border-indigo-800/50' : 'bg-indigo-100 border-b border-indigo-200';
    headerBg = isDark ? 'bg-indigo-900/20 hover:bg-indigo-900/30' : 'bg-indigo-50 hover:bg-indigo-100';
    iconTextClass = isDark ? 'text-indigo-400' : 'text-indigo-600';
    titleTextClass = isDark ? 'text-indigo-300' : 'text-indigo-700';
  }

  return (
    <div className={`my-5 rounded-2xl border overflow-hidden transition-all duration-300 ${containerBg}`}>
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`px-4 py-3 flex items-center justify-between cursor-pointer select-none transition-colors ${
          isExpanded ? headerExpandedBg : headerBg
        }`}
      >
        <div className="flex items-center gap-2">
          <Activity className={`w-4 h-4 shrink-0 ${iconTextClass}`} />
          <span className={`text-sm font-bold ${titleTextClass}`}>
            {isMiniEx ? "À toi de jouer !" : `Entraînement interactif ${block.niveau ? '(' + block.niveau + ')' : ''}`}
          </span>
          {isMiniEx && (
            <span className="ml-2 px-2 py-0.5 text-[10px] font-bold uppercase rounded-full bg-yellow-100 text-yellow-800 border border-yellow-200">
              ⚡ 2 min
            </span>
          )}
        </div>
        <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
          <ChevronDown className={`w-4 h-4 ${iconTextClass}`} />
        </div>
      </div>

      <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="min-h-0 overflow-hidden">
        <div className={`px-4 pt-4 pb-3 text-sm leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-800'}`}
          dangerouslySetInnerHTML={{ __html: renderMath(block.enonce) }} />

        <div className="px-4 pb-3 space-y-2">
          {block.etapes.map((s, i) => {
            let stepName = `Étape ${i + 1}`;
            let stepContent = s;
            if (typeof s === 'object' && s !== null) {
              // Retro-compatibility with the old format { name, contenu } which was created by our regex wrapper unwrap
              stepName = (s as any).name || stepName;
              stepContent = (s as any).contenu || stepContent;
            }

            return (
              <div key={i} className={`transition-all duration-400 overflow-hidden ${step >= i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <div className={`p-3 rounded-xl ${isDark ? 'bg-gray-700/60' : 'bg-gray-50 border border-gray-100'}`}>
                  <span className={`text-xs font-bold uppercase tracking-wide mb-1 block ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{stepName}</span>
                  <div className={`text-sm ${isDark ? 'text-gray-200' : 'text-gray-700'}`} dangerouslySetInnerHTML={{ __html: parseMarkdown(stepContent as string) }} />
                </div>
              </div>
            );
          })}

          {step === block.etapes.length - 1 && (
            <div className={`mt-3 p-3 rounded-xl border-2 ${isDark ? 'bg-green-900/20 border-green-800 text-green-400' : 'bg-green-50 border-green-300 text-green-800'}`}>
              <span className="text-xs font-bold uppercase tracking-wide block mb-1">✓ Résultat</span>
              <div className="text-base font-bold" dangerouslySetInnerHTML={{ __html: parseMarkdown(block.reponse) }} />
            </div>
          )}
        </div>

        <div className={`px-4 py-3 flex items-center gap-3 border-t relative ${isDark ? 'border-gray-700' : 'border-gray-100'}`}>
          <AnimatePresence>
            {showXP && (
              <motion.div
                initial={{ opacity: 0, y: 0, scale: 0.5 }}
                animate={{ opacity: 1, y: -40, scale: 1.2 }}
                exit={{ opacity: 0, y: -60 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-50 pointer-events-none font-black text-xl text-[#D81B60] drop-shadow-md"
              >
                +{XP.EXERCISE} XP
              </motion.div>
            )}
          </AnimatePresence>

          {step < block.etapes.length - 1 ? (
            <button
              onClick={() => {
                setStep(p => p + 1);
                // Si on arrive à la fin ou si on passe de -1 à 0
                if (courseId && chapterId && sectionId && block.id) {
                   const actionId = `exercise_${courseId}_${chapterId}_${sectionId}_${block.id}`;
                   if (!hasActionBeenRewarded(actionId)) {
                     // On donne l'XP soit quand ils commencent (s'ils cliquent sur voir correction), soit à la fin.
                     // Ici, on donne l'XP dès la première étape pour encourager l'interaction.
                     if (step === -1) {
                       fireConfetti();
                       gainXp(XP.EXERCISE, 'Entraînement interactif complété', actionId);
                       setShowXP(true);
                       setTimeout(() => setShowXP(false), 2000);
                     }
                   }
                }
              }}
              className={`flex-1 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md ${isDark ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
              {step === -1 ? '▶ Voir la correction' : 'Étape suivante'} <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setStep(-1)}
              className={`text-sm px-4 py-2 rounded-xl transition-all duration-300 hover:scale-[1.02] ${isDark ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              ↺ Recommencer
            </button>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export const BlockRenderer = ({ block, isDark, courseId, chapterId, sectionId }: { block: AnyBlock; isDark: boolean; courseId?: string; chapterId?: string; sectionId?: string }) => {
  switch (block.type) {
    case 'text': {
      const b = block as TextBlock;
      const isAccroche = b.id && b.id.includes('accroche');
      const isTransition = b.id && b.id.includes('transition');

      if (isAccroche) {
        return (
          <div key={b.id || Math.random()} className={`mt-8 mb-6 p-5 rounded-2xl shadow-sm border ${isDark ? 'bg-gradient-to-br from-[#D81B60]/10 to-transparent border-[#D81B60]/30' : 'bg-gradient-to-br from-pink-50 to-white border-pink-100'}`}>
            <p className={`font-poppins text-[17px] font-medium leading-relaxed ${isDark ? 'text-pink-100' : 'text-[#880E4F]'}`} dangerouslySetInnerHTML={{ __html: parseMarkdown(b.contenu) }} />
          </div>
        );
      } else if (isTransition) {
        return (
          <div key={b.id || Math.random()} className={`mt-6 mb-10 p-5 rounded-r-xl border-l-4 shadow-sm ${isDark ? 'bg-[#1976D2]/10 border-l-[#1976D2]' : 'bg-[#1976D2]/5 border-l-[#1976D2]'}`}>
            <p className={`font-poppins italic leading-relaxed ${isDark ? 'text-blue-100' : 'text-[#1A3557]'}`} dangerouslySetInnerHTML={{ __html: parseMarkdown(b.contenu) }} />
          </div>
        );
      }

      return (
        <div key={b.id || Math.random()}>
          {b.titre && (
            <div className={`px-4 py-2 mb-3 border-l-4 font-bold rounded-r-lg ${isDark ? 'bg-gray-800 border-blue-500 text-blue-300' : 'bg-blue-50 border-blue-500 text-blue-800'}`}>
              {b.titre}
            </div>
          )}
          <div className={`my-4 font-poppins leading-relaxed text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`} dangerouslySetInnerHTML={{ __html: parseMarkdown(b.contenu) }} />
        </div>
      );
    }

    case 'math': {
      const b = block as MathBlock;
      const formule = b.formule || (b as any).contenu;
      let rendered: string;
      try {
        rendered = katex.renderToString(formule, { displayMode: true, throwOnError: false, output: 'html' });
      } catch {
        rendered = KATEX_FALLBACK(formule);
      }
      return (
        <div className={`my-5 px-4 py-4 overflow-x-auto text-center rounded-2xl ${isDark ? 'bg-gray-800/80 border border-gray-700' : 'bg-slate-50 border border-slate-200'}`}>
          <span dangerouslySetInnerHTML={{ __html: rendered }} />
        </div>
      );
    }

    case 'dialogue': {
      const b = block as DialogueBlock;
      const pfBg   = isDark ? '#2D3748' : '#F0F0F0';
      const pfText = isDark ? '#E2E8F0' : '#1F2937';
      const gfBg   = isDark ? '#1A2F4A' : '#EBF3FF';
      const gfText = isDark ? '#93C5FD' : '#1A3557';
      return (
        <div className="my-6 space-y-4 font-poppins">
          {b.pf && (
            <div className="flex items-end gap-2 max-w-[90%]">
              <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm bg-gray-100 dark:bg-gray-700">👦</div>
              <div
                className="flex-1 rounded-[20px] rounded-bl-sm px-4 py-3 text-[14px] leading-relaxed shadow-sm"
                style={{ backgroundColor: pfBg, color: pfText }}
                dangerouslySetInnerHTML={{ __html: parseMarkdown(b.pf) }}
              />
            </div>
          )}
          {b.gf && (
            <div className="flex items-end gap-2 max-w-[90%] ml-auto flex-row-reverse">
              <div className="shrink-0 w-8 h-8 rounded-full shadow-sm overflow-hidden bg-blue-100 dark:bg-blue-900/50">
                <img src="/grand-frere.jpeg" alt="Le Gombaleu" className="w-full h-full object-cover" />
              </div>
              <div
                className="flex-1 rounded-[20px] rounded-br-sm px-4 py-3 text-[14px] leading-relaxed shadow-sm"
                style={{ backgroundColor: gfBg, color: gfText }}
                dangerouslySetInnerHTML={{ __html: parseMarkdown(b.gf) }}
              />
            </div>
          )}
          {b.contenu && !b.pf && !b.gf && (
            <div className={`px-4 py-3 text-sm italic leading-loose rounded-[20px] ${isDark ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-50 text-gray-700'}`}
              dangerouslySetInnerHTML={{ __html: parseMarkdown(b.contenu) }} />
          )}
        </div>
      );
    }

    case 'analogy': {
      const b = block as AnalogyBlock;
      return (
        <div className={`my-5 rounded-2xl overflow-hidden border ${isDark ? 'bg-orange-900/10 border-orange-800/30' : 'bg-[#FDF6EC] border-[#E67E22]'}`}>
          <div className={`flex items-center gap-2 px-4 py-2.5 ${isDark ? 'bg-orange-900/30 border-b border-orange-800/30' : 'bg-orange-100 border-b border-orange-200'}`}>
            <span className="text-base">🌍</span>
            <span className={`text-sm font-bold ${isDark ? 'text-orange-300' : 'text-[#E67E22]'}`}>{b.titre}</span>
          </div>
          <div className={`px-4 py-4 text-[15px] leading-loose ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            dangerouslySetInnerHTML={{ __html: parseMarkdown(b.contenu) }} />
          {b.conceptMath && (
            <div className={`mx-4 mb-4 px-4 py-3 rounded-xl border-l-4 ${isDark ? 'bg-blue-900/20 border-l-blue-500 text-blue-200' : 'bg-blue-50 border-l-blue-500 text-blue-900'}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm">🧮</span>
                <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>Traduction mathématique</span>
              </div>
              <div className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: parseMarkdown(b.conceptMath) }} />
            </div>
          )}
        </div>
      );
    }

    case 'tip': {
      const b = block as EncadreBlock;
      const content = Array.isArray(b.contenu) ? b.contenu.join('<br/>') : b.contenu;
      
      const title = b.titre || "Conseil du Grand Frère";
      const isMotivation = title.toLowerCase().includes("grand frère te dit") || (b.id && b.id.includes('motivation'));
      
      let containerClass = `my-5 rounded-2xl overflow-hidden shadow-sm border ${isDark ? 'bg-emerald-900/10 border-emerald-800/30' : 'bg-gradient-to-br from-[#D5F5E3]/80 to-emerald-50 border-[#1E8449]'}`;
      let headerClass = `flex items-center gap-2.5 px-4 py-3 ${isDark ? 'bg-emerald-900/30 border-b border-emerald-800/30' : 'bg-emerald-100/50 border-b border-emerald-200'}`;
      let textTitleClass = `text-sm font-bold tracking-wide ${isDark ? 'text-emerald-300' : 'text-[#1E8449]'}`;
      let icon = <Star className={`w-5 h-5 drop-shadow-sm ${isDark ? 'text-emerald-400' : 'text-[#1E8449]'}`} />;

      if (isMotivation) {
        containerClass = `my-5 rounded-2xl overflow-hidden shadow-md border-2 border-[#D81B60] ${isDark ? 'bg-pink-950/20' : 'bg-pink-50/50'}`;
        headerClass = `flex items-center gap-2.5 px-4 py-3 bg-[#D81B60] text-white`;
        textTitleClass = `text-sm font-bold tracking-wide text-white`;
        icon = <span className="text-xl drop-shadow-md">💪</span>;
      }

      return (
        <div className={containerClass}>
          <div className={headerClass}>
            {icon}
            <span className={textTitleClass}>{title}</span>
          </div>
          <div className={`px-4 py-4 text-[15px] leading-loose ${isMotivation ? (isDark ? 'text-pink-50' : 'text-pink-950') : (isDark ? 'text-gray-300' : 'text-gray-800')}`}
            dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }} />
        </div>
      );
    }

    case 'warning': {
      const b = block as EncadreBlock;
      const rawContent = Array.isArray(b.contenu) ? b.contenu.join('<br/>') : b.contenu;
      
      // Auto-extract title from content if starts with ⚠️ PIÈGE
      let warningTitle = b.titre || 'Attention';
      let warningBody = rawContent;
      const titleMatch = rawContent.match(/^⚠️\s*(PIÈGE[^\n:]+(?::[^\n]+)?)\n\n?/i);
      if (titleMatch && !b.titre) {
        warningTitle = titleMatch[1].trim();
        warningBody = rawContent.slice(titleMatch[0].length);
      }
      
      // Convert bullet points to styled list
      warningBody = warningBody.replace(/\n?• ([^\n]+)/g, '<div class="flex items-start gap-2 mt-2"><span class="shrink-0 mt-0.5 text-red-500 font-bold">▸</span><span>$1</span></div>');
      
      return (
        <div className={`my-5 rounded-2xl overflow-hidden shadow-sm border-l-4 ${isDark ? 'bg-red-900/10 border-l-red-500 border border-red-900/20' : 'bg-gradient-to-br from-[#FDEDEC]/90 to-red-50/50 border-l-[#C0392B] border border-red-100'}`}>
          <div className={`px-4 pt-3.5 pb-1 flex items-center gap-2.5`}>
            <AlertTriangle className={`w-5 h-5 shrink-0 drop-shadow-sm ${isDark ? 'text-red-400' : 'text-[#C0392B]'}`} />
            <span className={`text-sm font-bold tracking-wide ${isDark ? 'text-red-300' : 'text-[#C0392B]'}`}>{warningTitle}</span>
          </div>
          <div className={`px-4 py-3 text-[15px] leading-loose ${isDark ? 'text-gray-300' : 'text-gray-800'}`}
            dangerouslySetInnerHTML={{ __html: parseMarkdown(warningBody) }} />
        </div>
      );
    }

    case 'rule': {
      const b = block as EncadreBlock;
      const content = Array.isArray(b.contenu) ? b.contenu.join('<br/>') : b.contenu;
      return (
        <div className={`my-6 rounded-xl overflow-hidden shadow-sm border ${isDark ? 'bg-[#0A1F13] border-[#1B5E20]' : 'bg-[#E8F5E9] border-[#2E7D32]/30'}`}>
          <div className="px-4 py-2.5 flex items-center gap-2.5 bg-[#2E7D32]">
            <span className="text-base">📌</span>
            <span className="text-sm font-bold tracking-wider uppercase text-white">{b.titre || "Règle d'Or"}</span>
          </div>
          <div className={`px-5 py-4 text-[15px] leading-loose ${isDark ? 'text-gray-300' : 'text-gray-800'}`}
            dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }} />
        </div>
      );
    }

    case 'recap': {
      const b = block as EncadreBlock;
      const isTable = (typeof b.contenu === 'string') && (b.contenu.includes('|---|') || b.contenu.includes('| --- |') || b.contenu.includes('|---'));
      const content = Array.isArray(b.contenu) ? b.contenu.join('<br/>') : b.contenu;

      return (
        <div className={`my-5 rounded-2xl overflow-hidden border shadow-sm ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gradient-to-br from-[#FDEBD0]/80 to-orange-50 border-[#E67E22]'}`}>
          {b.titre && (
            <div className={`flex items-center gap-2.5 px-4 py-3 border-b ${isDark ? 'bg-gray-700/50 border-gray-700' : 'bg-orange-100/60 border-orange-200'}`}>
              <span className="text-lg drop-shadow-sm">🚀</span>
              <span className={`text-sm font-bold tracking-wide ${isDark ? 'text-gray-200' : 'text-[#E67E22]'}`}>{b.titre}</span>
            </div>
          )}
          <div className="overflow-x-auto">
            {isTable
              ? <div dangerouslySetInnerHTML={{ __html: markdownTableToHtml(content, isDark) }} />
              : <div className={`px-4 py-4 text-sm leading-loose ${isDark ? 'text-gray-300' : 'text-gray-800'}`}
                  dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }} />
            }
          </div>
        </div>
      );
    }

    case 'table': {
      const b = block as TableBlock;
      
      const thClass = isDark
        ? 'px-3 py-2 text-left text-xs font-bold uppercase tracking-wider text-blue-300 bg-gray-700/80 border-b border-gray-600'
        : 'px-3 py-2 text-left text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border-b border-blue-100';
      const tdClass = isDark
        ? 'px-3 py-2 text-sm text-gray-300 border-b border-gray-700/50'
        : 'px-3 py-2 text-sm text-gray-700 border-b border-gray-100';
      const trEvenClass = isDark ? 'bg-gray-800/30' : 'bg-gray-50/50';

      return (
        <div className={`my-5 rounded-2xl overflow-hidden border ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white shadow-sm'}`}>
          {b.titre && (
            <div className={`px-4 py-3 font-bold border-b ${isDark ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 text-gray-800 border-gray-200'}`}>
              {b.titre}
            </div>
          )}
          <div className="overflow-x-auto">
            {b.headers && b.rows ? (
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    {b.headers.map((h, i) => <th key={i} className={thClass} dangerouslySetInnerHTML={{ __html: renderMath(h) }} />)}
                  </tr>
                </thead>
                <tbody>
                  {b.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : trEvenClass}>
                      {row.map((cell, j) => <td key={j} className={tdClass} dangerouslySetInnerHTML={{ __html: renderMath(cell) }} />)}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="min-w-[600px] w-full" dangerouslySetInnerHTML={{ __html: markdownTableToHtml(b.contenu || '', isDark) }} />
            )}
          </div>
        </div>
      );
    }

    case 'figure': {
      const b = block as FigureBlock;
      return (
        <div className={`my-5 rounded-2xl overflow-hidden border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-sm'}`}>
          <img src={b.src} alt={b.alt} className="w-full max-h-[60vh] object-contain" />
          {b.legende && (
            <div className={`px-4 py-2 text-center text-xs italic ${isDark ? 'text-gray-400 bg-gray-900/50' : 'text-gray-500 bg-gray-50'}`}>
              {b.legende}
            </div>
          )}
        </div>
      );
    }

    case 'exercise': {
      return <InteractiveExercise block={block as ExerciceBlock} isDark={isDark} courseId={courseId} chapterId={chapterId} sectionId={sectionId} />;
    }

    case 'quiz':
      return null;

    default:
      return null;
  }
};
