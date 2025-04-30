
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/providers/CartProvider";
import { formatPrice } from "@/data/products";
import { Minus, Plus, Trash2, ShoppingCart, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Cart = () => {
  const { items, updateQuantity, removeItem, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();
  
  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };
  
  // Calculate tax (18% GST)
  const taxAmount = totalPrice * 0.18;
  
  // Calculate shipping (free over ₹50,00,000, else ₹25,000)
  const shippingAmount = totalPrice > 5000000 ? 0 : 25000;
  
  // Calculate order total
  const orderTotal = totalPrice + taxAmount + shippingAmount;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="font-playfair text-3xl font-bold text-center mb-8">Your Cart</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-16">
            <div className="flex justify-center mb-4">
              <ShoppingCart className="h-16 w-16 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any vehicles to your cart yet.
            </p>
            <Button asChild className="bg-luxury-gold text-black hover:bg-luxury-gold/90">
              <Link to="/products">Browse Our Collection</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold">
                  Cart Items ({items.reduce((total, item) => total + item.quantity, 0)})
                </h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearCart}
                  className="text-sm"
                >
                  Clear Cart
                </Button>
              </div>
              
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center border rounded-lg p-4"
                  >
                    {/* Product Image */}
                    <Link 
                      to={`/products/${item.product.id}`}
                      className="w-full sm:w-24 h-24 mb-4 sm:mb-0 mr-0 sm:mr-4 flex-shrink-0"
                    >
                      <img
                        src={item.product.mainImage}
                        alt={item.product.name}
                        className="w-full h-full object-cover rounded"
                      />
                    </Link>
                    
                    {/* Product Details */}
                    <div className="flex-grow">
                      <Link 
                        to={`/products/${item.product.id}`}
                        className="font-medium hover:text-luxury-gold transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <div className="text-sm text-muted-foreground">
                        {item.product.brand} • {item.product.year}
                      </div>
                      <div className="text-luxury-gold font-medium mt-1">
                        {formatPrice(item.product.price)}
                      </div>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="w-full sm:w-auto mt-4 sm:mt-0 flex flex-row sm:flex-col items-center">
                      <div className="flex items-center border rounded">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-none"
                          onClick={() =>
                            handleQuantityChange(item.product.id, item.quantity - 1)
                          }
                        >
                          <Minus className="h-3 w-3" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-none"
                          onClick={() =>
                            handleQuantityChange(item.product.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>
                      
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.product.id)}
                        className="text-red-500 hover:text-red-700 sm:mt-2"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove item</span>
                      </Button>
                    </div>
                    
                    {/* Total Price */}
                    <div className="font-semibold text-right mt-4 sm:mt-0 w-full sm:w-auto">
                      {formatPrice(item.product.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 border rounded-lg p-6 bg-card">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (GST 18%)</span>
                    <span>{formatPrice(taxAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>
                      {shippingAmount === 0
                        ? "Free"
                        : formatPrice(shippingAmount)}
                    </span>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>{formatPrice(orderTotal)}</span>
                  </div>
                </div>
                
                <Button 
                  onClick={() => navigate("/checkout")} 
                  className="w-full gap-2 bg-luxury-gold text-black hover:bg-luxury-gold/90"
                >
                  Checkout <ArrowRight className="h-4 w-4" />
                </Button>
                
                <div className="mt-6">
                  <h3 className="font-medium mb-2">We Accept</h3>
                  <div className="flex gap-2">
                    <div className="h-8 w-12 bg-secondary rounded flex items-center justify-center text-xs">Visa</div>
                    <div className="h-8 w-12 bg-secondary rounded flex items-center justify-center text-xs">MC</div>
                    <div className="h-8 w-12 bg-secondary rounded flex items-center justify-center text-xs">Amex</div>
                    <div className="h-8 w-12 bg-secondary rounded flex items-center justify-center text-xs">UPI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
