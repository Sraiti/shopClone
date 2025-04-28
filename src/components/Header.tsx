import { useState } from "react";
import { Menu, X, Search, User, ChevronDown, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const menuItems = [
    { name: "Shop", href: "/shop", hasDropdown: true },
    { name: "How To Pay", href: "/how-to-pay", hasDropdown: true },
    { name: "Who we are", href: "/who-we-are", hasDropdown: false },
    {
      name: "Independent Test Results",
      href: "/test-results",
      hasDropdown: false,
    },
    { name: "How To Profit", href: "/how-to-profit", hasDropdown: true },
    { name: "Contacts", href: "/contacts", hasDropdown: true },
    { name: "Verify Product", href: "/verify-product", hasDropdown: false },
  ];

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold flex items-center">
            <span className="text-red-600">swiss</span>
            <span className="text-gray-400">chems</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-red-600 transition-colors flex items-center gap-1"
            >
              {item.name}
              {item.hasDropdown && (
                <ChevronDown className="h-4 w-4 opacity-50" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-gray-800 rounded-full py-1 px-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-red-600 w-48"
            />
            <Search className="h-4 w-4 absolute right-3 text-gray-400" />
          </div>

          <Button
            variant="outline"
            size="icon"
            className="border-gray-700 text-white hover:bg-gray-800"
          >
            <User className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="border-gray-700 text-white hover:bg-gray-800"
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-900 py-4 px-4 border-t border-gray-800 absolute w-full">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-gray-800 rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-red-600 w-full"
            />
            <Search className="h-4 w-4 absolute right-3 top-2.5 text-gray-400" />
          </div>
          <nav className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <div key={item.name} className="border-b border-gray-800">
                <div className="flex justify-between items-center">
                  <a
                    href={item.href}
                    className="text-sm font-medium py-3 hover:text-red-600 flex-grow"
                  >
                    {item.name}
                  </a>
                  {item.hasDropdown && (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="p-2"
                      aria-label={`Toggle ${item.name} dropdown`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="pl-4 pb-2 space-y-2">
                    <a
                      href="#"
                      className="block text-sm py-1 text-gray-400 hover:text-red-600"
                    >
                      Submenu Item 1
                    </a>
                    <a
                      href="#"
                      className="block text-sm py-1 text-gray-400 hover:text-red-600"
                    >
                      Submenu Item 2
                    </a>
                    <a
                      href="#"
                      className="block text-sm py-1 text-gray-400 hover:text-red-600"
                    >
                      Submenu Item 3
                    </a>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
