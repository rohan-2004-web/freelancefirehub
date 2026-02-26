'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-background py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-down leading-tight text-main-text">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-light-text font-light max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Ready to transform your digital presence? Contact us today for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-primary-600 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">📍 Address</h3>
              <p className="text-gray-700 font-medium">
                  Varanasi, Uttar Pradesh<br/>
                  India
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-secondary-600 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-main-text mb-3">📞 Phone</h3>
                <a href="tel:+917307260253" className="text-secondary-600 hover:text-secondary-700 font-bold text-lg transition-colors">
                  +91 73072 60253
                </a>
                <p className="text-gray-700 font-medium text-sm mt-2">Instant Response</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-primary-600 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-main-text mb-3">💬 WhatsApp</h3>
                <a href="https://wa.me/917307260253" className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-6 py-2 rounded-lg font-bold inline-block transition-all duration-300">
                  Chat Now
                </a>
                <p className="text-gray-700 font-medium text-sm mt-2">Quick & Private</p>
              </div>

              <div className="bg-card rounded-xl p-8 shadow-md border-l-4 border-primary hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-primary-900 mb-3">📧 Email</h3>
                <a href="mailto:info@freelance.com" className="text-secondary-600 hover:text-secondary-700 font-bold transition-colors">
                  info@freelance.com
                </a>
                <p className="text-gray-700 font-medium text-sm mt-2">Send Message</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-secondary-600 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-main-text mb-3">⏰ Availability</h3>
                <p className="text-gray-700 font-medium">24/7 Available</p>
                <p className="text-gray-700 text-sm mt-2">Always here to serve you</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-700 font-medium">
                      We've received your message and will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-900 font-bold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-gray-900 font-bold mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Your email"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-gray-900 font-bold mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600"
                          placeholder="Your phone"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-gray-900 font-bold mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-gray-900 font-bold mb-2">
                        Service of Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600"
                      >
                        <option value="">Select a service</option>
                        <option value="seo">SEO Optimization</option>
                        <option value="social">Social Media Marketing</option>
                        <option value="content">Content Marketing</option>
                        <option value="ppc">PPC Advertising</option>
                        <option value="analytics">Analytics & Reporting</option>
                        <option value="email">Email Marketing</option>
                        <option value="cro">Conversion Rate Optimization</option>
                        <option value="ecommerce">E-commerce Marketing</option>
                        <option value="video">Video Marketing</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-900 font-bold mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600"
                        placeholder="Tell us about your project and goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white font-light mb-8 leading-relaxed">
            Contact us directly through WhatsApp or phone for immediate assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/917307260253"
              className="bg-white hover:bg-gray-100 text-primary-700 px-8 py-4 rounded-lg font-bold text-lg inline-block transition-all duration-300 shadow-lg"
            >
              WhatsApp Chat
            </a>
            <a
              href="tel:+917307260253"
              className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block transition-all duration-300 shadow-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
