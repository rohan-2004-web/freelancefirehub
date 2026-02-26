export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-main-text py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-sm">F</span>
              </div>
              <span className="text-lg font-bold text-main-text">freelance</span>
            </div>
            <p className="text-light-text text-sm leading-relaxed">
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
            <h3 className="font-bold text-lg mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-light-text text-sm">
              <li><a href="/" className="hover:text-secondary-300 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-secondary-300 transition-colors">About Us</a></li>
              <li><a href="/service" className="hover:text-secondary-300 transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-secondary-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Services</h3>
            <ul className="space-y-2 text-light-text text-sm">
              <li><a href="#" className="hover:text-secondary-300 transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-secondary-300 transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-secondary-300 transition-colors">PPC Ads</a></li>
              <li><a href="#" className="hover:text-secondary-300 transition-colors">Content Writing</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Resources</h3>
            <ul className="space-y-2 text-light-text text-sm">
              <li><a href="#" className="hover:text-secondary-300 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-secondary-300 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-secondary-300 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-secondary-300 transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Contact</h3>
            <ul className="space-y-3 text-light-text text-sm">
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
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-light-text text-sm">
              © {currentYear} freelance. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-light-text hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-light-text hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
