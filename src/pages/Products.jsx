import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "../data/products";

const Products = () => {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb Hero */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-4">
            <Link to="/" className="hover:text-emerald-200 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-emerald-200">Products</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-emerald-100 text-lg">
            Explore our complete range of premium industrial chemicals
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Complete Product Range
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              High-quality industrial chemicals manufactured under strict
              quality control. All products meet international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.slug}`}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
              >
                {/* Full Width Image - Takes Entire Card Space */}
                <div className="w-full h-80 bg-white flex items-center justify-center p-0 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Details Below - Keep Same Design */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {product.shortDescription}
                  </p>
                  <div className="flex items-center text-emerald-600 font-semibold group-hover:gap-2 transition-all">
                    View Details
                    <ArrowRight
                      size={18}
                      className="ml-1 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Need More Information?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Contact us for detailed specifications, pricing, or custom
            requirements
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-md hover:shadow-lg text-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
