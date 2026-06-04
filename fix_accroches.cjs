const fs = require('fs');
const path = require('path');

const dataDir = path.join(process.cwd(), 'src', 'data');
let modifiedFiles = 0;

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let changed = false;

      // Fix 1: All blocks with id containing 'accroche'
      // Example: 
      // type: 'tip',
      // titre: "Conseil du Grand Frère",
      // id: 'b0-accroche',
      const accrocheRegex = /type:\s*'(tip|warning|rule|recap)',\s*(titre:\s*"[^"]*",\s*)?id:\s*'([^']*(?:accroche|b0)[^']*)'/g;
      content = content.replace(accrocheRegex, (match, type, titre, id) => {
        changed = true;
        return `type: 'text',\n          id: '${id}'`;
      });

      // Fix 2: Introduction blocks (b1, b2, etc. right under Introduction sections)
      // We will look for "Introduction" sections and if their blocks are tip/warning, make them text.
      // Actually, since I might have converted b1, b2 to tip because they contained "Champion(ne)" or "Grand frère",
      // I can just search for all tips in "Introduction" sections.
      
      const sectionsRegex = /(titre:\s*'Introduction[^']*',\s*blocs:\s*\[)([\s\S]*?)(\],|},{)/g;
      content = content.replace(sectionsRegex, (match, introStart, introBlocs, introEnd) => {
        // Replace all tip/warning in this intro section to text
        const newIntroBlocs = introBlocs.replace(/type:\s*'(tip|warning|rule)',\s*(titre:\s*"[^"]*",\s*)?/g, () => {
          changed = true;
          return `type: 'text',\n          `;
        });
        return introStart + newIntroBlocs + introEnd;
      });


      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
        modifiedFiles++;
      }
    }
  }
}

traverse(dataDir);
console.log(`Fix terminé. ${modifiedFiles} fichiers modifiés.`);
