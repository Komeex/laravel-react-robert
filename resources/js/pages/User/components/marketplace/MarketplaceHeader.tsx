import { Search, ShoppingCart, Menu, User, TrendingUp, Bell, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Categories", href: "/categories" },
  { name: "Deals", href: "/deals" },
  { name: "New Arrivals", href: "/new" },
  { name: "Bestsellers", href: "/bestsellers" }
];

export const MarketplaceHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar with Sales Info */}
      <div className="bg-gradient-cyber text-white py-2">
        <div className="container mx-auto flex items-center justify-center px-4">
          <div className="flex items-center space-x-2 text-sm animate-glow-pulse">
            <TrendingUp className="h-4 w-4" />
            <span className="font-medium">Flash Sale: 50% OFF</span>
            <span className="text-white/80">•</span>
            <span>24,567 items sold today</span>
            <span className="text-white/80">•</span>
            <span className="font-semibold">Ends in 2:45:12</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className=" flex justify-center h-16 items-center px-4">
        {/* Mobile Menu */}
        <Button variant="ghost" size="icon" className="md:hidden mr-2">
          <Menu className="h-5 w-5" />
        </Button>

        {/* Logo */}
        <div className="flex items-center space-x-2 mr-8">
          <div className="h-8 w-8 rounded-lg bg-gradient-cyber flex items-center justify-center">
            <span className="text-xs font-bold text-white">NX</span>
          </div>
          <span className="hidden font-bold sm:inline-block text-lg bg-gradient-cyber bg-clip-text text-transparent text-white">
            NeoMarket
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 mr-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary relative group"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-10 bg-muted/50 border-border/60 focus:border-primary/60 focus:ring-primary/20 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative hover:bg-accent/20">
            <Bell className="h-5 w-5" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-xs"
            >
              2
            </Badge>
          </Button>

          {/* Wishlist */}
          <Button variant="ghost" size="icon" className="relative hover:bg-accent/20">
            <Heart className="h-5 w-5" />
            <Badge 
              variant="secondary" 
              className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 bg-secondary text-secondary-foreground text-xs"
            >
              7
            </Badge>
          </Button>

          {/* Cart */}
          <Button variant="ghost" size="icon" className="relative hover:bg-accent/20">
            <ShoppingCart className="h-5 w-5" />
            <Badge 
              variant="secondary" 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground text-xs animate-glow-pulse"
            >
              3
            </Badge>
          </Button>
          
          {/* User Menu */}
          <Button variant="ghost" size="icon" className="hover:bg-accent/20">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};