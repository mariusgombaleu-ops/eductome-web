import { useState, useEffect } from 'react';

export function useTypewriter(texts: string | string[], speed: number = 70, deleteSpeed: number = 50, pauseTime: number = 1500) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const textArray = Array.isArray(texts) ? texts : [texts];
    const currentText = textArray[textIndex];
    let timer: any;

    if (isDeleting) {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % textArray.length);
      }
    } else {
      if (displayText.length < currentText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, speed);
      } else {
        if (textArray.length > 1) {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        } else {
          setIsTyping(false);
        }
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, texts, textIndex, speed, deleteSpeed, pauseTime]);

  return { displayText, isTyping };
}
