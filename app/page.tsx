import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  'use client';
  'use client';
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
            <div className="space-y-8 animate-fade-in-left">
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
                  className="bg-gradient-to-r from-primary-100 to-secondary-100 hover:from-primary-200 hover:to-secondary-200 text-primary-700 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg border-2 border-primary-200"
                >
                  Our Services
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="bg-white bg-opacity-10 backdrop-blur p-4 rounded-lg">
                  <div className="text-4xl font-bold text-secondary-300">100+</div>
                  <p className="text-white font-medium">Clients</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur p-4 rounded-lg">
                  <div className="text-4xl font-bold text-secondary-300">80</div>
                  <p className="text-white font-medium">Happy Clients</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur p-4 rounded-lg">
                  <div className="text-4xl font-bold text-secondary-300">5</div>
                  <p className="text-white font-medium">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative hidden md:block">
              <div className="bg-white/15 backdrop-blur rounded-2xl p-8 border-2 border-white/30 shadow-2xl">
                <Image 
                  src="/hero/hero.png" 
                  alt="Digital Marketing Hero"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-down">
            <h2 className="text-4xl md:text-5xl font-bold text-main-text mb-4">
              Services We Provide
            </h2>
            <p className="text-light-text text-lg max-w-2xl mx-auto font-bold">
              We offer comprehensive digital marketing solutions to help your business thrive in the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-l-4 border-secondary-500 hover:border-secondary-600 hover:translate-y-[-8px] group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-secondary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-700 font-bold leading-relaxed">
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
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-secondary-300 to-primary-300 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-background">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-background/90 font-light mb-8 leading-relaxed">
            Let's work together to achieve your digital marketing goals and take your business to the next level.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-primary-100 to-secondary-100 hover:from-primary-200 hover:to-secondary-200 text-primary-700 px-8 py-4 rounded-lg font-bold text-lg inline-block transition-all duration-300 shadow-lg transform hover:scale-105 border-2 border-primary-200"
          >
            Get In Touch Today
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-down">
            <h2 className="text-4xl md:text-5xl font-bold text-main-text mb-4">
              What Our Clients Say
            </h2>
            <p className="text-light-text text-lg font-bold">
              Real results from real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-secondary-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-secondary-500 hover:translate-y-[-8px] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-secondary-600 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic font-medium leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
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
          <div className="text-center mb-16 animate-fade-in-down">
            <h2 className="text-4xl md:text-5xl font-bold text-main-text mb-4">
              Why Choose freelance
            </h2>
            <p className="text-light-text text-lg font-bold">
              We're not just another marketing agency. We're your growth partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary-600 animate-fade-in-up" style={{ animationDelay: '0s' }}>
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data-Driven Approach</h3>
              <p className="text-gray-700 font-bold">
                Every decision backed by analytics and real-time insights. We don't guess—we measure, analyze, and optimize for maximum ROI.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-secondary-600">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
              <p className="text-gray-700 font-bold">
                100+ successful campaigns across diverse industries. Our portfolio speaks volumes—delivering consistent growth and exceeding targets.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary-600">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-700 font-bold">
                Certified professionals with years of experience in SEO, PPC, social media, and content marketing. Your success is our expertise.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-secondary-600">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">ROI Focused</h3>
              <p className="text-gray-700 font-bold">
                We optimize campaigns for maximum return on your investment. Every marketing dollar is tracked and optimized for results.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary-600">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Solutions</h3>
              <p className="text-gray-700 font-bold">
                Tailored strategies that align with your unique business goals. No cookie-cutter solutions—just customized excellence.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-secondary-600">
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-700 font-bold">
                Round-the-clock availability for your campaigns. Whether it's an urgent update or a quick question, we're always here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-b from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-down">
            <h2 className="text-4xl md:text-5xl font-bold text-main-text mb-4">
              Our Core Values
            </h2>
            <p className="text-light-text text-lg font-bold">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0s' }}>
              <div className="text-5xl mb-4 transform hover:scale-110 transition-transform">🎯</div>
              <h3 className="text-2xl font-bold text-main-text mb-3">Results-Driven</h3>
              <p className="text-light-text font-medium leading-relaxed">
                We focus on delivering measurable outcomes that directly impact your bottom line
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl mb-4 transform hover:scale-110 transition-transform">🤝</div>
              <h3 className="text-2xl font-bold text-main-text mb-3">Transparency</h3>
              <p className="text-light-text font-medium leading-relaxed">
                Clear communication and honest reporting in everything we do
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl mb-4 transform hover:scale-110 transition-transform">💡</div>
              <h3 className="text-2xl font-bold text-main-text mb-3">Innovation</h3>
              <p className="text-light-text font-medium leading-relaxed">
                Staying ahead of digital trends to give our clients a competitive edge
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl mb-4 transform hover:scale-110 transition-transform">🏆</div>
              <h3 className="text-2xl font-bold text-main-text mb-3">Excellence</h3>
              <p className="text-light-text font-medium leading-relaxed">
                Committed to delivering the highest quality service in every project
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-5xl mb-4 transform hover:scale-110 transition-transform">📊</div>
              <h3 className="text-2xl font-bold text-main-text mb-3">Data-First</h3>
              <p className="text-light-text font-medium leading-relaxed">
                Every decision backed by analytics and performance metrics
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="text-5xl mb-4 transform hover:scale-110 transition-transform">💼</div>
              <h3 className="text-2xl font-bold text-main-text mb-3">Partnership</h3>
              <p className="text-light-text font-medium leading-relaxed">
                We see our clients as partners, invested in their long-term success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-main-text leading-tight">
                About freelance
              </h2>
              <p className="text-light-text text-lg font-bold leading-relaxed">
                Founded in 2019, freelance has established itself as one of Varanasi's most trusted digital marketing agencies. Our journey began with a simple mission: to help businesses transform their digital presence and achieve sustainable growth.
              </p>
              <p className="text-light-text text-lg font-bold leading-relaxed">
                With a talented team of certified digital marketing professionals, we've successfully completed 200+ projects for clients across various industries. Our expertise spans from small startups to established enterprises, delivering measurable results consistently.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="animate-fade-in-up" style={{ animationDelay: '0s' }}>
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <p className="text-light-text font-medium">Projects Completed</p>
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <p className="text-light-text font-medium">Happy Clients</p>
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="text-3xl font-bold text-primary">300%</div>
                  <p className="text-light-text font-medium">Avg. ROI Increase</p>
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <p className="text-light-text font-medium">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Right Content - 3 Info Cards */}
            <div className="space-y-6 animate-fade-in-right">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all animate-fade-in-up" style={{ animationDelay: '0s' }}>
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-main-text mb-3">Our Mission</h3>
                <p className="text-light-text font-bold">
                  To empower businesses with innovative digital marketing solutions that drive growth, build brand authority, and create lasting customer relationships.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="text-2xl font-bold text-main-text mb-3">Our Vision</h3>
                <p className="text-light-text font-bold">
                  To become the preferred digital marketing partner for businesses seeking to unlock their full potential in the digital landscape through strategic, data-driven solutions.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-2xl font-bold text-main-text mb-3">Why Choose Us</h3>
                <p className="text-light-text font-bold">
                  Expert team + Data-driven strategies + Proven results + Transparent communication + 24/7 support = Your success partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section with Google Map */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-down">
            <h2 className="text-4xl md:text-5xl font-bold text-main-text mb-4">
              Get In Touch With Us
            </h2>
            <p className="text-light-text text-lg font-bold">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-10 shadow-lg border border-border animate-fade-in-left">
              <h3 className="text-3xl font-bold text-main-text mb-8">Send us a Message</h3>
              
              <form className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div>
                  <label className="block text-main-text font-bold mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    required
                    className="w-full px-5 py-3 border-2 border-border bg-background text-main-text rounded-lg focus:outline-none focus:border-primary font-medium transition-colors placeholder:text-light-text"
                  />
                </div>

                <div>
                  <label className="block text-main-text font-bold mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-5 py-3 border-2 border-border bg-background text-main-text rounded-lg focus:outline-none focus:border-primary font-medium transition-colors placeholder:text-light-text"
                  />
                </div>

                <div>
                  <label className="block text-main-text font-bold mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXXXXXXX"
                    className="w-full px-5 py-3 border-2 border-border bg-background text-main-text rounded-lg focus:outline-none focus:border-primary font-medium transition-colors placeholder:text-light-text"
                  />
                </div>

                <div>
                  <label className="block text-main-text font-bold mb-2">Service Interested In</label>
                  <select
                    className="w-full px-5 py-3 border-2 border-border bg-background text-main-text rounded-lg focus:outline-none focus:border-primary font-medium transition-colors"
                  >
                    <option>Select a service</option>
                    <option>SEO Optimization</option>
                    <option>Social Media Marketing</option>
                    <option>Content Marketing</option>
                    <option>PPC Advertising</option>
                    <option>Web Design</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-main-text font-bold mb-2">Message</label>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                    className="w-full px-5 py-3 border-2 border-border bg-background text-main-text rounded-lg focus:outline-none focus:border-primary font-medium transition-colors resize-none placeholder:text-light-text"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/80 text-background py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Google Map and Info */}
            <div className="space-y-6 animate-fade-in-right">
              {/* Google Map */}
              <div className="bg-card rounded-2xl shadow-lg overflow-hidden h-80 border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.7545821505137!2d82.98160752339068!3d25.32394622749436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e332a36c8d30d%3A0x7b83ef0c10b4a8d0!2sVaranasi%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-card rounded-xl p-6 shadow-md border-l-4 border-primary animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📍</div>
                    <div>
                      <h4 className="font-bold text-main-text mb-1">Location</h4>
                      <p className="text-light-text font-medium">Varanasi, Uttar Pradesh, India</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-md border-l-4 border-primary animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📞</div>
                    <div>
                      <h4 className="font-bold text-main-text mb-1">Phone</h4>
                      <a href="tel:+917307260253" className="text-primary hover:text-primary/80 font-bold">
                        +91 73072 60253
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-md border-l-4 border-primary animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">✉️</div>
                    <div>
                      <h4 className="font-bold text-main-text mb-1">Email</h4>
                      <a href="mailto:info@freelance.com" className="text-primary hover:text-primary/80 font-bold">
                        info@freelance.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-down">
            <h2 className="text-4xl md:text-5xl font-bold text-main-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-light-text text-lg font-bold">
              Find answers to common questions about our digital marketing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - 6 FAQs */}
            <div className="space-y-6 animate-fade-in-left">
              <details className="bg-card border border-border rounded-xl p-6 shadow-md cursor-pointer group hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: '0s' }}>
                <summary className="flex justify-between items-center font-bold text-main-text text-lg">
                  What services does freelance offer?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-light-text font-bold mt-4">
                  We offer comprehensive digital marketing services including SEO Optimization, PPC Management, Social Media Marketing, Content Marketing, Email Marketing, Analytics & Reporting, Conversion Rate Optimization, Video Marketing, and Web Design.
                </p>
              </details>

              <details className="bg-card border border-border rounded-xl p-6 shadow-md cursor-pointer group hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <summary className="flex justify-between items-center font-bold text-main-text text-lg">
                  How long does it take to see results?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-light-text font-bold mt-4">
                  Results vary by service. PPC campaigns can show immediate results, while SEO typically takes 3-6 months for significant improvements. We provide regular reports and transparent updates throughout the process to track progress.
                </p>
              </details>

              <details className="bg-card border border-border rounded-xl p-6 shadow-md cursor-pointer group hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <summary className="flex justify-between items-center font-bold text-main-text text-lg">
                  What makes freelance different from other agencies?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-light-text font-bold mt-4">
                  We combine data-driven strategies with personalized service. Our proven track record of 300% average ROI, transparent reporting, dedicated account managers, focus on long-term partnerships, and comprehensive customer support set us apart.
                </p>
              </details>

              <details className="bg-card border border-border rounded-xl p-6 shadow-md cursor-pointer group hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <summary className="flex justify-between items-center font-bold text-main-text text-lg">
                  What is your pricing structure?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-light-text font-bold mt-4">
                  We offer customized pricing based on your specific needs, goals, and budget. After an initial consultation, we create a tailored proposal that aligns with your objectives. Contact us for a free consultation and quote.
                </p>
              </details>

              <details className="bg-card border border-border rounded-xl p-6 shadow-md cursor-pointer group hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <summary className="flex justify-between items-center font-bold text-main-text text-lg">
                  Do you work with businesses outside Varanasi?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-light-text font-bold mt-4">
                  Yes! While we're based in Varanasi, we serve clients across India and internationally. Our digital marketing services can be delivered remotely, and we use advanced collaboration tools for seamless communication.
                </p>
              </details>

              <details className="bg-card border border-border rounded-xl p-6 shadow-md cursor-pointer group hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <summary className="flex justify-between items-center font-bold text-main-text text-lg">
                  How often will I receive updates on my campaigns?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-light-text font-bold mt-4">
                  You'll have 24/7 access to your account dashboard for real-time data. Additionally, we provide weekly updates, monthly detailed reports, and quarterly strategy reviews with your dedicated account manager.
                </p>
              </details>
            </div>

            {/* Right Column - 6 FAQs */}
            <div className="space-y-6 animate-fade-in-right">
              <details className="bg-card border border-border rounded-xl p-6 shadow-md cursor-pointer group hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: '0s' }}>
                <summary className="flex justify-between items-center font-bold text-main-text text-lg">
                  Can I track my campaign performance?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-light-text font-bold mt-4">
                  Absolutely! We provide comprehensive tracking and analytics dashboards for all campaigns. You can monitor KPIs in real-time, from traffic and conversions to ROI and customer acquisition costs. Full transparency is our commitment.
                </p>
              </details>

              <details className="bg-card border border-border rounded-xl p-6 shadow-md cursor-pointer group hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <summary className="flex justify-between items-center font-bold text-main-text text-lg">
                  What is your contract duration?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-light-text font-bold mt-4">
                  We offer flexible contract options ranging from project-based engagements to monthly retainers. Most clients benefit from ongoing partnerships for sustained growth. Discuss your specific needs during the consultation.
                </p>
              </details>

              <details className="bg-card border border-border rounded-xl p-6 shadow-md cursor-pointer group hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <summary className="flex justify-between items-center font-bold text-main-text text-lg">
                  Do you guarantee results?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-light-text font-bold mt-4">
                  While no agency can guarantee specific results due to market variables, we guarantee our effort and expertise. Our track record shows consistent ROI improvement across all client sectors. We focus on measurable outcomes that matter to your business.
                </p>
              </details>

              <details className="bg-card border border-border rounded-xl p-6 shadow-md cursor-pointer group hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <summary className="flex justify-between items-center font-bold text-main-text text-lg">
                  How do you stay current with digital trends?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-light-text font-bold mt-4">
                  Our team continuously trains on the latest digital marketing tools, algorithms, and strategies. We attend industry conferences, participate in certification programs, and stay updated with platform changes to ensure your campaigns are always ahead of the curve.
                </p>
              </details>

              <details className="bg-card border border-border rounded-xl p-6 shadow-md cursor-pointer group hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <summary className="flex justify-between items-center font-bold text-main-text text-lg">
                  What industries do you specialize in?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-light-text font-bold mt-4">
                  We work with diverse industries including E-commerce, Tech Startups, Real Estate, Health & Wellness, Education, Finance, and Local Businesses. Our versatile approach means we bring valuable insights across sectors and markets.
                </p>
              </details>

              <details className="bg-card border border-border rounded-xl p-6 shadow-md cursor-pointer group hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <summary className="flex justify-between items-center font-bold text-main-text text-lg">
                  How do I get started with freelance?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-light-text font-bold mt-4">
                  Simply contact us through our website or call us directly. We'll schedule a free consultation to understand your business goals, current marketing efforts, and challenges. From there, we'll create a customized strategy and proposal tailored to your needs.
                </p>
              </details>
            </div>
          </div>

          <div className="mt-12 text-center animate-fade-in-up">
            <p className="text-light-text text-lg font-bold mb-6">
              Still have questions? We're here to help!
            </p>
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/80 text-background px-8 py-4 rounded-lg font-bold text-lg inline-block transition-all duration-300 shadow-lg"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
