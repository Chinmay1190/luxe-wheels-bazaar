
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { categories, products } from "@/data/products";
import { ArrowRight } from "lucide-react";

const Categories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Count products in each category
  const getCategoryCount = (categoryName: string) => {
    return products.filter(product => product.category === categoryName).length;
  };

  // Get a sample image for each category
  const getCategoryImage = (categoryName: string) => {
    const product = products.find(p => p.category === categoryName);
    return product ? product.mainImage : "";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-secondary py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Car Categories</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse collection of premium automobiles across multiple categories
          </p>
        </div>
      </div>
      
      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group relative overflow-hidden rounded-lg border h-[300px]">
              <div className="absolute inset-0">
                <img
                  src={getCategoryImage(category.name)}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="mb-2 flex items-center">
                  <h2 className="font-playfair text-2xl font-semibold text-white">
                    {category.name}
                  </h2>
                  <span className="ml-2 bg-luxury-gold/90 text-black text-xs px-2 py-1 rounded-full">
                    {getCategoryCount(category.name)} vehicles
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">
                  {category.description}
                </p>
                
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/20 w-fit gap-1">
                  <Link to={`/products?category=${category.name}`}>
                    Explore <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Banner */}
      <div className="bg-luxury-gold/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our team of automotive experts can help you source specific models or customize your perfect vehicle.
          </p>
          <Button asChild size="lg" className="bg-luxury-gold text-black hover:bg-luxury-gold/90">
            <Link to="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
