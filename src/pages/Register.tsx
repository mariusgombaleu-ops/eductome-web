import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, Lock, User as UserIcon, GraduationCap, Eye, EyeOff, BookOpen, Target } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../config/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useTheme } from '../contexts/ThemeContext';
import { LogoTile } from '../components/ui/LogoTile';

export const Register = () => {
  const { palette } = useTheme();
  const { registerWithPhoneAndPassword, currentUser } = useAuth();
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleNextStep = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (step === 1) {
      const phoneInput = (document.getElementById('phone') as HTMLInputElement).value;
      const pass = (document.getElementById('password') as HTMLInputElement).value;
      const confirmPass = (document.getElementById('confirmPassword') as HTMLInputElement).value;

      if (!phoneInput || phoneInput.replace(/\s+/g, '').length < 10) {
        setError("Entre un numéro de téléphone valide (10 chiffres).");
        return;
      }

      if (pass.length < 6) {
        setError("Le mot de passe doit contenir au moins 6 caractères.");
        return;
      }

      if (pass !== confirmPass) {
        setError("Les mots de passe ne correspondent pas.");
        return;
      }

      try {
        setIsLoading(true);
        await registerWithPhoneAndPassword(phoneInput, pass);
        setStep(2);
      } catch (err: any) {
        console.error("Registration Error:", err);
        if (err.code === 'auth/email-already-in-use') {
          setError("Ce numéro est déjà inscrit. Va plutôt sur la page de connexion.");
        } else if (err.code === 'auth/weak-password') {
          setError("Le mot de passe doit contenir au moins 6 caractères.");
        } else {
          setError(`Erreur: ${err.message || "Impossible de créer le compte."}`);
        }
      } finally {
        setIsLoading(false);
      }
    } else {
      // Étape 2 — Profil
      const levelSelect = document.getElementById('level') as HTMLSelectElement;
      const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
      const sexe = (document.getElementById('sexe') as HTMLSelectElement).value;
      const highschool = (document.getElementById('highschool') as HTMLInputElement).value;
      const subject = (document.getElementById('subject') as HTMLSelectElement).value;
      const goal = (document.getElementById('goal') as HTMLSelectElement).value;

      if (levelSelect) {
        localStorage.setItem('eductome_user_serie', levelSelect.value);
      }
      
      try {
        setIsLoading(true);
        if (currentUser) {
          // Initialize their profile in Firestore
          await setDoc(doc(db, 'users', currentUser.uid), {
            pseudo: firstName,
            sexe: sexe,
            level: levelSelect.value,
            highschool: highschool,
            favoriteSubject: subject,
            goal: goal,
            xp: 0,
            unlockedCourses: [],
            unlockedBadges: [],
            rewardedActions: [],
            activityHistory: {},
            role: 'student',
            createdAt: new Date()
          });
        }
        
        localStorage.setItem('eductome_user_logged_in', 'true');
        // Redirection vers l'onboarding pour une première inscription
        navigate('/dashboard/bienvenue');
      } catch (err: any) {
        console.error("Profile save error:", err);
        setError(`Erreur lors de l'enregistrement du profil: ${err.message || err}`);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-poppins px-4 py-12 transition-colors duration-300" style={{ background: palette.bg }}>
      <div className="max-w-md w-full space-y-8 p-8 rounded-[28px] shadow-sm border transition-colors duration-300" style={{ background: palette.bg2, borderColor: palette.line }}>
        <div className="text-center">
          <LogoTile className="mb-4" />
          <h1 className="text-[26px] font-extrabold leading-[1.1] tracking-tight transition-colors" style={{ color: palette.ink, fontFamily: palette.display }}>Crée ton compte</h1>
          <p className="mt-2 text-sm transition-colors" style={{ color: palette.ink2 }}>
            C'est gratuit et ça prend 1 minute.
          </p>
        </div>
        
        {error && (
          <div className="p-3 rounded-lg text-sm text-center transition-colors" style={{ background: `${palette.accent}15`, color: palette.accent }}>
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleNextStep}>
          
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] font-bold tracking-[0.12em] uppercase shrink-0 transition-colors" style={{ color: palette.ink3 }}>Étape 1 / 2 — Tes identifiants</span>
                <span className="flex-1 h-[3px] rounded-full overflow-hidden" style={{ background: palette.line }}>
                  <span className="block h-full rounded-full transition-all duration-300" style={{ width: '50%', background: palette.accent }} />
                </span>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium transition-colors" style={{ color: palette.ink }}>Numéro de téléphone</label>
                <div className="mt-1 relative flex rounded-[14px] shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-[14px] border border-r-0 sm:text-sm transition-colors" style={{ borderColor: palette.line, background: palette.bg3, color: palette.ink2 }}>
                    +225
                  </span>
                  <div className="relative flex-1 focus-within:z-10">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 transition-colors" style={{ color: palette.ink3 }} />
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="appearance-none block w-full pl-10 pr-3 py-3 border rounded-r-[14px] focus:outline-none sm:text-sm transition-colors"
                      style={{
                        borderColor: palette.line,
                        background: palette.bg,
                        color: palette.ink,
                        outlineColor: palette.accent
                      }}
                      placeholder="07 00 00 00 00"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium transition-colors" style={{ color: palette.ink }}>Créer un mot de passe</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 transition-colors" style={{ color: palette.ink3 }} />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={6}
                    className="appearance-none block w-full pl-10 pr-10 py-3 border rounded-[14px] focus:outline-none sm:text-sm transition-colors"
                    style={{
                      borderColor: palette.line,
                      background: palette.bg,
                      color: palette.ink,
                      outlineColor: palette.accent
                    }}
                    placeholder="Min. 6 caractères"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center transition-colors hover:opacity-80"
                    style={{ color: palette.ink3 }}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium transition-colors" style={{ color: palette.ink }}>Confirmer le mot de passe</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 transition-colors" style={{ color: palette.ink3 }} />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={6}
                    className="appearance-none block w-full pl-10 pr-3 py-3 border rounded-[14px] focus:outline-none sm:text-sm transition-colors"
                    style={{
                      borderColor: palette.line,
                      background: palette.bg,
                      color: palette.ink,
                      outlineColor: palette.accent
                    }}
                    placeholder="Min. 6 caractères"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-[16px] text-sm font-bold transition-all focus:outline-none disabled:opacity-70 transform hover:scale-[1.02] duration-200"
                  style={{ background: palette.accent, color: palette.onAccent, boxShadow: `0 4px 12px ${palette.heroShadow}` }}
                >
                  {isLoading ? 'Création en cours...' : 'Créer mon compte 🚀'}
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] font-bold tracking-[0.12em] uppercase shrink-0 transition-colors" style={{ color: palette.ink3 }}>Étape 2 / 2 — Ton profil</span>
                <span className="flex-1 h-[3px] rounded-full overflow-hidden" style={{ background: palette.line }}>
                  <span className="block h-full rounded-full transition-all duration-300" style={{ width: '100%', background: palette.accent }} />
                </span>
              </div>
              
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium transition-colors" style={{ color: palette.ink }}>Prénom / Pseudo</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 transition-colors" style={{ color: palette.ink3 }} />
                  </div>
                  <input
                    id="firstName"
                    type="text"
                    required
                    className="appearance-none block w-full pl-10 pr-3 py-3 border rounded-[14px] focus:outline-none sm:text-sm transition-colors"
                    style={{
                      borderColor: palette.line,
                      background: palette.bg,
                      color: palette.ink,
                      outlineColor: palette.accent
                    }}
                    placeholder="Ex: Marius"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="sexe" className="block text-sm font-medium transition-colors" style={{ color: palette.ink }}>Sexe</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 transition-colors" style={{ color: palette.ink3 }} />
                  </div>
                  <select
                    id="sexe"
                    required
                    defaultValue=""
                    className="appearance-none block w-full pl-10 pr-10 py-3 border rounded-[14px] focus:outline-none sm:text-sm transition-colors"
                    style={{
                      borderColor: palette.line,
                      background: palette.bg,
                      color: palette.ink,
                      outlineColor: palette.accent
                    }}
                  >
                    <option value="" disabled style={{ color: palette.ink3 }}>Es-tu un garçon ou une fille ?</option>
                    <option value="M">Garçon</option>
                    <option value="F">Fille</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="level" className="block text-sm font-medium transition-colors" style={{ color: palette.ink }}>Niveau / Série</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <GraduationCap className="h-5 w-5 transition-colors" style={{ color: palette.ink3 }} />
                  </div>
                  <select
                    id="level"
                    required
                    defaultValue=""
                    className="appearance-none block w-full pl-10 pr-10 py-3 border rounded-[14px] focus:outline-none sm:text-sm transition-colors"
                    style={{
                      borderColor: palette.line,
                      background: palette.bg,
                      color: palette.ink,
                      outlineColor: palette.accent
                    }}
                  >
                    <option value="" disabled style={{ color: palette.ink3 }}>Sélectionne ton niveau</option>
                    <option value="3eme">3ème (Brevet)</option>
                    <option value="2nde">Seconde</option>
                    <option value="1ere">Première</option>
                    <option value="terminale-c">Terminale C</option>
                    <option value="terminale-d">Terminale D</option>
                    <option value="terminale-a">Terminale A</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="highschool" className="block text-sm font-medium transition-colors" style={{ color: palette.ink }}>Nom de ton Lycée / Collège</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BookOpen className="h-5 w-5 transition-colors" style={{ color: palette.ink3 }} />
                  </div>
                  <input
                    id="highschool"
                    type="text"
                    required
                    className="appearance-none block w-full pl-10 pr-3 py-3 border rounded-[14px] focus:outline-none sm:text-sm transition-colors"
                    style={{
                      borderColor: palette.line,
                      background: palette.bg,
                      color: palette.ink,
                      outlineColor: palette.accent
                    }}
                    placeholder="Ex: Lycée Classique d'Abidjan"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium transition-colors" style={{ color: palette.ink }}>Matière préférée</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BookOpen className="h-5 w-5 transition-colors" style={{ color: palette.ink3 }} />
                  </div>
                  <select
                    id="subject"
                    required
                    defaultValue=""
                    className="appearance-none block w-full pl-10 pr-10 py-3 border rounded-[14px] focus:outline-none sm:text-sm transition-colors"
                    style={{
                      borderColor: palette.line,
                      background: palette.bg,
                      color: palette.ink,
                      outlineColor: palette.accent
                    }}
                  >
                    <option value="" disabled style={{ color: palette.ink3 }}>Sélectionne une matière</option>
                    <option value="maths">Mathématiques</option>
                    <option value="pc">Physique-Chimie</option>
                    <option value="svt">SVT</option>
                    <option value="philo">Philosophie</option>
                    <option value="fr">Français</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="goal" className="block text-sm font-medium transition-colors" style={{ color: palette.ink }}>Objectif à l'examen</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Target className="h-5 w-5 transition-colors" style={{ color: palette.ink3 }} />
                  </div>
                  <select
                    id="goal"
                    required
                    defaultValue=""
                    className="appearance-none block w-full pl-10 pr-10 py-3 border rounded-[14px] focus:outline-none sm:text-sm transition-colors"
                    style={{
                      borderColor: palette.line,
                      background: palette.bg,
                      color: palette.ink,
                      outlineColor: palette.accent
                    }}
                  >
                    <option value="" disabled style={{ color: palette.ink3 }}>Quel est ton objectif ?</option>
                    <option value="passable">Mention Passable (Avoir mon diplôme)</option>
                    <option value="bien">Mention Bien</option>
                    <option value="tres-bien">Mention Très Bien</option>
                    <option value="excellent">Excellent (Bourse d'études)</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-[16px] text-sm font-bold transition-all focus:outline-none disabled:opacity-70 transform hover:scale-[1.02] duration-200"
                  style={{ background: palette.accent, color: palette.onAccent, boxShadow: `0 4px 12px ${palette.heroShadow}` }}
                >
                  {isLoading ? 'Enregistrement...' : 'Rejoindre EDUCTOME 🚀'}
                </button>
              </div>
            </div>
          )}

        </form>

        <div className="mt-6 text-center border-t pt-6 transition-colors" style={{ borderColor: palette.line }}>
          <p className="text-sm transition-colors" style={{ color: palette.ink2 }}>
            Déjà un compte ?{' '}
            <Link to="/login" className="font-medium transition-colors hover:opacity-80" style={{ color: palette.accent }}>
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

