
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { toast } from "@/components/ui/use-toast";
import { Loader2, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600712242805-5f78671b24da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Luxury Car Contact"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Reach out to our team for inquiries, consultations, or personalized assistance
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="font-playfair text-2xl font-bold mb-6">Get In Touch</h2>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="mr-4 mt-1">
                  <Mail className="h-5 w-5 text-luxury-gold" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground">info@luxewheels.com</p>
                  <p className="text-muted-foreground">sales@luxewheels.com</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 mt-1">
                  <Phone className="h-5 w-5 text-luxury-gold" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-muted-foreground">+91 98765 43210 (Sales)</p>
                  <p className="text-muted-foreground">+91 98765 43211 (Support)</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 mt-1">
                  <MapPin className="h-5 w-5 text-luxury-gold" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Locations</h3>
                  <div className="text-muted-foreground space-y-4">
                    <div>
                      <p className="font-medium">Mumbai (Headquarters)</p>
                      <p>123 Luxury Lane, Worli</p>
                      <p>Mumbai, Maharashtra 400018</p>
                    </div>
                    
                    <div>
                      <p className="font-medium">Delhi</p>
                      <p>456 Elite Street, Chanakyapuri</p>
                      <p>New Delhi, Delhi 110021</p>
                    </div>
                    
                    <div>
                      <p className="font-medium">Bangalore</p>
                      <p>789 Prestige Road, Indiranagar</p>
                      <p>Bangalore, Karnataka 560038</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="border rounded-lg p-6 bg-card">
              <h2 className="font-playfair text-2xl font-bold mb-6">Send Us A Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name*</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address*</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Inquiry about Ferrari 488 GTB"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message*</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide details about your inquiry..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-luxury-gold text-black hover:bg-luxury-gold/90 px-8"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Business Hours */}
        <div className="mt-16 max-w-4xl mx-auto p-6 bg-secondary/30 rounded-lg">
          <h2 className="font-playfair text-2xl font-bold mb-6 text-center">Business Hours</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Monday to Friday</span>
                <span className="font-medium">10:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium">11:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium">By Appointment Only</span>
              </div>
            </div>
            
            <div>
              <p className="text-muted-foreground">
                Our showrooms are open for walk-ins during regular business hours, but we recommend scheduling an appointment for personalized consultations and test drives.
              </p>
              <p className="text-muted-foreground mt-2">
                For after-hours inquiries, please email us at support@luxewheels.com, and we'll respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
