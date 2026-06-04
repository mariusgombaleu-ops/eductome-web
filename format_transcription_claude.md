# Format de Transcription pour Claude 🤖 -> 👨‍💻

Salut Claude ! La proposition de générer directement les fichiers TypeScript est une **excellente idée** ! Cela va nous faire gagner un temps fou. 

Cependant, pour que je n'aie **aucune modification** à faire de mon côté (pas besoin de mapper tes objets avec les miens), il est crucial que tu utilises **EXACTEMENT** les interfaces TypeScript que j'utilise déjà dans le moteur de rendu d'Eductome (`CourseReader.tsx`).

Voici le schéma exact des données que tu dois utiliser pour tes générations :

## 1. Les Interfaces TypeScript Officielles d'Eductome

```typescript
// Types de blocs supportés par le moteur
export type BlockType = 'text' | 'math' | 'grand-frere' | 'analogy' | 'warning' | 'exercise-interactive' | 'image' | 'dialogue' | 'tip' | 'recap' | 'table';

export interface Block {
  id: string; // Doit être unique (ex: "chap2-b1")
  type: BlockType;
  content?: string; // Contenu HTML/Markdown (les maths doivent être entre $...$ ou $$...$$)
  title?: string; // Titre optionnel du bloc (souvent utilisé pour 'warning', 'tip', 'recap')
  exercise?: { // Uniquement requis si type === 'exercise-interactive'
    statement: string; // Énoncé de l'exercice
    steps: { name: string; content: string }[]; // Les étapes de la correction
    result: string; // Résultat final
  };
}

export interface Section {
  id: string;
  title: string;
  blocks: Block[];
}

export interface QuizQuestion {
  id: string; // ex: "chap2-q1"
  question: string;
  options: string[]; // Minimum 2, idéalement 3 ou 4 options
  correctAnswer: number; // L'index de la bonne réponse dans le tableau options (commence à 0)
  explanation: string; // L'explication lumineuse (l'astuce) à afficher si l'élève se trompe
}

export interface Chapter {
  id: string;
  title: string;
  number: number;
  sections: Section[];
  quiz: QuizQuestion[]; // Un tableau de questions à la fin du chapitre
}

export interface Course {
  id: string;
  title: string;
  description: string;
  chapters: Chapter[];
}
```

## 2. Structure d'un fichier de Chapitre généré
Lorsque tu transcris un chapitre depuis un PDF ou un document brut, voici exactement le format que tu dois me sortir (un fichier par chapitre, par exemple `chap2.ts`) :

```typescript
import { Chapter } from '../course-t1'; // Ou le chemin approprié

export const chap2: Chapter[] = [
  {
    id: "chap-2",
    number: 2,
    title: "Titre du Chapitre",
    sections: [
      {
        id: "chap2-s1",
        title: "2.1 Titre de la section",
        blocks: [
          {
            id: "chap2-b1",
            type: "grand-frere",
            title: "Le conseil du grand frère",
            content: "N'oublie pas champion, la dérivée c'est juste la vitesse instantanée !"
          },
          {
            id: "chap2-b2",
            type: "math",
            content: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}"
          }
          // ... autres blocs
        ]
      }
    ],
    quiz: [
      {
        id: "chap2-q1",
        question: "Que représente graphiquement le nombre dérivé $f'(a)$ ?",
        options: [
          "L'ordonnée à l'origine",
          "Le coefficient directeur de la tangente au point d'abscisse $a$",
          "Une asymptote verticale"
        ],
        correctAnswer: 1,
        explanation: "C'est la pente ! Imagine une planche posée sur la courbe au point $a$, sa pente est exactement $f'(a)$."
      }
    ]
  }
];
```

## Consignes pour la rédaction du contenu (content) :
1. **MathJax** : Utilise `$...$` pour les formules inline et `$$...$$` pour les blocs. Fais attention à doubler les backslashes s'il le faut dans les strings TS (`\\lim`, `\\frac`, etc.).
2. **Ton** : Garde le ton amical, les expressions ("Gbaka", "Champion(ne)").
3. **Pédagogie** : Abuse des blocs `warning`, `tip`, `analogy`, et `grand-frere` pour casser le côté académique froid.

Si tu respectes ce schéma strict, l'intégration de tes transcriptions dans l'application se fera en un claquement de doigts ! 🚀
