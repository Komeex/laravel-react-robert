import { ProductCard } from "./ProductCard";

const mockProducts = [
  {
    id: "1",
    name: "Cyber Neural Headset VR Pro",
    price: 599,
    originalPrice: 799,
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400",
    rating: 4.8,
    reviews: 127,
    isNew: true,
    isFeatured: true
  },
  {
    id: "2", 
    name: "Holographic Display Monitor 32\"",
    price: 1299,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    rating: 4.6,
    reviews: 89,
    isFeatured: true
  },
  {
    id: "3",
    name: "Quantum Gaming Keyboard RGB",
    price: 299,
    originalPrice: 349,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
    rating: 4.9,
    reviews: 234,
    isNew: true
  },
  {
    id: "4",
    name: "Neon Smart Watch X1",
    price: 399,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    rating: 4.5,
    reviews: 156
  },
  {
    id: "5",
    name: "Cyberpunk Wireless Earbuds",
    price: 199,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    rating: 4.7,
    reviews: 312,
    isNew: true
  },
  {
    id: "6",
    name: "Futuristic Gaming Mouse",
    price: 129,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    rating: 4.4,
    reviews: 198
  },
  {
    id: "7",
    name: "Hologram Projector Mini",
    price: 899,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
    rating: 4.8,
    reviews: 67,
    isFeatured: true
  },
  {
    id: "8",
    name: "Neural Interface Tablet",
    price: 799,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400",
    rating: 4.6,
    reviews: 143,
    isNew: true
  }
];

export const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {mockProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};