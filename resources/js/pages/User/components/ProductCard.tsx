import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";

interface Produk {
  id: number;
  nama: string;
  harga: string;
  deskripsi: string;
  gambar: string;
}

const ProductCard = ({ nama, harga, deskripsi, gambar }: Produk) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 border-0 group shadow-card hover:shadow-elegant bg-card">
      <div className="relative overflow-hidden">
        <img
          src={`/storage/${gambar}`} // pastikan path sesuai
          alt={nama}
          className="object-cover w-full transition-transform duration-500 h-80 group-hover:scale-105"
        />
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-100" />

        {/* Floating action buttons */}
        <div className="absolute flex flex-col gap-2 transition-all duration-300 transform translate-x-4 opacity-0 top-4 right-4 group-hover:opacity-100 group-hover:translate-x-0">
          <Button size="icon" variant="secondary" className="w-10 h-10">
            <Heart className="w-4 h-4" />
          </Button>
          <Button size="icon" className="w-10 h-10">
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold transition-colors text-foreground group-hover:text-primary">
            {nama}
          </h3>
          <p className="text-sm text-muted-foreground">{deskripsi}</p>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">Rp{harga}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
