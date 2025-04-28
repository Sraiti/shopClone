import { useState } from "react";
import { Menu, X, Search, User } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold flex items-center">
            <span className="text-red-600">swiss</span>
            <span className="text-gray-400">chems</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <div className="relative group">
            <a
              href="/shop"
              className="text-sm font-medium hover:text-red-600 transition-colors flex items-center gap-1"
            >
              Shop
              <span className="opacity-50">▼</span>
            </a>
          </div>
          <a
            href="/how-to-pay"
            className="text-sm font-medium hover:text-red-600 transition-colors flex items-center gap-1"
          >
            How To Pay
            <span className="opacity-50">▼</span>
          </a>
          <a
            href="/who-we-are"
            className="text-sm font-medium hover:text-red-600 transition-colors"
          >
            Who we are
          </a>
          <a
            href="/test-results"
            className="text-sm font-medium hover:text-red-600 transition-colors"
          >
            Independent Test Results
          </a>
          <a
            href="/how-to-profit"
            className="text-sm font-medium hover:text-red-600 transition-colors flex items-center gap-1"
          >
            How To Profit
            <span className="opacity-50">▼</span>
          </a>
          <a
            href="/contacts"
            className="text-sm font-medium hover:text-red-600 transition-colors flex items-center gap-1"
          >
            Contacts
            <span className="opacity-50">▼</span>
          </a>
          <a
            href="/verify-product"
            className="text-sm font-medium hover:text-red-600 transition-colors"
          >
            Verify Product
          </a>
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

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        <div className="md:hidden bg-gray-900 py-4 px-4 border-t border-gray-800">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-gray-800 rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-red-600 w-full"
            />
            <Search className="h-4 w-4 absolute right-3 top-2.5 text-gray-400" />
          </div>
          <nav className="flex flex-col gap-4">
            <a
              href="/shop"
              className="text-sm font-medium py-2 hover:text-red-600"
            >
              Shop
            </a>
            <a
              href="/how-to-pay"
              className="text-sm font-medium py-2 hover:text-red-600"
            >
              How To Pay
            </a>
            <a
              href="/who-we-are"
              className="text-sm font-medium py-2 hover:text-red-600"
            >
              Who we are
            </a>
            <a
              href="/test-results"
              className="text-sm font-medium py-2 hover:text-red-600"
            >
              Independent Test Results
            </a>
            <a
              href="/how-to-profit"
              className="text-sm font-medium py-2 hover:text-red-600"
            >
              How To Profit
            </a>
            <a
              href="/contacts"
              className="text-sm font-medium py-2 hover:text-red-600"
            >
              Contacts
            </a>
            <a
              href="/verify-product"
              className="text-sm font-medium py-2 hover:text-red-600"
            >
              Verify Product
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
