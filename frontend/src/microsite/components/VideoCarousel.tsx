import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Video {
  id: string;
  thumbnail: string;
  title: string;
  duration: string;
}

interface VideoCarouselProps {
  videos: Video[];
}

export const VideoCarousel = ({ videos }: VideoCarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div className="relative w-full animate-fade-up">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-foreground">Highlights</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="h-8 w-8 rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="h-8 w-8 rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {videos.map((video, index) => (
          <Card
            key={video.id}
            className="relative flex-shrink-0 w-[280px] h-[420px] overflow-hidden rounded-2xl shadow-medium hover:shadow-strong transition-smooth cursor-pointer snap-start group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-smooth group-hover:scale-105"
              style={{ backgroundImage: `url(${video.thumbnail})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
              <div className="h-16 w-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-strong">
                <Play className="h-7 w-7 text-primary ml-1" fill="currentColor" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-medium text-sm mb-1">{video.title}</h3>
              <span className="text-white/80 text-xs">{video.duration}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
