import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CreditCard, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const MarketplaceFooter = () => {
  return (
    <footer className="bg-card/60 backdrop-blur-sm border-t border-border/40 mt-20">
      {/* Features Section */}
      <div className="bg-muted/20 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">On orders over $100</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">100% secure transactions</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">30-day return policy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-cyber flex items-center justify-center">
                <span className="text-xs font-bold text-white">NX</span>
              </div>
              <span className="font-bold text-lg bg-gradient-cyber bg-clip-text text-transparent">
                NeoMarket
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              The future of digital commerce. Discover cutting-edge products and revolutionary technology.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@neomarket.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Neo City, Future District</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["About Us", "Contact", "FAQ", "Shipping Info", "Returns", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Categories</h3>
            <ul className="space-y-2 text-sm">
              {["Electronics", "Fashion", "Home & Garden", "Sports", "Books", "Beauty"].map((category) => (
                <li key={category}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to get updates on new products and exclusive deals.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Enter your email"
                className="bg-muted/50 border-border/60"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Follow Us</h4>
              <div className="flex space-x-2">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Youtube, label: "YouTube" }
                ].map(({ icon: Icon, label }) => (
                  <Button 
                    key={label}
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 hover:bg-primary/20 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/40 bg-muted/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 NeoMarket. All rights reserved. | Built for the future.
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Payments:</span>
              <div className="flex space-x-2">
                {["VISA", "MC", "AMEX", "PAYPAL"].map((payment) => (
                  <div 
                    key={payment}
                    className="px-2 py-1 bg-background/50 rounded border border-border/40 text-xs"
                  >
                    {payment}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};