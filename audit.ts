import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'src', 'data');

const results: string[] = [];

function auditFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Extract sections roughly
  const sectionsMatch = content.match(/sections\s*:\s*\[([\s\S]*?)\]\s*,\s*(quiz|})/);
  if (!sectionsMatch) return;
  
  const sectionsText = sectionsMatch[1];
  const sectionBlocksRegex = /{\s*id:\s*'[^']+',\s*titre:\s*'[^']+',\s*blocs:\s*\[([\s\S]*?)\]\s*}/g;
  
  let sectionMatch;
  let sectionIndex = 1;
  while ((sectionMatch = sectionBlocksRegex.exec(sectionsText)) !== null) {
    const blocsText = sectionMatch[1];
    
    // Extract individual blocks
    const blocRegex = /{\s*type:\s*'([^']+)'\s*,([\s\S]*?)(?=\s*},\s*{|\s*})/g;
    
    let blocMatch;
    const blocs = [];
    while ((blocMatch = blocRegex.exec(blocsText)) !== null) {
      const type = blocMatch[1];
      const body = blocMatch[2];
      
      const idMatch = body.match(/id:\s*'([^']+)'/);
      const id = idMatch ? idMatch[1] : '';
      
      const contenuMatch = body.match(/contenu:\s*`([^`]+)`/);
      const contenuMatch2 = body.match(/contenu:\s*"([^"]+)"/);
      const contenuMatch3 = body.match(/contenu:\s*'([^']+)'/);
      const contenuMatch4 = body.match(/contenu:\s*\[([\s\S]*?)\]/);
      
      let text = '';
      if (contenuMatch) text = contenuMatch[1];
      else if (contenuMatch2) text = contenuMatch2[1];
      else if (contenuMatch3) text = contenuMatch3[1];
      else if (contenuMatch4) text = contenuMatch4[1];
      
      blocs.push({ type, id, text: text.trim() });
    }
    
    if (blocs.length > 0) {
      // 1. Check if first block is an accroche
      const firstBloc = blocs[0];
      if (firstBloc.type === 'text' && !firstBloc.id.includes('accroche')) {
        results.push(`[${path.basename(filePath)}] Section ${sectionIndex}: Le premier bloc n'a pas l'ID "accroche" (ID: ${firstBloc.id})`);
      }
      
      // 2. Check if last block is a transition
      const lastBloc = blocs[blocs.length - 1];
      if (lastBloc.type === 'text' && !lastBloc.id.includes('transition')) {
        results.push(`[${path.basename(filePath)}] Section ${sectionIndex}: Le dernier bloc n'a pas l'ID "transition" (ID: ${lastBloc.id})`);
      }
      
      // 3. Check for plain text blocks that should probably be formatted (rule, recap, tip, warning)
      for (let i = 0; i < blocs.length; i++) {
        const b = blocs[i];
        if (b.type === 'text' && !b.id.includes('accroche') && !b.id.includes('transition')) {
          const lowerText = b.text.toLowerCase();
          
          if (lowerText.includes('règle :') || lowerText.includes('règle d\'or') || b.text.includes('Règle')) {
             results.push(`[${path.basename(filePath)}] Section ${sectionIndex}: Bloc texte (ID: ${b.id}) contient "Règle" mais est de type "text" au lieu de "rule".`);
          }
          if (lowerText.includes('attention') || lowerText.includes('piège')) {
             results.push(`[${path.basename(filePath)}] Section ${sectionIndex}: Bloc texte (ID: ${b.id}) contient "Attention/Piège" mais est de type "text" au lieu de "warning".`);
          }
          if (lowerText.includes('résumé') || lowerText.includes('recap')) {
             results.push(`[${path.basename(filePath)}] Section ${sectionIndex}: Bloc texte (ID: ${b.id}) contient "Résumé" mais est de type "text" au lieu de "recap".`);
          }
          if (b.text.includes('1.') && b.text.includes('2.') && b.text.includes('-') && b.text.length > 200) {
             results.push(`[${path.basename(filePath)}] Section ${sectionIndex}: Bloc texte (ID: ${b.id}) est très long et contient des listes. Devrait probablement être découpé ou mis en "rule/recap". Extrait: "${b.text.substring(0, 50)}..."`);
          }
        }
      }
    }
    
    sectionIndex++;
  }
}

function traverseDirectory(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDirectory(fullPath);
    } else if (fullPath.endsWith('.ts') && !fullPath.includes('index.ts')) {
      auditFile(fullPath);
    }
  }
}

traverseDirectory(dataDir);

fs.writeFileSync(path.join(process.cwd(), 'audit_report.txt'), results.join('\n'));
console.log(`Audit terminé. ${results.length} problèmes potentiels trouvés.`);

