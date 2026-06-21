import { useState } from 'react';
import { Users, TrendingUp, Award, FileText, Plus, Shield, Download, BookOpen, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

// MOCK DATA FOR DEMO/MARKETING
const mockStudents = [
  { id: 1, name: 'Koffi Jean', classe: 'Terminale D1', phone: '0701020304', xp: 4500, averageChange: '+2.5' },
  { id: 2, name: 'Touré Awa', classe: 'Terminale D2', phone: '0501020304', xp: 3200, averageChange: '+1.8' },
  { id: 3, name: 'Yao Cédric', classe: 'Terminale C', phone: '0101020304', xp: 5100, averageChange: '+3.1' },
  { id: 4, name: 'Kouassi Marie', classe: 'Terminale A', phone: '0709080706', xp: 2800, averageChange: '+1.2' },
];

export function ApeDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'buy' | 'reports'>('overview');
  const [apeName] = useState("COGES Lycée Classique d'Abidjan");
  const [sponsoredCount] = useState(50);
  const { palette } = useTheme();

  return (
    <div className="min-h-screen font-poppins pb-20 transition-colors duration-300" style={{ background: palette.bg }}>
      {/* Header */}
      <header className="bg-gradient-to-r from-[#1A3557] to-[#1976D2] text-white py-12 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-8 h-8 text-[#D81B60]" />
              <h1 className="text-2xl md:text-4xl font-playfair font-bold">Espace Partenaire Éducatif</h1>
            </div>
            <h2 className="text-xl md:text-2xl font-medium text-blue-100">{apeName}</h2>
            <p className="text-blue-200 mt-2 max-w-xl text-sm">
              Gérez les accès EDUCTOME de vos élèves, analysez leur progression et téléchargez vos rapports d'impact mensuels.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <button 
              onClick={() => setActiveTab('buy')}
              className="bg-[#D81B60] hover:bg-[#C2185B] text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Sponsoriser des élèves
            </button>
            <div className="flex items-center gap-2 text-sm text-blue-100 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <Star className="w-4 h-4 text-yellow-400" />
              Partenaire Premium
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8">
        {/* Navigation */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-8 p-2 rounded-[24px] shadow-sm border transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all flex items-center gap-2`}
            style={activeTab === 'overview' ? { background: palette.accent, color: '#fff' } : { color: palette.ink2, background: 'transparent' }}
          >
            <TrendingUp className="w-4 h-4" /> Vue d'ensemble
          </button>
          <button
            onClick={() => setActiveTab('students')}
            className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all flex items-center gap-2`}
            style={activeTab === 'students' ? { background: palette.accent, color: '#fff' } : { color: palette.ink2, background: 'transparent' }}
          >
            <Users className="w-4 h-4" /> Élèves Sponsorisés ({sponsoredCount})
          </button>
          <button
            onClick={() => setActiveTab('buy')}
            className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all flex items-center gap-2`}
            style={activeTab === 'buy' ? { background: palette.accent, color: '#fff' } : { color: palette.ink2, background: 'transparent' }}
          >
            <Award className="w-4 h-4" /> Offres & Achats
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all flex items-center gap-2`}
            style={activeTab === 'reports' ? { background: palette.accent, color: '#fff' } : { color: palette.ink2, background: 'transparent' }}
          >
            <FileText className="w-4 h-4" /> Rapports d'Impact
          </button>
        </div>

        {/* CONTENT TABS */}
        <div className="space-y-8 animate-fade-in-up">
          
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-[24px] border shadow-sm flex items-start gap-4 transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
                  <div className="p-3 rounded-xl transition-colors" style={{ background: `${palette.accent}20`, color: palette.accent }}>
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium transition-colors" style={{ color: palette.ink3 }}>Élèves Sponsorisés</p>
                    <p className="text-3xl font-black mt-1 transition-colors" style={{ color: palette.ink }}>{sponsoredCount}</p>
                    <p className="text-xs text-green-500 mt-2 font-medium flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +15 ce mois-ci
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-[24px] border shadow-sm flex items-start gap-4 transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
                  <div className="bg-[#D81B60]/10 p-3 rounded-xl text-[#D81B60]">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium transition-colors" style={{ color: palette.ink3 }}>Évolution Moyenne (Notes)</p>
                    <p className="text-3xl font-black mt-1 transition-colors" style={{ color: palette.ink }}>+2.1 pts</p>
                    <p className="text-xs mt-2 transition-colors" style={{ color: palette.ink3 }}>Depuis le début du trimestre</p>
                  </div>
                </div>

                <div className="p-6 rounded-[24px] border shadow-sm flex items-start gap-4 transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl text-green-600 dark:text-green-400">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium transition-colors" style={{ color: palette.ink3 }}>Temps moyen sur l'app</p>
                    <p className="text-3xl font-black mt-1 transition-colors" style={{ color: palette.ink }}>4h 20</p>
                    <p className="text-xs mt-2 transition-colors" style={{ color: palette.ink3 }}>Par élève / semaine</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#1A3557] to-[#0D1B2A] rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Prêt à soutenir la prochaine promotion ?</h3>
                  <p className="text-blue-100 max-w-xl text-sm">
                    En tant que partenaire, vous bénéficiez de tarifs préférentiels (jusqu'à -40%) pour équiper des classes entières avec les Tomes EDUCTOME.
                  </p>
                </div>
                <button 
                  onClick={() => setActiveTab('buy')}
                  className="bg-white text-[#1A3557] hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-colors whitespace-nowrap shrink-0"
                >
                  Voir les offres APE
                </button>
              </div>
            </div>
          )}

          {activeTab === 'students' && (
            <div className="border rounded-[28px] overflow-hidden shadow-sm transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
              <div className="p-6 border-b flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors" style={{ borderColor: palette.line }}>
                <h3 className="text-xl font-bold transition-colors" style={{ color: palette.ink }}>Vos Élèves Sponsorisés</h3>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Rechercher un élève..." 
                    className="px-4 py-2 border rounded-xl text-sm transition-colors"
                    style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink }}
                  />
                  <button className="text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors hover:opacity-80" style={{ background: palette.accent }}>
                    <Plus className="w-4 h-4" /> Ajouter
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm transition-colors" style={{ color: palette.ink2 }}>
                  <thead className="uppercase font-semibold transition-colors" style={{ background: palette.bg2, color: palette.ink }}>
                    <tr>
                      <th className="px-6 py-4">Nom Complet</th>
                      <th className="px-6 py-4">Classe</th>
                      <th className="px-6 py-4">Contact</th>
                      <th className="px-6 py-4">Assiduité (XP)</th>
                      <th className="px-6 py-4 text-right">Progression Moyenne</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockStudents.map(student => (
                      <tr key={student.id} className="border-b transition-colors hover:bg-black/5 dark:hover:bg-white/5" style={{ borderColor: palette.line }}>
                        <td className="px-6 py-4 font-bold transition-colors" style={{ color: palette.ink }}>{student.name}</td>
                        <td className="px-6 py-4">{student.classe}</td>
                        <td className="px-6 py-4">{student.phone}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 rounded font-bold text-xs" style={{ background: `${palette.accent}20`, color: palette.accent }}>
                            {student.xp} XP
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-green-500 font-bold">{student.averageChange} pts</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'buy' && (
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h3 className="text-2xl font-bold mb-2 transition-colors" style={{ color: palette.ink }}>Abonnements Groupés (Spécial APE)</h3>
                <p className="transition-colors" style={{ color: palette.ink2 }}>
                  Équipez vos meilleurs élèves ou soutenez les cas sociaux avec EDUCTOME. Ces offres incluent un accès complet à tous les tomes de l'année.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Pack Classe", count: 10, price: "12 000 F", unit: "1 200 F / élève", discount: "-20%", color: "blue" },
                  { title: "Pack Promotion", count: 50, price: "50 000 F", unit: "1 000 F / élève", discount: "-33%", color: "magenta", popular: true },
                  { title: "Pack Lycée", count: 200, price: "150 000 F", unit: "750 F / élève", discount: "-50%", color: "marine" }
                ].map((pack, idx) => (
                  <div key={idx} className={`relative rounded-[28px] border-2 p-6 md:p-8 flex flex-col transition-colors`} style={{ background: palette.bg, borderColor: pack.popular ? palette.accent : palette.line }}>
                    {pack.popular && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full transition-colors" style={{ background: palette.accent }}>
                        Le plus choisi
                      </div>
                    )}
                    <h4 className="text-xl font-bold text-center mb-1 transition-colors" style={{ color: palette.ink }}>{pack.title}</h4>
                    <p className="text-center text-sm mb-6 transition-colors" style={{ color: palette.ink3 }}>{pack.count} accès "Tomes Complets"</p>
                    
                    <div className="text-center mb-6">
                      <div className="text-3xl font-black transition-colors" style={{ color: palette.ink }}>{pack.price}</div>
                      <div className="text-sm font-medium text-green-500 mt-1">Soit {pack.unit} ({pack.discount})</div>
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                      <li className="flex items-center gap-2 text-sm transition-colors" style={{ color: palette.ink2 }}>
                        <CheckIcon /> Accès illimité aux cours
                      </li>
                      <li className="flex items-center gap-2 text-sm transition-colors" style={{ color: palette.ink2 }}>
                        <CheckIcon /> Simulateur de BAC inclus
                      </li>
                      <li className="flex items-center gap-2 text-sm transition-colors" style={{ color: palette.ink2 }}>
                        <CheckIcon /> Tableau de bord de suivi APE
                      </li>
                    </ul>

                    <button className={`w-full py-3 rounded-xl font-bold transition-colors hover:opacity-80`} style={{ background: pack.popular ? palette.accent : palette.bg2, color: pack.popular ? '#fff' : palette.ink }}>
                      Choisir ce pack
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="border rounded-[28px] p-6 md:p-8 shadow-sm transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-xl font-bold transition-colors" style={{ color: palette.ink }}>Rapports d'Impact Mensuels</h3>
                  <p className="text-sm mt-1 transition-colors" style={{ color: palette.ink2 }}>
                    Téléchargez les documents officiels pour les présenter en réunion de bureau ou aux parents d'élèves.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { month: "Mai 2026", status: "Nouveau" },
                  { month: "Avril 2026", status: "" },
                  { month: "Mars 2026", status: "" }
                ].map((report, idx) => (
                  <div key={idx} className="border rounded-2xl p-4 flex items-center justify-between transition-colors group cursor-pointer hover:bg-black/5 dark:hover:bg-white/5" style={{ borderColor: palette.line }}>
                    <div className="flex items-center gap-3">
                      <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-xl text-red-600">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-sm transition-colors" style={{ color: palette.ink }}>Bilan_{report.month.replace(' ', '_')}.pdf</p>
                        {report.status && (
                          <span className="text-[10px] px-2 py-0.5 rounded font-bold uppercase transition-colors" style={{ background: `${palette.accent}20`, color: palette.accent }}>
                            {report.status}
                          </span>
                        )}
                      </div>
                    </div>
                    <Download className="w-5 h-5 transition-colors" style={{ color: palette.ink3 }} />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-0.5 text-green-600 dark:text-green-400 shrink-0">
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}
