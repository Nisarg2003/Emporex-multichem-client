import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";
import { products } from "../data/products";
import companyFooterLogo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={companyFooterLogo}
                alt="Pratham Enterprise Logo"
                className="h-15 w-20 "
              />
              <h3 className="text-white text-xl font-bold">
                Emporex Multichem
              </h3>
            </div>
            <p className="text-sm mb-4 leading-relaxed">
              Since our outset in 2015, Emporex Multichem has emerged as a
              reliable manufacturer and Trader of variety of Industrial
              Chemicals.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Clock size={16} className="text-emerald-500" />
              <div>
                <p className="text-white font-medium">Opening Hours:</p>
                <p>Monday - Saturday: 9:00 AM to 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-emerald-500 mt-1 flex-shrink-0"
                />
                <p>
                  A-304 Sydney Lifestyle, Sargasan Cross Road, Sargasan,
                  Gandhinagar-382421, Gujarat, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-500 flex-shrink-0" />
                <a
                  href="tel:+919213478713"
                  className="hover:text-emerald-400 transition-colors"
                >
                  +91-92134 78713
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-500 flex-shrink-0" />
                <a
                  href="mailto:info@emporexmultichem.com"
                  className="hover:text-emerald-400 transition-colors break-all"
                >
                  info@emporexmultichem.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-emerald-500 flex-shrink-0" />
                <span>www.emporexmultichem.com</span>
              </div>
            </div>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Our Products</h3>
            <div className="space-y-2 text-sm">
              {products.slice(0, 8).map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.slug}`}
                  className="block hover:text-emerald-400 hover:translate-x-1 transition-all"
                >
                  → {product.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm mb-6">
              <Link
                to="/"
                className="block hover:text-emerald-400 hover:translate-x-1 transition-all"
              >
                → Home
              </Link>
              <Link
                to="/about"
                className="block hover:text-emerald-400 hover:translate-x-1 transition-all"
              >
                → About Us
              </Link>
              <Link
                to="/contact"
                className="block hover:text-emerald-400 hover:translate-x-1 transition-all"
              >
                → Contact Us
              </Link>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">
                Download Brochure
              </h4>
              <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-md hover:shadow-lg">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Emporex Multichem. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-xs">Certified Quality Standards</span>
              </div>
              <span className="text-gray-600">|</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-xs">100+ Trusted Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
