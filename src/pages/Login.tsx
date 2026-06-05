import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const Login = () => {
  const { loginWithPhoneAndPassword } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    try {
      setIsLoading(true);
      await loginWithPhoneAndPassword(phone, password);
      
      localStorage.setItem('eductome_user_logged_in', 'true');
      const searchParams = new URLSearchParams(location.search);
      const redirect = searchParams.get('redirect') || '/dashboard';
      navigate(redirect);
    } catch (err: any) {
      console.error("Login error:", err);
      setError("Numéro de téléphone ou mot de passe incorrect.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#0D1117] font-poppins px-4 py-12 transition-colors duration-300">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-[#161B22] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-[#30363D] transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-3xl font-playfair font-bold text-eductome-marine dark:text-white">EDUCTOME</h1>
          <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-[#E6EDF3]">Bon retour, Champion(ne) ! 👋</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-[#8B949E]">
            Entre tes identifiants pour continuer.
          </p>
        </div>
        
        {error && (
          <div className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm text-center">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-[#E6EDF3]">Mot de passe</label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 dark:text-[#6E7681]" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-[#30363D] rounded-lg placeholder-gray-400 dark:placeholder-[#6E7681] bg-white dark:bg-[#0D1117] text-gray-900 dark:text-white focus:outline-none focus:ring-eductome-magenta focus:border-eductome-magenta sm:text-sm transition-colors"
                  placeholder="••••••••"
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
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="#" className="font-medium text-eductome-magenta hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                Mot de passe oublié ?
              </a>
            </div>
          </div>

          <div>
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-eductome-magenta hover:bg-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eductome-magenta dark:focus:ring-offset-[#161B22] disabled:opacity-70"
            >
              {isLoading ? 'Connexion en cours...' : 'Se connecter'}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center border-t border-gray-100 dark:border-[#30363D] pt-6">
          <p className="text-sm text-gray-600 dark:text-[#8B949E]">
            Pas encore de compte ?{' '}
            <Link to="/register" className="font-medium text-eductome-magenta hover:text-pink-600 dark:hover:text-pink-400 transition-colors inline-flex items-center">
              Rejoins EDUCTOME <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
