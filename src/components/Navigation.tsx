'use client';

import Link from 'next/link';
import { useState } from 'react';

const services = [
  { name: 'Emergency Roof Tarping', href: '/services/roof-tarping' },
  { name: 'Storm Damage Repair', href: '/services/storm-damage' },
  { name: 'Roof Leak Repair', href: '/services/leak-repair' },
  { name: 'Insurance Claims', href: '/services/insurance-claims' },
  { name: 'Roof Inspection', href: '/services/inspection' },
];

const locations = [
  { name: 'Miami', href: '/locations/miami' },
  { name: 'Tampa', href: '/locations/tampa' },
  { name: 'Orlando', href: '/locations/orlando' },
  { name: 'Jacksonville', href: '/locations/jacksonville' },
  { name: 'Fort Lauderdale', href: '/locations/fort-lauderdale' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L2 12h3v9h14v-9h3L12 3zm0 2.84L18.5 12H18v8H6v-8h-.5L12 5.84z"/>
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold">Florida Roof Restore</span>
              <span className="block text-xs text-orange-400">24/7 Emergency Service</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-orange-400 transition">Home</Link>

            <div className="relative group">
              <button
                className="hover:text-orange-400 transition flex items-center gap-1"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 bg-slate-800 rounded-lg shadow-xl py-2 min-w-[220px] transition-all ${servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2 hover:bg-slate-700 hover:text-orange-400 transition"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button
                className="hover:text-orange-400 transition flex items-center gap-1"
                onMouseEnter={() => setLocationsOpen(true)}
                onMouseLeave={() => setLocationsOpen(false)}
              >
                Locations
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 bg-slate-800 rounded-lg shadow-xl py-2 min-w-[200px] transition-all ${locationsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onMouseEnter={() => setLocationsOpen(true)}
                onMouseLeave={() => setLocationsOpen(false)}
              >
                {locations.map((location) => (
                  <Link
                    key={location.href}
                    href={location.href}
                    className="block px-4 py-2 hover:bg-slate-700 hover:text-orange-400 transition"
                  >
                    {location.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/blog" className="hover:text-orange-400 transition">Blog</Link>
            <Link href="/about" className="hover:text-orange-400 transition">About</Link>
            <Link href="/contact" className="hover:text-orange-400 transition">Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:9542310508" className="flex items-center gap-2 text-orange-400 font-semibold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (954) 231-0508
            </a>
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold transition"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 hover:text-orange-400">Home</Link>
            <div className="py-2">
              <span className="text-gray-400 text-sm">Services</span>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block py-2 pl-4 hover:text-orange-400"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <div className="py-2">
              <span className="text-gray-400 text-sm">Locations</span>
              {locations.map((location) => (
                <Link
                  key={location.href}
                  href={location.href}
                  className="block py-2 pl-4 hover:text-orange-400"
                >
                  {location.name}
                </Link>
              ))}
            </div>
            <Link href="/blog" className="block py-2 hover:text-orange-400">Blog</Link>
            <Link href="/about" className="block py-2 hover:text-orange-400">About</Link>
            <Link href="/contact" className="block py-2 hover:text-orange-400">Contact</Link>
            <a href="tel:9542310508" className="block py-2 text-orange-400 font-semibold">
              (954) 231-0508
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
