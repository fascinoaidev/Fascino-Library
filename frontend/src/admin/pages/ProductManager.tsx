import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, Upload } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const productSchema = z.object({
  name: z.string().trim().min(1, "Product name is required").max(100, "Name must be less than 100 characters"),
  price: z.string().trim().min(1, "Price is required").max(20, "Price must be less than 20 characters"),
  shortDescription: z.string().trim().min(1, "Short description is required").max(200, "Short description must be less than 200 characters"),
  fullDescription: z.string().trim().max(1000, "Full description must be less than 1000 characters"),
});

type ProductFormData = z.infer<typeof productSchema>;

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  fullDescription?: string;
}

export default function ProductManager() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Premium Product",
      price: "$99",
      image: "",
      description: "High-quality product description",
      fullDescription: "This is a premium product with excellent features and quality.",
    },
    {
      id: "2",
      name: "Starter Kit",
      price: "$49",
      image: "",
      description: "Perfect for beginners",
      fullDescription: "Everything you need to get started with our platform.",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const form = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      price: "",
      shortDescription: "",
      fullDescription: "",
    },
  });

  useEffect(() => {
    if (editingProduct) {
      form.reset({
        name: editingProduct.name,
        price: editingProduct.price,
        shortDescription: editingProduct.description,
        fullDescription: editingProduct.fullDescription || "",
      });
    } else {
      form.reset({
        name: "",
        price: "",
        shortDescription: "",
        fullDescription: "",
      });
    }
  }, [editingProduct, form]);

  const handleOpenDialog = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
    } else {
      setEditingProduct(null);
    }
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setEditingProduct(null);
    form.reset();
  };

  const onSubmit = (data: ProductFormData) => {
    if (editingProduct) {
      // Update existing product
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id
            ? {
                ...p,
                name: data.name,
                price: data.price,
                description: data.shortDescription,
                fullDescription: data.fullDescription,
              }
            : p
        )
      );
      toast.success("Product updated successfully!");
    } else {
      // Add new product
      const newProduct: Product = {
        id: Date.now().toString(),
        name: data.name,
        price: data.price,
        description: data.shortDescription,
        fullDescription: data.fullDescription,
        image: "",
      };
      setProducts([...products, newProduct]);
      toast.success("Product added successfully!");
    }
    handleCloseDialog();
  };

  const handleDelete = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
    toast.success("Product deleted");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Product Manager</h1>
          <p className="mt-2 text-muted-foreground">
            Add and manage your product showcase
          </p>
        </div>

        <Button className="gap-2" onClick={() => handleOpenDialog()}>
          <Plus className="h-4 w-4" />
          Add Product
        </Button>
      </div>

      <Dialog open={open} onOpenChange={(isOpen) => !isOpen && handleCloseDialog()}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingProduct ? "Edit Product" : "Add New Product"}</DialogTitle>
            <DialogDescription>
              {editingProduct 
                ? "Update the product details below" 
                : "Fill in the details to add a new product to your portfolio"}
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter product name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input placeholder="$0.00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="shortDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Brief description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fullDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Detailed description..." rows={4} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-2">
                <Label>Product Image</Label>
                <div className="flex h-32 items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted">
                  <Button type="button" variant="outline" className="gap-2">
                    <Upload className="h-4 w-4" />
                    Upload Image
                  </Button>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button type="submit" className="flex-1">
                  {editingProduct ? "Update Product" : "Add Product"}
                </Button>
                <Button type="button" variant="outline" onClick={handleCloseDialog}>
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} className="shadow-card transition-smooth hover:shadow-elevated">
            <CardContent className="p-6">
              <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-gradient-subtle">
                <div className="text-4xl">📦</div>
              </div>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="mt-1 text-2xl font-bold text-primary">{product.price}</p>
              <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
              <div className="mt-4 flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 gap-2"
                  onClick={() => handleOpenDialog(product)}
                >
                  <Edit className="h-4 w-4" />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(product.id)}
                  className="gap-2 text-destructive hover:bg-destructive hover:text-destructive-foreground"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
