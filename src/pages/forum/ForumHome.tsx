import { useState } from 'react';
import { MessageSquare, Users, Search, Plus, Crown, X, Tag, Lightbulb, Heart, BookOpen, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '../../contexts/ToastContext';
import { useUser } from '../../contexts/UserContext';
import { db } from '../../config/firebase';
import { collection, onSnapshot, addDoc, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { useEffect } from 'react';


import { MarkdownText } from '../../components/forum/MarkdownText';
import { RoleBadge } from '../../components/forum/RoleBadge';
import { GrandFrereGuide } from '../../components/ui/GrandFrereGuide';

export const ForumHome = () => {
  const { addToast } = useToast();
  const { gainXp, hasActionBeenRewarded, pseudo, userRole, photoURL } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newTopicTitle, setNewTopicTitle] = useState("");
  const [newTopicTag, setNewTopicTag] = useState("");
  const [newTopicTome, setNewTopicTome] = useState("");
  const [newTopicContent, setNewTopicContent] = useState("");

  const [discussions, setDiscussions] = useState<any[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'forum_posts'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedDiscussions = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        // Format relative time if needed, or just use the saved time string for now
        time: doc.data().time || "À l'instant",
        replies: doc.data().replies || 0,
        tags: doc.data().tags || [],
        isResolved: doc.data().isResolved || false,
        isPertinent: doc.data().isPertinent || false,
        authorPhotoURL: doc.data().authorPhotoURL || null
      }));
      setDiscussions(fetchedDiscussions);
    });

    return () => unsubscribe();
  }, []);

  const insertMarkdown = (prefix: string, suffix: string, placeholder: string) => {
    const textarea = document.getElementById('forum-textarea') as HTMLTextAreaElement;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;
      const selectedText = text.substring(start, end) || placeholder;
      const newText = text.substring(0, start) + prefix + selectedText + suffix + text.substring(end);
      setNewTopicContent(newText);
      
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + prefix.length, start + prefix.length + selectedText.length);
      }, 0);
    } else {
      setNewTopicContent(prev => prev + ` ${prefix}${placeholder}${suffix} `);
    }
  };

  const handlePostQuestion = async () => {
    if (!newTopicTitle.trim() || !newTopicContent.trim() || !newTopicTag) {
      addToast({ type: 'error', title: 'Erreur', message: 'Veuillez remplir tous les champs.' });
      return;
    }
    
    const tags = [newTopicTag === 'maths' ? 'Mathématiques' : newTopicTag === 'pc' ? 'Physique-Chimie' : newTopicTag === 'svt' ? 'SVT' : newTopicTag === 'philo' ? 'Philosophie' : 'Histoire'];
    if (newTopicTome) {
      tags.push(newTopicTome);
    }
    
    const newDiscussion = {
      title: newTopicTitle,
      content: newTopicContent,
      author: pseudo, 
      avatar: userRole === 'grand_frere' || userRole === 'admin' ? "bg-[#1A3557]" : userRole === 'equipe' ? "bg-[#D81B60]" : "bg-gray-400",
      initials: pseudo ? pseudo.substring(0, 2).toUpperCase() : "CH",
      replies: 0,
      time: "À l'instant",
      createdAt: serverTimestamp(),
      tags: tags,
      role: userRole,
      isResolved: false,
      isPertinent: false,
      authorPhotoURL: photoURL || null
    };

    try {
      await addDoc(collection(db, 'forum_posts'), newDiscussion);
      setIsModalOpen(false);
      setNewTopicTitle("");
      setNewTopicTag("");
      setNewTopicTome("");
      setNewTopicContent("");
      addToast({ type: 'success', title: 'Question publiée', message: 'Ta question sera examinée. Si elle est pertinente, tu gagneras 10 XP !' });
    } catch (e) {
      addToast({ type: 'error', title: 'Erreur', message: 'Impossible de publier la question.' });
    }
  };

  const topContributors = [
    { name: "Marie_L", score: "+450 XP", color: "text-[#D81B60]", bg: "bg-[#D81B60]/10", rank: 1 },
    { name: "Prof_Koffi", score: "+320 XP", color: "text-[#1976D2]", bg: "bg-[#1976D2]/10", rank: 2 },
    { name: "Alexandre", score: "+210 XP", color: "text-[#4CAF50]", bg: "bg-[#4CAF50]/10", rank: 3 },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 px-4 md:px-6 lg:px-8 pt-6 font-poppins pb-20 transition-colors duration-300">
      
      <GrandFrereGuide 
        id="forum"
        message="Ici, tu n'es jamais seul(e). Pose tes questions, aide tes camarades, et n'oublie pas : les meilleures questions sont celles qui expliquent bien ce qui bloque. On est ensemble !"
      />

      {/* Header Section (Hero Banner) */}
      <div className="relative bg-gradient-to-r from-eductome-marine to-eductome-sky rounded-2xl p-6 md:p-8 overflow-hidden shadow-lg flex flex-col md:flex-row items-center gap-8 animate-fade-in-up mb-6">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 -mb-12 w-32 h-32 rounded-full bg-white opacity-10 pointer-events-none"></div>
        
        <div className="relative z-10 text-white flex-1 flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2 flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
                <Users className="w-8 h-8 text-white" />
              </div>
              Le Forum d'Entraide
            </h1>
            <p className="text-blue-100 max-w-lg mt-4">
              Bloqué(e) sur un exercice ? Pose ta question à la communauté et aux grands frères EDUCTOME.
            </p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center space-x-2 bg-[#D81B60] hover:bg-pink-700 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg w-full md:w-auto"
          >
            <Plus className="w-5 h-5" />
            <span>Poser une question</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Column: Discussions */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Search */}
          <div className="relative animate-in fade-in delay-100">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#9CA3AF] dark:text-[#6E7681]" />
            </div>
            <input
              type="text"
              placeholder="Rechercher une question, un sujet..."
              className="block w-full pl-11 pr-4 py-4 border border-[#E1E4E8] dark:border-[#30363D] rounded-xl bg-white dark:bg-[#161B22] text-[#1A1A2E] dark:text-white placeholder-[#9CA3AF] dark:placeholder-[#6E7681] focus:outline-none focus:ring-2 focus:ring-[#D81B60] focus:border-[#D81B60] transition-colors shadow-sm"
            />
          </div>

          {/* Discussions List */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 delay-150">
            {discussions.map((disc) => (
              <Link to={`/forum/thread/${disc.id}`} key={disc.id} className="block bg-white dark:bg-[#161B22] border border-[#E1E4E8] dark:border-[#30363D] rounded-2xl p-6 hover:border-[#1976D2] dark:hover:border-[#1976D2] transition-all cursor-pointer shadow-sm group">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    {disc.authorPhotoURL ? (
                      <img 
                        src={disc.authorPhotoURL} 
                        alt={disc.author} 
                        className="w-10 h-10 rounded-full object-cover shrink-0 border border-[#E1E4E8] dark:border-[#30363D]"
                      />
                    ) : (
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shrink-0 ${disc.avatar}`}>
                        {disc.initials}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1.5">
                        <span className="font-bold text-[#1A1A2E] dark:text-[#E6EDF3] text-sm flex items-center flex-wrap gap-x-2">{disc.author} <RoleBadge role={disc.role} /></span>
                        <span className="text-xs text-[#6B7280] dark:text-[#8B949E] flex items-center shrink-0">
                          • {disc.time}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-[#1A1A2E] dark:text-white group-hover:text-[#1976D2] transition-colors leading-snug flex flex-wrap items-center gap-2 mb-1">
                        <span>{disc.title}</span>
                        {disc.tags.map((tag: any) => (
                          <span key={tag} className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold rounded-md bg-[#F8F9FA] dark:bg-[#0D1117] text-[#6B7280] dark:text-[#8B949E] border border-[#E1E4E8] dark:border-[#30363D]">
                            {tag}
                          </span>
                        ))}
                      </h3>
                      
                      <div className="mb-2">
                        {disc.isResolved ? (
                          <span className="inline-flex items-center gap-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs px-2 py-0.5 rounded-md font-bold border border-green-200 dark:border-green-800">
                            <CheckCircle className="w-3 h-3" /> Résolu
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs px-2 py-0.5 rounded-md font-bold border border-orange-200 dark:border-orange-800">
                            <Clock className="w-3 h-3" /> En attente
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-[#6B7280] dark:text-[#8B949E] line-clamp-2 leading-relaxed">
                    <MarkdownText text={disc.content} />
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-6 mt-1 pt-4 border-t border-[#E1E4E8] dark:border-[#30363D]">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const actionId = `forum_like_${disc.id}`;
                        if (!hasActionBeenRewarded(actionId)) {
                          gainXp(10, 'Tu as aidé la communauté !', actionId);
                        }
                      }}
                      className={`flex items-center gap-2 text-sm font-bold transition-colors ${hasActionBeenRewarded(`forum_like_${disc.id}`) ? 'text-[#D81B60]' : 'text-[#6B7280] hover:text-[#D81B60]'}`}
                    >
                      <Heart className="w-4 h-4" fill={hasActionBeenRewarded(`forum_like_${disc.id}`) ? "currentColor" : "none"} /> 
                      Aimer
                    </button>
                    <div className="flex items-center gap-2 text-sm font-bold text-[#1976D2]">
                      <MessageSquare className="w-4 h-4" />
                      {disc.replies} réponses
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <button className="w-full py-4 rounded-xl font-bold border border-[#E1E4E8] dark:border-[#30363D] bg-[#F8F9FA] dark:bg-[#161B22] text-[#6B7280] dark:text-[#8B949E] hover:bg-[#E1E4E8] dark:hover:bg-[#30363D] transition-colors">
            Charger plus de discussions
          </button>

        </div>

        {/* Sidebar Column */}
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 delay-200">
          
          {/* Top Contributors */}
          <div className="bg-white dark:bg-[#161B22] border border-[#E1E4E8] dark:border-[#30363D] rounded-2xl p-6 shadow-sm relative overflow-hidden">
            <h3 className="font-bold text-lg text-[#1A1A2E] dark:text-white mb-2 flex items-center gap-2 relative z-10">
              <Crown className="w-5 h-5 text-yellow-500" /> Top Contributeurs
            </h3>
            <p className="text-sm text-[#6B7280] dark:text-[#8B949E] mb-6 relative z-10">Gagne de l'XP en aidant les autres !</p>
            
            <div className="space-y-3 relative z-10">
              {topContributors.map((user) => (
                <div key={user.name} className={`flex items-center justify-between p-3 rounded-xl border border-[#E1E4E8] dark:border-[#30363D] bg-[#F8F9FA] dark:bg-[#0D1117]`}>
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs bg-white dark:bg-[#161B22] border border-[#E1E4E8] dark:border-[#30363D] text-[#6B7280] dark:text-[#8B949E]`}>
                      {user.rank}
                    </span>
                    <span className="font-bold text-[#1A1A2E] dark:text-[#E6EDF3] text-sm">{user.name}</span>
                  </div>
                  <span className={`font-bold text-xs px-2 py-1 rounded-md ${user.bg} ${user.color}`}>{user.score}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guidelines */}
          <div className="bg-[#EBF5FB] dark:bg-[#1A3557]/20 border border-[#1976D2]/20 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-lg text-[#1A1A2E] dark:text-white mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#1976D2]" /> Règles d'or
            </h3>
            <ul className="space-y-3 text-sm text-[#1A1A2E] dark:text-[#E6EDF3]">
              <li className="flex items-start gap-2">
                <span className="text-[#1976D2] font-bold">1.</span> Cherche si la question n'a pas déjà été posée.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1976D2] font-bold">2.</span> Précise ta classe et le tome concerné.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1976D2] font-bold">3.</span> Sois bienveillant, on est tous là pour apprendre !
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Modal Nouvelle Discussion */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative z-10 w-full max-w-2xl bg-white dark:bg-[#161B22] rounded-2xl shadow-2xl border border-[#E1E4E8] dark:border-[#30363D] flex flex-col max-h-[90vh]">
            
            <div className="flex items-center justify-between p-6 border-b border-[#E1E4E8] dark:border-[#30363D]">
              <h2 className="text-xl font-bold text-[#1A1A2E] dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#D81B60]" /> Poser une question
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 rounded-lg text-[#6B7280] dark:text-[#8B949E] hover:bg-[#F8F9FA] dark:hover:bg-[#30363D] transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5 flex-1">
              <div>
                <label className="block text-sm font-bold text-[#1A1A2E] dark:text-[#E6EDF3] mb-2">Titre de ta question</label>
                <input 
                  type="text" 
                  value={newTopicTitle}
                  onChange={(e) => setNewTopicTitle(e.target.value)}
                  placeholder="Ex: Comment trouver les limites en l'infini ?"
                  className="w-full px-4 py-3 border border-[#E1E4E8] dark:border-[#30363D] rounded-xl bg-[#F8F9FA] dark:bg-[#0D1117] text-[#1A1A2E] dark:text-white placeholder-[#9CA3AF] dark:placeholder-[#6E7681] focus:outline-none focus:border-[#1976D2] focus:ring-1 focus:ring-[#1976D2] transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#1A1A2E] dark:text-[#E6EDF3] mb-2">Matière / Tag <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Tag className="w-5 h-5 text-[#9CA3AF] dark:text-[#6E7681]" />
                    </div>
                    <select 
                      value={newTopicTag}
                      onChange={(e) => setNewTopicTag(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-[#E1E4E8] dark:border-[#30363D] rounded-xl bg-[#F8F9FA] dark:bg-[#0D1117] text-[#1A1A2E] dark:text-white focus:outline-none focus:border-[#1976D2] focus:ring-1 focus:ring-[#1976D2] transition-colors appearance-none"
                    >
                      <option value="">Sélectionner...</option>
                      <option value="maths">Mathématiques</option>
                      <option value="pc">Physique-Chimie</option>
                      <option value="svt">SVT</option>
                      <option value="philo">Philosophie</option>
                      <option value="histoire">Histoire-Géo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#1A1A2E] dark:text-[#E6EDF3] mb-2">Tome Eductome (Optionnel)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <BookOpen className="w-5 h-5 text-[#9CA3AF] dark:text-[#6E7681]" />
                    </div>
                    <select 
                      value={newTopicTome}
                      onChange={(e) => setNewTopicTome(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-[#E1E4E8] dark:border-[#30363D] rounded-xl bg-[#F8F9FA] dark:bg-[#0D1117] text-[#1A1A2E] dark:text-white focus:outline-none focus:border-[#1976D2] focus:ring-1 focus:ring-[#1976D2] transition-colors appearance-none"
                    >
                      <option value="">Aucun tome spécifique</option>
                      <option value="Tome 1 : Les Limites">Tome 1 : Les Limites</option>
                      <option value="Tome 2 : Les Dérivées">Tome 2 : Les Dérivées</option>
                      <option value="Tome 3 : Les Primitives">Tome 3 : Les Primitives</option>
                      <option value="Tome 11 : Équa. Diff.">Tome 11 : Équa. Diff.</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1A1A2E] dark:text-[#E6EDF3] mb-2">Ta question en détail <span className="text-red-500">*</span></label>
                <div className="border border-[#E1E4E8] dark:border-[#30363D] rounded-xl overflow-hidden bg-white dark:bg-[#0D1117]">
                  {/* Toolbar Editeur Simple */}
                  <div className="flex items-center gap-1 border-b border-[#E1E4E8] dark:border-[#30363D] p-2 bg-[#F8F9FA] dark:bg-[#161B22]">
                    <button onClick={() => insertMarkdown('**', '**', 'Texte en gras')} className="p-1.5 rounded hover:bg-[#E1E4E8] dark:hover:bg-[#30363D] text-[#6B7280] dark:text-[#8B949E] font-bold w-8 h-8 flex items-center justify-center">B</button>
                    <button onClick={() => insertMarkdown('*', '*', 'Texte en italique')} className="p-1.5 rounded hover:bg-[#E1E4E8] dark:hover:bg-[#30363D] text-[#6B7280] dark:text-[#8B949E] italic w-8 h-8 flex items-center justify-center">I</button>
                    <div className="w-px h-5 bg-[#E1E4E8] dark:bg-[#30363D] mx-1"></div>
                    <button onClick={() => insertMarkdown('![Image description](', ')', 'https://lien-de-l-image.com')} className="p-1.5 rounded hover:bg-[#E1E4E8] dark:hover:bg-[#30363D] text-[#6B7280] dark:text-[#8B949E] text-xs font-bold px-2 flex items-center justify-center">Image</button>
                  </div>
                  <textarea 
                    id="forum-textarea"
                    rows={6}
                    value={newTopicContent}
                    onChange={(e) => setNewTopicContent(e.target.value)}
                    placeholder="Explique ce que tu ne comprends pas. Plus tu donnes de détails (l'exercice exact, ce que tu as déjà essayé), plus on pourra t'aider rapidement !"
                    className="w-full px-4 py-3 bg-transparent text-[#1A1A2E] dark:text-white placeholder-[#9CA3AF] dark:placeholder-[#6E7681] focus:outline-none resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-[#E1E4E8] dark:border-[#30363D] flex justify-end gap-3 bg-[#F8F9FA] dark:bg-[#161B22] rounded-b-2xl">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 rounded-xl font-bold text-[#6B7280] dark:text-[#8B949E] hover:bg-[#E1E4E8] dark:hover:bg-[#30363D] transition-colors"
              >
                Annuler
              </button>
              <button 
                onClick={handlePostQuestion}
                className="px-6 py-2.5 rounded-xl font-bold text-white bg-[#D81B60] hover:bg-pink-700 transition-colors shadow-md"
              >
                Publier la question
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
