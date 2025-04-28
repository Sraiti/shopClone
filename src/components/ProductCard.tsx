import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  description: string;
}

export function ProductCard({
  image,
  name,
  price,
  description,
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-md shadow-sm overflow-hidden transition-all hover:shadow-md border border-gray-200">
      <div className="aspect-square relative overflow-hidden flex items-center justify-center p-6">
        <img
          src={image}
          alt={name}
          className="object-contain w-full h-full max-h-64 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="mb-2">
          <span className="inline-block px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">
            Research Use Only
          </span>
        </div>
        <h3 className="font-bold text-lg text-gray-900">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="flex items-center justify-between pt-3">
          <span className="text-xl font-bold text-gray-900">
            ${price.toFixed(2)}
          </span>
          <Button className="bg-red-600 hover:bg-red-700 border-0 text-white rounded">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
