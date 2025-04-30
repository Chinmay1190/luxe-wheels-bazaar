
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { formatPrice } from "@/data/products";
import { CheckCircle2, ArrowRight } from "lucide-react";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderInfo, orderTotal, orderNumber } = location.state || {};

  useEffect(() => {
    // If no order info, redirect to home
    if (!orderInfo) {
      navigate("/");
    }
    
    window.scrollTo(0, 0);
  }, [orderInfo, navigate]);

  if (!orderInfo) {
    return null; // Will redirect in the useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="mb-6">
              <CheckCircle2 className="h-20 w-20 text-green-500" />
            </div>
            <h1 className="font-playfair text-3xl font-bold mb-4">Order Confirmed!</h1>
            <p className="text-lg text-muted-foreground mb-2">
              Thank you for your purchase, {orderInfo.firstName} {orderInfo.lastName}
            </p>
            <p className="text-muted-foreground">
              Your order number is <span className="font-semibold">{orderNumber}</span>
            </p>
          </div>
          
          <div className="border rounded-lg p-6 bg-card mb-8">
            <h2 className="font-semibold text-xl mb-4">Order Summary</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Order Total</span>
                <span className="font-semibold">{formatPrice(orderTotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Address</span>
                <div className="text-right">
                  <p>{orderInfo.address}</p>
                  <p>{orderInfo.city}, {orderInfo.state} {orderInfo.postalCode}</p>
                  <p>{orderInfo.country}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary/30 rounded-lg p-6 mb-8">
            <h2 className="font-semibold text-xl mb-4">What Happens Next?</h2>
            
            <ol className="space-y-4">
              <li className="flex">
                <span className="bg-luxury-gold text-black h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                <p>
                  <span className="font-medium">Order Processing:</span>{" "}
                  We'll begin processing your order immediately and send you a confirmation email with all details.
                </p>
              </li>
              <li className="flex">
                <span className="bg-luxury-gold text-black h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                <p>
                  <span className="font-medium">Personal Contact:</span>{" "}
                  A dedicated Luxe Wheels representative will contact you within 24 hours to discuss delivery arrangements and any customizations.
                </p>
              </li>
              <li className="flex">
                <span className="bg-luxury-gold text-black h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                <p>
                  <span className="font-medium">Delivery Preparation:</span>{" "}
                  Your vehicle will undergo a comprehensive inspection and detailing process before delivery.
                </p>
              </li>
              <li className="flex">
                <span className="bg-luxury-gold text-black h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                <p>
                  <span className="font-medium">Delivery:</span>{" "}
                  We'll coordinate a convenient delivery time and provide white-glove delivery service directly to your location.
                </p>
              </li>
            </ol>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate("/")}
              variant="outline"
              className="flex-1"
            >
              Return to Home
            </Button>
            <Button 
              onClick={() => navigate("/products")}
              className="flex-1 bg-luxury-gold text-black hover:bg-luxury-gold/90 gap-2"
            >
              Continue Shopping <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Success;
