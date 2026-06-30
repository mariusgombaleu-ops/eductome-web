import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { X, Check } from 'lucide-react';
import { useToast } from '../../contexts/ToastContext';

interface ImageCropperModalProps {
  imageSrc: string;
  onClose: () => void;
  onCropComplete: (croppedBase64: string) => void;
}

const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous');
    image.src = url;
  });

// Taille de sortie de l'avatar. 640px = net sur le grand en-tête plein cadre
// (mobile retina + desktop), tout en restant ~100 Ko en base64 → bien sous la
// limite de 1 Mo d'un document Firestore.
const OUTPUT_SIZE = 640;

const getCroppedImg = async (imageSrc: string, pixelCrop: any): Promise<string> => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('No 2d context');
  }

  canvas.width = OUTPUT_SIZE;
  canvas.height = OUTPUT_SIZE;

  // Lissage de qualité pour le redimensionnement.
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    OUTPUT_SIZE,
    OUTPUT_SIZE
  );

  return canvas.toDataURL('image/jpeg', 0.82);
};

export const ImageCropperModal: React.FC<ImageCropperModalProps> = ({ imageSrc, onClose, onCropComplete }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const handleCropComplete = useCallback((_croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleSave = async () => {
    try {
      setLoading(true);
      const croppedBase64 = await getCroppedImg(imageSrc, croppedAreaPixels);
      onCropComplete(croppedBase64);
    } catch (e) {
      console.error(e);
      addToast({ type: 'error', title: 'Erreur', message: 'Impossible de recadrer l\'image.' });
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-[#161B22] rounded-2xl w-full max-w-md overflow-hidden shadow-2xl flex flex-col h-[500px]">
        <div className="p-4 border-b border-[#E1E4E8] dark:border-[#30363D] flex justify-between items-center bg-[#F8F9FA] dark:bg-[#0D1117]">
          <h3 className="font-bold text-[#1A1A2E] dark:text-white">Recadrer la photo</h3>
          <button onClick={onClose} className="p-2 text-[#6B7280] dark:text-[#8B949E] hover:text-[#D81B60] transition-colors rounded-full hover:bg-black/5">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 relative bg-black">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={1}
            cropShape="round"
            showGrid={false}
            onCropChange={setCrop}
            onCropComplete={handleCropComplete}
            onZoomChange={setZoom}
          />
        </div>

        <div className="p-4 bg-[#F8F9FA] dark:bg-[#0D1117] border-t border-[#E1E4E8] dark:border-[#30363D]">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-bold text-[#6B7280] dark:text-[#8B949E]">Zoom</span>
            <input
              type="range"
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              aria-labelledby="Zoom"
              onChange={(e) => setZoom(Number(e.target.value))}
              className="w-full accent-[#D81B60]"
            />
          </div>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              disabled={loading}
              className="flex-1 py-3 px-4 rounded-xl font-bold text-[#1A1A2E] dark:text-white bg-white dark:bg-[#161B22] border border-[#E1E4E8] dark:border-[#30363D] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Annuler
            </button>
            <button
              onClick={handleSave}
              disabled={loading}
              className="flex-1 py-3 px-4 rounded-xl font-bold text-white bg-[#D81B60] hover:bg-[#C2185B] transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                <>
                  <Check className="w-5 h-5" /> Valider
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
