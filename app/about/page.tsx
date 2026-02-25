export default function About() {
  const team = [
    {
      name: 'Vikas Sharma',
      role: 'Founder & CEO',
      icon: '👨‍💼',
    },
    {
      name: 'Anjali Mishra',
      role: 'Head of Strategy',
      icon: '👩‍💼',
    },
    {
      name: 'Rahul Singh',
      role: 'SEO Specialist',
      icon: '👨‍💻',
    },
    {
      name: 'Neha Verma',
      role: 'Content Manager',
      icon: '👩‍💻',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About freelance</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Your trusted digital marketing partner in Varanasi
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                freelance was founded with a simple mission: to bring world-class digital marketing services to businesses in Varanasi and beyond. What started as a small team of passionate marketers has grown into a full-service digital marketing agency.
              </p>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                We believe that every business deserves access to affordable, high-quality digital marketing services. Our team works tirelessly to deliver results that exceed expectations.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With over 5 years of experience and 50+ satisfied clients, we've become the go-to digital marketing agency for businesses looking to grow their online presence in Varanasi.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-100">
                To empower businesses with innovative digital marketing strategies that drive growth, build brand awareness, and create lasting success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-accent-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md border-t-4 border-primary-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">🎯 Results-Driven</h3>
              <p className="text-gray-700">
                We focus on delivering measurable results. Every strategy is data-backed and optimized for ROI.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md border-t-4 border-secondary-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">💡 Innovation</h3>
              <p className="text-gray-700">
                We stay ahead of industry trends and constantly innovate to provide cutting-edge solutions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md border-t-4 border-primary-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">🤝 Partnership</h3>
              <p className="text-gray-700">
                We treat every client as a partner. Your success is our success. We're invested in your growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-accent-gray rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-6xl mb-4">{member.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-primary-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">5+</div>
              <p className="text-lg">Years in Business</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-lg">Happy Clients</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">200+</div>
              <p className="text-lg">Successful Projects</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">300%</div>
              <p className="text-lg">Average ROI Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose freelance?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Track Record</h3>
                <p className="text-gray-700">
                  Hundreds of successful campaigns that have helped businesses grow their revenue and market presence.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-700">
                  Experienced professionals with expertise in all aspects of digital marketing.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable Pricing</h3>
                <p className="text-gray-700">
                  Quality services at competitive prices without compromising on quality.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-700">
                  Dedicated support team available to answer your questions anytime.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Reporting</h3>
                <p className="text-gray-700">
                  Regular reports and updates so you always know how your campaigns are performing.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Customized Solutions</h3>
                <p className="text-gray-700">
                  Tailored strategies designed specifically for your business needs and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
