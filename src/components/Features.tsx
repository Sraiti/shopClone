import { Truck, HeadphonesIcon, FlaskConical, Lock } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping Orders",
    description: "Over $100",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Chat And Phone",
    description: "Support",
  },
  {
    icon: FlaskConical,
    title: "Independent Quality",
    description: "Testing",
  },
  {
    icon: Lock,
    title: "100% Secure",
    description: "Checkout",
  },
];

export function Features() {
  return (
    <section className="py-8 sm:py-10 md:py-12 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-start gap-4 p-4 sm:p-5"
            >
              <div className="flex-shrink-0 flex justify-center items-center w-10 h-10">
                <feature.icon className="w-7 h-7 text-red-600" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
