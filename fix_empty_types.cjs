const fs = require('fs');
const path = require('path');
function walk(dir){
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if(fs.statSync(p).isDirectory()) {
      walk(p);
    } else if(p.endsWith('.ts')){
      let c = fs.readFileSync(p, 'utf-8');
      if (c.includes("type: '',")) {
        // If a block has type empty, we'll replace it with 'tip' if it has a title "Conseil..." or something.
        // Actually, let's just make it 'tip' as a safe default for any corrupted block.
        c = c.replace(/type:\s*'',/g, "type: 'tip',");
        fs.writeFileSync(p, c);
        console.log('Fixed empty type in', p);
      }
    }
  });
}
walk('src/data');
