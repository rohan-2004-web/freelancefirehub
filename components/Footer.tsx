export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent-dark text-accent-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-lg font-bold">freelance</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Best Digital Marketing Agency in Varanasi. Delivering ROI-focused marketing solutions.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://wa.me/917307260253" className="text-secondary-300 hover:text-secondary-200 transition-colors font-medium">
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary-300">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="/" className="hover:text-secondary-300 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-secondary-300 transition-colors">About Us</a></li>
              <li><a href="/service" className="hover:text-secondary-300 transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-secondary-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary-300">Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-secondary-300 transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-secondary-300 transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-secondary-300 transition-colors">PPC Ads</a></li>
              <li><a href="#" className="hover:text-secondary-300 transition-colors">Content Writing</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary-300">Resources</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-secondary-300 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-secondary-300 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-secondary-300 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-secondary-300 transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary-300">Contact</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex gap-2">
                <span>📍</span>
                <span>Varanasi, India</span>
              </li>
              <li className="flex gap-2">
                <span>📞</span>
                <a href="tel:+917307260253" className="hover:text-secondary-300 transition-colors">
                  +91 73072 60253
                </a>
              </li>
              <li className="flex gap-2">
                <span>📧</span>
                <a href="mailto:info@freelance.com" className="hover:text-secondary-300 transition-colors">
                  info@freelance.com
                </a>
              </li>
              <li className="flex gap-2">
                <span>⏰</span>
                <span>24/7 Available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} freelance. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-secondary-300 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary-300 transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
