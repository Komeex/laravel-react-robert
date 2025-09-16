import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-sm border-border">
      <div className="container px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Elegante</span>
          </Link>
          
          <div className="items-center hidden space-x-8 md:flex">
            <Link
              to="/user"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/user") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/produks"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/produks") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Products
            </Link>
            
            <Link
              to="/test"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/test") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Test
            </Link>
            <Button variant="outline" size="sm">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;