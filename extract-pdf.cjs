const fs = require('fs');
const PDFParser = require("pdf2json");

const pdfParser = new PDFParser(this, 1); // 1 = raw text
const pdfPath = 'C:\\Users\\HP\\Documents\\EDUCTOME\\EDUCTOME\\03_COLLECTION LES CLÉS\\T1-LES LIMITES\\Final\\LES LIMITES-final.pdf';

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFileSync('pdf-extract.txt', pdfParser.getRawTextContent());
    console.log("Extraction complete.");
});

pdfParser.loadPDF(pdfPath);
