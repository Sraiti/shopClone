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
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3"
            >
              <div className="flex-shrink-0 flex justify-center items-center h-full">
                <feature.icon className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
