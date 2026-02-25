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
      <section className="relative min-h-screen bg-gradient-to-br from-primary-700 via-primary-600 to-secondary-600 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary-400 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl animation-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-white">
                  Grow Your Business with Digital Marketing
                </h1>
                <p className="text-lg md:text-xl text-white font-light leading-relaxed">
                  Welcome to freelance - the best digital marketing agency in Varanasi. We help businesses like yours reach their full potential online.
                </p>
              </div>

              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="bg-secondary-500 hover:bg-secondary-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start Your Journey
                </Link>
                <Link
                  href="/service"
                  className="bg-white hover:bg-accent-white text-primary-700 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg border-2 border-white"
                >
                  Our Services
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="bg-white bg-opacity-10 backdrop-blur p-4 rounded-lg">
                  <div className="text-4xl font-bold text-secondary-300">50+</div>
                  <p className="text-white font-medium">Clients Served</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur p-4 rounded-lg">
                  <div className="text-4xl font-bold text-secondary-300">200+</div>
                  <p className="text-white font-medium">Projects Done</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur p-4 rounded-lg">
                  <div className="text-4xl font-bold text-secondary-300">5+</div>
                  <p className="text-white font-medium">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-white/15 backdrop-blur rounded-2xl p-8 border-2 border-white/30 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-secondary-400 to-primary-500 rounded-xl flex items-center justify-center text-white text-6xl shadow-lg">
                  📈
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Our Services
            </h2>
            <p className="text-primary-800 text-lg max-w-2xl mx-auto font-bold">
              We offer comprehensive digital marketing solutions to help your business thrive in the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-primary-100 rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-l-4 border-secondary-500 hover:border-secondary-600 hover:translate-y-[-8px] group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-secondary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-primary-800 font-bold leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="text-secondary-600 font-bold hover:text-secondary-700 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/service"
              className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-700 via-primary-600 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white font-light mb-8 leading-relaxed">
            Let's work together to achieve your digital marketing goals and take your business to the next level.
          </p>
          <Link
            href="/contact"
            className="bg-white hover:bg-accent-white text-primary-700 px-8 py-4 rounded-lg font-bold text-lg inline-block transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Get In Touch Today
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-primary-800 text-lg font-bold">
              Real results from real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-secondary-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-secondary-500 hover:translate-y-[-8px]"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-secondary-600 text-lg">★</span>
                  ))}
                </div>
                <p className="text-primary-900 mb-6 italic font-medium leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-primary-900">{testimonial.name}</p>
                  <p className="text-secondary-600 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Why Choose freelance
            </h2>
            <p className="text-primary-800 text-lg font-bold">
              We're not just another marketing agency. We're your growth partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-primary-100 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary-600">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Data-Driven Approach</h3>
              <p className="text-primary-800 font-bold">
                Every decision backed by analytics and real-time insights. We don't guess—we measure, analyze, and optimize for maximum ROI.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-secondary-100 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-secondary-600">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Proven Track Record</h3>
              <p className="text-primary-800 font-bold">
                100+ successful campaigns across diverse industries. Our portfolio speaks volumes—delivering consistent growth and exceeding targets.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-primary-100 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary-600">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Expert Team</h3>
              <p className="text-primary-800 font-bold">
                Certified professionals with years of experience in SEO, PPC, social media, and content marketing. Your success is our expertise.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-secondary-100 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-secondary-600">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">ROI Focused</h3>
              <p className="text-primary-800 font-bold">
                We optimize campaigns for maximum return on your investment. Every marketing dollar is tracked and optimized for results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-primary-100 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary-600">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Custom Solutions</h3>
              <p className="text-primary-800 font-bold">
                Tailored strategies that align with your unique business goals. No cookie-cutter solutions—just customized excellence.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-secondary-100 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-secondary-600">
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">24/7 Support</h3>
              <p className="text-primary-800 font-bold">
                Round-the-clock availability for your campaigns. Whether it's an urgent update or a quick question, we're always here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-b from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-primary-800 text-lg font-bold">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-primary-900 mb-3">Results-Driven</h3>
              <p className="text-primary-700 font-medium leading-relaxed">
                We focus on delivering measurable outcomes that directly impact your bottom line
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-primary-900 mb-3">Transparency</h3>
              <p className="text-primary-700 font-medium leading-relaxed">
                Clear communication and honest reporting in everything we do
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-primary-900 mb-3">Innovation</h3>
              <p className="text-primary-700 font-medium leading-relaxed">
                Staying ahead of digital trends to give our clients a competitive edge
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-primary-900 mb-3">Excellence</h3>
              <p className="text-primary-700 font-medium leading-relaxed">
                Committed to delivering the highest quality service in every project
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-primary-900 mb-3">Data-First</h3>
              <p className="text-primary-700 font-medium leading-relaxed">
                Every decision backed by analytics and performance metrics
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-primary-900 mb-3">Partnership</h3>
              <p className="text-primary-700 font-medium leading-relaxed">
                We see our clients as partners, invested in their long-term success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-primary-800 text-lg font-bold">
              Find answers to common questions about our digital marketing services
            </p>
          </div>

          <div className="space-y-6">
            <details className="bg-gradient-to-r from-white to-primary-50 rounded-xl p-6 shadow-md cursor-pointer group">
              <summary className="flex justify-between items-center font-bold text-primary-900 text-lg">
                What services does freelance offer?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-primary-800 font-bold mt-4">
                We offer comprehensive digital marketing services including SEO Optimization, PPC Management, Social Media Marketing, Content Marketing, Email Marketing, Analytics & Reporting, Conversion Rate Optimization, Video Marketing, and Web Design.
              </p>
            </details>

            <details className="bg-gradient-to-r from-white to-secondary-50 rounded-xl p-6 shadow-md cursor-pointer group">
              <summary className="flex justify-between items-center font-bold text-primary-900 text-lg">
                How long does it take to see results?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-primary-800 font-bold mt-4">
                Results vary by service. PPC campaigns can show immediate results, while SEO typically takes 3-6 months for significant improvements. We provide regular reports and transparent updates throughout the process to track progress.
              </p>
            </details>

            <details className="bg-gradient-to-r from-white to-primary-50 rounded-xl p-6 shadow-md cursor-pointer group">
              <summary className="flex justify-between items-center font-bold text-primary-900 text-lg">
                What makes freelance different from other agencies?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-primary-800 font-bold mt-4">
                We combine data-driven strategies with personalized service. Our proven track record of 300% average ROI, transparent reporting, dedicated account managers, focus on long-term partnerships, and comprehensive customer support set us apart.
              </p>
            </details>

            <details className="bg-gradient-to-r from-white to-secondary-50 rounded-xl p-6 shadow-md cursor-pointer group">
              <summary className="flex justify-between items-center font-bold text-primary-900 text-lg">
                What is your pricing structure?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-primary-800 font-bold mt-4">
                We offer customized pricing based on your specific needs, goals, and budget. After an initial consultation, we create a tailored proposal that aligns with your objectives. Contact us for a free consultation and quote.
              </p>
            </details>

            <details className="bg-gradient-to-r from-white to-primary-50 rounded-xl p-6 shadow-md cursor-pointer group">
              <summary className="flex justify-between items-center font-bold text-primary-900 text-lg">
                Do you work with businesses outside Varanasi?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-primary-800 font-bold mt-4">
                Yes! While we're based in Varanasi, we serve clients across India and internationally. Our digital marketing services can be delivered remotely, and we use advanced collaboration tools for seamless communication.
              </p>
            </details>

            <details className="bg-gradient-to-r from-white to-secondary-50 rounded-xl p-6 shadow-md cursor-pointer group">
              <summary className="flex justify-between items-center font-bold text-primary-900 text-lg">
                How often will I receive updates on my campaigns?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-primary-800 font-bold mt-4">
                You'll have 24/7 access to your account dashboard for real-time data. Additionally, we provide weekly updates, monthly detailed reports, and quarterly strategy reviews with your dedicated account manager.
              </p>
            </details>
          </div>

          <div className="mt-12 text-center">
            <p className="text-primary-800 text-lg font-bold mb-6">
              Still have questions? We're here to help!
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block transition-all duration-300 shadow-lg"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
