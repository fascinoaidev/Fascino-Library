import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";

export interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  currency: string;
  shortDescription: string;
  fullDescription: string;
  specs?: string[];
}

interface ProductShowcaseProps {
  products: Product[];
  whatsappNumber?: string;
}

export const ProductShowcase = ({ products, whatsappNumber = "" }: ProductShowcaseProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleEnquire = (product: Product) => {
    const message = encodeURIComponent(
      `Hi, I'm interested in ${product.title} (${product.currency}${product.price}). Can you provide more details?`
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div className="w-full animate-fade-up" style={{ animationDelay: "0.15s" }}>
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Our Products</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Discover our collection of premium offerings
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              style={{ animationDelay: `${(index + 2) * 0.05}s` }}
            >
              <ProductCard
                {...product}
                onViewDetails={() => handleViewDetails(product)}
                onEnquire={() => handleEnquire(product)}
              />
            </div>
          ))}
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onEnquire={() => selectedProduct && handleEnquire(selectedProduct)}
      />
    </>
  );
};
