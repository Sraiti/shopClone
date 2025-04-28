import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#1d1d1e] to-black">
      <div className="absolute inset-0 z-0">
        <img
          src="https://swisschems.is/wp-content/themes/storefront-child-theme-1.0.1/assets/images/banner-background.png" // a webp from assets
          alt="Background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="max-w-2xl mb-12 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-8">
            <div className="mb-2">Same-Day Shipping on</div>
            <div className="mb-2">USA Orders*</div>
            <div className="mb-2">99% Purity Guaranteed</div>
            <div>Safe & Secure</div>
          </h1>

          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-4xl font-medium bg-red-600 hover:bg-red-700 border-0 text-white"
          >
            Shop Now
          </Button>
        </div>

        <div className="md:ml-auto">
          <img
            src="https://swisschems.is/wp-content/uploads/2025/01/top-image.webp" // a webp from assets
            alt="Product Bundle"
            className="w-full max-w-xl"
          />
        </div>
      </div>
    </section>
  );
}
