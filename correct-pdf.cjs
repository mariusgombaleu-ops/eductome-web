const fs = require('fs');

const rawText = fs.readFileSync('pdf-extract.txt', 'utf8');
const pages = rawText.split(/----------------Page \(\d+\) Break----------------/);

let correctedText = '';

pages.forEach((page, index) => {
    // Split into lines
    const lines = page.split('\n');
    // Reverse the lines because pdf2json extracted them from bottom to top
    const reversedLines = lines.reverse();
    
    // Join back
    correctedText += `\n\n--- PAGE ${index} ---\n\n` + reversedLines.join('\n');
});

fs.writeFileSync('pdf-extract-corrected.txt', correctedText);
console.log('Correction complete!');
