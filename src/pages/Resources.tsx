import { useState, useEffect, useRef } from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Download, Eye, EyeOff, BookOpen, PenTool, BookMarked, ArrowRight, CheckCircle } from 'lucide-react';
import { tomesRegistry } from '../data/exercices-registry';
import { exercicesT1, Exercise } from '../data/exercices-t1';
import { exercicesT2 } from '../data/exercices-t2';
import { exercicesT3 } from '../data/exercices-t3';
import { exercicesT4 } from '../data/exercices-t4';
import { exercicesT5 } from '../data/exercices-t5';
import { exercicesT6 } from '../data/exercices-t6';
import { exercicesT7 } from '../data/exercices-t7';
import { exercicesT8 } from '../data/exercices-t8';
import { exercicesT9 } from '../data/exercices-t9';
import { exercicesT10 } from '../data/exercices-t10';
import { exercicesT11 } from '../data/exercices-t11';
import { SEO } from '../components/SEO';

const allExercises: Record<number, Exercise[]> = {
  1: exercicesT1, 2: exercicesT2, 3: exercicesT3, 4: exercicesT4, 
  5: exercicesT5, 6: exercicesT6, 7: exercicesT7, 8: exercicesT8, 
  9: exercicesT9, 10: exercicesT10, 11: exercicesT11
};

export function Resources() {
  const [activeTab, setActiveTab] = useState<'fiches' | 'exercices' | 'extraits'>('exercices');
  const [activeTomeId, setActiveTomeId] = useState<number | null>(null);
  const [showCorrection, setShowCorrection] = useState<Record<string, boolean>>({});
  const [completedExercises, setCompletedExercises] = useState<Record<string, boolean>>({});
  const exercisesContainerRef = useRef<HTMLDivElement>(null);

  const toggleCompletion = (exerciseId: string) => {
    setCompletedExercises(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  const toggleCorrection = (exerciseId: string) => {
    setShowCorrection(prev => {
      const newState = { ...prev, [exerciseId]: !prev[exerciseId] };
      if (newState[exerciseId]) {
        setTimeout(() => {
          if ((window as any).MathJax) {
            (window as any).MathJax.typesetPromise([exercisesContainerRef.current]);
          }
        }, 50);
      }
      return newState;
    });
  };

  useEffect(() => {
    if (activeTab === 'exercices' && activeTomeId) {
      setTimeout(() => {
        if ((window as any).MathJax) {
          (window as any).MathJax.typesetPromise([exercisesContainerRef.current]);
        }
      }, 50);
    }
  }, [activeTab, activeTomeId]);

  const handleTomeClick = (id: number) => {
    if (activeTomeId === id) {
      setActiveTomeId(null);
    } else {
      setActiveTomeId(id);
      setTimeout(() => {
        exercisesContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const getLevelStyles = (level: string) => {
    switch(level) {
      case 'BASE': return { badge: 'bg-green-100 text-green-800', header: 'bg-green-800', body: 'bg-green-50', step: 'bg-green-800' };
      case 'MOYEN': return { badge: 'bg-orange-100 text-orange-800', header: 'bg-orange-700', body: 'bg-orange-50', step: 'bg-orange-700' };
      case 'BAC': return { badge: 'bg-red-100 text-red-800', header: 'bg-red-800', body: 'bg-red-50', step: 'bg-red-800' };
      default: return { badge: 'bg-gray-100 text-gray-800', header: 'bg-gray-800', body: 'bg-gray-50', step: 'bg-gray-800' };
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <SEO title="Ressources Gratuites" description="Télécharge gratuitement nos fiches méthodes et extraits de manuels Eductome." />
      
      {/* Hero Banner Premium */}
      <div className="relative pt-24 pb-20 px-4 text-center overflow-hidden bg-eductome-marine">
        <div className="absolute top-0 right-0 w-80 h-80 bg-eductome-magenta/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-eductome-sky/20 blur-[80px] rounded-full"></div>
        
        <ScrollReveal>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
            Ressources <span className="text-eductome-magenta">Gratuites</span>
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg md:text-xl font-light relative z-10">
            Fiches méthode et exercices corrigés pas-à-pas — tout le nécessaire pour t'entraîner sérieusement, sans débourser un franc.
          </p>
        </ScrollReveal>
      </div>

      {/* Tabs Premium */}
      <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20 mb-12">
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
          <button 
            onClick={() => setActiveTab('exercices')}
            className={`flex-1 flex justify-center items-center px-4 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'exercices' ? 'bg-eductome-marine text-white shadow-md transform scale-[1.02]' : 'text-gray-500 hover:bg-gray-50 hover:text-eductome-marine'}`}
          >
            <PenTool className={`w-5 h-5 mr-2 ${activeTab === 'exercices' ? 'animate-bounce' : ''}`} /> Exercices Corrigés
          </button>
          <button 
            onClick={() => setActiveTab('fiches')}
            className={`flex-1 flex justify-center items-center px-4 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'fiches' ? 'bg-eductome-marine text-white shadow-md transform scale-[1.02]' : 'text-gray-500 hover:bg-gray-50 hover:text-eductome-marine'}`}
          >
            <BookOpen className="w-5 h-5 mr-2" /> Fiches Méthode
          </button>
          <button 
            onClick={() => setActiveTab('extraits')}
            className={`flex-1 flex justify-center items-center px-4 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'extraits' ? 'bg-eductome-marine text-white shadow-md transform scale-[1.02]' : 'text-gray-500 hover:bg-gray-50 hover:text-eductome-marine'}`}
          >
            <BookMarked className="w-5 h-5 mr-2" /> Extraits
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        
        {/* TAB 1: Fiches Méthode */}
        {activeTab === 'fiches' && (
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tomesRegistry.map(tome => (
              <div key={tome.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl text-white shadow-inner" style={{ backgroundColor: tome.theme }}>
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-2 py-1 rounded-full bg-gray-100 text-gray-700">Tome {tome.id}</span>
                </div>
                <h3 className="font-bold text-[#1A3557] text-lg mb-1">Fiche Méthode — {tome.title}</h3>
                <p className="text-sm text-gray-500 mb-6 flex-grow">Terminale C & D · 3 cas BAC + 5 pièges</p>
                <a 
                  href={`/fiches/${tome.pdfFile}`}
                  download={tome.pdfFile}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-[#1A3557] font-semibold py-2 rounded-lg border border-gray-200 transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" /> Télécharger
                </a>
              </div>
            ))}
          </ScrollReveal>
        )}

        {/* TAB 2: Exercices Corrigés */}
        {activeTab === 'exercices' && (
          <ScrollReveal>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Sélectionne un tome pour t'entraîner. Les exercices sont progressifs et corrigés étape par étape.
            </p>
            
            {/* Grid of Tomes */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
              {tomesRegistry.map(tome => {
                const isActive = activeTomeId === tome.id;
                return (
                  <button
                    key={tome.id}
                    onClick={() => handleTomeClick(tome.id)}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 ${isActive ? 'border-eductome-magenta bg-eductome-magenta/5 shadow-md transform scale-105' : 'border-transparent bg-white shadow-sm hover:border-gray-200 hover:shadow-md'}`}
                  >
                    <span className={`text-xs font-bold mb-2 ${isActive ? 'text-eductome-magenta' : 'text-gray-500'}`}>TOME {tome.id}</span>
                    <span className={`text-sm font-semibold text-center ${isActive ? 'text-eductome-magenta' : 'text-eductome-marine'}`}>{tome.title}</span>
                  </button>
                )
              })}
            </div>

            {/* Exercises Panel */}
            {activeTomeId !== null && (
              <div ref={exercisesContainerRef} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mt-8 scroll-mt-24">
                
                {tomesRegistry.find(t => t.id === activeTomeId)?.hasExercises ? (
                  <div>
                    {/* Header Panel */}
                    <div className="bg-[#1A3557] text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold font-playfair mb-2">Exercices Corrigés — {tomesRegistry.find(t => t.id === activeTomeId)?.title}</h2>
                        <div className="inline-flex items-center bg-[#FFF3E0] text-[#E65100] px-3 py-1 rounded-md text-xs font-semibold">
                          📖 Contenu de lecture — Cache la correction, fais l'exercice, puis vérifie. Le tome complet est sur Selar.
                        </div>
                      </div>
                    </div>

                    {/* Exercises List */}
                    <div className="p-4 md:p-8 space-y-12">
                      {(allExercises[activeTomeId] || []).map((ex: Exercise, index: number) => {
                        const styles = getLevelStyles(ex.level);
                        const isCorrectionVisible = showCorrection[ex.id] || false;
                        const isCompleted = completedExercises[ex.id] || false;

                        return (
                          <div key={ex.id} className={`border rounded-xl overflow-hidden shadow-sm transition-all ${isCompleted ? 'border-green-400 bg-green-50/30' : 'border-gray-200 bg-white'}`}>
                            {/* Énoncé */}
                            <div className="p-6">
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-lg text-[#1A3557] flex items-center">
                                  {isCompleted && <CheckCircle className="w-5 h-5 text-green-500 mr-2" />}
                                  EXERCICE {index + 1}
                                </h3>
                                <div className="flex items-center space-x-3">
                                  <span className={`text-xs font-bold px-2 py-1 rounded-md ${styles.badge}`}>{ex.level}</span>
                                  <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-md">{ex.points} pts</span>
                                </div>
                              </div>
                              
                              {ex.context && <p className="text-sm text-gray-500 italic mb-4">{ex.context}</p>}
                              
                              <div 
                                className="text-gray-800 text-base md:text-lg leading-relaxed math-content"
                                dangerouslySetInnerHTML={{ __html: ex.statement }}
                              />

                              <div className="mt-6 flex flex-wrap items-center gap-3">
                                <button 
                                  onClick={() => toggleCorrection(ex.id)}
                                  className={`inline-flex items-center font-semibold text-sm px-4 py-2 rounded-lg transition-colors ${isCorrectionVisible ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : 'bg-[#1A3557] text-white hover:bg-[#1A3557]/90'}`}
                                >
                                  {isCorrectionVisible ? <><EyeOff className="w-4 h-4 mr-2" /> Masquer la correction</> : <><Eye className="w-4 h-4 mr-2" /> Voir la correction</>}
                                </button>
                                <button
                                  onClick={() => toggleCompletion(ex.id)}
                                  className={`inline-flex items-center font-semibold text-sm px-4 py-2 rounded-lg transition-colors border-2 ${isCompleted ? 'bg-green-50 border-green-500 text-green-600' : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'}`}
                                >
                                  <CheckCircle className="w-4 h-4 mr-2" /> {isCompleted ? 'Terminé' : 'Marquer comme fait'}
                                </button>
                              </div>
                            </div>

                            {/* Correction Déroulante */}
                            {isCorrectionVisible && (
                              <div className={`border-t border-gray-200 ${styles.body} animate-fade-in`}>
                                <div className={`${styles.header} text-white px-6 py-3 font-semibold flex items-center`}>
                                  <div className="w-2 h-2 rounded-full bg-white/50 mr-2"></div> Correction Détaillée
                                </div>
                                <div className="p-6 space-y-6">
                                  {ex.steps.map((step, sIdx) => (
                                    <div key={sIdx} className="flex">
                                      <div className="flex-shrink-0 mr-4">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${styles.step}`}>
                                          {sIdx + 1}
                                        </div>
                                      </div>
                                      <div className="flex-grow pt-1">
                                        <h4 className="font-bold text-sm text-gray-700 mb-2">{step.title}</h4>
                                        <div 
                                          className="text-gray-800 math-content"
                                          dangerouslySetInnerHTML={{ __html: step.content }}
                                        />
                                      </div>
                                    </div>
                                  ))}

                                  {/* Note Grand Frère */}
                                  <div className="mt-6 border-l-4 border-[#D81B60] bg-white p-4 rounded-r-lg shadow-sm">
                                    <h4 className="text-xs font-bold text-[#D81B60] uppercase mb-1 flex items-center">
                                      <ArrowRight className="w-3 h-3 mr-1" /> Note du Grand Frère
                                    </h4>
                                    <p className="text-gray-700 italic text-sm">{ex.grandFrereNote}</p>
                                  </div>
                                </div>
                              </div>
                            )}
                            
                            {/* CTA Doux à la fin de l'exercice BAC */}
                            {index === 2 && isCorrectionVisible && (
                              <div className="p-5 bg-gray-50 border-t border-gray-200 text-center animate-fade-in">
                                <p className="text-sm text-gray-600 mb-1">
                                  🎉 Tu as compris ce problème type BAC ? 
                                </p>
                                <p className="text-xs text-gray-500">
                                  Pour t'entraîner sur d'autres sujets complets de ce chapitre, retrouve-nous sur le <a href="https://selar.com/m/eductome" target="_blank" rel="noopener noreferrer" className="text-[#D81B60] font-semibold hover:underline">Tome intégral</a>.
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="p-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-4">
                      <PenTool className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A3557] mb-2">Bientôt disponible</h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">Les exercices corrigés de ce tome sont en cours de rédaction par notre équipe pédagogique.</p>
                    <a href="https://wa.me/2250715811398" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md">
                      Préviens-moi sur WhatsApp
                    </a>
                  </div>
                )}

              </div>
            )}
          </ScrollReveal>
        )}

        {/* TAB 3: Extraits de Tomes */}
        {activeTab === 'extraits' && (
          <ScrollReveal className="flex items-center justify-center py-20">
            <div className="text-center max-w-md">
              <span className="text-6xl mb-6 block">📖</span>
              <h2 className="text-2xl font-bold text-[#1A3557] mb-4">Extraits de Tomes</h2>
              <p className="text-gray-600 mb-8">
                On prépare des extraits des premiers chapitres de chaque tome. Reviens bientôt ou suis-nous sur WhatsApp pour être informé.
              </p>
              <a href="https://wa.me/2250715811398" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md">
                Nous suivre sur WhatsApp
              </a>
            </div>
          </ScrollReveal>
        )}

        {/* Soft CTA Bottom */}
        <ScrollReveal className="mt-12 border-t border-gray-200 pt-16 pb-8 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-playfair font-bold text-[#1A3557] mb-4">Envie d'aller plus loin ?</h2>
          <p className="text-gray-600 mb-8">
            Si ces ressources gratuites t'ont aidé, nos manuels complets te donneront toutes les clés pour exceller. Retrouve l'intégralité du programme avec encore plus d'exercices corrigés pas-à-pas et d'astuces.
          </p>
          <a 
            href="https://selar.com/m/eductome" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-white text-[#D81B60] border-2 border-[#D81B60] hover:bg-[#D81B60] hover:text-white font-bold py-3 px-8 rounded-full transition-colors shadow-sm"
          >
            Découvrir les Tomes Complets sur Selar
          </a>
        </ScrollReveal>

      </div>
    </div>
  );
}
