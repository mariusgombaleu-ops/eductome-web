const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/pages/dashboard/CourseReader.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Imports
content = content.replace(
  /import \{ courseT1, Block, QuizQuestion, Course \} from '\.\.\/\.\.\/data\/course-t1';/,
  "import { courseT1 } from '../../data/course-t1';\nimport { AnyBlock, QuizBlock, Tome, Chapitre } from '../../types/course';\nimport { BlockRenderer } from '../../components/blocks/BlockRenderer';"
);

// 2. Remove markdownTableToHtml and InteractiveExercise
content = content.replace(/\/\/ ──────────────────────────────────────────────\n\/\/ Markdown table → HTML table converter.*?(?=\/\/ ──────────────────────────────────────────────\n\/\/ Quiz Component)/s, '');

// 3. Update QuizSection signature
content = content.replace(/quiz: QuizQuestion\[\]/, 'quiz: QuizBlock[]');

// 4. Update correctAnswer and explanation
content = content.replace(/quiz\[qi\]\.correctAnswer/g, 'quiz[qi].bonneReponse');
content = content.replace(/item\.q\.explanation/g, 'item.q.explication');

// 5. Update CourseRegistry
content = content.replace(/Record<string, Course>/g, 'Record<string, Tome>');

// 6. Update course.chapters to course.chapitres
content = content.replace(/course\.chapters/g, 'course.chapitres');

// 7. Remove renderBlock
content = content.replace(/  \/\/ ── Block Renderer ──────────────────────────.*?  \/\/ ── Sidebar \(shared for mobile drawer & desktop\) ─/s, '  // ── Sidebar (shared for mobile drawer & desktop) ─');

// 8. Replace renderBlock call
content = content.replace(/\{renderBlock\(block\)\}/g, '<BlockRenderer block={block} isDark={d} />');

// 9. Update section.blocks to section.blocs (since we changed the schema)
content = content.replace(/section\.blocks/g, 'section.blocs');

fs.writeFileSync(filePath, content, 'utf8');
console.log('CourseReader.tsx refactored successfully.');
