import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="h-18"></div>
      <nav
        className={`bg-white fixed w-full top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="flex justify-between items-center h-16 ">
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="flex items-center">
                <span className="text-xl font-bold text-gray-800">etec</span>
              </NavLink>
            </div>
            {/* Hamburger menu for mobile and tablet */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `px-3 py-2 text-lg ${
                    isActive ? "text-black" : "text-gray-600"
                  }`
                }
              >
                All products
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-3 py-2 text-lg ${
                    isActive ? "text-black" : "text-gray-600"
                  }`
                }
              >
                About us
              </NavLink>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  `px-3 py-2 text-lg ${
                    isActive ? "text-black" : "text-gray-600"
                  }`
                }
              >
                FAQ
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `px-3 py-2 text-lg ${
                    isActive ? "text-black" : "text-gray-600"
                  }`
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-3 py-2 text-lg ${
                    isActive ? "text-black" : "text-gray-600"
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
          {/* Mobile/Tablet Navigation Links */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col space-y-4 py-4">
              <NavLink
                to="/shop"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 text-base sm:text-lg ${
                    isActive ? "text-black" : "text-gray-600"
                  }`
                }
              >
                All products
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 text-base sm:text-lg ${
                    isActive ? "text-black" : "text-gray-600"
                  }`
                }
              >
                About us
              </NavLink>
              <NavLink
                to="/faq"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 text-base sm:text-lg ${
                    isActive ? "text-black" : "text-gray-600"
                  }`
                }
              >
                FAQ
              </NavLink>
              <NavLink
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 text-base sm:text-lg ${
                    isActive ? "text-black" : "text-gray-600"
                  }`
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 text-base sm:text-lg ${
                    isActive ? "text-black" : "text-gray-600"
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
