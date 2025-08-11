import { MarketplaceHeader } from "../components/marketplace/MarketplaceHeader";
import { MarketplaceFooter } from "../components/marketplace/MarketplaceFooter";
import { ProductGrid } from "../components/marketplace/ProductGrid";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Truck, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MarketplaceHeader />
      
      <main className="w-full">
        {/* Hero Section */}
        <div className="relative h-[90vh] bg-gradient-cyber flex items-center justify-center overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-neon-blue/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-neon-purple/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          
          <div className="relative text-center text-white max-w-4xl mx-auto px-4">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 animate-glow-pulse">
              🚀 Now Live: AI-Powered Shopping Experience
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-float">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                NeoMarket
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Step into the future of digital commerce. Discover revolutionary products 
              with cutting-edge technology and experience shopping like never before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-105"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10M+</div>
                <div className="text-white/80">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-white/80">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-white/80">Uptime</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                Why Choose NeoMarket?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience the future of online shopping with our revolutionary platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {[
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Instant search and ultra-fast loading times"
                },
                {
                  icon: Shield,
                  title: "Secure & Safe",
                  description: "Military-grade security for all transactions"
                },
                {
                  icon: Truck,
                  title: "Fast Delivery",
                  description: "Same-day delivery in major cities"
                },
                {
                  icon: Star,
                  title: "Premium Quality",
                  description: "Only the highest quality products"
                }
              ].map((feature, index) => (
                <div 
                  key={feature.title}
                  className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Products Section */}
        <div className="py-12 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                Featured Products
              </h2>
              <p className="text-xl text-muted-foreground">
                Discover our handpicked selection of revolutionary products
              </p>
            </div>
            <ProductGrid />
            
            <div className="text-center mt-12">
              <Button size="lg" className="px-8 py-3">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <MarketplaceFooter />
    </div>
  );
};

export default Index;
