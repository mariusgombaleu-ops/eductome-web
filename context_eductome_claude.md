# Contexte et Avancement du Projet Eductome 🚀

Ce document a pour but de fournir un contexte complet sur le projet **Eductome** afin que Claude puisse rapidement s'imprégner de la base de code, de l'architecture, de l'UX/UI, et des dernières implémentations, pour apporter son expertise.

## 1. Contexte du Projet
**Eductome** est une plateforme éducative web moderne destinée aux élèves ivoiriens (Terminale C/D, 3ème). L'objectif est de proposer des manuels scolaires interactifs qui expliquent les concepts de manière simple et bienveillante, avec la "méthode du grand frère". Le ton utilisé est chaleureux, pédagogique, et intègre des références culturelles ivoiriennes (ex: "Gbaka", "Le Cacao", etc.) pour démystifier les mathématiques (notamment les limites, les équations différentielles, etc.).

## 2. Stack Technique
- **Framework** : React (avec Vite)
- **Typage** : TypeScript
- **Styling** : Tailwind CSS (avec prise en charge complète du Dark Mode et conception Mobile-First)
- **Rendu Mathématique** : MathJax (pour l'affichage propre des équations LaTeX dynamiques)
- **Icônes** : Lucide-React
- **Routage** : React Router DOM

## 3. Architecture des Données (Le Manuel Interactif)
Le manuel de cours (ex: "Les Limites - Tome 1") est structuré sous forme d'objets TypeScript (`src/data/course-t1.ts` et `src/data/t1-limites/chap1.ts` à `chap7.ts`).
Chaque chapitre contient :
- **Sections** : Divisées en **Blocks** typés.
- **Types de Blocks (`BlockType`)** : 
  - `text` : Paragraphe classique.
  - `math` : Formules mathématiques.
  - `grand-frere` / `dialogue` : Échanges pédagogiques.
  - `tip` / `warning` / `recap` : Mises en avant et tableaux.
  - `analogy` : Exemples ancrés dans la réalité ivoirienne (ex: Analogie du Gbaka).
  - `exercise-interactive` : Exercice pas à pas.
- **Quiz de validation** : Une série de questions de compréhension à la fin de chaque chapitre.

## 4. Ce que nous avons implémenté et peaufiné récemment

### A. Intégration du Contenu
Nous avons découpé et intégré 100% du manuel "Les Limites" en 7 chapitres interactifs distincts pour éviter la surcharge cognitive. Les tableaux ont été rendus "scrollables" horizontalement pour une lecture optimale sur smartphone.

### B. Refonte UX/UI du Quiz (Mode "Suspense")
Nous avons revu la logique du `QuizSection` (`CourseReader.tsx`) :
1. **L'élève répond aux questions une par une** sans avoir la correction immédiate (pour éviter la triche et forcer la réflexion).
2. **Bouton "Valider ma réponse"** : Passe à la question suivante de manière fluide.
3. **Bilan de fin** : À la fin du quiz, si l'élève n'obtient pas le score requis (ex: 4/5), il est recalé ("Chapitre Non Validé").
4. **Récapitulatif des erreurs** : Le bilan affiche uniquement les questions ratées, avec le numéro de la question (ex: "Question 3"), le texte de la question et l'explication (astuce) pour comprendre son erreur.

### C. Résolution du Rendu MathJax dans le Quiz
Nous avons rencontré un problème où les formules mathématiques (ex: `$f(a)$`) insérées dynamiquement dans le Quiz ne se transformaient pas en LaTeX.
**Solution apportée** :
- Utilisation de `window.MathJax.typesetClear()` suivi de `window.MathJax.typesetPromise()` dans un `useEffect` écoutant les changements de question (`qi`) et la fin du quiz (`quizFinished`).
- Cela force MathJax à oublier le cache précédent et à "parser" les nouveaux nœuds du DOM pour un affichage impeccable des mathématiques dans les questions et le bilan.

## 5. Prochaines Étapes / Besoins d'Expertise
L'objectif est maintenant de consolider cette base, d'améliorer l'expérience globale, d'ajouter éventuellement des animations (ex: micro-interactions, framer-motion) ou d'optimiser l'architecture pour supporter des centaines de cours à l'avenir. Le code est propre, orienté composant, et très axé sur une expérience utilisateur (UX) Premium.

---
> *Note pour Claude : Tu as maintenant tout le contexte. La balle est dans ton camp pour auditer, proposer des refactorisations ou suggérer de nouvelles features UX/UI pour rendre Eductome encore plus incroyable !*
