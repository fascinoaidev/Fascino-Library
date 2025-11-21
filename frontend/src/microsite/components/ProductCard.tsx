import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, MessageCircle } from "lucide-react";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  currency: string;
  shortDescription: string;
  onViewDetails: () => void;
  onEnquire: () => void;
}

export const ProductCard = ({
  image,
  title,
  price,
  currency,
  shortDescription,
  onViewDetails,
  onEnquire,
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden rounded-xl shadow-soft hover:shadow-medium transition-smooth animate-fade-up">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
          loading="lazy"
        />
      </div>
      
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg text-foreground truncate">{title}</h3>
          <p className="text-2xl font-bold text-primary mt-1">
            {currency}{price.toLocaleString()}
          </p>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
          {shortDescription}
        </p>
        
        <div className="flex gap-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={onViewDetails}
          >
            <Eye className="w-4 h-4 mr-1" />
            View Details
          </Button>
          <Button
            size="sm"
            className="flex-1"
            onClick={onEnquire}
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            Enquire Now
          </Button>
        </div>
      </div>
    </Card>
  );
};
