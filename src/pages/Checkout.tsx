
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useCart } from "@/providers/CartProvider";
import { formatPrice } from "@/data/products";
import { OrderInfo } from "@/types";
import { toast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, CreditCard, IndianRupee } from "lucide-react";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [orderInfo, setOrderInfo] = useState<OrderInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
  });
  
  // Calculate tax (18% GST)
  const taxAmount = totalPrice * 0.18;
  
  // Calculate shipping (free over ₹50,00,000, else ₹25,000)
  const shippingAmount = totalPrice > 5000000 ? 0 : 25000;
  
  // Calculate order total
  const orderTotal = totalPrice + taxAmount + shippingAmount;

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setOrderInfo((prev) => ({ ...prev, [name]: value }));
  };

  // States of India
  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Delhi", "Jammu and Kashmir", "Ladakh", "Chandigarh", "Puducherry"
  ];

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form fields
    const requiredFields: (keyof OrderInfo)[] = [
      "firstName", "lastName", "email", "phone", 
      "address", "city", "state", "postalCode"
    ];
    
    const missingFields = requiredFields.filter(field => !orderInfo[field]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Please fill in all required fields",
        description: `Missing: ${missingFields.join(", ")}`,
        variant: "destructive",
      });
      return;
    }
    
    // Process payment
    setLoading(true);
    
    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Successful payment
      clearCart();
      navigate("/success", { 
        state: { 
          orderInfo, 
          orderTotal,
          orderNumber: Math.floor(100000 + Math.random() * 900000).toString()
        } 
      });
      
    } catch (error) {
      toast({
        title: "Payment failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  // Redirect to cart if it's empty
  useEffect(() => {
    if (items.length === 0) {
      navigate("/cart");
    }
    window.scrollTo(0, 0);
  }, [items.length, navigate]);

  if (items.length === 0) {
    return null; // Will redirect in the useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="font-playfair text-3xl font-bold text-center mb-8">Checkout</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Shipping Information */}
              <div className="border rounded-lg p-6 bg-card">
                <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name*</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={orderInfo.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name*</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={orderInfo.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address*</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={orderInfo.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number*</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={orderInfo.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Address*</Label>
                    <Input
                      id="address"
                      name="address"
                      value={orderInfo.address}
                      onChange={handleInputChange}
                      placeholder="123 Main Street, Apartment 4B"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="city">City*</Label>
                    <Input
                      id="city"
                      name="city"
                      value={orderInfo.city}
                      onChange={handleInputChange}
                      placeholder="Mumbai"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="state">State/Province*</Label>
                    <Select
                      value={orderInfo.state || undefined}
                      onValueChange={(value) => handleSelectChange("state", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {indianStates.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Postal Code*</Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={orderInfo.postalCode}
                      onChange={handleInputChange}
                      placeholder="400001"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      name="country"
                      value={orderInfo.country}
                      disabled
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mt-6">
                  <Checkbox id="save-info" />
                  <label
                    htmlFor="save-info"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Save my information for next time
                  </label>
                </div>
              </div>
              
              {/* Payment Method */}
              <div className="border rounded-lg p-6 bg-card">
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                
                <Tabs defaultValue="card">
                  <TabsList className="w-full grid grid-cols-3 mb-6">
                    <TabsTrigger value="card">Credit Card</TabsTrigger>
                    <TabsTrigger value="upi">UPI</TabsTrigger>
                    <TabsTrigger value="bank">Bank Transfer</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="card">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Name on Card*</Label>
                        <Input
                          id="cardName"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number*</Label>
                        <div className="flex relative">
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                          />
                          <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardExpiry">Expiration Date*</Label>
                          <Input
                            id="cardExpiry"
                            placeholder="MM/YY"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="cardCvc">CVC*</Label>
                          <Input
                            id="cardCvc"
                            placeholder="123"
                            type="password"
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="upi">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="upiId">UPI ID*</Label>
                        <Input
                          id="upiId"
                          placeholder="username@upi"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        You will receive a payment request on your UPI app which you need to approve to complete the payment.
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="bank">
                    <div className="space-y-4">
                      <div className="p-4 bg-secondary rounded-lg">
                        <h3 className="font-medium mb-2">Bank Account Details</h3>
                        <p className="text-sm mb-4">
                          Please make a transfer to the following account and provide your transfer reference below:
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Account Name:</span>
                            <span className="font-medium">Luxe Wheels Bazaar Pvt. Ltd.</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Account Number:</span>
                            <span className="font-medium">1234567890123456</span>
                          </div>
                          <div className="flex justify-between">
                            <span>IFSC Code:</span>
                            <span className="font-medium">LUXE0001234</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Bank:</span>
                            <span className="font-medium">LUXE Bank</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="transferRef">Transfer Reference*</Label>
                        <Input
                          id="transferRef"
                          placeholder="UTR Number / Reference ID"
                        />
                      </div>
                    </div>
                  </TabsContent>
                  
                  <div className="mt-4 flex items-center space-x-2">
                    <Checkbox id="save-payment" />
                    <label
                      htmlFor="save-payment"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Save payment information for future purchases
                    </label>
                  </div>
                </Tabs>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 border rounded-lg p-6 bg-card">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex justify-between">
                      <div className="flex items-start">
                        <span className="text-sm bg-secondary w-6 h-6 rounded-full flex items-center justify-center mr-2">
                          {item.quantity}
                        </span>
                        <span className="text-sm">{item.product.name}</span>
                      </div>
                      <span className="text-sm font-medium">{formatPrice(item.product.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
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
                    <div className="flex items-center">
                      <IndianRupee className="h-4 w-4 mr-1" />
                      <span>{formatPrice(orderTotal).replace('₹', '')}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-luxury-gold text-black hover:bg-luxury-gold/90 h-12 text-lg"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    `Pay ${formatPrice(orderTotal)}`
                  )}
                </Button>
                
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  By placing your order, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
