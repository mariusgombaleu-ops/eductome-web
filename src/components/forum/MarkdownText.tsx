
export const MarkdownText = ({ text, className = "" }: { text: string; className?: string }) => {
  if (!text) return null;

  // Pattern matching images, bold, and italic
  const parts = text.split(/(!\[.*?\]\(.*?\)|\*\*.*?\*\*|\*.*?\*)/g);

  return (
    <div className={`whitespace-pre-wrap ${className}`}>
      {parts.map((part, i) => {
        if (part.startsWith('![') && part.includes('](') && part.endsWith(')')) {
          const altMatch = part.match(/!\[(.*?)\]/);
          const urlMatch = part.match(/\((.*?)\)/);
          const alt = altMatch ? altMatch[1] : '';
          const url = urlMatch ? urlMatch[1] : '';
          return (
            <img 
              key={i} 
              src={url} 
              alt={alt} 
              className="max-w-full h-auto rounded-xl my-4 border border-[#E1E4E8] dark:border-[#30363D] shadow-sm" 
              loading="lazy"
            />
          );
        }
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-bold text-[#1A1A2E] dark:text-white">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={i} className="italic text-[#1976D2]">{part.slice(1, -1)}</em>;
        }
        return <span key={i}>{part}</span>;
      })}
    </div>
  );
};
