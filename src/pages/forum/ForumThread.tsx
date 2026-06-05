import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, CheckCircle, Heart, Send, Share2, Clock } from 'lucide-react';
import { useToast } from '../../contexts/ToastContext';
import { useUser } from '../../contexts/UserContext';
import { XP } from '../../constants/xp';
import { fireConfetti } from '../../utils/confetti';
import { MarkdownText } from '../../components/forum/MarkdownText';
import { RoleBadge } from '../../components/forum/RoleBadge';
import { db } from '../../config/firebase';
import { doc, onSnapshot, collection, query, where, addDoc, updateDoc, serverTimestamp, increment } from 'firebase/firestore';

export const ForumThread = () => {
  const { id } = useParams();
  const { addToast } = useToast();
  const { gainXp, userRole, pseudo, hasActionBeenRewarded, photoURL } = useUser();
  
  const [discussion, setDiscussion] = useState<any>(null);
  const [replies, setReplies] = useState<any[]>([]);
  const [newReply, setNewReply] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    // Load discussion
    const discussionRef = doc(db, 'forum_posts', id);
    const unsubDiscussion = onSnapshot(discussionRef, (docSnap) => {
      if (docSnap.exists()) {
        setDiscussion({ id: docSnap.id, ...docSnap.data() });
      } else {
        setDiscussion(null);
      }
      setLoading(false);
    });

    // Load replies (without orderBy to avoid missing index error)
    const q = query(
      collection(db, 'forum_replies'),
      where('discussionId', '==', id)
    );
    const unsubReplies = onSnapshot(q, (snapshot) => {
      const fetched = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // Client-side sorting
      fetched.sort((a: any, b: any) => {
        const timeA = a.createdAt?.toMillis ? a.createdAt.toMillis() : 0;
        const timeB = b.createdAt?.toMillis ? b.createdAt.toMillis() : 0;
        return timeA - timeB;
      });
      setReplies(fetched);
    });

    return () => {
      unsubDiscussion();
      unsubReplies();
    };
  }, [id]);

  const handlePostReply = async () => {
    if (!newReply.trim() || !id) return;
    
    const reply = {
      discussionId: id,
      author: pseudo,
      avatar: userRole === 'grand_frere' || userRole === 'admin' ? "bg-[#1A3557]" : userRole === 'equipe' ? "bg-[#D81B60]" : "bg-gray-400",
      initials: pseudo ? pseudo.substring(0, 2).toUpperCase() : "CH",
      content: newReply,
      time: "À l'instant",
      createdAt: serverTimestamp(),
      isCorrect: false,
      role: userRole,
      authorPhotoURL: photoURL || null
    };
    
    try {
      await addDoc(collection(db, 'forum_replies'), reply);
      
      // Update replies count in discussion
      const discussionRef = doc(db, 'forum_posts', id);
      await updateDoc(discussionRef, {
        replies: increment(1)
      });

      setNewReply("");
      addToast({ type: 'success', title: 'Réponse publiée', message: 'En attente de validation pour gagner tes XP !' });
    } catch (e) {
      addToast({ type: 'error', title: 'Erreur', message: 'Impossible de publier la réponse.' });
    }
  };

  const markAsCorrect = async (replyId: string) => {
    if (!discussion) return;
    const canMark = userRole === 'admin' || userRole === 'grand_frere' || userRole === 'equipe' || pseudo === discussion.author;
    if (!canMark) {
      addToast({ type: 'error', title: 'Action non autorisée', message: 'Seul l\'auteur de la question peut valider la solution.' });
      return;
    }

    try {
      // Update reply
      await updateDoc(doc(db, 'forum_replies', replyId), { isCorrect: true });
      // Update discussion
      await updateDoc(doc(db, 'forum_posts', id as string), { isResolved: true });
      
      fireConfetti();
      addToast({ type: 'success', title: 'Réponse validée !', message: 'Cette réponse a été marquée comme la meilleure solution.' });
      gainXp(XP.FORUM_SOLUTION, 'Réponse validée comme solution', `forum_solution_${replyId}`);
    } catch (e) {
      addToast({ type: 'error', title: 'Erreur', message: 'Impossible de valider la réponse.' });
    }
  };

  const markDiscussionAsPertinent = async () => {
    if (!discussion) return;
    const canMark = userRole === 'admin' || userRole === 'grand_frere';
    if (!canMark) {
      addToast({ type: 'error', title: 'Action non autorisée', message: 'Seuls les Grands Frères peuvent marquer une question comme pertinente.' });
      return;
    }

    try {
      await updateDoc(doc(db, 'forum_posts', id as string), { isPertinent: true });
      fireConfetti();
      addToast({ type: 'success', title: 'Question validée !', message: 'Cette question a été marquée comme pertinente.' });
      gainXp(10, 'Question pertinente', `forum_question_pertinent_${discussion.id}`);
    } catch (e) {
      addToast({ type: 'error', title: 'Erreur', message: 'Impossible de marquer la question.' });
    }
  };

  if (loading) return <div className="p-8 text-center text-gray-500">Chargement...</div>;
  if (!discussion) return <div className="p-8 text-center text-gray-500">Discussion introuvable.</div>;

  return (
    <div className="max-w-4xl mx-auto space-y-6 px-4 md:px-6 lg:px-8 pt-6 font-poppins pb-20 animate-fade-in-up">
      
      {/* Header / Retour */}
      <div className="flex items-center gap-4 mb-8">
        <Link to="/forum" className="p-2 rounded-xl bg-white dark:bg-[#161B22] border border-[#E1E4E8] dark:border-[#30363D] text-[#6B7280] dark:text-[#8B949E] hover:bg-[#F8F9FA] dark:hover:bg-[#30363D] transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold font-playfair text-[#1A1A2E] dark:text-white">Discussion</h1>
      </div>

      {/* Main Question */}
      <div className={`bg-white dark:bg-[#161B22] border ${discussion.isPertinent ? 'border-purple-400 dark:border-purple-600' : 'border-[#E1E4E8] dark:border-[#30363D]'} rounded-2xl p-6 shadow-sm relative overflow-hidden`}>
        <div className="absolute top-0 left-0 w-1 h-full bg-[#D81B60]"></div>
        

        
        <div className="flex flex-col gap-4 mb-4 mt-2">
          <div className="flex items-start gap-4">
            {discussion.authorPhotoURL ? (
              <img 
                src={discussion.authorPhotoURL} 
                alt={discussion.author} 
                className="w-12 h-12 rounded-full object-cover shrink-0 border border-[#E1E4E8] dark:border-[#30363D]"
              />
            ) : (
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shrink-0 ${discussion.avatar}`}>
                {discussion.initials}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[#6B7280] dark:text-[#8B949E] mb-2">
                <span className="font-bold text-[#1A1A2E] dark:text-[#E6EDF3] flex flex-wrap items-center gap-x-2">{discussion.author} <RoleBadge role={discussion.role} /></span>
                <span className="hidden md:inline">•</span>
                <span className="shrink-0">{discussion.time}</span>
              </div>
              <h2 className="text-xl font-bold text-[#1A1A2E] dark:text-white flex flex-wrap items-center gap-2 leading-snug mb-1">
                <span className="break-words max-w-full">{discussion.title}</span>
                {discussion.tags && discussion.tags.map((t: string) => (
                  <span key={t} className="px-2 py-0.5 bg-[#F8F9FA] dark:bg-[#0D1117] rounded text-[10px] uppercase tracking-wider border border-[#E1E4E8] dark:border-[#30363D] font-bold text-[#6B7280] dark:text-[#8B949E]">{t}</span>
                ))}
              </h2>
              <div className="mb-2">
                {discussion.isResolved ? (
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

          <div className="text-[#1A1A2E] dark:text-[#E6EDF3] leading-relaxed whitespace-pre-wrap">
            <MarkdownText text={discussion.content} />
          </div>

          <div className="mt-2 pt-4 border-t border-[#E1E4E8] dark:border-[#30363D] flex flex-wrap items-center gap-y-3 gap-x-6">
            <button 
              onClick={() => {
                const actionId = `forum_like_${discussion.id}`;
                if (!hasActionBeenRewarded(actionId)) {
                  gainXp(10, 'Tu as aidé la communauté !', actionId);
                }
              }}
              className={`flex items-center gap-2 text-sm font-bold transition-colors ${hasActionBeenRewarded(`forum_like_${discussion.id}`) ? 'text-[#D81B60]' : 'text-[#6B7280] dark:text-[#8B949E] hover:text-[#D81B60]'}`}
            >
              <Heart className="w-4 h-4" fill={hasActionBeenRewarded(`forum_like_${discussion.id}`) ? "currentColor" : "none"} /> Aimer
            </button>
            <button 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: discussion.title,
                    text: "Regarde cette discussion sur Eductome !",
                    url: window.location.href,
                  }).catch(console.error);
                }
              }}
              className="flex items-center gap-2 text-sm font-bold text-[#6B7280] dark:text-[#8B949E] hover:text-[#1976D2] transition-colors"
            >
              <Share2 className="w-4 h-4" /> Partager
            </button>
            {!discussion.isPertinent ? (
              (userRole === 'admin' || userRole === 'grand_frere') && (
                <button 
                  onClick={markDiscussionAsPertinent}
                  className="flex items-center gap-2 text-sm font-bold text-[#6B7280] dark:text-[#8B949E] hover:text-purple-600 transition-colors"
                >
                  <CheckCircle className="w-4 h-4" /> Pertinente ?
                </button>
              )
            ) : (
              <div className="flex items-center gap-2 text-sm font-bold text-[#6B7280] dark:text-[#8B949E]">
                <CheckCircle className="w-4 h-4 text-green-500" /> Pertinente
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Replies count */}
      <h3 className="text-lg font-bold text-[#1A1A2E] dark:text-white flex items-center gap-2 mt-8 mb-4">
        <MessageSquare className="w-5 h-5 text-[#1976D2]" /> {replies.length} Réponses
      </h3>

      {/* Replies List */}
      <div className="space-y-4">
        {replies.map((reply) => (
          <div key={reply.id} className={`bg-white dark:bg-[#161B22] border ${reply.isCorrect ? 'border-green-400 dark:border-green-600' : 'border-[#E1E4E8] dark:border-[#30363D]'} rounded-2xl p-6 shadow-sm relative`}>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                {reply.authorPhotoURL ? (
                  <img 
                    src={reply.authorPhotoURL} 
                    alt={reply.author} 
                    className="w-10 h-10 rounded-full object-cover shrink-0 border border-[#E1E4E8] dark:border-[#30363D]"
                  />
                ) : (
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shrink-0 ${reply.avatar}`}>
                    {reply.initials}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="font-bold text-[#1A1A2E] dark:text-[#E6EDF3] text-sm flex flex-wrap items-center gap-x-2">{reply.author} <RoleBadge role={reply.role} /></span>
                    <span className="text-xs text-[#6B7280] dark:text-[#8B949E] shrink-0">• {reply.time}</span>
                  </div>
                </div>
              </div>

              <div className="text-[#1A1A2E] dark:text-[#E6EDF3] text-sm leading-relaxed whitespace-pre-wrap">
                <MarkdownText text={reply.content} />
              </div>

              <div className="mt-1 pt-4 border-t border-[#E1E4E8] dark:border-[#30363D] flex flex-wrap items-center gap-y-3 gap-x-6">
                <button 
                  onClick={() => {
                    const actionId = `forum_reply_like_${reply.id}`;
                    if (!hasActionBeenRewarded(actionId)) {
                      gainXp(5, 'Tu as encouragé un membre', actionId);
                    }
                  }}
                  className={`flex items-center gap-1.5 text-xs font-bold transition-colors ${hasActionBeenRewarded(`forum_reply_like_${reply.id}`) ? 'text-[#D81B60]' : 'text-[#6B7280] dark:text-[#8B949E] hover:text-[#D81B60]'}`}
                >
                  <Heart className="w-3 h-3" fill={hasActionBeenRewarded(`forum_reply_like_${reply.id}`) ? "currentColor" : "none"} /> Aimer
                </button>
                {!reply.isCorrect && (
                  <button 
                    onClick={() => markAsCorrect(reply.id)}
                    className="flex items-center gap-1.5 text-xs font-bold text-[#6B7280] dark:text-[#8B949E] hover:text-green-600 transition-colors"
                  >
                    <CheckCircle className="w-3 h-3" /> Marquer comme solution
                  </button>
                )}
                {reply.isCorrect && (
                  <div className="flex items-center gap-1.5 text-green-600 dark:text-green-500 text-xs font-bold bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-md border border-green-200 dark:border-green-800">
                    <CheckCircle className="w-3 h-3" /> Solution Validée
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reply Input */}
      <div className="bg-white dark:bg-[#161B22] border border-[#E1E4E8] dark:border-[#30363D] rounded-2xl p-4 shadow-sm mt-8 flex gap-4 items-start">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shrink-0 ${userRole === 'grand_frere' || userRole === 'admin' ? "bg-[#1A3557]" : userRole === 'equipe' ? "bg-[#D81B60]" : "bg-gray-400"}`}>
          {pseudo ? pseudo.substring(0, 2).toUpperCase() : "CH"}
        </div>
        <div className="flex-1 border border-[#E1E4E8] dark:border-[#30363D] rounded-xl overflow-hidden focus-within:border-[#1976D2] focus-within:ring-1 focus-within:ring-[#1976D2] transition-colors bg-[#F8F9FA] dark:bg-[#0D1117]">
          <textarea
            rows={3}
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
            placeholder="Écrire une réponse pour aider..."
            className="w-full px-4 py-3 bg-transparent text-[#1A1A2E] dark:text-white placeholder-[#9CA3AF] dark:placeholder-[#6E7681] focus:outline-none resize-none"
          ></textarea>
          <div className="p-2 border-t border-[#E1E4E8] dark:border-[#30363D] bg-white dark:bg-[#161B22] flex justify-between items-center">
            <span className="text-xs text-[#6B7280] dark:text-[#8B949E] px-2 font-medium">Gagne {XP.FORUM_SOLUTION} XP si ta réponse est validée</span>
            <button 
              onClick={handlePostReply}
              className="px-4 py-2 bg-[#D81B60] hover:bg-pink-700 text-white rounded-lg font-bold text-sm flex items-center gap-2 transition-colors"
            >
              <Send className="w-4 h-4" /> Publier
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
