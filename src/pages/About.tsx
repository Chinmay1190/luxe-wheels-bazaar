
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Luxury Car Showroom"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            About Luxe Wheels
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Redefining luxury automobile experiences in India since 2005
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair text-3xl font-bold mb-6 text-center">Our Story</h2>
            
            <div className="prose prose-lg mx-auto">
              <p>
                Founded in 2005 by automotive enthusiast Rajiv Mehta, Luxe Wheels Bazaar began as a boutique dealership for premium European imports in Mumbai. What started as a passion project quickly evolved into India's most prestigious luxury automotive marketplace.
              </p>
              
              <p>
                Our founder's vision was simple yet ambitious: to create a space where India's discerning automobile collectors and enthusiasts could access the world's most exclusive vehicles with unparalleled service and expertise. Today, that vision has expanded to a nationwide presence with showrooms in Mumbai, Delhi, Bangalore, and Chennai.
              </p>
              
              <p>
                At Luxe Wheels, we don't just sell cars — we curate exceptional driving experiences. Each vehicle in our collection is hand-selected for its performance, design, heritage, and investment potential. We pride ourselves on offering only the finest examples of automotive excellence from renowned marques across the globe.
              </p>
              
              <p>
                Our commitment to excellence extends beyond our inventory to every aspect of the customer experience. From personalized consultations to white-glove delivery services, we ensure that acquiring your dream vehicle is as extraordinary as driving it.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl font-bold mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg">
              <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-playfair text-luxury-gold">1</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We uphold the highest standards in every aspect of our business, from vehicle selection to customer service.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-playfair text-luxury-gold">2</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                Honesty and transparency guide all our interactions, building trust with our clients that lasts beyond the sale.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-playfair text-luxury-gold">3</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Passion</h3>
              <p className="text-muted-foreground">
                Our team shares a genuine enthusiasm for automotive excellence that drives us to deliver exceptional experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl font-bold mb-12 text-center">Leadership Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="aspect-square bg-secondary rounded-full mb-4 overflow-hidden">
                <div className="h-full w-full bg-luxury-gold/10 flex items-center justify-center">
                  <span className="font-playfair text-3xl text-luxury-gold">RM</span>
                </div>
              </div>
              <h3 className="font-medium text-lg">Rajiv Mehta</h3>
              <p className="text-sm text-muted-foreground">Founder & CEO</p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square bg-secondary rounded-full mb-4 overflow-hidden">
                <div className="h-full w-full bg-luxury-gold/10 flex items-center justify-center">
                  <span className="font-playfair text-3xl text-luxury-gold">AD</span>
                </div>
              </div>
              <h3 className="font-medium text-lg">Anjali Desai</h3>
              <p className="text-sm text-muted-foreground">Chief Operations Officer</p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square bg-secondary rounded-full mb-4 overflow-hidden">
                <div className="h-full w-full bg-luxury-gold/10 flex items-center justify-center">
                  <span className="font-playfair text-3xl text-luxury-gold">VS</span>
                </div>
              </div>
              <h3 className="font-medium text-lg">Vikram Singh</h3>
              <p className="text-sm text-muted-foreground">Head of Acquisitions</p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square bg-secondary rounded-full mb-4 overflow-hidden">
                <div className="h-full w-full bg-luxury-gold/10 flex items-center justify-center">
                  <span className="font-playfair text-3xl text-luxury-gold">PR</span>
                </div>
              </div>
              <h3 className="font-medium text-lg">Priya Rao</h3>
              <p className="text-sm text-muted-foreground">Client Relations Director</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">Experience Luxury with Luxe Wheels</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our exclusive collection of luxury and sports cars or contact us for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-luxury-gold text-black hover:bg-luxury-gold/90">
              <Link to="/products">Browse Collection</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
