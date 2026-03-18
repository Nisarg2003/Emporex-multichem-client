import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Package } from "lucide-react";
import { getProductBySlug, products } from "../data/products";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Product Not Found
          </h1>
          <Link
            to="/"
            className="text-emerald-600 hover:text-emerald-700 font-semibold"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const otherProducts = products.filter((p) => p.id !== product.id).slice(0, 6);

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
            <span className="hover:text-emerald-200 transition-colors">
              Products
            </span>
            <span>/</span>
            <span className="text-emerald-200">{product.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">
            Product - {product.name}
          </h1>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Title */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {product.name} {product.formula}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left & Center - Main Content (2 columns) */}
            <div className="lg:col-span-2">
              {/* Product Description */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed text-lg text-justify">
                  {product.description}
                </p>
              </div>

              {/* Product Image and Applications Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Applications & Uses */}
                {product.applications && product.applications.length > 0 && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      What is {product.name}?
                    </h2>
                    <div className="space-y-4">
                      {product.applications.map((application, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-gray-900 font-bold flex-shrink-0">
                            {index + 1}.
                          </span>
                          <p className="text-gray-700 leading-relaxed">
                            {application}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Sidebar - Sub Products */}
            {product.subProducts && product.subProducts.length > 0 && (
              <div className="lg:col-span-1">
                <div className="bg-gray-900 text-white rounded-t-lg sticky top-24">
                  {/* Header */}
                  <div className="bg-gray-900 px-6 py-4">
                    <h3 className="text-2xl font-bold">Sub Products</h3>
                  </div>

                  {/* Sub Products List */}
                  <div className="bg-gray-50 px-6 py-8 rounded-b-lg">
                    <div className="space-y-4">
                      {product.subProducts.map((subProduct, index) => (
                        <div key={index} className="text-gray-900">
                          <p className="text-base leading-relaxed">
                            <span className="font-bold">{product.name} :</span>{" "}
                            {subProduct
                              .replace(`${product.name}: `, "")
                              .replace(`${product.name} : `, "")}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Other Products Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Other Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProducts.map((product) => (
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
    </div>
  );
};

export default ProductDetail;
