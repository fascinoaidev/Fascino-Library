import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Lightbox } from "./Lightbox";

interface Photo {
  id: string;
  url: string;
  title: string;
  description?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePhotoClick = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setSelectedIndex(index);
  };

  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % photos.length;
    setSelectedIndex(nextIndex);
    setSelectedPhoto(photos[nextIndex]);
  };

  const handlePrevious = () => {
    const previousIndex = selectedIndex === 0 ? photos.length - 1 : selectedIndex - 1;
    setSelectedIndex(previousIndex);
    setSelectedPhoto(photos[previousIndex]);
  };

  return (
    <>
      <div className="w-full animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-xl font-semibold text-foreground mb-6">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <Card
              key={photo.id}
              className="relative aspect-square overflow-hidden rounded-xl shadow-soft hover:shadow-medium transition-smooth cursor-pointer group"
              onClick={() => handlePhotoClick(photo, index)}
              style={{ animationDelay: `${(index + 5) * 0.05}s` }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-smooth group-hover:scale-110"
                style={{ backgroundImage: `url(${photo.url})` }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                <p className="text-white text-sm font-medium truncate">{photo.title}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <Lightbox
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
          hasNext={selectedIndex < photos.length - 1}
          hasPrevious={selectedIndex > 0}
        />
      )}
    </>
  );
};
