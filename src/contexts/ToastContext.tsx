import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { CheckCircle, AlertTriangle, Info, X, Zap } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info' | 'xp';

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  xpAmount?: number;
}

interface ToastContextType {
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);

    // Auto-remove after 4 seconds
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-3 pointer-events-none">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

const ToastItem = ({ toast, onRemove }: { toast: Toast; onRemove: (id: string) => void }) => {
  const getIcon = () => {
    switch (toast.type) {
      case 'success': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error': return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'xp': return <Zap className="w-5 h-5 text-yellow-500 fill-current" />;
      default: return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  const getColors = () => {
    switch (toast.type) {
      case 'success': return 'bg-white dark:bg-[#161B22] border-l-4 border-green-500';
      case 'error': return 'bg-white dark:bg-[#161B22] border-l-4 border-red-500';
      case 'xp': return 'bg-gradient-to-r from-yellow-500/10 to-transparent dark:from-yellow-500/20 bg-white dark:bg-[#161B22] border border-yellow-500/30';
      default: return 'bg-white dark:bg-[#161B22] border-l-4 border-blue-500';
    }
  };

  return (
    <div className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-xl border ${getColors()} min-w-[300px] max-w-sm animate-in slide-in-from-right-8 fade-in duration-300`}>
      <div className="shrink-0 mt-0.5">{getIcon()}</div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-bold text-[#1A1A2E] dark:text-white">{toast.title}</h4>
          {toast.type === 'xp' && toast.xpAmount && (
            <span className="text-xs font-black text-yellow-600 dark:text-yellow-400">+{toast.xpAmount} XP</span>
          )}
        </div>
        {toast.message && (
          <p className="text-sm text-[#6B7280] dark:text-[#8B949E] mt-1 leading-relaxed">{toast.message}</p>
        )}
      </div>
      <button 
        onClick={() => onRemove(toast.id)}
        className="shrink-0 p-1 rounded-md text-[#9CA3AF] hover:bg-[#F8F9FA] dark:hover:bg-[#30363D] transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
