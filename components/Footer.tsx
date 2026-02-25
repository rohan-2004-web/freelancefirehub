export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent-dark text-accent-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-lg font-bold">freelance</span>
            </div>
            <p className="text-gray-300 text-sm">
              Best Digital Marketing Agency in Varanasi
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="/" className="hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="/service" className="hover:text-primary-400 transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Social Media Marketing</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Content Marketing</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">PPC Advertising</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>📍 Varanasi, India</li>
              <li>📧 info@freelanceagency.com</li>
              <li>📱 +91 XXXXX XXXXX</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} freelance. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
