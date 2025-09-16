import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "..//assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-hero-gradient overflow-hidden">
      <div className="container px-6 py-20 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight md:text-6xl text-foreground">
                Discover
                <span className="block text-primary">Premium Quality</span>
                Products
              </h1>
              <p className="max-w-lg text-xl leading-relaxed text-muted-foreground">
                Experience luxury and elegance with our carefully curated collection
                of premium products designed to elevate your lifestyle.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group">
                Shop Now
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                View Collection
              </Button>
            </div>
            
            <div className="flex items-center pt-8 space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Premium Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50k+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={heroImage}
                alt="Premium quality products showcase"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute w-24 h-24 rounded-full -top-6 -left-6 bg-accent opacity-60 blur-xl" />
            <div className="absolute w-32 h-32 rounded-full -bottom-6 -right-6 bg-primary/20 opacity-60 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;