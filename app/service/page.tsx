import Link from 'next/link';

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions to help your business thrive
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-accent-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary-600 hover:border-secondary-600 flex flex-col"
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
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-accent-gray">
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
    </main>
  );
}
