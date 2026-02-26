'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/service', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card shadow-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 relative">
          {/* Logo - Left */}
          <Link href="/" className="absolute left-0 flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-secondary-600 font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold text-white">freelance</span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-main-text hover:text-light-text font-bold transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* WhatsApp Button - Right */}
          <a
            href="https://wa.me/917307260253"
            className="absolute right-0 bg-primary hover:bg-primary/90 text-background px-6 py-3 rounded-lg font-bold transition-all duration-300 hidden md:flex gap-2 items-center hover:shadow-lg"
          >
            WhatsApp
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white absolute right-0"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-card border-t border-border pb-4">
            <div className="flex flex-col gap-2 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-main-text hover:bg-white/10 hover:text-light-text transition-colors font-medium rounded-lg"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://wa.me/917307260253"
                className="mt-2 block mx-4 bg-primary text-background px-6 py-3 rounded-lg font-bold text-center transition-all duration-300 hover:shadow-lg"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
