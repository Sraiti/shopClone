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
  category: string;
}

// Sample products organized by category
const allProducts: Product[] = [
  {
    id: 1,
    name: "MK-677",
    price: 79.99,
    description: "Research Liquid | 25mg/mL",
    image:
      "https://swisschems.is/wp-content/uploads/2024/10/SC-bottle-2023-MK-677-768x872.jpg",
    category: "SARMs",
  },
  {
    id: 2,
    name: "RAD-140",
    price: 69.99,
    description: "Research Liquid | 10mg/mL",
    image:
      "https://swisschems.is/wp-content/uploads/2024/10/SC-bottle-2023-RAD-140-768x872.jpg",
    category: "SARMs",
  },
  {
    id: 3,
    name: "BPC-157",
    price: 89.99,
    description: "Research Liquid | 5mg/mL",
    image:
      "https://swisschems.is/wp-content/uploads/2024/10/SC-bottle-2023-BPC-157-768x872.jpg",
    category: "Peptides",
  },
  {
    id: 4,
    name: "LGD-4033",
    price: 79.99,
    description: "Research Liquid | 10mg/mL",
    image:
      "https://swisschems.is/wp-content/uploads/2024/10/SC-bottle-2023-MK-677-768x872.jpg",
    category: "SARMs",
  },
  {
    id: 5,
    name: "MK-2866",
    price: 79.99,
    description: "Research Liquid | 10mg/mL",
    image:
      "https://swisschems.is/wp-content/uploads/2024/10/2023-BAC-water-768x845.jpg",
    category: "SARMs",
  },
  {
    id: 6,
    name: "Cardarine",
    price: 69.99,
    description: "Research Powder | 500mg",
    image:
      "https://swisschems.is/wp-content/uploads/2024/10/SC-bottle-2023-RAD-140-768x872.jpg",
    category: "Powders",
  },
  {
    id: 7,
    name: "TB-500",
    price: 89.99,
    description: "Research Peptide | 5mg",
    image:
      "https://swisschems.is/wp-content/uploads/2024/10/SC-bottle-2023-BPC-157-768x872.jpg",
    category: "Peptides",
  },
  {
    id: 8,
    name: "Nolvadex",
    price: 59.99,
    description: "PCT | 20mg Tablets",
    image:
      "https://swisschems.is/wp-content/uploads/2024/10/SC-bottle-2023-RAD-140-768x872.jpg",
    category: "P.C.T",
  },
  {
    id: 9,
    name: "Noopept",
    price: 49.99,
    description: "Cognitive Enhancer | 20mg",
    image:
      "https://swisschems.is/wp-content/uploads/2024/10/SC-bottle-2023-BPC-157-768x872.jpg",
    category: "Nootropics",
  },
  {
    id: 10,
    name: "Research Bundle",
    price: 199.99,
    description: "Complete Research Kit",
    image:
      "https://swisschems.is/wp-content/uploads/2024/10/SC-bottle-2023-MK-677-768x872.jpg",
    category: "Bundle",
  },
];

export function ProductGroups() {
  const groups = [
    "SARMs",
    "Powders",
    "Peptides",
    "P.C.T",
    "Nootropics",
    "Bundle",
    "All",
  ];
  const [active, setActive] = useState(groups[0]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [api, setApi] = useState<any>();

  // Filter products when active group changes
  useEffect(() => {
    if (active === "All") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(
        allProducts.filter((product) => product.category === active)
      );
    }
  }, [active]);

  // Auto-advance carousel
  useEffect(() => {
    if (!api) return;

    const timer = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [api]);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-6">Categories</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {groups.map((group) => (
            <button
              key={group}
              onClick={() => setActive(group)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  active === group
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
            >
              {group}
            </button>
          ))}
        </div>

        {filteredProducts.length > 0 ? (
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
                {filteredProducts.map((product) => (
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

              {filteredProducts.length > 4 && (
                <>
                  <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg hover:bg-gray-100" />
                  <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg hover:bg-gray-100" />
                </>
              )}
            </Carousel>
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            No products found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
