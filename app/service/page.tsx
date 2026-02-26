import Link from 'next/link';
import Image from 'next/image';
import FloatingForm from '@/components/FloatingForm';

export default function Services() {
  const services = [
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your website.',
      features: [
        'Keyword Research & Analysis',
        'On-Page Optimization',
        'Technical SEO',
        'Link Building',
        'Monthly Reports',
      ],
      price: 'Starting at ₹10,000/month',
    },
    {
      icon: '📱',
      title: 'Social Media Marketing',
      description: 'Build your brand presence and engage with your audience on social platforms.',
      features: [
        'Content Strategy',
        'Post Creation & Scheduling',
        'Community Management',
        'Paid Social Campaigns',
        'Analytics & Insights',
      ],
      price: 'Starting at ₹15,000/month',
    },
    {
      icon: '✍️',
      title: 'Content Marketing',
      description: 'Create compelling content that attracts, engages, and converts your audience.',
      features: [
        'Blog Writing',
        'Video Content',
        'Infographics',
        'Case Studies',
        'Email Newsletters',
      ],
      price: 'Starting at ₹12,000/month',
    },
    {
      icon: '💰',
      title: 'PPC Advertising',
      description: 'Get immediate results with targeted paid advertising campaigns.',
      features: [
        'Google Ads Management',
        'Facebook Ads',
        'Instagram Ads',
        'Conversion Optimization',
        'ROI Tracking',
      ],
      price: 'Starting at ₹20,000/month',
    },
    {
      icon: '📊',
      title: 'Analytics & Reporting',
      description: 'Get data-driven insights to optimize your marketing efforts.',
      features: [
        'Website Analytics',
        'Conversion Tracking',
        'Competitor Analysis',
        'Performance Reports',
        'Recommendations',
      ],
      price: 'Starting at ₹8,000/month',
    },
    {
      icon: '🎨',
      title: 'Web Design',
      description: 'Beautiful, responsive websites that convert visitors into customers.',
      features: [
        'Responsive Design',
        'UX/UI Design',
        'E-commerce Setup',
        'CMS Integration',
        'SEO-ready Code',
      ],
      price: 'Starting at ₹25,000',
    },
    {
      icon: '🎬',
      title: 'Video Marketing',
      description: 'Engage your audience with professional video content.',
      features: [
        'Script Writing',
        'Video Production',
        'Video Editing',
        'YouTube Optimization',
        'Distribution Strategy',
      ],
      price: 'Starting at ₹30,000/project',
    },
    {
      icon: '💬',
      title: 'Brand Development',
      description: 'Build a strong, recognizable brand identity.',
      features: [
        'Logo Design',
        'Brand Guidelines',
        'Color & Typography',
        'Messaging Strategy',
        'Brand Story',
      ],
      price: 'Starting at ₹50,000',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
              <p className="text-xl text-gray-100 max-w-3xl">
                Comprehensive digital marketing solutions to help your business thrive
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/hero/hero.png"
                alt="Services"
                width={500}
                height={400}
                className="w-full max-w-md rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-primary-100 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary-600 hover:border-secondary-600 flex flex-col"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {service.description}
                </p>
                <div className="text-primary-600 font-bold text-sm mb-4">
                  {service.price}
                </div>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-sm">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.slice(0, 4).map((service, index) => (
            <div key={index} className={`mb-20 ${index > 0 ? 'border-t border-gray-200 pt-20' : ''}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl p-12 flex items-center justify-center h-full">
                    <div className="text-7xl">{service.icon}</div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 text-lg mb-6">
                    {service.description}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h3>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-secondary-500 font-bold">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-bold inline-block transition-colors duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-700">
                We analyze your business, goals, and target audience to create a strategic plan.
              </p>
            </div>
            <div className="relative">
              <div className="bg-secondary-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-700">
                We develop customized strategies tailored to your business needs and budget.
              </p>
            </div>
            <div className="relative">
              <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-700">
                Our expert team implements the strategy with precision and attention to detail.
              </p>
            </div>
            <div className="relative">
              <div className="bg-secondary-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Growth</h3>
              <p className="text-gray-700">
                We monitor, analyze, and optimize for continuous improvement and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Digital Marketing Journey?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Contact us today for a free consultation and let's discuss how we can help your business grow.
          </p>
          <Link
            href="/contact"
            className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg font-bold text-lg inline-block transition-colors duration-300"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Why Choose Our Services</h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            We deliver exceptional results with a commitment to excellence and your success
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Container 1 */}
            <div className="bg-gradient-to-br from-white to-primary-100 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-primary-600">
              <div className="text-6xl mb-6 text-center">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Results-Driven Approach</h3>
              <p className="text-gray-700 text-center mb-6">
                We focus on delivering measurable results with data-driven strategies that impact your bottom line.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span className="text-gray-700">Proven track record</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span className="text-gray-700">ROI focused strategies</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span className="text-gray-700">Real-time analytics</span>
                </li>
              </ul>
            </div>

            {/* Container 2 */}
            <div className="bg-gradient-to-br from-white to-secondary-100 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-secondary-600">
              <div className="text-6xl mb-6 text-center">👥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Expert Team</h3>
              <p className="text-gray-700 text-center mb-6">
                Our experienced professionals stay updated with industry trends and best practices.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-secondary-600 font-bold">✓</span>
                  <span className="text-gray-700">Certified experts</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary-600 font-bold">✓</span>
                  <span className="text-gray-700">Years of experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary-600 font-bold">✓</span>
                  <span className="text-gray-700">24/7 support</span>
                </li>
              </ul>
            </div>

            {/* Container 3 */}
            <div className="bg-gradient-to-br from-white to-primary-100 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-primary-600">
              <div className="text-6xl mb-6 text-center">💡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Innovative Solutions</h3>
              <p className="text-gray-700 text-center mb-6">
                We use cutting-edge tools and techniques to keep your business ahead of the competition.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span className="text-gray-700">Latest technologies</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span className="text-gray-700">Custom strategies</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span className="text-gray-700">Continuous optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-primary-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white py-3 rounded-lg font-bold transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[500px] border-t-4 border-secondary-600">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3384485463186!2d77.22860932347644!3d28.463255275764147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce282e3333337%3A0x5cf7e0c5c5c5c5c5!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-4">📞</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Phone</h4>
              <p className="text-gray-600">+91 XXXXX XXXXX</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-4">📧</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Email</h4>
              <p className="text-gray-600">hello@freelancefirehub.com</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-4">📍</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Location</h4>
              <p className="text-gray-600">New Delhi, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Find answers to common questions about our services
          </p>

          <div className="space-y-4">
            {[
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary depending on scope and complexity. Most projects take 4-12 weeks from discovery to launch. We provide detailed timelines during the consultation phase."
              },
              {
                question: "Do you offer monthly retainer packages?",
                answer: "Yes! We offer flexible monthly retainer packages for SEO, Social Media Marketing, Content Marketing, and Analytics. These packages include ongoing optimization and support."
              },
              {
                question: "How do you measure success?",
                answer: "We track success through data-driven metrics including traffic growth, conversion rates, ROI, engagement metrics, and search rankings. You'll receive monthly reports with detailed analytics."
              },
              {
                question: "Can you work with my existing team?",
                answer: "Absolutely! We work collaboratively with your in-house team. We can integrate seamlessly into your existing workflows and provide training to your staff."
              },
              {
                question: "What if I'm not happy with the results?",
                answer: "Your satisfaction is our priority. We offer a 30-day satisfaction guarantee. If you're not happy, we'll work with you to make adjustments or offer a full refund."
              },
              {
                question: "Do you provide support after project completion?",
                answer: "Yes, we provide ongoing support and maintenance packages. Whether it's monthly check-ins, quarterly strategy reviews, or 24/7 emergency support, we have options for every need."
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-primary-600"
              >
                <summary className="flex items-center justify-between cursor-pointer font-bold text-gray-900 text-lg">
                  {faq.question}
                  <span className="text-secondary-600 group-open:rotate-180 transition-transform duration-300">▼</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Form Component */}
      <FloatingForm />
    </main>
  );
}
