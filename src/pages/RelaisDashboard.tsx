import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';
import { useUser } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContext';
import { Copy, CheckCircle, TrendingUp, DollarSign, ShoppingBag } from 'lucide-react';

interface RelaisDoc {
  nom: string;
  code: string;
  totalVentes: number;
  totalCommission: number;
}

interface VenteDoc {
  id: string;
  date: any;
  produit: string;
  commission: number;
}

export const RelaisDashboard = () => {
  const { currentUser } = useAuth();
  const { isRelais } = useUser();
  const { palette } = useTheme();

  const [relaisData, setRelaisData] = useState<RelaisDoc | null>(null);
  const [relaisDocId, setRelaisDocId] = useState<string | null>(null);
  const [ventes, setVentes] = useState<VenteDoc[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!currentUser || !isRelais) return;
    const q = query(collection(db, 'relais'), where('uid', '==', currentUser.uid));
    const unsubscribe = onSnapshot(q, (snap) => {
      if (!snap.empty) {
        const docSnap = snap.docs[0];
        setRelaisData(docSnap.data() as RelaisDoc);
        setRelaisDocId(docSnap.id);
      }
    });
    return () => unsubscribe();
  }, [currentUser, isRelais]);

  useEffect(() => {
    if (!relaisDocId) return;
    const q = query(collection(db, 'relais', relaisDocId, 'ventes'), orderBy('date', 'desc'));
    const unsubscribe = onSnapshot(q, (snap) => {
      setVentes(snap.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() } as VenteDoc)));
    });
    return () => unsubscribe();
  }, [relaisDocId]);

  const copyCode = () => {
    if (relaisData?.code) {
      navigator.clipboard.writeText(relaisData.code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const formatDate = (date: any): string => {
    if (!date) return '—';
    const dt: Date = date.toDate ? date.toDate() : new Date(date);
    return new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(dt);
  };

  if (!isRelais || !relaisData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4 font-poppins transition-colors">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-colors" style={{ background: palette.bg2 }}>
          <TrendingUp className="w-10 h-10" style={{ color: palette.ink3 }} />
        </div>
        <h2 className="text-xl font-bold mb-2" style={{ color: palette.ink }}>Espace Relais</h2>
        <p className="max-w-sm text-sm" style={{ color: palette.ink2 }}>
          Tu n'es pas encore inscrit au programme Relais. Contacte-nous sur WhatsApp pour rejoindre le programme.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 px-4 md:px-6 lg:px-8 pt-6 pb-20 font-poppins max-w-4xl mx-auto transition-colors">
      <div>
        <h1 className="text-2xl font-bold font-playfair" style={{ color: palette.ink }}>
          Tableau de bord Relais
        </h1>
        <p className="text-sm mt-1" style={{ color: palette.ink2 }}>
          Bienvenue, {relaisData.nom}
        </p>
      </div>

      {/* Code Card */}
      <div className="bg-gradient-to-r from-[#1A3557] to-[#1976D2] rounded-[28px] p-6 text-white shadow-lg">
        <p className="text-sm text-blue-100 mb-2 font-medium">Ton code relais personnel</p>
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-4xl font-mono font-bold tracking-widest">{relaisData.code}</span>
          <button
            onClick={copyCode}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-xl font-medium transition-colors text-sm"
          >
            {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copié !' : 'Copier'}
          </button>
        </div>
        <p className="text-xs text-blue-200 mt-3">
          Partage ce code avec les élèves pour qu'ils l'entrent lors de leur achat.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-6 rounded-[28px] shadow-sm border transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-100/30 rounded-[12px]">
              <ShoppingBag className="w-5 h-5 text-blue-500" />
            </div>
            <span className="text-sm font-medium" style={{ color: palette.ink2 }}>Total ventes</span>
          </div>
          <p className="text-3xl font-bold" style={{ color: palette.ink }}>
            {relaisData.totalVentes}
          </p>
        </div>

        <div className="p-6 rounded-[28px] shadow-sm border transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-green-100/30 rounded-[12px]">
              <DollarSign className="w-5 h-5 text-green-500" />
            </div>
            <span className="text-sm font-medium" style={{ color: palette.ink2 }}>Commission due</span>
          </div>
          <p className="text-3xl font-bold" style={{ color: palette.ink }}>
            {relaisData.totalCommission.toLocaleString('fr-FR')} FCFA
          </p>
        </div>
      </div>

      {/* Ventes Table */}
      <div className="rounded-[28px] shadow-sm border overflow-hidden transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
        <div className="px-6 py-4 border-b transition-colors" style={{ borderColor: palette.line }}>
          <h2 className="font-bold flex items-center gap-2" style={{ color: palette.ink }}>
            <TrendingUp className="w-5 h-5" style={{ color: palette.accent }} />
            Historique des ventes
          </h2>
        </div>

        {ventes.length === 0 ? (
          <div className="py-12 text-center">
            <ShoppingBag className="w-8 h-8 mx-auto mb-2" style={{ color: palette.ink3 }} />
            <p className="text-sm" style={{ color: palette.ink2 }}>
              Aucune vente enregistrée pour l'instant.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs font-bold uppercase tracking-wider transition-colors" style={{ color: palette.ink2, background: palette.bg2 }}>
                  <th className="px-6 py-3 text-left">Date</th>
                  <th className="px-6 py-3 text-left">Produit</th>
                  <th className="px-6 py-3 text-right">Commission</th>
                </tr>
              </thead>
              <tbody className="divide-y transition-colors" style={{ borderTopColor: palette.line }}>
                {ventes.map((v) => (
                  <tr key={v.id} className="transition-colors hover:bg-black/5">
                    <td className="px-6 py-4 text-sm" style={{ color: palette.ink2 }}>
                      {formatDate(v.date)}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium" style={{ color: palette.ink }}>
                      {v.produit}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-right text-green-500">
                      {v.commission.toLocaleString('fr-FR')} FCFA
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
