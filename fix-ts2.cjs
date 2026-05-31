const fs = require('fs');
const path = require('path');
const dir = './src/data';

const files = fs.readdirSync(dir).filter(f => f.startsWith('exercices-t') && f !== 'exercices-t1.ts');
files.forEach(f => {
  let content = fs.readFileSync(path.join(dir, f), 'utf-8');
  const tomeNumMatch = f.match(/t(\d+)/);
  if (tomeNumMatch) {
    const tomeNum = tomeNumMatch[1];
    
    // Replace id: 'tx-exY' or id: "tx-exY"
    content = content.replace(/id:\s*['"]t\d+-ex(\d+)['"],?/g, (match, exNum) => {
      return match + '\n    tome: ' + tomeNum + ',\n    numero: ' + exNum + ',';
    });
    
    fs.writeFileSync(path.join(dir, f), content);
  }
});
console.log('Fixed tome and numero');
