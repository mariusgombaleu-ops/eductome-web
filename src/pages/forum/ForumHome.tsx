import { useState } from 'react';
import { MessageSquare, Users, Search, Plus, Crown, X, Tag, Lightbulb, Heart, BookOpen, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '../../contexts/ToastContext';
import { useUser } from '../../contexts/UserContext';
import { db } from '../../config/firebase';
import { collection, onSnapshot, addDoc, query, orderBy, serverTimestamp, limit, startAfter, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';


import { useTheme } from '../../contexts/ThemeContext';

import { MarkdownText } from '../../components/forum/MarkdownText';
import { RoleBadge } from '../../components/forum/RoleBadge';
import { GrandFrereGuide } from '../../components/ui/GrandFrereGuide';

export const ForumHome = () => {
  const { addToast } = useToast();
  const { gainXp, hasActionBeenRewarded, pseudo, userRole, photoURL } = useUser();
  const { palette } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newTopicTitle, setNewTopicTitle] = useState("");
  const [newTopicTag, setNewTopicTag] = useState("");
  const [newTopicTome, setNewTopicTome] = useState("");
  const [newTopicContent, setNewTopicContent] = useState("");

  const [discussions, setDiscussions] = useState<any[]>([]);
  const [lastVisible, setLastVisible] = useState<any>(null);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'forum_posts'), orderBy('createdAt', 'desc'), limit(10));
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
      
      if (snapshot.docs.length > 0) {
        setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
      }
      
      if (snapshot.docs.length < 10) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    });

    return () => unsubscribe();
  }, []);

  const loadMore = async () => {
    if (!lastVisible || !hasMore || isLoadingMore) return;
    setIsLoadingMore(true);
    
    try {
      const q = query(
        collection(db, 'forum_posts'), 
        orderBy('createdAt', 'desc'), 
        startAfter(lastVisible), 
        limit(10)
      );
      
      const snapshot = await getDocs(q);
      
      if (snapshot.empty) {
        setHasMore(false);
        setIsLoadingMore(false);
        return;
      }

      const newDiscussions = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        time: doc.data().time || "À l'instant",
        replies: doc.data().replies || 0,
        tags: doc.data().tags || [],
        isResolved: doc.data().isResolved || false,
        isPertinent: doc.data().isPertinent || false,
        authorPhotoURL: doc.data().authorPhotoURL || null
      }));

      setDiscussions(prev => {
        // Prevent duplicates just in case
        const existingIds = new Set(prev.map(d => d.id));
        const filteredNew = newDiscussions.filter(d => !existingIds.has(d.id));
        return [...prev, ...filteredNew];
      });
      setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
      
      if (snapshot.docs.length < 10) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error loading more posts:", error);
    } finally {
      setIsLoadingMore(false);
    }
  };

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
      <div className="relative bg-gradient-to-r from-[#1A3557] to-[#1976D2] rounded-[28px] p-6 md:p-8 overflow-hidden shadow-lg flex flex-col md:flex-row items-center gap-8 animate-fade-in-up mb-6 transition-colors">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 -mb-12 w-32 h-32 rounded-full bg-white opacity-10 pointer-events-none"></div>
        
        <div className="relative z-10 text-white flex-1 flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2 flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-[12px] backdrop-blur-sm">
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
            className="flex items-center justify-center space-x-2 text-white px-6 py-4 rounded-[16px] font-bold transition-all shadow-lg w-full md:w-auto hover:scale-[1.02]"
            style={{ background: palette.accent, boxShadow: `0 4px 14px ${palette.accent}40` }}
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
              <Search className="h-5 w-5" style={{ color: palette.ink2 }} />
            </div>
            <input
              type="text"
              placeholder="Rechercher une question, un sujet..."
              className="block w-full pl-11 pr-4 py-4 border rounded-[16px] transition-colors shadow-sm focus:outline-none focus:ring-2"
              style={{ background: palette.bg, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent }}
            />
          </div>

          {/* Discussions List */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 delay-150">
            {discussions.map((disc) => (
              <Link to={`/forum/thread/${disc.id}`} key={disc.id} className="block border rounded-[24px] p-6 transition-all cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 group" style={{ background: palette.bg, borderColor: palette.line }}>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    {disc.authorPhotoURL ? (
                      <img 
                        src={disc.authorPhotoURL} 
                        alt={disc.author} 
                        className="w-10 h-10 rounded-full object-cover shrink-0 border"
                        style={{ borderColor: palette.line }}
                      />
                    ) : (
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shrink-0 ${disc.avatar}`}>
                        {disc.initials}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1.5">
                        <span className="font-bold text-sm flex items-center flex-wrap gap-x-2" style={{ color: palette.ink }}>{disc.author} <RoleBadge role={disc.role} /></span>
                        <span className="text-xs flex items-center shrink-0" style={{ color: palette.ink2 }}>
                          • {disc.time}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold transition-colors leading-snug flex flex-wrap items-center gap-2 mb-1" style={{ color: palette.ink }}>
                        <span>{disc.title}</span>
                        {disc.tags.map((tag: any) => (
                          <span key={tag} className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold rounded-[8px] border" style={{ background: palette.bg2, color: palette.ink2, borderColor: palette.line }}>
                            {tag}
                          </span>
                        ))}
                      </h3>
                      
                      <div className="mb-2">
                        {disc.isResolved ? (
                          <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-[8px] font-bold border border-green-200" style={{ background: '#22c55e20', borderColor: '#22c55e30', color: '#22c55e' }}>
                            <CheckCircle className="w-3 h-3" /> Résolu
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-[8px] font-bold border" style={{ background: '#f9731620', borderColor: '#f9731630', color: '#f97316' }}>
                            <Clock className="w-3 h-3" /> En attente
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm line-clamp-2 leading-relaxed" style={{ color: palette.ink2 }}>
                    <MarkdownText text={disc.content} />
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-6 mt-1 pt-4 border-t" style={{ borderColor: palette.line }}>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const actionId = `forum_like_${disc.id}`;
                        if (!hasActionBeenRewarded(actionId)) {
                          gainXp(10, 'Tu as aidé la communauté !', actionId);
                        }
                      }}
                      className={`flex items-center gap-2 text-sm font-bold transition-colors ${hasActionBeenRewarded(`forum_like_${disc.id}`) ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                      style={{ color: hasActionBeenRewarded(`forum_like_${disc.id}`) ? palette.accent : palette.ink }}
                    >
                      <Heart className="w-4 h-4" fill={hasActionBeenRewarded(`forum_like_${disc.id}`) ? "currentColor" : "none"} /> 
                      Aimer
                    </button>
                    <div className="flex items-center gap-2 text-sm font-bold opacity-80" style={{ color: palette.accent }}>
                      <MessageSquare className="w-4 h-4" />
                      {disc.replies} réponses
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {hasMore && (
            <button 
              onClick={loadMore}
              disabled={isLoadingMore}
              className="w-full py-4 rounded-[16px] font-bold border transition-colors disabled:opacity-50"
              style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink2 }}
            >
              {isLoadingMore ? "Chargement..." : "Charger plus de discussions"}
            </button>
          )}

        </div>

        {/* Sidebar Column */}
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 delay-200">
          
          {/* Top Contributors */}
          <div className="border rounded-[24px] p-6 shadow-sm relative overflow-hidden transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2 relative z-10" style={{ color: palette.ink }}>
              <Crown className="w-5 h-5 text-yellow-500" /> Top Contributeurs
            </h3>
            <p className="text-sm mb-6 relative z-10" style={{ color: palette.ink2 }}>Gagne de l'XP en aidant les autres !</p>
            
            <div className="space-y-3 relative z-10">
              {topContributors.map((user) => (
                <div key={user.name} className="flex items-center justify-between p-3 rounded-[16px] border transition-colors" style={{ background: palette.bg2, borderColor: palette.line }}>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs border transition-colors" style={{ background: palette.bg, borderColor: palette.line, color: palette.ink2 }}>
                      {user.rank}
                    </span>
                    <span className="font-bold text-sm" style={{ color: palette.ink }}>{user.name}</span>
                  </div>
                  <span className={`font-bold text-xs px-2 py-1 rounded-[8px] ${user.bg} ${user.color}`}>{user.score}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guidelines */}
          <div className="border rounded-[24px] p-6 shadow-sm transition-colors" style={{ background: palette.bg2, borderColor: palette.line }}>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2" style={{ color: palette.ink }}>
              <Lightbulb className="w-5 h-5" style={{ color: palette.accent }} /> Règles d'or
            </h3>
            <ul className="space-y-3 text-sm" style={{ color: palette.ink }}>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: palette.accent }}>1.</span> Cherche si la question n'a pas déjà été posée.
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: palette.accent }}>2.</span> Précise ta classe et le tome concerné.
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: palette.accent }}>3.</span> Sois bienveillant, on est tous là pour apprendre !
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Modal Nouvelle Discussion */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative z-10 w-full max-w-2xl rounded-[28px] shadow-2xl border flex flex-col max-h-[90vh] transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
            
            <div className="flex items-center justify-between p-6 border-b transition-colors" style={{ borderColor: palette.line }}>
              <h2 className="text-xl font-bold flex items-center gap-2" style={{ color: palette.ink }}>
                <MessageSquare className="w-5 h-5" style={{ color: palette.accent }} /> Poser une question
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 rounded-[12px] transition-colors opacity-60 hover:opacity-100" style={{ color: palette.ink, background: palette.bg2 }}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5 flex-1">
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: palette.ink }}>Titre de ta question</label>
                <input 
                  type="text" 
                  value={newTopicTitle}
                  onChange={(e) => setNewTopicTitle(e.target.value)}
                  placeholder="Ex: Comment trouver les limites en l'infini ?"
                  className="w-full px-4 py-3 border rounded-[16px] transition-colors focus:outline-none focus:ring-2"
                  style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: palette.ink }}>Matière / Tag <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Tag className="w-5 h-5" style={{ color: palette.ink2 }} />
                    </div>
                    <select 
                      value={newTopicTag}
                      onChange={(e) => setNewTopicTag(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border rounded-[16px] appearance-none transition-colors focus:outline-none focus:ring-2"
                      style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent }}
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
                  <label className="block text-sm font-bold mb-2" style={{ color: palette.ink }}>Tome Eductome (Optionnel)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <BookOpen className="w-5 h-5" style={{ color: palette.ink2 }} />
                    </div>
                    <select 
                      value={newTopicTome}
                      onChange={(e) => setNewTopicTome(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border rounded-[16px] appearance-none transition-colors focus:outline-none focus:ring-2"
                      style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent }}
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
                <label className="block text-sm font-bold mb-2" style={{ color: palette.ink }}>Ta question en détail <span className="text-red-500">*</span></label>
                <div className="border rounded-[16px] overflow-hidden transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
                  {/* Toolbar Editeur Simple */}
                  <div className="flex items-center gap-1 border-b p-2 transition-colors" style={{ background: palette.bg2, borderColor: palette.line }}>
                    <button onClick={() => insertMarkdown('**', '**', 'Texte en gras')} className="p-1.5 rounded-[8px] font-bold w-8 h-8 flex items-center justify-center opacity-60 hover:opacity-100 transition-colors" style={{ color: palette.ink }}>B</button>
                    <button onClick={() => insertMarkdown('*', '*', 'Texte en italique')} className="p-1.5 rounded-[8px] italic w-8 h-8 flex items-center justify-center opacity-60 hover:opacity-100 transition-colors" style={{ color: palette.ink }}>I</button>
                    <div className="w-px h-5 mx-1" style={{ background: palette.line }}></div>
                    <button onClick={() => insertMarkdown('![Image description](', ')', 'https://lien-de-l-image.com')} className="p-1.5 rounded-[8px] text-xs font-bold px-2 flex items-center justify-center opacity-60 hover:opacity-100 transition-colors" style={{ color: palette.ink }}>Image</button>
                  </div>
                  <textarea 
                    id="forum-textarea"
                    rows={6}
                    value={newTopicContent}
                    onChange={(e) => setNewTopicContent(e.target.value)}
                    placeholder="Explique ce que tu ne comprends pas. Plus tu donnes de détails (l'exercice exact, ce que tu as déjà essayé), plus on pourra t'aider rapidement !"
                    className="w-full px-4 py-3 bg-transparent focus:outline-none resize-none transition-colors"
                    style={{ color: palette.ink }}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="p-6 border-t flex justify-end gap-3 rounded-b-[28px] transition-colors" style={{ background: palette.bg2, borderColor: palette.line }}>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 rounded-[16px] font-bold transition-colors opacity-80 hover:opacity-100"
                style={{ color: palette.ink, background: palette.bg }}
              >
                Annuler
              </button>
              <button 
                onClick={handlePostQuestion}
                className="px-6 py-2.5 rounded-[16px] font-bold text-white transition-all shadow-md hover:scale-[1.02]"
                style={{ background: palette.accent }}
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
