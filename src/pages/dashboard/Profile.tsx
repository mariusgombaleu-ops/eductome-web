import { User, Mail, Shield, Save, Camera, Target, Book, Trophy, Flame, Eye, EyeOff, Star, Edit3, ChevronRight, Key, CheckCircle, Heart, Lock, Trash2, Settings, Zap, RefreshCw, Unlock } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useUser } from '../../contexts/UserContext';
import { BADGES } from '../../constants/badges';
import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

export const Profile = () => {
  const { theme } = useTheme();
  const d = theme === 'dark';
  const { xp, level, unlockedBadges, resetUser, unlockEverything, addXpDev, pseudo, levelString, highschool, favoriteSubject, goal, createdAt } = useUser();
  const { currentUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0); // 0-3
  const [savedNotes, setSavedNotes] = useState<{courseId: string, content: string}[]>([]);
  const [couponCode, setCouponCode] = useState('');
  const [couponStatus, setCouponStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode.trim()) return;
    
    setCouponStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      if (couponCode.toUpperCase() === 'T1LIMITES2026') {
        const unlockedTomes = JSON.parse(localStorage.getItem('eductome_unlocked_tomes') || '[]');
        if (!unlockedTomes.includes('t1-limites')) {
          unlockedTomes.push('t1-limites');
          localStorage.setItem('eductome_unlocked_tomes', JSON.stringify(unlockedTomes));
        }
        setCouponStatus('success');
      } else {
        setCouponStatus('error');
      }
      setTimeout(() => setCouponStatus('idle'), 3000);
    }, 1500);
  };

  useEffect(() => {
    const courses = JSON.parse(localStorage.getItem('eductome_courses_with_notes') || '[]');
    const notes = courses.map((id: string) => ({
      courseId: id,
      content: localStorage.getItem(`eductome_course_notes_${id}`) || ''
    })).filter((n: {content: string}) => n.content.trim().length > 0);
    setSavedNotes(notes);
  }, []);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.length === 0) setPasswordStrength(0);
    else if (val.length < 6) setPasswordStrength(1);
    else if (val.length < 10 || !/\d/.test(val)) setPasswordStrength(2);
    else setPasswordStrength(3);
  };
  const handleDeleteNote = (courseId: string) => {
    localStorage.removeItem(`eductome_course_notes_${courseId}`);
    const courses = JSON.parse(localStorage.getItem('eductome_courses_with_notes') || '[]');
    const updatedCourses = courses.filter((id: string) => id !== courseId);
    localStorage.setItem('eductome_courses_with_notes', JSON.stringify(updatedCourses));
    setSavedNotes(prev => prev.filter(n => n.courseId !== courseId));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-10 font-poppins">
      
      {/* Banner Profil */}
      <div className="relative bg-gradient-to-r from-eductome-marine to-eductome-sky rounded-2xl p-6 md:p-8 overflow-hidden shadow-lg flex flex-col md:flex-row items-center gap-6 md:gap-8 animate-fade-in-up">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 -mb-12 w-32 h-32 rounded-full bg-white opacity-10 pointer-events-none"></div>
        
        <div className="relative z-10 group cursor-pointer">
          <div className="relative">
            <img
              className="h-28 w-28 rounded-full object-cover ring-4 ring-white shadow-xl transition-transform group-hover:scale-105"
              src="https://ui-avatars.com/api/?name=Marie+Eductome&background=E91E63&color=fff&size=128"
              alt="User avatar"
            />
            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md text-eductome-magenta hover:text-pink-600 transition-colors">
              <Camera className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="relative z-10 text-center md:text-left text-white flex-1 w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-playfair font-bold mb-1">{pseudo}</h1>
              <p className="text-blue-100">{levelString} • Inscrit(e) depuis {createdAt}</p>
              <div className="mt-3 inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm text-yellow-300 border border-yellow-400/30 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                <Star className="w-4 h-4 fill-yellow-400" /> Compte {level.level > 1 ? 'Premium' : 'Gratuit'}
              </div>
            </div>

            <div className="bg-black/20 rounded-xl p-4 w-full md:w-64 backdrop-blur-sm border border-white/10">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-sm">Niveau {level.level} : {level.title}</span>
                <span className="text-xs text-blue-200">{xp} {level.maxXp ? `/ ${level.maxXp}` : ''} XP</span>
              </div>
              <div className="h-2 bg-black/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full relative transition-all duration-1000 ease-out"
                  style={{ width: `${level.maxXp ? Math.min(100, Math.max(0, ((xp - level.minXp) / (level.maxXp - level.minXp)) * 100)) : 100}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className={`${d ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} p-6 rounded-2xl shadow-sm border glass-card animate-fade-in-up animation-delay-100`}>
            <h2 className={`text-lg font-bold ${d ? 'text-white' : 'text-gray-900'} mb-6 flex items-center gap-2`}>
              <User className="w-5 h-5 text-gray-400" /> Informations Personnelles
            </h2>
            
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={`block text-sm font-medium ${d ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Prénom / Pseudo</label>
                  <input type="text" defaultValue={pseudo} className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-eductome-magenta focus:border-eductome-magenta transition-colors ${d ? 'border-gray-600 bg-gray-900 text-white' : 'border-gray-200'}`} />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${d ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Niveau d'études</label>
                  <select defaultValue={levelString} className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-eductome-magenta focus:border-eductome-magenta transition-colors ${d ? 'border-gray-600 bg-gray-900 text-white' : 'border-gray-200'}`}>
                    <option>Terminale</option>
                    <option>Première</option>
                    <option>Seconde</option>
                    <option>3ème</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-medium ${d ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Matière préférée</label>
                  <select defaultValue={favoriteSubject || "Mathématiques"} className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-eductome-magenta focus:border-eductome-magenta transition-colors ${d ? 'border-gray-600 bg-gray-900 text-white' : 'border-gray-200'}`}>
                    <option>Mathématiques</option>
                    <option>Physique-Chimie</option>
                    <option>SVT</option>
                    <option>Philosophie</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-medium ${d ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Objectif principal</label>
                  <select defaultValue={goal || "Mention Bien"} className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-eductome-magenta focus:border-eductome-magenta transition-colors ${d ? 'border-gray-600 bg-gray-900 text-white' : 'border-gray-200'}`}>
                    <option>Mention Très Bien</option>
                    <option>Mention Bien</option>
                    <option>Mention Assez Bien</option>
                    <option>Avoir le BAC</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-medium ${d ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Lycée</label>
                  <input type="text" defaultValue={highschool || ""} placeholder="Ex: Lycée Classique d'Abidjan" className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-eductome-magenta focus:border-eductome-magenta transition-colors ${d ? 'border-gray-600 bg-gray-900 text-white' : 'border-gray-200'}`} />
                </div>
              </div>
              
              <div>
                <label className={`block text-sm font-medium ${d ? 'text-gray-300' : 'text-gray-700'} mb-1 flex items-center gap-2`}>
                  <Mail className="w-4 h-4" /> Numéro de téléphone (Identifiant)
                </label>
                <input type="text" defaultValue={currentUser?.phoneNumber || "Non renseigné"} disabled className={`w-full px-4 py-2 border rounded-lg cursor-not-allowed ${d ? 'border-gray-700 bg-gray-800 text-gray-400' : 'border-gray-200 bg-gray-50 text-gray-500'}`} />
                <p className="text-xs text-gray-400 mt-1">Le numéro de téléphone ne peut pas être modifié.</p>
              </div>

              <div className="pt-4 flex justify-end">
                <button type="button" className="flex items-center gap-2 bg-eductome-magenta hover:bg-eductome-marine text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  <Save className="w-4 h-4" /> Enregistrer les modifications
                </button>
              </div>
            </form>
          </div>

          <div className={`${d ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} p-6 rounded-2xl shadow-sm border glass-card animate-fade-in-up animation-delay-150`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-lg font-bold ${d ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                <Edit3 className="w-5 h-5 text-eductome-blue" /> Mon Carnet de Notes
              </h2>
            </div>
            
            {savedNotes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {savedNotes.map((note) => (
                  <div key={note.courseId} className={`relative p-4 rounded-xl border ${d ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'} group`}>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-eductome-magenta bg-eductome-magenta/10 px-2 py-0.5 rounded-full w-fit uppercase tracking-wider">
                          <Book className="w-3 h-3" /> Chapitre
                        </div>
                        <h3 className={`font-bold text-sm ${d ? 'text-white' : 'text-eductome-marine'} pr-6`}>
                          {note.courseId === 't1-limites' ? 'Les Limites' : note.courseId === 't11-eq-diff' ? 'Équations Différentielles' : note.courseId}
                        </h3>
                      </div>
                      <button 
                        type="button"
                        onClick={() => handleDeleteNote(note.courseId)}
                        className="p-1.5 absolute top-3 right-3 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors sm:opacity-0 group-hover:opacity-100 z-10"
                        title="Supprimer la note"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className={`text-sm whitespace-pre-wrap line-clamp-3 mt-2 mb-3 ${d ? 'text-gray-300' : 'text-gray-600'}`}>
                      {note.content}
                    </p>
                    <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex justify-end">
                      <a href={`/dashboard/course/${note.courseId}`} className="text-xs font-bold text-blue-500 hover:text-blue-600 flex items-center">
                        Aller au cours <ChevronRight className="w-3 h-3 ml-0.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={`text-center py-8 px-4 border-2 border-dashed rounded-xl ${d ? 'border-gray-700 text-gray-500' : 'border-gray-200 text-gray-400'}`}>
                <Edit3 className="w-8 h-8 mx-auto mb-3 opacity-50" />
                <p className="font-medium text-sm">Ton carnet est vide.</p>
                <p className="text-xs mt-1 opacity-80">Prends des notes pendant ta lecture, elles apparaîtront ici.</p>
              </div>
            )}
          </div>

          <div className={`${d ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} p-6 rounded-2xl shadow-sm border glass-card animate-fade-in-up animation-delay-200`}>
            <h2 className={`text-lg font-bold ${d ? 'text-white' : 'text-gray-900'} mb-6 flex items-center gap-2`}>
              <Shield className="w-5 h-5 text-gray-400" /> Sécurité
            </h2>
            <form className="space-y-5">
              <div>
                <label className={`block text-sm font-medium ${d ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Mot de passe actuel</label>
                <div className="relative">
                  <input type={showPassword ? "text" : "password"} placeholder="••••••••" className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-eductome-magenta focus:border-eductome-magenta transition-colors pr-10 ${d ? 'border-gray-600 bg-gray-900 text-white' : 'border-gray-200'}`} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div>
                <label className={`block text-sm font-medium ${d ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Nouveau mot de passe</label>
                <div className="relative">
                  <input type={showNewPassword ? "text" : "password"} onChange={handlePasswordChange} placeholder="••••••••" className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-eductome-magenta focus:border-eductome-magenta transition-colors pr-10 ${d ? 'border-gray-600 bg-gray-900 text-white' : 'border-gray-200'}`} />
                  <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
                    {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {/* Strength Indicator */}
                <div className="mt-2 flex gap-1 h-1.5">
                  <div className={`flex-1 rounded-full ${passwordStrength >= 1 ? 'bg-red-500' : d ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                  <div className={`flex-1 rounded-full ${passwordStrength >= 2 ? 'bg-yellow-500' : d ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                  <div className={`flex-1 rounded-full ${passwordStrength >= 3 ? 'bg-green-500' : d ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                </div>
              </div>
              <div className="pt-2">
                <button type="button" className="text-sm font-bold text-eductome-sky hover:text-eductome-marine transition-colors">
                  Mettre à jour le mot de passe
                </button>
              </div>
            </form>
          </div>

          {/* Code Livre Physique */}
          <div className={`${d ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} p-6 rounded-2xl shadow-sm border glass-card animate-fade-in-up animation-delay-250`}>
            <h2 className={`text-lg font-bold ${d ? 'text-white' : 'text-gray-900'} mb-2 flex items-center gap-2`}>
              <Key className="w-5 h-5 text-eductome-magenta" /> Activer un Livre Physique
            </h2>
            <p className={`text-sm ${d ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
              Tu as acheté un manuel EDUCTOME en librairie ? Entre le code unique situé à la fin du livre pour débloquer la version numérique et tous les quiz.
            </p>
            <form onSubmit={handleApplyCoupon} className="space-y-4">
              <div className="flex gap-3">
                <input 
                  type="text" 
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Ex: T1LIMITES2026" 
                  className={`flex-1 px-4 py-3 border rounded-xl font-mono uppercase focus:ring-2 focus:ring-eductome-magenta focus:border-eductome-magenta transition-colors ${d ? 'border-gray-600 bg-gray-900 text-white' : 'border-gray-200'}`} 
                />
                <button 
                  type="submit" 
                  disabled={couponStatus === 'loading'}
                  className="bg-eductome-marine hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-bold transition-colors disabled:opacity-70 whitespace-nowrap"
                >
                  {couponStatus === 'loading' ? 'Vérification...' : 'Activer'}
                </button>
              </div>
              {couponStatus === 'success' && (
                <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400 text-sm flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <p>Code validé ! Le Tome a été ajouté à tes cours. Tu as maintenant accès à la version numérique et aux quiz interactifs.</p>
                </div>
              )}
              {couponStatus === 'error' && (
                <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-sm">
                  Code invalide ou déjà utilisé. Vérifie que tu as bien recopié les lettres et chiffres.
                </div>
              )}
            </form>
          </div>


        </div>

        <div className="space-y-6 animate-fade-in-up animation-delay-300">
          {/* Quick Stats */}
          <div className={`${d ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} p-6 rounded-2xl shadow-sm border glass-card`}>
            <h3 className={`font-bold ${d ? 'text-white' : 'text-gray-900'} mb-4 flex items-center gap-2`}>
              <Target className="w-5 h-5 text-eductome-sky" /> Statistiques rapides
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className={`text-sm ${d ? 'text-gray-400' : 'text-gray-600'}`}>Série d'étude</span>
                <span className={`font-bold ${d ? 'text-white' : 'text-gray-900'} flex items-center gap-1`}><Flame className="w-4 h-4 text-orange-500" /> 3 Jours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${d ? 'text-gray-400' : 'text-gray-600'}`}>Cours terminés</span>
                <span className={`font-bold ${d ? 'text-white' : 'text-gray-900'}`}>12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${d ? 'text-gray-400' : 'text-gray-600'}`}>Temps cette sem.</span>
                <span className={`font-bold ${d ? 'text-white' : 'text-gray-900'}`}>4h 30m</span>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className={`${d ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} p-6 rounded-2xl shadow-sm border glass-card`}>
            <h3 className={`font-bold ${d ? 'text-white' : 'text-gray-900'} mb-4 flex items-center gap-2`}>
              <Trophy className="w-5 h-5 text-yellow-500" /> Mes Badges
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {BADGES.map((badge) => {
                const isUnlocked = unlockedBadges.includes(badge.id);
                
                let IconComponent = Trophy;
                if (badge.iconName === 'Eye') IconComponent = Eye;
                if (badge.iconName === 'Book') IconComponent = Book;
                if (badge.iconName === 'Star') IconComponent = Star;
                if (badge.iconName === 'Heart') IconComponent = Heart;
                
                // Color configuration
                const colors = {
                  orange: { bg: 'from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30', border: 'border-orange-200 dark:border-orange-800/50', text: 'text-orange-500', label: d ? 'text-orange-300' : 'text-orange-800' },
                  blue: { bg: 'from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30', border: 'border-blue-200 dark:border-blue-800/50', text: 'text-blue-500', label: d ? 'text-blue-300' : 'text-blue-800' },
                  yellow: { bg: 'from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30', border: 'border-yellow-200 dark:border-yellow-800/50', text: 'text-yellow-500', label: d ? 'text-yellow-300' : 'text-yellow-800' },
                  magenta: { bg: 'from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30', border: 'border-pink-200 dark:border-pink-800/50', text: 'text-[#D81B60]', label: d ? 'text-pink-300' : 'text-pink-800' },
                  green: { bg: 'from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30', border: 'border-green-200 dark:border-green-800/50', text: 'text-green-500', label: d ? 'text-green-300' : 'text-green-800' },
                  purple: { bg: 'from-purple-100 to-fuchsia-100 dark:from-purple-900/30 dark:to-fuchsia-900/30', border: 'border-purple-200 dark:border-purple-800/50', text: 'text-purple-500', label: d ? 'text-purple-300' : 'text-purple-800' },
                };
                
                const themeColors = colors[badge.colorTheme] || colors.blue;
                
                return (
                  <div 
                    key={badge.id}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 ${isUnlocked ? `bg-gradient-to-br ${themeColors.bg} border ${themeColors.border} hover:scale-105 shadow-sm` : `bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 opacity-60 grayscale`}`}
                    title={isUnlocked ? badge.description : `À débloquer : ${badge.description}`}
                  >
                    <div className="relative mb-2">
                      <IconComponent className={`w-8 h-8 ${isUnlocked ? themeColors.text : 'text-gray-400'}`} />
                      {!isUnlocked && (
                        <div className="absolute -bottom-1 -right-1 bg-gray-200 dark:bg-gray-700 rounded-full p-0.5 border-2 border-white dark:border-gray-800">
                          <Lock className="w-3 h-3 text-gray-500" />
                        </div>
                      )}
                    </div>
                    <span className={`text-[10px] font-bold text-center leading-tight ${isUnlocked ? themeColors.label : (d ? 'text-gray-500' : 'text-gray-600')}`}>
                      {badge.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`${d ? 'bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-800/50' : 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200'} border p-6 rounded-2xl`}>
            <div className="flex items-center gap-2 mb-2">
              <Star className={`w-5 h-5 ${d ? 'text-yellow-500' : 'text-yellow-600'}`} />
              <h3 className={`font-bold ${d ? 'text-white' : 'text-yellow-900'}`}>Passez Premium</h3>
            </div>
            <p className={`text-sm ${d ? 'text-yellow-200/70' : 'text-yellow-800'} mb-4`}>
              Débloquez des manuels complets et des quiz corrigés en visitant notre boutique de collections.
            </p>
            <button className="w-full font-bold py-2 rounded-xl bg-yellow-400 text-yellow-900 hover:bg-yellow-500 transition-colors shadow-sm">
              Voir la boutique
            </button>
          </div>
        </div>
      </div>

      {/* Admin / Dev Tools Panel */}
      <div className="mt-12 p-6 rounded-2xl border-2 border-dashed border-purple-300 dark:border-purple-900 bg-purple-50/50 dark:bg-purple-900/10 backdrop-blur-sm animate-fade-in-up">
        <div className="flex items-center gap-2 mb-4 text-purple-600 dark:text-purple-400">
          <Settings className="w-6 h-6 animate-spin-slow" />
          <h2 className="text-xl font-bold font-playfair">Panneau d'Administration (Tests)</h2>
        </div>
        <p className="text-sm text-purple-800/70 dark:text-purple-300/70 mb-6">
          Ces outils ne sont visibles que par toi pendant le développement. Ils te permettent de tester tous les parcours utilisateurs en un clic.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button 
            onClick={() => { resetUser(); setTimeout(() => window.location.reload(), 500); }}
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white dark:bg-[#0D1117] border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all text-center group"
          >
            <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-500 rounded-full group-hover:scale-110 transition-transform">
              <RefreshCw className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm text-gray-800 dark:text-gray-200">Simuler un Nouvel Élève</span>
            <span className="text-xs text-gray-500">XP à 0, tout verrouillé</span>
          </button>
          
          <button 
            onClick={() => { unlockEverything(); setTimeout(() => window.location.reload(), 500); }}
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white dark:bg-[#0D1117] border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all text-center group"
          >
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-500 rounded-full group-hover:scale-110 transition-transform">
              <Unlock className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm text-gray-800 dark:text-gray-200">Mode Caïman (Admin)</span>
            <span className="text-xs text-gray-500">5000 XP, tout débloqué</span>
          </button>

          <button 
            onClick={() => { addXpDev(500); }}
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white dark:bg-[#0D1117] border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all text-center group"
          >
            <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm text-gray-800 dark:text-gray-200">Ajouter +500 XP</span>
            <span className="text-xs text-gray-500">Test de la jauge de niveau</span>
          </button>
        </div>
      </div>
    </div>
  );
};
