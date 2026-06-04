import { useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Lock, User as UserIcon, GraduationCap, Eye, EyeOff, BookOpen, Target } from 'lucide-react';

export const Register = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const otpRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null)
  ];

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      const levelSelect = document.getElementById('level') as HTMLSelectElement;
      if (levelSelect) {
        localStorage.setItem('eductome_user_serie', levelSelect.value);
      }
      localStorage.setItem('eductome_user_logged_in', 'true');
      const searchParams = new URLSearchParams(location.search);
      const redirect = searchParams.get('redirect') || '/dashboard';
      navigate(redirect);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return; // Prevent multiple chars
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next
    if (value && index < 5) {
      otpRefs[index + 1].current?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs[index - 1].current?.focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#0D1117] font-poppins px-4 py-12 transition-colors duration-300">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-[#161B22] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-[#30363D] transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-3xl font-playfair font-bold text-eductome-marine dark:text-white">Crée ton compte EDUCTOME</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-[#8B949E]">
            C'est gratuit et ça prend 1 minute.
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleNextStep}>
          
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <p className="text-xs font-bold tracking-wider text-eductome-marine dark:text-gray-400 uppercase">ÉTAPE 1 / 3 — Tes identifiants</p>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-[#E6EDF3]">Numéro de téléphone</label>
                <div className="mt-1 relative flex rounded-lg shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 dark:border-[#30363D] bg-gray-50 dark:bg-[#0D1117] text-gray-500 dark:text-[#8B949E] sm:text-sm">
                    +225
                  </span>
                  <div className="relative flex-1 focus-within:z-10">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400 dark:text-[#6E7681]" />
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-[#30363D] rounded-r-lg placeholder-gray-400 dark:placeholder-[#6E7681] bg-white dark:bg-[#0D1117] text-gray-900 dark:text-white focus:outline-none focus:ring-eductome-magenta focus:border-eductome-magenta sm:text-sm transition-colors"
                      placeholder="07 00 00 00 00"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-[#E6EDF3]">Créer un mot de passe</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400 dark:text-[#6E7681]" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={6}
                    className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-[#30363D] rounded-lg placeholder-gray-400 dark:placeholder-[#6E7681] bg-white dark:bg-[#0D1117] text-gray-900 dark:text-white focus:outline-none focus:ring-eductome-magenta focus:border-eductome-magenta sm:text-sm transition-colors"
                    placeholder="Min. 6 caractères"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500 dark:text-[#6E7681] dark:hover:text-[#E6EDF3]"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-[#E6EDF3]">Confirmer le mot de passe</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400 dark:text-[#6E7681]" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={6}
                    className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-[#30363D] rounded-lg placeholder-gray-400 dark:placeholder-[#6E7681] bg-white dark:bg-[#0D1117] text-gray-900 dark:text-white focus:outline-none focus:ring-eductome-magenta focus:border-eductome-magenta sm:text-sm transition-colors"
                    placeholder="Min. 6 caractères"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-eductome-magenta hover:bg-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eductome-magenta dark:focus:ring-offset-[#161B22]">
                  Recevoir mon code SMS
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <p className="text-xs font-bold tracking-wider text-eductome-marine dark:text-gray-400 uppercase">ÉTAPE 2 / 3 — Vérifie ton numéro</p>
              <p className="text-sm text-gray-600 dark:text-[#8B949E] mb-6">Code envoyé au +225 XX XX XX XX XX</p>
              
              <div className="flex justify-between gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={otpRefs[index]}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    className="w-12 h-14 text-center text-xl font-bold border border-gray-300 dark:border-[#30363D] rounded-lg bg-white dark:bg-[#0D1117] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-eductome-magenta focus:border-transparent transition-colors"
                  />
                ))}
              </div>

              <div className="pt-6">
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-eductome-magenta hover:bg-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eductome-magenta dark:focus:ring-offset-[#161B22]">
                  Vérifier le code
                </button>
              </div>
              <div className="text-center">
                <button type="button" onClick={() => setStep(1)} className="text-sm text-gray-500 hover:text-gray-700 dark:text-[#8B949E] dark:hover:text-gray-300">
                  Retour
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <p className="text-xs font-bold tracking-wider text-eductome-marine dark:text-gray-400 uppercase">ÉTAPE 3 / 3 — Ton profil</p>
              
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-[#E6EDF3]">Prénom / Pseudo</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-gray-400 dark:text-[#6E7681]" />
                  </div>
                  <input
                    id="firstName"
                    type="text"
                    required
                    className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-[#30363D] rounded-lg placeholder-gray-400 dark:placeholder-[#6E7681] bg-white dark:bg-[#0D1117] text-gray-900 dark:text-white focus:outline-none focus:ring-eductome-magenta focus:border-eductome-magenta sm:text-sm transition-colors"
                    placeholder="Ex: Marius"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="level" className="block text-sm font-medium text-gray-700 dark:text-[#E6EDF3]">Niveau / Série</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <GraduationCap className="h-5 w-5 text-gray-400 dark:text-[#6E7681]" />
                  </div>
                  <select
                    id="level"
                    required
                    className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-[#30363D] rounded-lg focus:outline-none focus:ring-eductome-magenta focus:border-eductome-magenta sm:text-sm bg-white dark:bg-[#0D1117] text-gray-900 dark:text-white transition-colors"
                  >
                    <option value="" disabled selected className="text-gray-400">Sélectionne ton niveau</option>
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
                <label htmlFor="highschool" className="block text-sm font-medium text-gray-700 dark:text-[#E6EDF3]">Nom de ton Lycée / Collège</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BookOpen className="h-5 w-5 text-gray-400 dark:text-[#6E7681]" />
                  </div>
                  <input
                    id="highschool"
                    type="text"
                    required
                    className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-[#30363D] rounded-lg placeholder-gray-400 dark:placeholder-[#6E7681] bg-white dark:bg-[#0D1117] text-gray-900 dark:text-white focus:outline-none focus:ring-eductome-magenta focus:border-eductome-magenta sm:text-sm transition-colors"
                    placeholder="Ex: Lycée Classique d'Abidjan"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-[#E6EDF3]">Matière préférée</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BookOpen className="h-5 w-5 text-gray-400 dark:text-[#6E7681]" />
                  </div>
                  <select
                    id="subject"
                    required
                    className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-[#30363D] rounded-lg focus:outline-none focus:ring-eductome-magenta focus:border-eductome-magenta sm:text-sm bg-white dark:bg-[#0D1117] text-gray-900 dark:text-white transition-colors"
                  >
                    <option value="" disabled selected className="text-gray-400">Sélectionne une matière</option>
                    <option value="maths">Mathématiques</option>
                    <option value="pc">Physique-Chimie</option>
                    <option value="svt">SVT</option>
                    <option value="philo">Philosophie</option>
                    <option value="fr">Français</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="goal" className="block text-sm font-medium text-gray-700 dark:text-[#E6EDF3]">Objectif à l'examen</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Target className="h-5 w-5 text-gray-400 dark:text-[#6E7681]" />
                  </div>
                  <select
                    id="goal"
                    required
                    className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-[#30363D] rounded-lg focus:outline-none focus:ring-eductome-magenta focus:border-eductome-magenta sm:text-sm bg-white dark:bg-[#0D1117] text-gray-900 dark:text-white transition-colors"
                  >
                    <option value="" disabled selected className="text-gray-400">Quel est ton objectif ?</option>
                    <option value="passable">Mention Passable (Avoir mon diplôme)</option>
                    <option value="bien">Mention Bien</option>
                    <option value="tres-bien">Mention Très Bien</option>
                    <option value="excellent">Excellent (Bourse d'études)</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-eductome-magenta hover:bg-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eductome-magenta dark:focus:ring-offset-[#161B22]">
                  Rejoindre EDUCTOME 🚀
                </button>
              </div>
            </div>
          )}

        </form>

        <div className="mt-6 text-center border-t border-gray-100 dark:border-[#30363D] pt-6">
          <p className="text-sm text-gray-600 dark:text-[#8B949E]">
            Déjà un compte ?{' '}
            <Link to="/login" className="font-medium text-eductome-magenta hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
