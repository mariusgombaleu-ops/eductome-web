import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, CheckCircle, Heart, Send, Share2 } from 'lucide-react';
import { useToast } from '../../contexts/ToastContext';
import { useUser } from '../../contexts/UserContext';
import { XP } from '../../constants/xp';
import { fireConfetti } from '../../utils/confetti';
import { MarkdownText } from '../../components/forum/MarkdownText';
import { RoleBadge } from '../../components/forum/RoleBadge';

export const ForumThread = () => {
  const { id } = useParams();
  const { addToast } = useToast();
  const { gainXp, userRole, pseudo } = useUser();
  
  const [discussion, setDiscussion] = useState<any>(null);
  const [replies, setReplies] = useState<any[]>([]);
  const [newReply, setNewReply] = useState("");

  useEffect(() => {
    // Load discussion from local storage
    const saved = localStorage.getItem('eductome_forum_discussions');
    if (saved) {
      const parsed = JSON.parse(saved);
      const found = parsed.find((d: any) => d.id.toString() === id);
      if (found) setDiscussion(found);
    }
    
    // Load replies
    const savedReplies = localStorage.getItem(`eductome_forum_replies_${id}`);
    if (savedReplies) {
      setReplies(JSON.parse(savedReplies));
    } else {
      // Mock replies for existing discussions
      if (id === "1") {
        setReplies([
          {
            id: 101,
            author: "Prof_Koffi",
            avatar: "bg-[#1976D2]",
            initials: "PK",
            content: "Salut Alexandre. Quand le second membre est un polynôme de degré n, tu dois chercher une solution particulière qui est aussi un polynôme de degré n. Par exemple si c'est ax + b, tu poses y0 = cx + d.",
            time: "Il y a 1h",
            isCorrect: true
          },
          {
            id: 102,
            author: "Marie_L",
            avatar: "bg-[#D81B60]",
            initials: "ML",
            content: "Merci Prof ! Et si on a un second membre avec une exponentielle ?",
            time: "Il y a 30m",
            isCorrect: false
          }
        ]);
      }
    }
  }, [id]);

  const handlePostReply = () => {
    if (!newReply.trim()) return;
    
    const reply = {
      id: Date.now(),
      author: pseudo,
      avatar: userRole === 'grand_frere' || userRole === 'admin' ? "bg-[#1A3557]" : userRole === 'equipe' ? "bg-[#D81B60]" : "bg-gray-400",
      initials: pseudo ? pseudo.substring(0, 2).toUpperCase() : "CH",
      content: newReply,
      time: "À l'instant",
      isCorrect: false,
      role: userRole
    };
    
    const updatedReplies = [...replies, reply];
    setReplies(updatedReplies);
    localStorage.setItem(`eductome_forum_replies_${id}`, JSON.stringify(updatedReplies));
    
    // Mettre à jour le compteur de réponses
    const saved = localStorage.getItem('eductome_forum_discussions');
    if (saved) {
      const parsed = JSON.parse(saved);
      const updatedDiscussions = parsed.map((d: any) => 
        d.id.toString() === id ? { ...d, replies: d.replies + 1 } : d
      );
      localStorage.setItem('eductome_forum_discussions', JSON.stringify(updatedDiscussions));
    }

    setNewReply("");
    addToast({ type: 'success', title: 'Réponse publiée', message: 'En attente de validation pour gagner tes XP !' });
  };

  const markAsCorrect = (replyId: number) => {
    const updatedReplies = replies.map(r => 
      r.id === replyId ? { ...r, isCorrect: true } : { ...r, isCorrect: false }
    );
    setReplies(updatedReplies);
    localStorage.setItem(`eductome_forum_replies_${id}`, JSON.stringify(updatedReplies));
    
    const updatedDiscussion = { ...discussion, isResolved: true };
    setDiscussion(updatedDiscussion);
    
    const savedDiscussions = localStorage.getItem('eductome_forum_discussions');
    if (savedDiscussions) {
      const parsed = JSON.parse(savedDiscussions);
      const updatedList = parsed.map((d: any) => d.id === discussion.id ? updatedDiscussion : d);
      localStorage.setItem('eductome_forum_discussions', JSON.stringify(updatedList));
    }
    
    fireConfetti();
    addToast({ type: 'success', title: 'Réponse validée !', message: 'Cette réponse a été marquée comme la meilleure solution.' });
    gainXp(XP.FORUM_SOLUTION, 'Réponse validée comme solution', `forum_solution_${replyId}`);
  };

  const markDiscussionAsPertinent = () => {
    const updated = { ...discussion, isPertinent: true };
    setDiscussion(updated);
    
    // update localStorage
    const saved = localStorage.getItem('eductome_forum_discussions');
    if (saved) {
      const parsed = JSON.parse(saved);
      const updatedList = parsed.map((d: any) => d.id === discussion.id ? updated : d);
      localStorage.setItem('eductome_forum_discussions', JSON.stringify(updatedList));
    }
    
    fireConfetti();
    addToast({ type: 'success', title: 'Question validée !', message: 'Cette question a été marquée comme pertinente.' });
    gainXp(10, 'Question pertinente', `forum_question_pertinent_${discussion.id}`);
  };

  if (!discussion) return <div className="p-8 text-center">Chargement...</div>;

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
        
        {discussion.isPertinent && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 text-purple-600 dark:text-purple-400 text-sm font-bold bg-purple-50 dark:bg-purple-900/20 px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800">
            <CheckCircle className="w-4 h-4" /> Question Pertinente
          </div>
        )}
        
        <div className="flex items-start gap-4 mb-4 mt-2">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shrink-0 ${discussion.avatar}`}>
            {discussion.initials}
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-[#1A1A2E] dark:text-white mb-1 flex items-center gap-2">
              {discussion.title}
              {discussion.isResolved && (
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs px-2 py-1 rounded-md font-bold flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Résolu
                </span>
              )}
            </h2>
            <div className="flex items-center gap-3 text-sm text-[#6B7280] dark:text-[#8B949E]">
              <span className="font-bold text-[#1A1A2E] dark:text-[#E6EDF3] flex items-center">{discussion.author} <RoleBadge role={discussion.role} /></span>
              <span>•</span>
              <span>{discussion.time}</span>
              <span>•</span>
              <div className="flex gap-2">
                {discussion.tags.map((t: string) => (
                  <span key={t} className="px-2 py-0.5 bg-[#F8F9FA] dark:bg-[#0D1117] rounded text-xs border border-[#E1E4E8] dark:border-[#30363D]">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-[#1A1A2E] dark:text-[#E6EDF3] leading-relaxed whitespace-pre-wrap ml-16">
          <MarkdownText text={discussion.content} />
        </div>

        <div className="mt-6 ml-16 flex gap-4">
          <button className="flex items-center gap-2 text-sm font-bold text-[#6B7280] dark:text-[#8B949E] hover:text-[#D81B60] transition-colors">
            <Heart className="w-4 h-4" /> Aimer
          </button>
          <button className="flex items-center gap-2 text-sm font-bold text-[#6B7280] dark:text-[#8B949E] hover:text-[#1976D2] transition-colors">
            <Share2 className="w-4 h-4" /> Partager
          </button>
          {!discussion.isPertinent && (
            <button 
              onClick={markDiscussionAsPertinent}
              className="flex items-center gap-2 text-sm font-bold text-[#6B7280] dark:text-[#8B949E] hover:text-purple-600 transition-colors"
            >
              <CheckCircle className="w-4 h-4" /> Marquer comme pertinente
            </button>
          )}
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
            {reply.isCorrect && (
              <div className="absolute top-4 right-4 flex items-center gap-1.5 text-green-600 dark:text-green-500 text-sm font-bold bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full border border-green-200 dark:border-green-800">
                <CheckCircle className="w-4 h-4" /> Solution Validée
              </div>
            )}
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shrink-0 ${reply.avatar}`}>
                {reply.initials}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-[#1A1A2E] dark:text-[#E6EDF3] text-sm flex items-center">{reply.author} <RoleBadge role={reply.role} /></span>
                  <span className="text-xs text-[#6B7280] dark:text-[#8B949E]">• {reply.time}</span>
                </div>
                <div className="text-[#1A1A2E] dark:text-[#E6EDF3] text-sm leading-relaxed whitespace-pre-wrap">
                  <MarkdownText text={reply.content} />
                </div>

                <div className="mt-4 flex gap-4">
                  <button className="flex items-center gap-1.5 text-xs font-bold text-[#6B7280] dark:text-[#8B949E] hover:text-[#D81B60] transition-colors">
                    <Heart className="w-3 h-3" /> Aimer
                  </button>
                  {!reply.isCorrect && (
                    <button 
                      onClick={() => markAsCorrect(reply.id)}
                      className="flex items-center gap-1.5 text-xs font-bold text-[#6B7280] dark:text-[#8B949E] hover:text-green-600 transition-colors"
                    >
                      <CheckCircle className="w-3 h-3" /> Marquer comme solution
                    </button>
                  )}
                </div>
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
