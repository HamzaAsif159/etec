import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] text-black max-w-7xl mx-auto px-8 py-8 rounded-3xl mb-12">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-4">etec</h2>
            <p>
              Selling premium products, designed <br /> to elevate your everyday
              experience
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Pages</h3>
              <ul className="space-y-2">
                {[
                  { name: "Home", path: "/" },
                  { name: "Shop", path: "/shop" },
                  { name: "About", path: "/about" },
                  { name: "Blog", path: "/blog" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                {[
                  { name: "FAQ", path: "/faq" },
                  { name: "Contact", path: "/contact" },
                  { name: "Product", path: "/shop" },
                  { name: "404", path: "/random-page-not-found" }, // fallback or demo
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-200">
            <img
              src="https://framerusercontent.com/images/PUBoyXNPzyBAvmIqrRjBvVGFk.png"
              alt="Location map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
