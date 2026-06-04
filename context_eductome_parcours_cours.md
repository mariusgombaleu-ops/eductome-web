# L'Expérience "Mon Cours" sur Eductome 🎓

Ce document détaille l'expérience utilisateur (UX) et l'interface utilisateur (UI) spécifiques à l'espace d'apprentissage ("Mon Cours") sur la plateforme Eductome. L'objectif est de donner à Claude une vision claire du parcours de l'élève afin de proposer des améliorations, des ajouts ou des simplifications.

## 1. Le Parcours d'Achat et de Déblocage 🛒
Avant d'accéder au contenu pédagogique, l'élève suit ce flux :
- **Catalogue & Vue d'ensemble** : L'élève découvre le cours (ex: "Les Limites - Tome 1") avec une présentation accrocheuse, les objectifs, et un bouton d'achat.
- **Déblocage** : Une fois le cours acheté ou débloqué, il apparaît dans l'espace "Mes Cours" de son Dashboard.
- **Accès au Cours** : Un clic sur "Continuer" ou "Commencer" lance l'interface de lecture (`CourseReader.tsx`).

## 2. L'Interface de Lecture (CourseReader) 📖
Le `CourseReader` est le cœur de l'expérience d'apprentissage. Il a été conçu pour être immersif, sans distraction, et parfaitement adapté aux mobiles.

### A. Le Menu Latéral (Sidebar / Sommaire)
- **Navigation Rapide** : Un menu latéral (collapsible sur desktop, tiroir sur mobile) affiche le sommaire complet du cours.
- **Progression** : L'élève voit clairement les chapitres disponibles. Lorsqu'il clique sur un chapitre, il y est directement emmené et le menu se referme (sur mobile) pour laisser place au contenu.

### B. La Zone Principale de Contenu
Le chapitre actif défile verticalement (scroll) avec une mise en page aérée et un typage riche.
- **Le Ton du Grand Frère** : Le contenu n'est pas froid et académique. Il est rédigé comme si un grand frère bienveillant expliquait la leçon, en utilisant le langage et les réalités ivoiriennes (ex: l'analogie du "Gbaka", "le Cacao").
- **Blocs Pédagogiques Variés** : Pour casser la monotonie, le cours utilise différents "Blocks" visuellement distincts :
  - *Textes et Dialogues* (échanges de questions/réponses).
  - *MathJax* : Formules mathématiques parfaitement rendues en LaTeX.
  - *Tips & Warnings* : Encadrés de couleur pour les astuces et les pièges à éviter.
  - *Tableaux* : Comparatifs avec scroll horizontal optimisé pour mobile.

### C. La Pratique : Exercices et Corrigés Interactifs ✍️
- **Entraînements Interactifs** : Plutôt que de donner un bloc de texte avec la correction, nous avons des composants interactifs (`InteractiveExercise`).
- **Étape par Étape** : L'élève lit l'énoncé, puis clique sur "Étape suivante" ou "Voir la correction". La correction se dévoile progressivement, étape par étape (avec des animations fluides), jusqu'au résultat final. Cela force l'élève à réfléchir avant de voir la suite.

### D. La Validation : Le Quiz de Fin de Chapitre 🎯
Tout en bas du chapitre, un quiz vient valider les acquis :
- **Mode Suspense** : L'élève répond aux questions. Le système enregistre la réponse sans dire immédiatement si c'est juste ou faux, puis passe à la question suivante.
- **Le Bilan** : À la fin du quiz, un écran final s'affiche :
  - Soit "Chapitre Validé" (avec confettis 🎉) si le score requis est atteint.
  - Soit "Chapitre Non Validé" avec le score exact.
- **Correction Ciblée** : En cas d'échec, le bilan n'affiche QUE les questions ratées, en précisant "Question X", la question posée, et l'explication lumineuse pour corriger le tir.
- L'élève doit alors relire le cours et recommencer pour valider et passer au chapitre suivant.

## 3. Ce que nous attendons de Claude 🤖
Claude, ton rôle est d'analyser ce parcours utilisateur de A à Z :
- **Fluidité de l'UX** : Y a-t-il des points de friction dans ce parcours (achat -> lecture -> validation) ?
- **Engagement** : Comment pourrions-nous rendre ce lecteur de cours encore plus engageant et gamifié (badges, jauges, micro-interactions) ?
- **UI Design** : Des suggestions pour améliorer l'interface (espacements, typographie, couleurs d'alerte, animations) ?
- **Pertinence** : Y a-t-il des éléments superflus à retrancher ou des fonctionnalités manquantes (ex: prise de notes, mode hors-ligne, forum intégré) ?

Fais-nous un audit complet et propose tes meilleures idées !
