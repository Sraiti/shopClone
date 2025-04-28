import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

// Define product interface with TypeScript
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "MK-677",
    price: 79.99,
    description: "Research Liquid | 25mg/mL",
    image:
      "https://swisschems.is/wp-content/uploads/2024/10/SC-bottle-2023-MK-677-768x872.jpg",
  },
  {
    id: 2,
    name: "RAD-140",
    price: 69.99,
    description: "Research Liquid | 10mg/mL",
    image:
      "https://swisschems.is/wp-content/uploads/2024/10/SC-bottle-2023-RAD-140-768x872.jpg",
  },
  {
    id: 3,
    name: "BPC-157",
    price: 89.99,
    description: "Research Liquid | 5mg/mL",
    image:
      "https://swisschems.is/wp-content/uploads/2024/10/SC-bottle-2023-BPC-157-768x872.jpg",
  },
  {
    id: 4,
    name: "LGD-4033",
    price: 79.99,
    description: "Research Liquid | 10mg/mL",
    image:
      "https://swisschems.is/wp-content/uploads/2024/10/SC-bottle-2023-MK-677-768x872.jpg",
  },
  {
    id: 5,
    name: "MK-2866",
    price: 79.99,
    description: "Research Liquid | 10mg/mL",
    image:
      "https://swisschems.is/wp-content/uploads/2024/10/2023-BAC-water-768x845.jpg",
  },
];

export function ProductSlider() {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);

  useEffect(() => {
    // Auto-advance carousel
    const timer = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [api]);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our top recommendations for research purposes only. Not for human
            consumption.
          </p>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {sampleProducts.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/4"
                >
                  <div className="p-1">
                    <ProductCard
                      name={product.name}
                      price={product.price}
                      description={product.description}
                      image={product.image}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg hover:bg-gray-100" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg hover:bg-gray-100" />
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-white font-medium hover:bg-red-700 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
