
import { Link } from "react-router-dom";
import { IndianRupee } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2">
              <IndianRupee className="h-6 w-6 text-luxury-gold" />
              <span className="font-playfair text-xl font-bold">Luxe Wheels</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Premium luxury and sports cars for the discerning automobile enthusiast.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary">Products</Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-primary">Categories</Link>
              </li>
              <li>
                <Link to="/cart" className="text-muted-foreground hover:text-primary">Cart</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                <span className="block">123 Luxury Lane</span>
                <span className="block">Mumbai, Maharashtra 400001</span>
                <span className="block">India</span>
              </li>
              <li className="text-muted-foreground">
                <span className="block">Email: info@luxewheels.com</span>
                <span className="block">Phone: +91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © {currentYear} Luxe Wheels Bazaar. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="#" className="text-muted-foreground hover:text-primary text-sm">Terms</Link>
            <Link to="#" className="text-muted-foreground hover:text-primary text-sm">Privacy</Link>
            <Link to="#" className="text-muted-foreground hover:text-primary text-sm">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
