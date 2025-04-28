import {
  HourglassIcon,
  ActivityIcon,
  HeartPulse,
  Dna,
  Brain,
  Package2,
} from "lucide-react";

const categories = [
  {
    name: "LONGEVITY",
    icon: HourglassIcon,
    color: "text-red-600",
  },
  {
    name: "METABOLICS",
    icon: ActivityIcon,
    color: "text-red-600",
  },
  {
    name: "NATURALS",
    icon: HeartPulse,
    color: "text-red-600",
  },
  {
    name: "NOOTROPICS",
    icon: Brain,
    color: "text-red-600",
  },
  {
    name: "PEPTIDES",
    icon: Dna,
    color: "text-red-600",
  },
  {
    name: "BUNDLES",
    icon: Package2,
    color: "text-red-600",
  },
];

export function Categories() {
  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="absolute left-0 top-0 h-full w-1/3 z-0">
        <img
          src="https://swisschems.is/wp-content/themes/storefront-child-theme-1.0.1/assets/images/latest-product-bg-new.png"
          alt="Background"
          className="h-full w-full object-cover object-left"
        />
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category) => (
            <a
              key={category.name}
              href={`#${category.name.toLowerCase()}`}
              className="flex flex-col items-center group"
            >
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm border border-gray-100 group-hover:shadow-md transition-all">
                <category.icon className={`h-10 w-10 ${category.color}`} />
              </div>
              <span className="font-medium text-gray-800 group-hover:text-red-600 transition-colors">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
