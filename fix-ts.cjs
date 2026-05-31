const fs = require('fs');
const path = require('path');
const dir = './src/data';

// Fix noteGrandFrere in t10
let t10 = fs.readFileSync(path.join(dir, 'exercices-t10.ts'), 'utf-8');
t10 = t10.replace(/astuces: \[/g, 'noteGrandFrere: "A revoir",\n      astuces: [');
fs.writeFileSync(path.join(dir, 'exercices-t10.ts'), t10);

// Fix noteGrandFrere in t11
let t11 = fs.readFileSync(path.join(dir, 'exercices-t11.ts'), 'utf-8');
t11 = t11.replace(/astuces: \[/g, 'noteGrandFrere: "A revoir",\n      astuces: [');
fs.writeFileSync(path.join(dir, 'exercices-t11.ts'), t11);

// Fix ASTUCE in t3, t6, t9
const files = ['exercices-t3.ts', 'exercices-t6.ts', 'exercices-t9.ts'];
files.forEach(f => {
  let content = fs.readFileSync(path.join(dir, f), 'utf-8');
  content = content.replace(/type: 'ASTUCE'/g, "type: 'PIEGE'");
  fs.writeFileSync(path.join(dir, f), content);
});

console.log('Fixed TS errors.');
