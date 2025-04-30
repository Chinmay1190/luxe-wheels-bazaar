
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getProductById, getProductsByBrand } from "@/data/products";
import { CarProduct } from "@/types";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/providers/CartProvider";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, IndianRupee, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [product, setProduct] = useState<CarProduct | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<CarProduct[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (id) {
      const productId = parseInt(id);
      const foundProduct = getProductById(productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(foundProduct.mainImage);
        
        // Get related products from the same brand
        const brandProducts = getProductsByBrand(foundProduct.brand).filter(
          (item) => item.id !== productId
        );
        setRelatedProducts(brandProducts.slice(0, 4));
      } else {
        // Product not found, redirect to products page
        navigate("/products");
      }
    }
    
    setLoading(false);
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 flex items-center justify-center">
          <p>Loading product...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">The product you are looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate("/products")}>Back to Products</Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Calculate EMI (example: 5-year loan at 7.5% interest rate)
  const calculateMonthlyEMI = (price: number) => {
    const loanAmount = price;
    const interestRate = 7.5 / 100 / 12; // monthly interest rate
    const loanTerm = 5 * 12; // 5 years in months
    
    const emi = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / 
               (Math.pow(1 + interestRate, loanTerm) - 1);
    
    return Math.round(emi);
  };

  const monthlyEMI = calculateMonthlyEMI(product.price);
  
  const formatEMI = (emi: number): string => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(emi);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm">
          <Button 
            variant="link" 
            className="p-0 font-normal" 
            onClick={() => navigate("/")}
          >
            Home
          </Button>
          <span className="mx-2">/</span>
          <Button 
            variant="link" 
            className="p-0 font-normal" 
            onClick={() => navigate("/products")}
          >
            Products
          </Button>
          <span className="mx-2">/</span>
          <span className="text-muted-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg bg-secondary">
              <img
                src={selectedImage}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`aspect-w-1 aspect-h-1 overflow-hidden rounded-md ${
                      selectedImage === image
                        ? "ring-2 ring-luxury-gold"
                        : "ring-1 ring-border"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-2 space-y-1">
              <p className="text-luxury-gold font-medium">{product.brand}</p>
              <h1 className="font-playfair text-3xl font-bold">{product.name}</h1>
              <div className="flex items-center">
                <span className="text-muted-foreground">
                  {product.category} • {product.year}
                </span>
                
                {!product.inStock && (
                  <Badge variant="destructive" className="ml-2">
                    Out of Stock
                  </Badge>
                )}
                
                {product.bestSeller && (
                  <Badge variant="secondary" className="ml-2">
                    Best Seller
                  </Badge>
                )}
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center">
                <IndianRupee className="h-6 w-6 text-luxury-gold mr-1" />
                <span className="text-3xl font-semibold">{product.priceFormatted}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                EMI starting from {formatEMI(monthlyEMI)}/month*
              </p>
            </div>

            <div className="mt-6">
              <Button
                onClick={() => product.inStock && addItem(product)}
                className="w-full py-6 text-lg gap-2"
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-5 w-5" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
            </div>
            
            {/* Key Specifications */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-secondary/50 p-4">
                <p className="text-sm text-muted-foreground">Engine</p>
                <p className="font-medium">{product.engine}</p>
              </div>
              <div className="rounded-lg bg-secondary/50 p-4">
                <p className="text-sm text-muted-foreground">Power</p>
                <p className="font-medium">{product.power}</p>
              </div>
              <div className="rounded-lg bg-secondary/50 p-4">
                <p className="text-sm text-muted-foreground">Acceleration</p>
                <p className="font-medium">{product.acceleration}</p>
              </div>
              <div className="rounded-lg bg-secondary/50 p-4">
                <p className="text-sm text-muted-foreground">Top Speed</p>
                <p className="font-medium">{product.topSpeed}</p>
              </div>
            </div>
            
            {/* Key Features */}
            <div className="mt-8">
              <h3 className="font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-luxury-gold mr-2" />
                  <span>{product.transmission} Transmission</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-luxury-gold mr-2" />
                  <span>{product.color} Exterior</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-luxury-gold mr-2" />
                  <span>{product.fuelType} Engine</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-luxury-gold mr-2" />
                  <span>Premium Interior Finishes</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-luxury-gold mr-2" />
                  <span>Advanced Driver Assistance Systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="description">
            <TabsList className="w-full grid grid-cols-3 mb-6">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="p-4">
              <h2 className="font-playfair text-xl font-semibold mb-4">About {product.name}</h2>
              <p className="leading-relaxed">{product.description}</p>
              <p className="mt-4 leading-relaxed">
                Experience unparalleled luxury and performance with the {product.name}. 
                This exceptional vehicle represents the pinnacle of automotive engineering, 
                combining cutting-edge technology with exquisite craftsmanship.
              </p>
              <p className="mt-4 leading-relaxed">
                Every detail of the {product.name} has been meticulously designed to provide 
                an extraordinary driving experience, from its powerful {product.engine} engine 
                to its opulent interior featuring premium materials and advanced connectivity options.
              </p>
            </TabsContent>
            
            <TabsContent value="specifications" className="p-4">
              <h2 className="font-playfair text-xl font-semibold mb-4">Technical Specifications</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-2">Engine & Performance</h3>
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 text-muted-foreground">Engine</td>
                          <td className="py-2">{product.engine}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 text-muted-foreground">Power</td>
                          <td className="py-2">{product.power}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 text-muted-foreground">Acceleration</td>
                          <td className="py-2">{product.acceleration}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 text-muted-foreground">Top Speed</td>
                          <td className="py-2">{product.topSpeed}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 text-muted-foreground">Fuel Type</td>
                          <td className="py-2">{product.fuelType}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">General Information</h3>
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 text-muted-foreground">Brand</td>
                          <td className="py-2">{product.brand}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 text-muted-foreground">Model</td>
                          <td className="py-2">{product.name}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 text-muted-foreground">Year</td>
                          <td className="py-2">{product.year}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 text-muted-foreground">Category</td>
                          <td className="py-2">{product.category}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 text-muted-foreground">Color</td>
                          <td className="py-2">{product.color}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Transmission & Drivetrain</h3>
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 text-muted-foreground">Transmission Type</td>
                        <td className="py-2">{product.transmission}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="shipping" className="p-4">
              <h2 className="font-playfair text-xl font-semibold mb-4">Shipping & Returns</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Delivery Process</h3>
                  <p className="text-muted-foreground mb-2">
                    Upon purchase, our concierge team will contact you within 24 hours to arrange delivery details.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>White-glove delivery service across India</li>
                    <li>Full vehicle orientation at delivery</li>
                    <li>Complimentary fuel tank at delivery</li>
                    <li>Estimated delivery time: 7-30 days depending on location and customization</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Return Policy</h3>
                  <p className="text-muted-foreground mb-2">
                    We want you to be completely satisfied with your purchase.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>7-day/100km satisfaction guarantee</li>
                    <li>Full inspection required before return</li>
                    <li>Return shipping fees may apply</li>
                    <li>Custom-ordered vehicles may not be eligible for return</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Warranty Information</h3>
                  <p className="text-muted-foreground mb-2">
                    All vehicles come with comprehensive warranty coverage:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>3-year/unlimited km basic warranty</li>
                    <li>5-year/100,000 km powertrain warranty</li>
                    <li>1-year/20,000 km maintenance package included</li>
                    <li>Extended warranty options available</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <Separator className="mb-8" />
            <h2 className="font-playfair text-2xl font-bold mb-6">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
