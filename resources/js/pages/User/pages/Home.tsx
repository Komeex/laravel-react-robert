import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Truck, HeadphonesIcon, Star, Quote } from "lucide-react";
import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import product3 from "../assets/product-3.jpg";
import product4 from "../assets/product-4.jpg";

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Leather Handbag",
      price: "$299",
      originalPrice: "$399",
      image: product1,
      category: "Fashion"
    },
    {
      id: 2,
      name: "Luxury Watch Collection",
      price: "$899",
      image: product2,
      category: "Accessories"
    },
    {
      id: 3,
      name: "Elegant Ceramic Vase",
      price: "$149",
      image: product3,
      category: "Home Decor"
    },
    {
      id: 4,
      name: "Designer Sunglasses",
      price: "$199",
      originalPrice: "$249",
      image: product4,
      category: "Eyewear"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Featured Products Section */}
      <section className="py-20 bg-background">
        <div className="container px-6 mx-auto">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-4xl font-bold md:text-5xl text-foreground">
              Featured Products
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
              Discover our handpicked selection of premium products that combine
              luxury, quality, and exceptional design.
            </p>
          </div>
          
          <div className="grid gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="group">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-6 mx-auto">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-4xl font-bold text-foreground">Why Choose Elegante</h2>
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
              We're committed to providing you with the best shopping experience
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-8 text-center border-none shadow-card">
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary/10">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Quality Guarantee</h3>
                <p className="text-muted-foreground">
                  All our products come with a 100% quality guarantee and authentic warranty
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center border-none shadow-card">
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary/10">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Free Shipping</h3>
                <p className="text-muted-foreground">
                  Enjoy free worldwide shipping on all orders above $200
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center border-none shadow-card">
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary/10">
                  <HeadphonesIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Our dedicated customer service team is here to help you anytime
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container px-6 mx-auto">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-4xl font-bold text-foreground">What Our Customers Say</h2>
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-8 border-none shadow-card">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-muted-foreground" />
                <p className="leading-relaxed text-foreground">
                  "Absolutely love my purchase! The quality is exceptional and the design is exactly what I was looking for. Will definitely shop here again."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent">
                    <span className="font-semibold text-accent-foreground">SJ</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Verified Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-none shadow-card">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-muted-foreground" />
                <p className="leading-relaxed text-foreground">
                  "Outstanding customer service and fast delivery. The products exceeded my expectations in terms of quality and craftsmanship."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent">
                    <span className="font-semibold text-accent-foreground">MC</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Verified Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-none shadow-card">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-muted-foreground" />
                <p className="leading-relaxed text-foreground">
                  "Beautiful products with attention to detail. The shopping experience was smooth and the packaging was elegant. Highly recommended!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent">
                    <span className="font-semibold text-accent-foreground">ER</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Emma Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Verified Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-secondary">
        <div className="container px-6 mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Stay in the Loop
            </h2>
            <p className="text-xl text-muted-foreground">
              Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and style tips.
            </p>
            <div className="flex flex-col justify-center max-w-md gap-4 mx-auto sm:flex-row">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 border rounded-lg border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg">Subscribe</Button>
            </div>
            <p className="text-sm text-muted-foreground">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-6 mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold">
              Ready to Experience Luxury?
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Join thousands of satisfied customers who have elevated their lifestyle
              with our premium product collection.
            </p>
            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <Button size="lg" variant="secondary">Start Shopping</Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;