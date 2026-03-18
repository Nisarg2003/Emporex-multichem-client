import { Link } from "react-router-dom";
import {
  CheckCircle,
  Award,
  Shield,
  Users,
  Target,
  TrendingUp,
} from "lucide-react";

const About = () => {
  const whyUs = [
    "Highly experienced professionals",
    "International quality standards",
    "Ethical business practices",
    "Timely delivery",
    "Client centric approach",
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Strict quality control measures ensuring products meet international standards",
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description:
        "Industry certifications and compliance with regulatory requirements",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Dedicated to understanding and fulfilling customer requirements",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Utilizing cutting-edge technology in chemical formulation",
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description:
        "Constantly evolving based on customer feedback and market needs",
    },
  ];

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
            <span className="text-emerald-200">About Us</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image/Stats Side */}
            <div>
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Trusted Partner in Chemical Solutions
                  </h3>
                  <p className="text-emerald-100 mb-6">
                    Delivering excellence since 2015 with commitment to quality,
                    innovation, and customer satisfaction.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-3xl font-bold mb-1">100+</p>
                      <p className="text-emerald-100 text-sm">Customers</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-3xl font-bold mb-1">8+</p>
                      <p className="text-emerald-100 text-sm">Years</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-3xl font-bold mb-1">11+</p>
                      <p className="text-emerald-100 text-sm">Products</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-3xl font-bold mb-1">24/7</p>
                      <p className="text-emerald-100 text-sm">Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <div className="inline-block mb-4">
                <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                  About Emporex Multichem
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Mfg. & Trader: Copper Sulphate, Zinc Sulphate & All Other
                Sulphate
              </h2>

              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p className="leading-relaxed">
                  Since our outset in 2015,{" "}
                  <strong className="text-gray-800">Emporex Multichem</strong>{" "}
                  has emerged as a reliable manufacturer and Trader of variety
                  of Industrial Chemicals. Our offered chemicals are well
                  appreciated among our clients for high effectiveness, purity,
                  definite chemical proportion and longer shelf life attributes.
                </p>
                <p className="leading-relaxed">
                  These chemicals are formulated using premium quality chemicals
                  with cutting edge technology following every industrial norm.
                  We ensure that each product meets stringent quality standards
                  before reaching our valued customers.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Why Choose Us?
                </h3>
                <p className="text-gray-700 mb-6">
                  We are a well-renowned company, affianced in offering premium
                  quality products to our prestigious patrons
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {whyUs.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
                    >
                      <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our business and ensure we deliver the
              highest quality products and services to our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white p-8 md:p-12 rounded-2xl">
              <Target className="w-12 h-12 mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Our Mission
              </h3>
              <p className="text-emerald-100 leading-relaxed mb-6">
                To provide high-quality industrial chemicals that meet
                international standards while maintaining ethical business
                practices and ensuring complete customer satisfaction.
              </p>
              <p className="text-emerald-100 leading-relaxed">
                We are committed to continuous improvement, innovation, and
                building long-term relationships with our customers through
                reliability and excellence in service.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 md:p-12 rounded-2xl">
              <TrendingUp className="w-12 h-12 mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Our Vision
              </h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                To be recognised as a leader in the distribution and
                manufacturing of chemical solutions across multiple industries,
                setting the benchmark for quality and customer service.
              </p>
              <p className="text-blue-100 leading-relaxed">
                We aspire to expand our reach while maintaining our commitment
                to quality, innovation, and sustainable business practices that
                benefit our customers and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Experience the quality and reliability that has made us a trusted
            name in industrial chemicals
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

export default About;
