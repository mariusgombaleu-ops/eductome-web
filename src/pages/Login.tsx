import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { LogoTile } from '../components/ui/LogoTile';

export const Login = () => {
  const { palette } = useTheme();
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
      // Priorité : state.from (injecté par DashboardLayout guard), puis query param, puis /dashboard
      const from = (location.state as any)?.from;
      const searchParams = new URLSearchParams(location.search);
      const rawRedirect = from || searchParams.get('redirect') || '/dashboard';
      // SÉCURITÉ : empêcher les open redirects — n'autoriser que les chemins internes
      const redirect = (typeof rawRedirect === 'string' && rawRedirect.startsWith('/') && !rawRedirect.startsWith('//'))
        ? rawRedirect
        : '/dashboard';
      navigate(redirect, { replace: true });
    } catch (err: any) {
      console.error("Login error:", err);
      setError("Numéro de téléphone ou mot de passe incorrect.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-poppins px-4 py-12 transition-colors duration-300" style={{ background: palette.bg }}>
      <div className="max-w-md w-full space-y-8 p-8 rounded-[28px] shadow-sm border transition-colors duration-300" style={{ background: palette.bg2, borderColor: palette.line }}>
        <div className="text-center">
          <LogoTile className="mb-4" />
          <h2 className="text-[27px] font-extrabold leading-[1.1] tracking-tight transition-colors" style={{ color: palette.ink, fontFamily: palette.display }}>Bon retour 👋</h2>
          <p className="mt-2 text-sm transition-colors" style={{ color: palette.ink2 }}>
            Entre tes identifiants pour continuer.
          </p>
        </div>
        
        {error && (
          <div className="p-3 rounded-lg text-sm text-center transition-colors" style={{ background: `${palette.accent}15`, color: palette.accent }}>
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label htmlFor="phone" className="block text-[13px] font-semibold mb-1.5 transition-colors" style={{ color: palette.ink }}>Numéro de téléphone</label>
              <div className="mt-1 relative flex rounded-lg shadow-sm">
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
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="text-[13px] font-semibold transition-colors" style={{ color: palette.ink }}>Mot de passe</label>
                <a href="#" className="text-xs font-semibold transition-colors hover:opacity-80" style={{ color: palette.accent }}>Mot de passe oublié ?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 transition-colors" style={{ color: palette.ink3 }} />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full pl-10 pr-10 py-3 border rounded-[14px] focus:outline-none sm:text-sm transition-colors"
                  style={{
                    borderColor: palette.line,
                    background: palette.bg,
                    color: palette.ink,
                    outlineColor: palette.accent
                  }}
                  placeholder="••••••••"
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
          </div>

          <div>
            <button
              type="submit" 
              disabled={isLoading}
              className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-[16px] text-sm font-bold transition-all focus:outline-none disabled:opacity-70 transform hover:scale-[1.02] duration-200"
              style={{ background: palette.accent, color: palette.onAccent, boxShadow: `0 4px 12px ${palette.heroShadow}` }}
            >
              {isLoading ? 'Connexion en cours...' : 'Se connecter'}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center border-t pt-6 transition-colors" style={{ borderColor: palette.line }}>
          <p className="text-sm transition-colors" style={{ color: palette.ink2 }}>
            Pas encore de compte ?{' '}
            <Link to="/register" className="font-medium transition-colors inline-flex items-center hover:opacity-80" style={{ color: palette.accent }}>
              Rejoins EDUCTOME <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
