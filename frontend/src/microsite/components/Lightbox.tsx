import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Photo {
  id: string;
  url: string;
  title: string;
  description?: string;
}

interface LightboxProps {
  photo: Photo;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

export const Lightbox = ({ photo, onClose, onNext, onPrevious, hasNext, hasPrevious }: LightboxProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && hasNext && onNext) onNext();
      if (e.key === "ArrowLeft" && hasPrevious && onPrevious) onPrevious();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose, onNext, onPrevious, hasNext, hasPrevious]);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in">
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:bg-white/10 rounded-full h-10 w-10"
      >
        <X className="h-6 w-6" />
      </Button>

      {hasPrevious && onPrevious && (
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 rounded-full h-12 w-12"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
      )}

      {hasNext && onNext && (
        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 rounded-full h-12 w-12"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      )}

      <div className="max-w-7xl max-h-[90vh] mx-4 animate-scale-in">
        <img
          src={photo.url}
          alt={photo.title}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-strong"
        />
        <div className="mt-4 text-center">
          <h3 className="text-white text-lg font-medium">{photo.title}</h3>
          {photo.description && <p className="text-white/70 text-sm mt-1">{photo.description}</p>}
        </div>
      </div>
    </div>
  );
};
