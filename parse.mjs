import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
let pdf = require('pdf-parse');
if (pdf && pdf.default) {
    pdf = pdf.default;
}

async function extract() {
    const parentDir = 'C:\\Users\\HP\\Documents\\EDUCTOME\\EDUCTOME';
    const subdirs = fs.readdirSync(parentDir);
    const collectionDir = subdirs.find(d => d.startsWith('03_COLLECTION'));
    
    const finalDir = path.join(parentDir, collectionDir, 'T1-LES LIMITES', 'Final');
    const files = fs.readdirSync(finalDir);
    const pdfFile = files.find(f => f.includes('LES LIMITES'));
    
    const dataBuffer = fs.readFileSync(path.join(finalDir, pdfFile));
    const data = await pdf(dataBuffer);
    fs.writeFileSync('pdf_full_text.txt', data.text);
    console.log("PDF parsed successfully.");
}

extract().catch(console.error);
