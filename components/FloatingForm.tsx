'use client';

import { useState } from 'react';

export default function FloatingForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can integrate with your email service here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsOpen(false);
  };

  return (
    <div>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-32 right-8 z-30 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-16 h-16"
        >
          <span className="text-2xl">💬</span>
        </button>
      )}

      {/* Floating Form Panel */}
      {isOpen && (
        <div className="fixed bottom-32 right-8 z-30 bg-white rounded-2xl shadow-2xl p-6 w-96 max-w-[calc(100vw-2rem)] border-t-4 border-gradient-to-r from-primary-600 to-secondary-600 animation-slide-up">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-primary-900">Quick Inquiry</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 font-bold text-xl"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-primary-200 rounded-lg focus:outline-none focus:border-primary-600 font-medium text-gray-800"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-primary-200 rounded-lg focus:outline-none focus:border-primary-600 font-medium text-gray-800"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-2 border-2 border-primary-200 rounded-lg focus:outline-none focus:border-primary-600 font-medium text-gray-800 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white py-2 rounded-lg font-bold transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          <p className="text-center text-gray-600 text-xs mt-3 font-medium">
            We'll respond within 2 hours
          </p>
        </div>
      )}
    </div>
  );
}
