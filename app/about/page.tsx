'use client';

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
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About freelance</h1>
          <p className="text-xl text-white font-light max-w-3xl mx-auto">
            Your trusted digital marketing partner in Varanasi delivering ROI-focused solutions
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed font-medium">
                freelance is a leading performance marketing agency based in Varanasi, specializing in data-driven digital marketing strategies that deliver measurable results. 
              </p>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed font-medium">
                With over 5 years of experience, 200+ successful campaigns, and a proven track record of 300% average ROI, we help businesses achieve their growth objectives through cutting-edge digital solutions.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                Our team of certified digital marketing experts combines creativity with analytics to craft customized solutions for SEO, PPC, social media, and more. We don't just run campaigns — we build long-term partnerships focused on your success.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 text-white text-center shadow-lg">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed font-light">
                To empower businesses with cutting-edge digital marketing strategies that drive growth, maximize ROI, and create lasting impact in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-5xl font-bold mb-2 text-secondary-300">5+</div>
              <p className="text-lg font-medium">Years of Excellence</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-5xl font-bold mb-2 text-secondary-300">200+</div>
              <p className="text-lg font-medium">Successful Campaigns</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-5xl font-bold mb-2 text-secondary-300">50+</div>
              <p className="text-lg font-medium">Happy Clients</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-5xl font-bold mb-2 text-secondary-300">300%</div>
              <p className="text-lg font-medium">Average ROI Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-primary-600 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">🎯 Results-Driven</h3>
              <p className="text-gray-700 font-medium">
                We focus on delivering measurable results. Every strategy is data-backed and optimized for ROI.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-secondary-600 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">💡 Innovation</h3>
              <p className="text-gray-700 font-medium">
                We stay ahead of industry trends and constantly innovate to provide cutting-edge solutions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-primary-600 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">🤝 Partnership</h3>
              <p className="text-gray-700 font-medium">
                We treat every client as a partner. Your success is our success. We're invested in your growth.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-secondary-600 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">📊 Transparency</h3>
              <p className="text-gray-700 font-medium">
                Regular reports and updates so you always know how your campaigns are performing.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-primary-600 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">⚡ Excellence</h3>
              <p className="text-gray-700 font-medium">
                We maintain the highest standards in everything we do, from strategy to execution.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-secondary-600 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">🚀 Growth-Focused</h3>
              <p className="text-gray-700 font-medium">
                Your business growth is our mission. We're committed to scaling your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-200">
                <div className="text-6xl mb-4">{member.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-secondary-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose freelance?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 bg-white p-6 rounded-lg border border-gray-200 hover:border-secondary-300 transition-colors shadow-sm">
              <div className="text-3xl text-secondary-600 font-bold">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Track Record</h3>
                <p className="text-gray-700 font-medium">
                  Hundreds of successful campaigns that have helped businesses grow their revenue and market presence.
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-white p-6 rounded-lg border border-gray-200 hover:border-secondary-300 transition-colors shadow-sm">
              <div className="text-3xl text-secondary-600 font-bold">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-700 font-medium">
                  Experienced professionals with expertise in all aspects of digital marketing.
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-white p-6 rounded-lg border border-gray-200 hover:border-secondary-300 transition-colors shadow-sm">
              <div className="text-3xl text-secondary-600 font-bold">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Data-Driven Approach</h3>
                <p className="text-gray-700 font-medium">
                  Every decision backed by analytics and real-time data to maximize your ROI.
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-white p-6 rounded-lg border border-gray-200 hover:border-secondary-300 transition-colors shadow-sm">
              <div className="text-3xl text-secondary-600 font-bold">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-700 font-medium">
                  Dedicated support team available to answer your questions anytime.
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-white p-6 rounded-lg border border-gray-200 hover:border-secondary-300 transition-colors shadow-sm">
              <div className="text-3xl text-secondary-600 font-bold">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Reporting</h3>
                <p className="text-gray-700 font-medium">
                  Regular reports and updates so you always know how your campaigns are performing.
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-white p-6 rounded-lg border border-gray-200 hover:border-secondary-300 transition-colors shadow-sm">
              <div className="text-3xl text-secondary-600 font-bold">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Customized Solutions</h3>
                <p className="text-gray-700 font-medium">
                  Tailored strategies designed specifically for your business needs and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 font-light max-w-2xl mx-auto">
            Let's discuss how our digital marketing expertise can help you achieve your business goals.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="https://wa.me/917307260253"
              className="bg-white text-secondary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              WhatsApp Us
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-secondary-600 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
