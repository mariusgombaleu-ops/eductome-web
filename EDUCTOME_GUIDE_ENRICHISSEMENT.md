# EDUCTOME — Guide d'Enrichissement des Cours Web
> Instructions pour Gemini (conversion) et Antigravity (intégration)  
> Version 1.0 · Juin 2026 · Gombaleu Marius  
> Appliquer à TOUS les tomes de TOUTES les collections

---

## CONTEXTE — Pourquoi enrichir ?

Un PDF se lit linéairement. Un cours en ligne sur mobile doit **accrocher, guider et interagir**.

L'élève ivoirien lit sur son téléphone, souvent debout dans un gbaka ou assis en récré. Chaque bloc de contenu doit lui donner envie de lire le suivant. Le ton Grand Frère n'est pas juste du style — c'est la mécanique de rétention.

**Règle fondamentale :** Le contenu pédagogique (formules, exercices, valeurs numériques) ne change JAMAIS. Seule la forme change pour s'adapter à l'écran mobile.

---

## SECTION 1 — Les 7 enrichissements obligatoires

### Enrichissement 1 — Accroche de section

**Dans le PDF :** Les sections commencent directement par le contenu.

**Sur l'app :** Chaque section commence par une phrase d'accroche courte (1-2 lignes) qui crée la curiosité ou l'empathie avant de plonger dans le contenu.

**Exemples d'accroches :**

```typescript
// ❌ Version PDF transposée
{
  type: 'text',
  contenu: 'La dérivée d\'une fonction f en un point a est définie par...'
}

// ✅ Version enrichie web
{
  type: 'text',
  contenu: 'Champion(ne), voici la notion qui fait la différence entre 
  ceux qui comprennent les maths et ceux qui les subissent. 
  Accroche-toi — dans 5 minutes tu vas voir pourquoi.'
}
// suivi du contenu pédagogique
```

**Règles pour les accroches :**
- Maximum 2 phrases
- Ton Grand Frère — jamais académique
- Créer soit la curiosité ("voici pourquoi..."), soit l'empathie ("tu as sûrement déjà vécu..."), soit le défi ("beaucoup ratent ici — pas toi")
- Ne JAMAIS résumer ce qui suit — juste donner envie

---

### Enrichissement 2 — Transitions entre sections

**Dans le PDF :** Les sections s'enchaînent sans lien explicite.

**Sur l'app :** Chaque fin de section se termine par une transition qui relie à la section suivante ET donne le sentiment d'avancement.

**Format de transition :**

```typescript
{
  type: 'text',
  id: 'transition-s1-s2',
  contenu: 'Tu viens de maîtriser [notion précédente]. 
  Maintenant on va aller plus loin : [annonce de la prochaine section]. 
  C\'est là que ça devient vraiment intéressant.'
}
```

**Exemples :**
- *"Tu sais maintenant ce qu'est une limite. Maintenant la vraie question : comment on la calcule ? C'est l'objet de la section suivante — et je te promets que tu vas avoir un déclic."*
- *"Les bases sont là. On passe maintenant aux formes indéterminées — les 4 Boss qui font paniquer 80% des élèves. Toi tu seras prêt."*

---

### Enrichissement 3 — Récaps intermédiaires

**Dans le PDF :** Un seul récap en fin de chapitre.

**Sur l'app :** Un bloc `recap` léger après chaque notion clé — pas seulement en fin de chapitre.

**Règle :** Dès qu'une notion importante vient d'être expliquée, ajouter un micro-récap de 2-3 points maximum.

```typescript
{
  type: 'recap',
  id: 'recap-intermediaire-1',
  titre: 'Ce qu\'on vient de voir',
  contenu: [
    '✅ Une limite = la TENDANCE, pas forcément l\'arrivée',
    '✅ x → a ne veut pas dire x = a',
    '✅ La limite peut exister même si f(a) n\'existe pas',
  ]
}
```

---

### Enrichissement 4 — "À toi de jouer" intégrés

**Dans le PDF :** Les exercices sont regroupés en fin de chapitre.

**Sur l'app :** Après chaque méthode ou technique expliquée, ajouter un mini-exercice `exercise` de niveau BASE directement dans le cours — pas à la fin.

**Format :**

```typescript
{
  type: 'exercise',
  id: 'micro-ex-1',
  niveau: 'BASE',
  enonce: 'À toi de jouer ! Calcule : lim(x→3) (x + 2)',
  etapes: [
    'Étape 1 : Substitue directement x = 3',
    'Étape 2 : 3 + 2 = 5',
  ],
  reponse: '5',
  conseil: 'C\'est la substitution directe — le réflexe n°1.',
}
```

**Règle :** Maximum 1 mini-exercice par section. Simple, rapide (< 3 étapes). L'objectif est de valider la compréhension immédiate, pas d'entraîner.

---

### Enrichissement 5 — Connexions avec le quotidien ivoirien

**Dans le PDF :** Les analogies sont présentes mais parfois trop courtes.

**Sur l'app :** Chaque analogie doit être développée sur **minimum 4 phrases** avec :
1. La situation concrète ivoirienne (2 phrases)
2. La correspondance mathématique précise (1 phrase)
3. La traduction vers le concept (1 phrase)

**Template d'analogie enrichie :**

```typescript
{
  type: 'analogy',
  titre: '[Titre de l\'analogie]',
  contenu: `[Phrase 1 : mise en situation concrète ivoirienne]
  [Phrase 2 : développement de la situation avec détails précis]
  [Phrase 3 : ce qui se passe quand on pousse la situation à l\'extrême]
  [Phrase 4 : le lien avec le quotidien — pourquoi ça parle à tout le monde]`,
  conceptMath: '[Traduction vers le concept mathématique en une phrase claire]'
}
```

**Banque de situations à utiliser (priorité aux plus connues) :**
- Négociation au marché d'Adjamé ou de Treichville
- Gbaka d'Adjamé vers une destination
- Partage au stade Houphouët-Boigny ou Félix Houphouët-Boigny
- Prix du cacao ou du café au marché
- Recharge MTN / Orange / Wave
- File d'attente au guichet CIE ou SODECI
- Tontine à Abobo ou Yopougon
- Attiéké qui refroidit
- Course sur l'autoroute du Nord

---

### Enrichissement 6 — Dialogues plus vivants

**Dans le PDF :** Les dialogues sont courts et directs.

**Sur l'app :** Les dialogues doivent avoir 3 caractéristiques :

**A — La question du Petit Frère doit être une vraie question d'élève** — celle que tout le monde pense mais n'ose pas poser en classe.

```typescript
// ❌ Question trop scolaire
pf: "Quelle est la différence entre une limite et une image ?"

// ✅ Question d'élève réelle
pf: "Vieux père, pourquoi on s'embête avec les limites si on peut 
juste remplacer x directement ? C'est pas plus simple ?"
```

**B — La réponse du Grand Frère commence TOUJOURS par une validation** avant d'expliquer.

```typescript
// ❌ Réponse directe froide
gf: "La limite regarde le comportement autour du point."

// ✅ Réponse avec validation
gf: "Bonne question — et c'est exactement ce que je pensais 
au 'Cacao'. Voici pourquoi la substitution directe ne marche 
pas toujours..."
```

**C — Chaque dialogue se termine sur une note positive** ou une ouverture vers la suite.

---

### Enrichissement 7 — Micro-motivations contextuelles

**Dans le PDF :** La motivation est concentrée dans le Message du Grand Frère.

**Sur l'app :** De courtes phrases motivantes doivent apparaître aux moments de friction — quand le contenu devient difficile.

**Où les placer :**
- Avant un exercice difficile (niveau MOYEN ou BAC)
- Après une longue section théorique
- Quand une notion est contre-intuitive

**Format :**

```typescript
{
  type: 'tip',
  titre: 'Grand Frère te dit',
  contenu: [
    'Faut pas gnan pour ce qui suit.',
    'Beaucoup d\'élèves bloquent ici — mais toi tu as les bases.',
    'Prends le temps de lire chaque étape. C\'est là que tout se débloque.'
  ]
}
```

**Phrases validées à utiliser :**
- *"Faut pas gnan — tu as tout ce qu'il faut pour comprendre."*
- *"C'est normal de bloquer ici. Relis lentement — le déclic arrive."*
- *"Ce que tu viens de lire, beaucoup d'élèves ne le comprennent JAMAIS. Toi oui."*
- *"Respire. On avance ensemble."*
- *"Au 'Cacao', même les meilleurs ont buté là-dessus la première fois."*

---

## SECTION 2 — Ce qu'il ne faut JAMAIS changer

### Règles absolues d'enrichissement

❌ **Ne jamais modifier le contenu pédagogique**
- Les formules mathématiques restent exactement comme dans le source
- Les valeurs numériques des exercices restent exactement comme dans le source
- Les étapes de correction restent dans le même ordre
- Les résultats finaux ne changent pas

❌ **Ne jamais supprimer des expressions ivoiriennes**
- "Vieux père", "Champion(ne)", "le Cacao", "gbaka", "gâter le coin"
- "Faut pas gnan", "où bien ?", "limpide comme l'eau de roche"
- Ces expressions ne se traduisent pas, ne se remplacent pas

❌ **Ne jamais inventer des analogies ou des exercices**
- Si une analogie n'est pas dans le source, ne pas en créer
- Si un exercice n'est pas dans le source, ne pas l'inventer
- Les enrichissements portent sur la FORME, pas le FOND

❌ **Ne jamais utiliser le vocabulaire interdit (Règle Backbone #2)**
- "mortelle(s)", "mortel(s)", "fatale(s)", "tuer", "chirurgical(aux)"
- Remplacer systématiquement par les équivalents approuvés

---

## SECTION 3 — Checklist d'enrichissement par chapitre

Avant de livrer un chapitre enrichi, vérifier :

**Accroches et transitions**
- [ ] Chaque section a une accroche (1-2 lignes max)
- [ ] Chaque fin de section a une transition vers la suivante
- [ ] Les transitions mentionnent la section précédente ET annoncent la suivante

**Contenu**
- [ ] Chaque notion clé a un récap intermédiaire (2-3 points)
- [ ] Au moins 1 mini-exercice "À toi de jouer" par section de méthode
- [ ] Les analogies font minimum 4 phrases avec traduction mathématique

**Dialogues**
- [ ] Les questions du PF sont des vraies questions d'élèves
- [ ] Les réponses du GF commencent par une validation
- [ ] Chaque dialogue se termine positivement

**Motivation**
- [ ] Au moins 1 micro-motivation avant chaque exercice MOYEN ou BAC
- [ ] Aucun passage "froid" ou trop académique de plus de 3 blocs consécutifs

**Ton**
- [ ] Champion(ne) apparaît au moins 2 fois par chapitre (pas juste en intro)
- [ ] Zéro phrase commençant par "Il convient de..." ou "On notera que..."
- [ ] Zéro condescendance ("c'est simple", "c'est évident", "comme chacun sait")

---

## SECTION 4 — Prompt type pour Gemini

Copier-coller ce prompt avant chaque conversion de chapitre :

```
Tu vas enrichir le contenu TypeScript d'un chapitre EDUCTOME 
selon le Guide d'Enrichissement.

Rappel des 7 enrichissements obligatoires :
1. Accroche au début de chaque section (1-2 lignes)
2. Transition à la fin de chaque section
3. Récap intermédiaire après chaque notion clé
4. Mini-exercice "À toi de jouer" après chaque méthode
5. Analogies ivoiriennes développées sur 4 phrases minimum
6. Dialogues vivants (question réelle PF + validation GF)
7. Micro-motivations avant les exercices difficiles

Règles absolues :
- Ne JAMAIS modifier formules, valeurs numériques ou résultats
- Ne JAMAIS supprimer les expressions ivoiriennes
- Ne JAMAIS inventer des exercices ou analogies
- Ne JAMAIS utiliser : mortelle, fatale, tuer, chirurgical

Voici le chapitre à enrichir :
[coller le fichier .ts]

Livre uniquement le TypeScript enrichi — pas d'explications.
```

---

## SECTION 5 — Prompt type pour Antigravity

Copier-coller ce prompt pour l'intégration dans l'app :

```
Tu vas intégrer un chapitre EDUCTOME enrichi dans l'app React.

Pour chaque type de bloc, voici le rendu attendu :

ACCROCHE (bloc text en début de section) :
→ Font légèrement plus grande (18px), couleur magenta #D81B60
→ Espacement supérieur double par rapport aux blocs text normaux

TRANSITION (bloc text en fin de section) :
→ Italique, couleur bleue #1976D2, bordure gauche fine
→ Espacement inférieur double

MICRO-MOTIVATION (bloc tip "Grand Frère te dit") :
→ Fond vert très sombre #0F2A1A, bordure magenta
→ Emoji 💪 au lieu de 💡

MINI-EXERCICE "À toi de jouer" (bloc exercise BASE rapide) :
→ Badge "⚡ 2 min" au lieu du badge XP
→ Fond légèrement différent pour distinguer des exercices principaux

Tous les autres blocs suivent les specs du Blueprint Technique.
Teste le rendu sur mobile avant de livrer.
```

---

*EDUCTOME — Apprendre sans limites*  
*Guide d'Enrichissement v1.0 · Juin 2026 · Gombaleu Marius*  
*À envoyer à Gemini ET Antigravity avant toute production de contenu*
