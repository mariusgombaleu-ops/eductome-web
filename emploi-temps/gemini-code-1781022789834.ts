import React, { useState } from 'react';
import { Award, Frown, Check, ArrowRight } from 'lucide-react';
import { AssessmentEvent } from './types';

interface PostModalProps {
  assessment: AssessmentEvent;
  onResolve: (data: {
    status: 'SUCCESS' | 'FAILED';
    reviewComment?: string;
    xpEarned: number;
  }) => void;
}

export const PostAssessmentModal: React.FC<PostModalProps> = ({ assessment, onResolve }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [combatOutcome, setCombatOutcome] = useState<'WIN' | 'LOSE' | null>(null);
  const [selectedConcept, setSelectedConcept] = useState('');

  const handleOutcomeSelection = (outcome: 'WIN' | 'LOSE') => {
    setCombatOutcome(outcome);
    if (outcome === 'WIN') {
      // Succès immédiat : Attribution des XP
      onResolve({ status: 'SUCCESS', xpEarned: 100 });
    } else {
      // Échec ou blocage : Étape suivante d'identification
      setStep(2);
    }
  };

  const handleReviewSubmit = () => {
    onResolve({
      status: 'FAILED',
      reviewComment: selectedConcept,
      xpEarned: 0
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl text-center">
        
        {step === 1 ? (
          <div className="space-y-5 animate-fade-in">
            <div className="w-14 h-14 bg-gradient-to-tr from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-white mx-auto shadow-xl shadow-orange-500/10">
              <Award size={28} />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Débriefing Combat</span>
              <h3 className="text-lg font-bold text-white mt-1">Comment s'est passé ton devoir ?</h3>
              <p className="text-xs text-slate-400 mt-1 font-medium bg-slate-900 py-1.5 px-3 rounded-lg inline-block">
                Matière : {assessment.subjectName} ({assessment.title})
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-2">
              <button
                onClick={() => handleOutcomeSelection('WIN')}
                className="w-full py-4 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-900/20 text-sm hover:opacity-95 transition-all"
              >
                🎉 J'ai gâté le coin ! (+100 XP)
              </button>
              <button
                onClick={() => handleOutcomeSelection('LOSE')}
                className="w-full py-4 px-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold rounded-xl text-sm transition-all"
              >
                😕 C'était chaud, j'ai buté sur des notions
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5 animate-slide-up">
            <div className="w-14 h-14 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mx-auto">
              <Frown size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Où se situe le problème ?</h3>
              <p className="text-xs text-slate-400 mt-1">
                Dis-moi précisément la notion qui t'a bloqué pour que le Grand Frère t'oriente vers la bonne méthode de révision.
              </p>
            </div>

            <div className="space-y-2 text-left">
              {[
                "Le manque de compréhension globale du cours",
                "Les calculs de limites complexes / Formes indéterminées",
                "L'application des formules dérivées",
                "La gestion du temps le jour de l'épreuve"
              ].map((concept) => (
                <button
                  key={concept}
                  onClick={() => setSelectedConcept(concept)}
                  className={`w-full text-left p-3 text-xs font-semibold rounded-xl border transition-all ${
                    selectedConcept === concept
                      ? 'bg-blue-600/10 border-blue-500 text-blue-400'
                      : 'bg-slate-900/50 border-slate-800/80 text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  {concept}
                </button>
              ))}
            </div>

            <button
              onClick={handleReviewSubmit}
              disabled={!selectedConcept}
              className="w-full bg-blue-600 disabled:opacity-40 text-white font-bold py-3.5 rounded-xl text-xs flex justify-center items-center gap-1.5 shadow-lg shadow-blue-600/10 transition-all"
            >
              Ouvrir le Cimetière des Erreurs à Éviter <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};