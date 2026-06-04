import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'src', 'data');
const reportPath = path.join(process.cwd(), 'audit_report2.txt');

const report = fs.readFileSync(reportPath, 'utf-8');

const blocksToFix = new Map<string, string[]>();

const matches = report.matchAll(/- \*\*Fichier\*\*: `([^`]+)`\n  - \*\*Bloc ID\*\*: `([^`]+)`/g);
for (const match of matches) {
  const file = match[1];
  const blockId = match[2];
  if (!blocksToFix.has(file)) blocksToFix.set(file, []);
  blocksToFix.get(file)!.push(blockId);
}

let modifiedFiles = 0;

for (const [file, blockIds] of blocksToFix.entries()) {
  const fullPath = path.join(dataDir, file);
  if (!fs.existsSync(fullPath)) continue;
  
  let content = fs.readFileSync(fullPath, 'utf-8');
  let changed = false;
  
  for (const blockId of blockIds) {
    // Look for the block definition
    const blockRegex = new RegExp(`({\\s*type:\\s*)'text'([\\s\\S]*?id:\\s*'${blockId}'[\\s\\S]*?contenu:\\s*(\`[\\s\\S]*?\`|"[\\s\\S]*?"|'[\\s\\S]*?'))`, 'g');
    
    content = content.replace(blockRegex, (match, typePrefix, middle, textContent) => {
      // If it contains raw HTML, keep it as text
      if (textContent.includes('<div')) {
        return match;
      }
      
      const lower = textContent.toLowerCase();
      let newType = 'recap';
      let titleField = '';
      
      if (lower.includes('attention') || lower.includes('piège')) {
        newType = 'warning';
      } else if (lower.includes('règle')) {
        newType = 'rule';
      } else if (lower.includes('astuce') || lower.includes('conseil') || lower.includes('grand frère')) {
        newType = 'tip';
        titleField = `\n          titre: "Conseil du Grand Frère",`;
      } else {
        newType = 'recap';
      }
      
      changed = true;
      return `${typePrefix}'${newType}',${titleField}${middle}`;
    });
  }
  
  if (changed) {
    fs.writeFileSync(fullPath, content);
    modifiedFiles++;
    console.log(`Updated ${file}`);
  }
}

console.log(`Fix terminé. ${modifiedFiles} fichiers modifiés.`);
