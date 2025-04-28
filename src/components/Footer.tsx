export function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-red-600">swiss</span>
              <span className="text-gray-400">chems</span>
            </h3>
            <p className="text-gray-500 mb-4">
              Premium quality products for research purposes only.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Shop</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/sarms"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  SARMs
                </a>
              </li>
              <li>
                <a
                  href="/peptides"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  Peptides
                </a>
              </li>
              <li>
                <a
                  href="/hormones"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  Hormones
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Information
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/shipping"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <a
                  href="/payment"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  Payment Methods
                </a>
              </li>
              <li>
                <a
                  href="/test-results"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  Test Results
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@swisschems.com</li>
              <li>Support Hours: 24/7</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} SwissChems. All rights reserved.
            Products are not for human consumption.
          </p>
        </div>
      </div>
    </footer>
  );
}
