import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'src', 'data');
const results: string[] = [];

function findUnformattedBlocks(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // A simple regex to find all text blocks and their content
  // Since content can contain backticks, quotes etc, we look for type: 'text' and then the following contenu
  const blockRegex = /{\s*type:\s*'text'[\s\S]*?id:\s*'([^']+)'[\s\S]*?contenu:\s*(`[\s\S]*?`|"[\s\S]*?"|'[\s\S]*?')\s*,?/g;
  
  let match;
  while ((match = blockRegex.exec(content)) !== null) {
    const id = match[1];
    const text = match[2];
    
    // Skip accroches and transitions as they are already formatted by ID
    if (id.includes('accroche') || id.includes('transition')) continue;
    
    const lowerText = text.toLowerCase();
    
    let isSuspicious = false;
    let reason = [];
    
    if (lowerText.includes('règle d\'or') || lowerText.includes('règle :') || text.includes('Règle')) {
      isSuspicious = true;
      reason.push('Contient "Règle"');
    }
    if (lowerText.includes('attention') || lowerText.includes('piège')) {
      isSuspicious = true;
      reason.push('Contient "Attention/Piège"');
    }
    if (lowerText.includes('résumé') || lowerText.includes('recap')) {
      isSuspicious = true;
      reason.push('Contient "Résumé/Recap"');
    }
    if (lowerText.includes('astuce') || lowerText.includes('conseil')) {
      isSuspicious = true;
      reason.push('Contient "Astuce/Conseil"');
    }
    
    // Check if it's a very long text with lists/bullet points
    const lines = text.split('\\n').length;
    const bullets = (text.match(/\\n-/g) || []).length + (text.match(/\\n\*/g) || []).length + (text.match(/\\n\d+\./g) || []).length;
    if (text.length > 300 && bullets > 2) {
       isSuspicious = true;
       reason.push('Long texte avec listes (devrait être un encadré ou table/recap)');
    }
    
    if (isSuspicious) {
      results.push(`- **Fichier**: \`${path.relative(dataDir, filePath)}\`\n  - **Bloc ID**: \`${id}\`\n  - **Raison**: ${reason.join(', ')}\n  - **Extrait**: "${text.substring(0, 100).replace(/\n/g, ' ')}..."`);
    }
  }
}

function traverseDirectory(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDirectory(fullPath);
    } else if (fullPath.endsWith('.ts') && !fullPath.includes('index.ts') && !fullPath.includes('exercices') && !fullPath.includes('course')) {
      findUnformattedBlocks(fullPath);
    }
  }
}

traverseDirectory(dataDir);

fs.writeFileSync(path.join(process.cwd(), 'audit_report2.txt'), results.join('\n\n'));
console.log(`Audit terminé. ${results.length} problèmes potentiels trouvés.`);

