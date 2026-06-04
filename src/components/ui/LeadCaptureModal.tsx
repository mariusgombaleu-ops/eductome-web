import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Lock, Phone, User, GraduationCap, School } from 'lucide-react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  onSuccess?: () => void;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ 
  isOpen, 
  onClose,
  title = "Débloque la correction détaillée 🔓",
  description = "Pour voir les corrections étape par étape et sauvegarder ta progression, crée ton compte gratuit EDUCTOME en 10 secondes.",
  onSuccess
}) => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Mock login & redirect or unlock
      localStorage.setItem('eductome_user_logged_in', 'true');
      onClose();
      if (onSuccess) {
        onSuccess();
      } else {
        window.location.reload();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="bg-white dark:bg-[#161B22] rounded-2xl w-full max-w-md relative z-10 overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header - Grand Frère Style */}
        <div className="bg-[#1A3557] px-6 py-6 text-white text-center relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-12 h-12 bg-eductome-magenta rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-playfair font-bold text-xl mb-2">{title}</h3>
          <p className="text-blue-100 text-sm">{description}</p>
        </div>

        {/* Form */}
        <div className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {step === 1 ? (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-[#E6EDF3] mb-1">Prénom</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Marius"
                      className="w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-[#30363D] rounded-lg bg-gray-50 dark:bg-[#0D1117] text-gray-900 dark:text-white focus:ring-2 focus:ring-eductome-magenta focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-[#E6EDF3] mb-1">Numéro WhatsApp</label>
                  <div className="flex rounded-lg shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 dark:border-[#30363D] bg-gray-100 dark:bg-[#0D1117] text-gray-500 text-sm">
                      +225
                    </span>
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="07 00 00 00 00"
                        className="w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-[#30363D] rounded-r-lg bg-gray-50 dark:bg-[#0D1117] text-gray-900 dark:text-white focus:ring-2 focus:ring-eductome-magenta focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 px-4 bg-eductome-magenta hover:bg-pink-700 text-white font-bold rounded-lg shadow-sm transition-colors mt-2"
                >
                  Suivant →
                </button>
              </div>
            ) : (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-[#E6EDF3] mb-1">Série / Classe</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <GraduationCap className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      required
                      className="w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-[#30363D] rounded-lg bg-gray-50 dark:bg-[#0D1117] text-gray-900 dark:text-white focus:ring-2 focus:ring-eductome-magenta focus:border-transparent outline-none"
                    >
                      <option value="" disabled selected>Choisis ta série</option>
                      <option value="D">Terminale D</option>
                      <option value="C">Terminale C</option>
                      <option value="A">Terminale A</option>
                      <option value="1ere">Première</option>
                      <option value="3eme">3ème</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-[#E6EDF3] mb-1">Nom de ton Lycée</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <School className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Lycée Classique d'Abidjan"
                      className="w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-[#30363D] rounded-lg bg-gray-50 dark:bg-[#0D1117] text-gray-900 dark:text-white focus:ring-2 focus:ring-eductome-magenta focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-[#E6EDF3] mb-1">Mot de passe</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      required
                      placeholder="Min. 6 caractères"
                      className="w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-[#30363D] rounded-lg bg-gray-50 dark:bg-[#0D1117] text-gray-900 dark:text-white focus:ring-2 focus:ring-eductome-magenta focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div className="flex gap-2 mt-2">
                  <button 
                    type="button"
                    onClick={() => setStep(1)}
                    className="py-3 px-4 bg-gray-100 dark:bg-[#30363D] text-gray-700 dark:text-[#E6EDF3] font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    Retour
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 py-3 px-4 bg-eductome-magenta hover:bg-pink-700 text-white font-bold rounded-lg shadow-sm transition-colors"
                  >
                    Créer mon compte
                  </button>
                </div>
              </div>
            )}

          </form>

          <p className="text-center text-xs text-gray-500 mt-6">
            Déjà inscrit ? <button onClick={() => navigate('/login')} className="text-[#1A3557] dark:text-blue-400 font-bold hover:underline">Connecte-toi</button>
          </p>
        </div>
      </div>
    </div>
  );
};
