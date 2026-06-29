// Petit utilitaire de rendu KaTeX, branché sur le renderMath existant de l'app.
import { renderMath } from '../blocks/BlockRenderer';

interface TexProps { children: string; block?: boolean; style?: React.CSSProperties; className?: string; }

/** Rend une chaîne contenant du `$...$` / `$$...$$` via le moteur KaTeX du projet. */
export function Tex({ children, block, style, className }: TexProps) {
  const Tag = block ? 'div' : 'span';
  return (
    <Tag className={className} style={style}
      dangerouslySetInnerHTML={{ __html: renderMath(children.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')) }} />
  );
}
