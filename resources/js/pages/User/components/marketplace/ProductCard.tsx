import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

export const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews, 
  isNew, 
  isFeatured 
}: ProductCardProps) => {
  return (
    <Card className={`group relative overflow-hidden bg-card/60 backdrop-blur-sm border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-neon-blue hover:scale-105 ${isFeatured ? 'ring-1 ring-primary/50' : ''}`}>
      <div className="relative">
        <div className="aspect-square overflow-hidden bg-muted/50">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 space-y-1">
          {isNew && (
            <Badge className="bg-secondary text-secondary-foreground animate-glow-pulse">
              NEW
            </Badge>
          )}
          {isFeatured && (
            <Badge className="bg-primary text-primary-foreground animate-glow-pulse">
              FEATURED
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Quick Add Button */}
        <Button 
          className="absolute bottom-2 right-2 bg-primary/90 hover:bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4 mr-1" />
          Quick Add
        </Button>
      </div>

      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center space-x-1 mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-3 w-3 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`} 
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-foreground">
            ${price}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
          {originalPrice && (
            <Badge variant="destructive" className="text-xs">
              {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};