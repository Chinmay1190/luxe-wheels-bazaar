
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CarProduct } from "@/types";
import { useCart } from "@/providers/CartProvider";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: CarProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col">
      <div className="relative overflow-hidden pt-[56.25%]">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.mainImage}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          
          {!product.inStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60">
              <Badge variant="destructive" className="text-lg py-1 px-3">Out of Stock</Badge>
            </div>
          )}

          {product.featured && (
            <Badge className="absolute top-2 left-2 bg-luxury-gold text-black">Featured</Badge>
          )}

          {product.bestSeller && (
            <Badge className="absolute top-2 right-2 bg-luxury-red text-white">Best Seller</Badge>
          )}
        </Link>
      </div>

      <CardContent className="flex-grow p-4">
        <Link to={`/products/${product.id}`} className="block">
          <div className="mb-1 text-sm text-muted-foreground">{product.brand}</div>
          <h3 className="font-playfair text-lg font-medium leading-tight mb-1">
            {product.name}
          </h3>
          <div className="text-sm text-muted-foreground mb-3">
            {product.category} • {product.year}
          </div>
          <div className="font-semibold text-lg text-luxury-gold">
            {product.priceFormatted}
          </div>
        </Link>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => product.inStock && addItem(product)}
          className="w-full gap-2"
          variant={product.inStock ? "default" : "outline"}
          disabled={!product.inStock}
        >
          <ShoppingCart className="h-4 w-4" />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </CardFooter>
    </Card>
  );
}
