import Link from 'next/link';

export default function Home() {
  const services = [
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Improve your online visibility with our advanced SEO strategies',
    },
    {
      icon: '📱',
      title: 'Social Media Marketing',
      description: 'Engage your audience across all social platforms',
    },
    {
      icon: '✍️',
      title: 'Content Marketing',
      description: 'Create compelling content that drives conversions',
    },
    {
      icon: '💰',
      title: 'PPC Advertising',
      description: 'Targeted ads that deliver immediate results',
    },
    {
      icon: '📊',
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to optimize campaigns',
    },
    {
      icon: '🎨',
      title: 'Web Design',
      description: 'Beautiful and functional websites that convert',
    },
  ];

  const testimonials = [
    {
      name: 'Raj Kumar',
      company: 'Tech Startup',
      text: 'freelance transformed our digital presence. Our sales increased by 300%!',
      rating: 5,
    },
    {
      name: 'Priya Singh',
      company: 'E-commerce Business',
      text: 'Excellent service and support. Highly recommended for all digital marketing needs.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      company: 'Local Business',
      text: 'Professional team with great results. Best investment for our business.',
      rating: 5,
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animation-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                  Grow Your Business with Digital Marketing
                </h1>
                <p className="text-xl text-gray-100 leading-relaxed">
                  Welcome to freelance - the best digital marketing agency in Varanasi. We help businesses like yours reach their full potential online.
                </p>
              </div>

              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Journey
                </Link>
                <Link
                  href="/service"
                  className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <p className="text-gray-200">Clients Served</p>
                </div>
                <div>
                  <div className="text-3xl font-bold">200+</div>
                  <p className="text-gray-200">Projects Done</p>
                </div>
                <div>
                  <div className="text-3xl font-bold">5+</div>
                  <p className="text-gray-200">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-secondary-400 to-primary-400 rounded-xl flex items-center justify-center text-white text-6xl">
                  📈
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-accent-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We offer comprehensive digital marketing solutions to help your business thrive in the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary-600"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/service"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-bold inline-block transition-colors duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Let's work together to achieve your digital marketing goals.
          </p>
          <Link
            href="/contact"
            className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg font-bold text-lg inline-block transition-colors duration-300"
          >
            Get In Touch Today
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-accent-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg">
              Real results from real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-secondary-500 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
