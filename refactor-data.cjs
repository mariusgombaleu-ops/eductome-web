const fs = require('fs');
const path = require('path');

const t1Dir = path.join(__dirname, 'src/data/t1-limites');
const t2Dir = path.join(__dirname, 'src/data/t2-derivees');
const courseT1Path = path.join(__dirname, 'src/data/course-t1.ts');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Imports and types
  content = content.replace(/import\s+\{\s*Chapter\s*\}\s+from\s+['"].*['"];?/, "import { Chapitre } from '../../types/course';");
  content = content.replace(/Chapter\[\]/g, 'Chapitre[]');
  content = content.replace(/:\s*Chapter\s*=/g, ': Chapitre =');

  // Object keys
  content = content.replace(/title:/g, 'titre:');
  content = content.replace(/content:/g, 'contenu:');
  content = content.replace(/sections:/g, 'sections:');
  content = content.replace(/blocks:/g, 'blocs:');
  
  // Quiz
  content = content.replace(/question:/g, 'question:');
  content = content.replace(/options:/g, 'options:');
  content = content.replace(/correctAnswer:/g, 'bonneReponse:');
  content = content.replace(/explanation:/g, 'explication:');

  // Exercise
  content = content.replace(/statement:/g, 'enonce:');
  content = content.replace(/steps:/g, 'etapes:');
  content = content.replace(/result:/g, 'reponse:');

  // Block types
  content = content.replace(/type:\s*["']grand-frere["']/g, 'type: "tip"');
  
  // Unwrap exercise
  content = content.replace(/type:\s*["']exercise-interactive["'],\s*exercise:\s*\{/g, 'type: "exercise",');
  // Match reponse: "...", or reponse: "..."\n  }
  // Because it can be `reponse: "25"\n            }`
  content = content.replace(/reponse:\s*("[^"]*")\s*\}/g, 'reponse: $1');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Processed', filePath);
}

// Process T1
if (fs.existsSync(t1Dir)) {
  fs.readdirSync(t1Dir).filter(f => f.endsWith('.ts')).forEach(f => {
    processFile(path.join(t1Dir, f));
  });
}

// Process T2
if (fs.existsSync(t2Dir)) {
  fs.readdirSync(t2Dir).filter(f => f.endsWith('.ts')).forEach(f => {
    processFile(path.join(t2Dir, f));
  });
}

// Process course-t1.ts
if (fs.existsSync(courseT1Path)) {
  let content = fs.readFileSync(courseT1Path, 'utf8');
  
  // Remove the old types
  content = content.replace(/export type BlockType = [^;]+;/s, '');
  content = content.replace(/export interface Block \{[^}]+\}/s, '');
  content = content.replace(/export interface Section \{[^}]+\}/s, '');
  content = content.replace(/export interface QuizQuestion \{[^}]+\}/s, '');
  content = content.replace(/export interface Chapter \{[^}]+\}/s, '');
  content = content.replace(/export interface Course \{[^}]+\}/s, '');
  
  content = "import { Tome, Chapitre } from '../types/course';\n" + content;
  content = content.replace(/export const courseT1:\s*Course/g, 'export const courseT1: Tome');
  content = content.replace(/title:/g, 'titre:');
  content = content.replace(/chapters:/g, 'chapitres:');

  fs.writeFileSync(courseT1Path, content, 'utf8');
  console.log('Processed course-t1.ts');
}
