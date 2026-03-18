import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Target,
  Users,
  TrendingUp,
  Award,
  Shield,
  Clock,
} from "lucide-react";
import { getFeaturedProducts } from "../data/products";

const Home = () => {
  const featuredProducts = getFeaturedProducts();

  const features = [
    {
      number: "01",
      icon: Shield,
      title: "Quality & Compliance",
      description:
        "We follow strict quality measures to ensure that the chemicals we provide are in accordance with industry recommended specifications and match the international quality standards.",
    },
    {
      number: "02",
      icon: Target,
      title: "Vision & Mission",
      description:
        "To be recognised as a leader in the distribution and manufacturing of chemical solutions across multiple industries",
    },
    {
      number: "03",
      icon: Users,
      title: "Customer Satisfaction",
      description:
        "Our client can avail the offered products from us in several specifications as per their demands.",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Business Development",
      description:
        "In order to maintain consistency in our product quality as well as business development, we take feedback from our customers and make changes as per their requirements.",
    },
  ];

  const whyUs = [
    "Highly experienced professionals",
    "International quality standards",
    "Ethical business practices",
    "Timely delivery",
    "Client centric approach",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTEyIDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTEyIDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="bg-emerald-500/20 text-emerald-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-emerald-400/30">
                Trusted Since 2015
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Emporex Multichem
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-emerald-100">
              Copper Sulphate, Zinc Sulphate & All Other Sulphate
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Manufacturer & Trader of Premium Agro Chemicals
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-emerald-900 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 group"
              >
                Contact Us
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/about"
                className="bg-emerald-700/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700/70 transition-all border border-emerald-400/30 shadow-xl"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative bg-white/10 backdrop-blur-md border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold mb-1">100+</p>
                <p className="text-emerald-200">Trusted Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-1">8+</p>
                <p className="text-emerald-200">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-1">11+</p>
                <p className="text-emerald-200">Quality Products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-bold text-emerald-100 group-hover:text-emerald-200 transition-colors">
                    {feature.number}
                  </span>
                  <feature.icon className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                  Welcome to Emporex Multichem
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Mfg. & Trader: Copper Sulphate, Zinc Sulphate & All Other
                Sulphate
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Since our outset in 2015, <strong>Emporex Multichem</strong> has
                emerged as a reliable manufacturer and Trader of variety of
                Industrial Chemicals. Our offered chemicals are well appreciated
                among our clients for high effectiveness, purity, definite
                chemical proportion and longer shelf life attributes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                These chemicals are formulated using premium quality chemicals
                with cutting edge technology following every industrial norm.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Why Us?
                </h3>
                <p className="text-gray-700 mb-4 font-medium">
                  We are a well-renowned company, affianced in offering premium
                  quality products to our prestigious patrons
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {whyUs.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-md hover:shadow-lg group"
              >
                Read More
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-6 rounded-2xl text-white">
                    <Award className="w-12 h-12 mb-3" />
                    <h4 className="text-2xl font-bold mb-2">100+</h4>
                    <p className="text-emerald-100">Satisfied Customers</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl text-white">
                    <Shield className="w-12 h-12 mb-3" />
                    <h4 className="text-2xl font-bold mb-2">Certified</h4>
                    <p className="text-blue-100">Quality Standards</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 rounded-2xl text-white">
                    <Clock className="w-12 h-12 mb-3" />
                    <h4 className="text-2xl font-bold mb-2">8+ Years</h4>
                    <p className="text-purple-100">Industry Experience</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-6 rounded-2xl text-white">
                    <TrendingUp className="w-12 h-12 mb-3" />
                    <h4 className="text-2xl font-bold mb-2">11+</h4>
                    <p className="text-orange-100">Premium Products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Emporex Multichem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
              Our Featured Products
            </h2>
            <Link
              to="/contact"
              className="inline-block text-emerald-600 hover:text-emerald-700 font-semibold"
            >
              Contact Us for Inquiries →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
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

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Explore our complete range of industrial chemicals
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-md hover:shadow-lg"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
