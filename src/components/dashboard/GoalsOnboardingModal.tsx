import { useState, useEffect } from 'react';
import { X, Target, ChevronRight, ChevronLeft, Award, BookOpen, LineChart, CheckCircle2 } from 'lucide-react';
import { useUser } from '../../contexts/UserContext';
import { getSubjectsForLevel } from '../../constants/coefficients';
import { useAuth } from '../../contexts/AuthContext';

interface GoalsOnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GoalsOnboardingModal({ isOpen, onClose }: GoalsOnboardingModalProps) {
  const { pseudo, levelString, updateGoals, goals } = useUser();
  const { currentUser } = useAuth();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [bacPoints, setBacPoints] = useState<string>('');
  const [generalAverage, setGeneralAverage] = useState<string>('');
  const [trimesterTargets, setTrimesterTargets] = useState({ t1: '', t2: '', t3: '' });
  const [subjectTargets, setSubjectTargets] = useState<Record<string, string>>({});

  const subjects = getSubjectsForLevel(levelString);
  const topSubjects = [...subjects].sort((a, b) => b.coeff - a.coeff).slice(0, 3);
  const isCollege = levelString === '3eme';
  const examName = isCollege ? 'BEPC' : 'BAC';

  useEffect(() => {
    // If the user already has goals, populate them
    if (goals?.bacPoints) setBacPoints(goals.bacPoints.toString());
    if (goals?.generalAverage) setGeneralAverage(goals.generalAverage.toString());
    if (goals?.trimesterTargets) {
      setTrimesterTargets({
        t1: goals.trimesterTargets.t1?.toString() || '',
        t2: goals.trimesterTargets.t2?.toString() || '',
        t3: goals.trimesterTargets.t3?.toString() || ''
      });
    }
    if (goals?.subjectTargets) {
      const initialSubs: Record<string, string> = {};
      Object.keys(goals.subjectTargets).forEach(key => {
        initialSubs[key] = goals.subjectTargets![key].toString();
      });
      setSubjectTargets(initialSubs);
    }
  }, [goals]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const clampValue = (val: string, max: number) => {
    if (!val) return '';
    const num = parseFloat(val);
    if (num > max) return max.toString();
    if (num < 0) return '0';
    return val;
  };

  const handleSave = async () => {
    setIsSubmitting(true);
    try {
      const parsedSubjects: Record<string, number> = {};
      Object.keys(subjectTargets).forEach(k => {
        if (subjectTargets[k]) parsedSubjects[k] = parseFloat(subjectTargets[k]);
      });

      await updateGoals({
        bacPoints: bacPoints ? parseFloat(bacPoints) : undefined,
        generalAverage: generalAverage ? parseFloat(generalAverage) : undefined,
        trimesterTargets: {
          t1: trimesterTargets.t1 ? parseFloat(trimesterTargets.t1) : undefined,
          t2: trimesterTargets.t2 ? parseFloat(trimesterTargets.t2) : undefined,
          t3: trimesterTargets.t3 ? parseFloat(trimesterTargets.t3) : undefined,
        },
        subjectTargets: parsedSubjects
      });
      
      const storageKey = `eductome_goals_onboarding_seen_${currentUser?.uid}`;
      localStorage.setItem(storageKey, 'true');
      
      window.dispatchEvent(new Event('onboarding_complete'));
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const skipAndClose = () => {
    const storageKey = `eductome_goals_onboarding_seen_${currentUser?.uid}`;
    localStorage.setItem(storageKey, 'true');
    window.dispatchEvent(new Event('onboarding_complete'));
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white dark:bg-[#161B22] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#1A3557] p-6 text-white relative">
          <button 
            onClick={skipAndClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-xl">
              <Target className="w-6 h-6 text-[#D81B60]" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-poppins">Définissons tes Objectifs</h2>
              <p className="text-white/80 text-sm">On ne domine pas ce qu'on ne cible pas.</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 flex gap-2">
            {[1, 2, 3, 4].map(i => (
              <div 
                key={i} 
                className={`h-2 flex-1 rounded-full transition-colors duration-300 ${step >= i ? 'bg-[#D81B60]' : 'bg-white/20'}`}
              ></div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex-1 overflow-y-auto">
          {step === 1 && (
            <div className="space-y-6 animate-in slide-in-from-right-8 duration-300">
              <div className="flex items-center gap-4 text-[#1A3557] dark:text-white">
                <Award className="w-10 h-10 text-[#D81B60]" />
                <h3 className="text-xl font-bold">L'Objectif Ultime</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Champion(ne) {pseudo}, pour réussir, il faut savoir exactement ce que tu veux. Combien de points vises-tu à ton {examName} ?
              </p>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Points visés au {examName}</label>
                <input 
                  type="number" 
                  value={bacPoints}
                  onChange={(e) => setBacPoints(clampValue(e.target.value, 400))}
                  placeholder={isCollege ? "Ex: 150" : "Ex: 250"}
                  min="0" max="400"
                  className="w-full text-2xl font-bold text-center p-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-[#D81B60] focus:ring-0 bg-transparent dark:text-white transition-colors"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in slide-in-from-right-8 duration-300">
              <div className="flex items-center gap-4 text-[#1A3557] dark:text-white">
                <LineChart className="w-10 h-10 text-[#D81B60]" />
                <h3 className="text-xl font-bold">Moyenne Générale</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Pour atteindre ces points, quelle moyenne générale annuelle dois-tu viser ?
              </p>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Moyenne Générale visée (sur 20)</label>
                <input 
                  type="number" 
                  step="0.5"
                  value={generalAverage}
                  onChange={(e) => setGeneralAverage(clampValue(e.target.value, 20))}
                  placeholder="Ex: 14"
                  min="0" max="20"
                  className="w-full text-2xl font-bold text-center p-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-[#D81B60] focus:ring-0 bg-transparent dark:text-white transition-colors"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in slide-in-from-right-8 duration-300">
              <div className="flex items-center gap-4 text-[#1A3557] dark:text-white">
                <Target className="w-10 h-10 text-[#D81B60]" />
                <h3 className="text-xl font-bold">Le Plan d'Attaque (Trimestres)</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                L'année est longue. Découpons ton objectif par trimestre pour rester sur la bonne voie.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['t1', 't2', 't3'].map((trim, idx) => (
                  <div key={trim} className="bg-gray-50 dark:bg-[#0D1117] p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 text-center uppercase">
                      Trimestre {idx + 1}
                    </label>
                    <input 
                      type="number" 
                      step="0.5"
                      value={trimesterTargets[trim as keyof typeof trimesterTargets]}
                      onChange={(e) => setTrimesterTargets({...trimesterTargets, [trim]: clampValue(e.target.value, 20)})}
                      placeholder="Ex: 12"
                      min="0" max="20"
                      className="w-full text-xl font-bold text-center p-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:border-[#D81B60] focus:ring-0 bg-white dark:bg-[#161B22] dark:text-white transition-colors"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 animate-in slide-in-from-right-8 duration-300">
              <div className="flex items-center gap-4 text-[#1A3557] dark:text-white">
                <BookOpen className="w-10 h-10 text-[#D81B60]" />
                <h3 className="text-xl font-bold">Stratégie par Matière</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Concentre-toi d'abord sur tes matières majeures à fort coefficient. Tu pourras définir les autres plus tard.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {topSubjects.map((sub) => (
                  <div key={sub.id} className="bg-gray-50 dark:bg-[#0D1117] p-3 rounded-xl border border-gray-100 dark:border-gray-800">
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold text-gray-700 dark:text-gray-300 truncate pr-2">{sub.name}</label>
                      <span className="text-[10px] bg-[#1A3557] text-white px-1.5 py-0.5 rounded">Coef {sub.coeff}</span>
                    </div>
                    <input 
                      type="number" 
                      step="0.5"
                      value={subjectTargets[sub.id] || ''}
                      onChange={(e) => setSubjectTargets({...subjectTargets, [sub.id]: clampValue(e.target.value, 20)})}
                      placeholder="Sur 20"
                      min="0" max="20"
                      className="w-full text-base font-bold text-center p-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:border-[#D81B60] focus:ring-0 bg-white dark:bg-[#161B22] dark:text-white transition-colors"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 dark:bg-black/20 p-4 md:p-6 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
          <button
            onClick={step === 1 ? skipAndClose : handlePrev}
            className="px-4 py-2 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white font-medium transition-colors flex items-center gap-1"
          >
            {step === 1 ? 'Remplir plus tard' : <><ChevronLeft className="w-4 h-4" /> Retour</>}
          </button>
          
          <button
            onClick={step === 4 ? handleSave : handleNext}
            disabled={isSubmitting}
            className="px-6 py-3 bg-[#D81B60] hover:bg-[#C2185B] text-white rounded-xl font-bold transition-all active:scale-95 flex items-center gap-2 shadow-lg shadow-pink-900/20 disabled:opacity-70"
          >
            {isSubmitting ? 'Enregistrement...' : step === 4 ? <><CheckCircle2 className="w-5 h-5" /> Enregistrer mes Objectifs</> : <>Suivant <ChevronRight className="w-5 h-5" /></>}
          </button>
        </div>
      </div>
    </div>
  );
}
