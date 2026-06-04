const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');

async function extract() {
    const parentDir = 'C:\\Users\\HP\\Documents\\EDUCTOME\\EDUCTOME';
    const subdirs = fs.readdirSync(parentDir);
    const collectionDir = subdirs.find(d => d.startsWith('03_COLLECTION'));
    
    const finalDir = path.join(parentDir, collectionDir, 'T1-LES LIMITES', 'Final');
    const files = fs.readdirSync(finalDir);
    const pdfFile = files.find(f => f.includes('LES LIMITES'));
    const fullPath = path.join(finalDir, pdfFile);
    console.log("Reading file:", fullPath);
    
    const dataBuffer = fs.readFileSync(fullPath);
    const data = await pdfParse(dataBuffer);
    
    fs.writeFileSync('pdf_full_text.txt', data.text);
    console.log("Done! Pages:", data.numpages, "- Saved to pdf_full_text.txt");
}

extract().catch(console.error);
