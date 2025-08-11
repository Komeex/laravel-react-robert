import { ChevronDown, Star, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";

export const FilterSidebar = () => {
  const categories = [
    "Electronics", "Fashion", "Home & Garden", "Sports", "Books", "Beauty"
  ];

  const brands = [
    "TechNova", "CyberWear", "NeoDesign", "FutureTech", "QuantumStyle"
  ];

  return (
    <div className="w-80 bg-card/50 backdrop-blur-sm border-r border-border/40 p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-2">
        <Filter className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" className="ml-auto text-xs">
          Clear All
        </Button>
      </div>

      {/* Categories */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-between p-0 h-auto">
            <span className="font-medium">Categories</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-3 mt-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={category} />
              <label 
                htmlFor={category} 
                className="text-sm cursor-pointer hover:text-primary transition-colors"
              >
                {category}
              </label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* Price Range */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-between p-0 h-auto">
            <span className="font-medium">Price Range</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-4 mt-3">
          <Slider
            defaultValue={[50, 500]}
            max={1000}
            step={10}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>$50</span>
            <span>$500</span>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Brands */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-between p-0 h-auto">
            <span className="font-medium">Brands</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-3 mt-3">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox id={brand} />
              <label 
                htmlFor={brand} 
                className="text-sm cursor-pointer hover:text-primary transition-colors"
              >
                {brand}
              </label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* Rating */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-between p-0 h-auto">
            <span className="font-medium">Rating</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2 mt-3">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox id={`rating-${rating}`} />
              <label 
                htmlFor={`rating-${rating}`} 
                className="flex items-center space-x-1 text-sm cursor-pointer hover:text-primary transition-colors"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-3 w-3 ${i < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`} 
                    />
                  ))}
                </div>
                <span>& up</span>
              </label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* Active Filters */}
      <div className="space-y-2">
        <h3 className="font-medium text-sm">Active Filters</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
            Electronics
            <button className="ml-1 text-xs">×</button>
          </Badge>
          <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
            $50-$500
            <button className="ml-1 text-xs">×</button>
          </Badge>
        </div>
      </div>
    </div>
  );
};