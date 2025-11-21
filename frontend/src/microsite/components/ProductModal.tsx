import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  currency: string;
  shortDescription: string;
  fullDescription: string;
  specs?: string[];
}

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
  onEnquire: () => void;
}

export const ProductModal = ({ product, open, onClose, onEnquire }: ProductModalProps) => {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{product.title}</DialogTitle>
          <DialogDescription className="sr-only">
            Product details for {product.title}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary">
                {product.currency}{product.price.toLocaleString()}
              </span>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.fullDescription}
              </p>
            </div>
            
            {product.specs && product.specs.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-2">Specifications</h3>
                <ul className="space-y-1">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="text-muted-foreground text-sm flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <Button
              className="w-full"
              size="lg"
              onClick={onEnquire}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Enquire on WhatsApp
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
