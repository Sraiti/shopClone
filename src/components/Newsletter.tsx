import { Button } from "./ui/button";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    if (email && email.includes("@")) {
      // In a real app, you would send this to your API
      console.log("Subscribing email:", email);
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-black text-white relative">
      <div className="absolute inset-0 z-0">
        <img
          src="https://swisschems.is/wp-content/themes/storefront-child-theme-1.0.1/assets/images/footer-newslletter-bg.png"
          alt="Newsletter background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bold mb-4 text-red-800">
            Subscribe to receive the latest news
          </h2>
          <p className="text-white mb-6 text-5xl font-bold">
            85% of users keep updating them with our newsletter.
          </p>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10">
            <p className="text-gray-400 mb-6">
              Sign up & receive a 10% discount valid on your next purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className=" rounded-full flex-1 bg-white px-4 py-3 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <Button
                type="submit"
                className="h-full bg-red-600 hover:bg-red-700 border-0 text-white px-4 py-3 rounded-full"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
