import Navigation from "../components/Navigation";
import ProductCard from "../components/ProductCard";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import { usePage } from "@inertiajs/react";

interface Product {
  id: number;
  nama: string;
  harga: string;
  deskripsi: string;
  gambar: string;
  kategori: string;
}

interface PageProps {
  produks: Product[];
  [key: string]: any;
}

export default function Products(){
   const { props } = usePage<PageProps>();
  const produks = props.produks || [];

  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="py-16 bg-hero-gradient">
        <div className="container px-6 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl text-foreground">
            Our Products
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
            Explore our complete collection of premium products crafted with
            attention to detail and exceptional quality.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b bg-background border-border">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute w-4 h-4 transform -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap items-center gap-2">
              {produks.map((produk) => (
                <Button
                  key={produk.kategori}
                  variant={produk.kategori === "All" ? "default" : "outline"}
                  size="sm"
                >
                  {produk.kategori}
                </Button>
              ))}
            </div>
            

            {/* Filters */}
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </Button>
          </div>
        </div>
      </section>


      {/* Products Grid */}
      <section className="py-16">
        <div className="container px-6 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {produks.map((produk) => (
              <ProductCard key={produk.id} {...produk} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button size="lg" variant="outline">
              Load More Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
