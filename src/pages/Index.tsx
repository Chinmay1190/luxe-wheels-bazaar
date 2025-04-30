
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { getFeaturedProducts, getBestSellerProducts, products, brands } from "@/data/products";
import { Link } from "react-router-dom";
import { CarProduct } from "@/types";

const Index = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 4);
  const bestSellers = getBestSellerProducts().slice(0, 8);
  
  // Select three luxury categories to highlight
  const highlightedCategories = [
    { name: "Luxury Sedan", image: featuredProducts[0]?.mainImage || "" },
    { name: "Super Car", image: featuredProducts[1]?.mainImage || "" },
    { name: "Luxury SUV", image: featuredProducts[2]?.mainImage || "" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative flex h-[70vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Luxury Car"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container relative z-10 mx-auto flex flex-col items-center text-center">
          <h1 className="font-playfair text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Luxury Redefined
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Discover the most exclusive collection of luxury automobiles in India
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-luxury-gold text-black hover:bg-luxury-gold/90">
              <Link to="/products">Browse Collection</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="font-playfair text-3xl font-bold">Featured Vehicles</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Experience unparalleled luxury with our handpicked selection of the finest automobiles
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product: CarProduct) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button asChild className="bg-luxury-gold text-black hover:bg-luxury-gold/90">
              <Link to="/products">View All Vehicles</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Categories Spotlight */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="font-playfair text-3xl font-bold">Explore Categories</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Find your perfect luxury vehicle across our diverse categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {highlightedCategories.map((category, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-w-16 aspect-h-9 h-64">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-white">
                      {category.name}
                    </h3>
                    <Button asChild variant="link" className="px-0 text-luxury-gold">
                      <Link to={`/categories/${category.name}`}>Explore Collection</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Premium Brands */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="font-playfair text-3xl font-bold">Premium Brands</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              We partner with the world's most prestigious automotive manufacturers
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {brands.slice(0, 5).map((brand) => (
              <div key={brand.id} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-luxury-gold/10">
                  <span className="font-playfair text-xl font-bold text-luxury-gold">
                    {brand.name.charAt(0)}
                  </span>
                </div>
                <h3 className="mt-4 font-medium">{brand.name}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button asChild variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10">
              <Link to="/brands">View All Brands</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Best Sellers */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="font-playfair text-3xl font-bold">Best Sellers</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Our most popular models loved by discerning collectors and enthusiasts
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.slice(0, 4).map((product: CarProduct) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button asChild className="bg-luxury-gold text-black hover:bg-luxury-gold/90">
              <Link to="/products">Shop All Models</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600712242805-5f78671b24da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Luxury Cars"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-white md:text-4xl">
            Elevate Your Driving Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Join the elite community of Luxe Wheels owners and experience unparalleled quality, performance, and prestige.
          </p>
          <Button asChild size="lg" className="mt-8 bg-luxury-gold text-black hover:bg-luxury-gold/90">
            <Link to="/products">Explore Our Collection</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
