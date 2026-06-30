interface Props {
  noteSim: number;
  moyenneClasse: number;
  matiereName: string;
  matiereId: string;
}

const MESSAGES: Record<string, string> = {
  svt: 'Ouvre Les Clés Sciences SVT. Les points se récupèrent avec la méthode.',
  maths: 'Ouvre Les Clés Maths. Attaque le tome de ta plus grande faiblesse.',
  pc: "Les Clés Sciences PC t'attend. Les points tombent avec la bonne méthode.",
  francais: 'Les Clés Lettres Français te donne les outils pour aller chercher ces points.',
  français: 'Les Clés Lettres Français te donne les outils pour aller chercher ces points.',
  philo: "Philo Facile est fait pour ça. Un tome, une méthode, et cet écart se comble.",
  hg: 'Travaille tes fiches HG — la régularité est tout ce qu\'il te faut.',
  anglais: 'Anglais Spécial BAC te donne la méthode.',
  langue2: 'Régularité et méthode sur ta LV2 — c\'est là que les points se gagnent.',
};

export function BacRealityCheck({ noteSim, moyenneClasse, matiereName, matiereId }: Props) {
  const delta = (noteSim - moyenneClasse).toFixed(1);
  const message = MESSAGES[matiereId] ?? 'Continue avec méthode et régularité pour combler cet écart.';

  return (
    <div
      className="rounded-r-lg mt-1 text-sm leading-relaxed"
      style={{ background: 'var(--ed-bg3)', color: 'var(--ed-ink2)', borderLeft: '3px solid var(--ed-accent)', padding: '10px 14px' }}
    >
      <span className="mr-1">💡</span>
      Champion(ne), tu as simulé un <strong>{noteSim}/20</strong> en <strong>{matiereName}</strong>.
      Ta moyenne actuelle est de <strong>{moyenneClasse.toFixed(2)}/20</strong>{' '}
      (Écart : <strong>{delta} pts</strong>). {message}
    </div>
  );
}
