import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { products } from "../data/products";
import logo from "../images/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-6">
              <a
                href="mailto:info@emporexmultichem.com"
                className="flex items-center gap-2 hover:text-emerald-100 transition-colors"
              >
                <Mail size={16} />
                info@emporexmultichem.com
              </a>
              <a
                href="tel:+919825128144"
                className="flex items-center gap-2 hover:text-emerald-100 transition-colors"
              >
                <Phone size={16} />
                (+91) 98251 28144
              </a>
            </div>
            <div className="flex gap-4 text-xs">
              {/* <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
                <span>Trusted By 100+ Customers</span>
              </div> */}
              <span className="text-emerald-300">|</span>
              <span>Mon – Sat: 09:00 - 18:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="Pratham Enterprise Logo"
                className="h-20 w-auto "
              />
              <div className="hidden sm:block ">
                <h1 className="text-xl font-bold text-gray-800 leading-tight">
                  Emporex Multichem
                </h1>
                <p className="text-xs text-emerald-600">
                  Quality Agrochemical Solutions
                </p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className={`font-medium transition-colors ${
                  isActive("/")
                    ? "text-emerald-600"
                    : "text-gray-700 hover:text-emerald-600"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors ${
                  isActive("/about")
                    ? "text-emerald-600"
                    : "text-gray-700 hover:text-emerald-600"
                }`}
              >
                About Us
              </Link>

              {/* Products Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-emerald-600 transition-colors">
                  Products
                  <ChevronDown
                    size={16}
                    className="group-hover:rotate-180 transition-transform"
                  />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                  <div className="py-2 max-h-96 overflow-y-auto">
                    {products.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.slug}`}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className={`font-medium transition-colors ${
                  isActive("/contact")
                    ? "text-emerald-600"
                    : "text-gray-700 hover:text-emerald-600"
                }`}
              >
                Contact
              </Link>

              <Link
                to="/contact"
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-2.5 rounded-lg font-medium hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-md hover:shadow-lg"
              >
                Get Quote
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              <Link
                to="/"
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive("/")
                    ? "bg-emerald-50 text-emerald-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive("/about")
                    ? "bg-emerald-50 text-emerald-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                About Us
              </Link>

              {/* Mobile Products Dropdown */}
              <div>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Products
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${isProductsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isProductsOpen && (
                  <div className="mt-1 ml-4 space-y-1">
                    {products.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.slug}`}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive("/contact")
                    ? "bg-emerald-50 text-emerald-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Contact
              </Link>

              <Link
                to="/contact"
                className="block bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-4 py-3 rounded-lg font-medium text-center hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-md"
              >
                Get Quote
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
