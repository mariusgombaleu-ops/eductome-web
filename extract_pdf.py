import PyPDF2
import os

pdf_path = r'C:\Users\HP\Documents\EDUCTOME\EDUCTOME\03_COLLECTION LES CLÉS\T1-LES LIMITES\Final\LES LIMITES-final.pdf'
out_path = r'C:\Users\HP\Documents\EDUCTOME\EDUCTOME\04_MARKETINGG\SITE INTERNET\eductome-web\pdf_chap3.txt'

try:
    reader = PyPDF2.PdfReader(pdf_path)
    text = ''
    for i in range(38, 59): 
        try:
            text += f'\n--- Page {i+1} ---\n' + reader.pages[i].extract_text()
        except Exception as e:
            text += f'\nError reading page {i+1}: {str(e)}\n'
    
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(text)
    print("Extraction successful.")
except Exception as e:
    print(f"Error: {str(e)}")
