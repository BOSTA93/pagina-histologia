import React, { useEffect } from 'react';
import { MapItem } from '../data/pageContent';
import { X, ExternalLink, Download } from 'lucide-react';

interface MapModalProps {
  item: MapItem | null;
  onClose: () => void;
  onCtaClick: () => void;
}

export const MapModal: React.FC<MapModalProps> = ({
  item,
  onClose,
  onCtaClick,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-slate-50">
          <div>
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
              Mapa Visual de Histologia
            </span>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
              {item.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display */}
        <div className="p-4 sm:p-6 bg-slate-100 flex items-center justify-center max-h-[70vh] overflow-auto">
          <img
            src={item.full || item.thumb}
            alt={item.title}
            className="max-h-[65vh] w-auto object-contain rounded-xl shadow-lg border border-slate-200"
          />
        </div>

        {/* Footer with CTA */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            São mais de 200 mapas em alta resolução prontos para consulta e impressão.
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onCtaClick();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm flex items-center justify-center gap-1.5 shadow transition-all cursor-pointer"
            >
              <span>Quero o Material Completo</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
