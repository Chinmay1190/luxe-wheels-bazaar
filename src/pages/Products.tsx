
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products, brands, categories } from "@/data/products";
import { CarProduct } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState<CarProduct[]>(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 100000000]); // 0 to 10 Crore
  const [sortOrder, setSortOrder] = useState<string>("featured");
  const [inStockOnly, setInStockOnly] = useState(false);

  // For mobile filter visibility
  const [showFilters, setShowFilters] = useState(false);

  // Effect to handle filtering and sorting
  useEffect(() => {
    let result = [...products];

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by brand
    if (selectedBrand) {
      result = result.filter((product) => product.brand === selectedBrand);
    }

    // Filter by category
    if (selectedCategory) {
      result = result.filter((product) => product.category === selectedCategory);
    }

    // Filter by price range
    result = result.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filter by stock
    if (inStockOnly) {
      result = result.filter((product) => product.inStock);
    }

    // Apply sorting
    switch (sortOrder) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "featured":
      default:
        result.sort((a, b) => {
          // Sort by featured first, then best sellers
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          if (a.bestSeller && !b.bestSeller) return -1;
          if (!a.bestSeller && b.bestSeller) return 1;
          return 0;
        });
    }

    setFilteredProducts(result);
  }, [searchTerm, selectedBrand, selectedCategory, priceRange, sortOrder, inStockOnly]);

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedBrand(null);
    setSelectedCategory(null);
    setPriceRange([0, 100000000]);
    setSortOrder("featured");
    setInStockOnly(false);
  };

  // Format price for display in the slider
  const formatSliderValue = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(1)} Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)} L`;
    } else {
      return `₹${value.toLocaleString('en-IN')}`;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page Header */}
      <div className="bg-secondary py-8">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-3xl font-bold text-center">Our Collection</h1>
          <p className="mt-2 text-center text-muted-foreground">
            Browse our premium selection of luxury and sports cars
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <Button 
            onClick={() => setShowFilters(!showFilters)}
            className="w-full"
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>
        
        <div className="flex flex-col lg:flex-row">
          {/* Filters Sidebar */}
          <div className={`w-full lg:w-1/4 pr-0 lg:pr-8 ${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="space-y-6">
              {/* Search */}
              <div>
                <h3 className="font-medium mb-3">Search</h3>
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              
              {/* Brand Filter */}
              <div>
                <h3 className="font-medium mb-3">Brand</h3>
                <Select
                  value={selectedBrand || ""}
                  onValueChange={(value) => setSelectedBrand(value || null)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All Brands" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Brands</SelectItem>
                    {brands.map((brand) => (
                      <SelectItem key={brand.id} value={brand.name}>
                        {brand.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Category Filter */}
              <div>
                <h3 className="font-medium mb-3">Category</h3>
                <Select
                  value={selectedCategory || ""}
                  onValueChange={(value) => setSelectedCategory(value || null)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Price Range Filter */}
              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 100000000]}
                    max={100000000}
                    step={1000000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="my-6"
                  />
                </div>
                <div className="flex justify-between text-sm">
                  <span>{formatSliderValue(priceRange[0])}</span>
                  <span>{formatSliderValue(priceRange[1])}</span>
                </div>
              </div>
              
              {/* In Stock Filter */}
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="in-stock" 
                  checked={inStockOnly}
                  onCheckedChange={(checked) => setInStockOnly(checked === true)}
                />
                <Label htmlFor="in-stock">In Stock Only</Label>
              </div>
              
              {/* Reset Filters */}
              <Button 
                onClick={resetFilters} 
                variant="outline"
                className="w-full"
              >
                Reset Filters
              </Button>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            {/* Sort Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div className="mb-4 sm:mb-0">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>
              
              <div className="flex items-center">
                <span className="mr-2 text-sm">Sort by:</span>
                <Select
                  value={sortOrder}
                  onValueChange={setSortOrder}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Featured" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="name-asc">Name: A to Z</SelectItem>
                    <SelectItem value="name-desc">Name: Z to A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters
                </p>
                <Button onClick={resetFilters} className="mt-4">
                  Reset All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
