import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L2 12h3v9h14v-9h3L12 3zm0 2.84L18.5 12H18v8H6v-8h-.5L12 5.84z"/>
                </svg>
              </div>
              <span className="text-xl font-bold">Florida Roof Restore</span>
            </div>
            <p className="text-gray-400 mb-4">
              Florida&apos;s trusted roof restoration specialists. 24/7 emergency services for storm damage, leaks, and tarping.
            </p>
            <p className="text-orange-400 font-semibold text-lg">1-800-555-ROOF</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/roof-tarping" className="text-gray-400 hover:text-orange-400 transition">Emergency Roof Tarping</Link></li>
              <li><Link href="/services/storm-damage" className="text-gray-400 hover:text-orange-400 transition">Storm Damage Repair</Link></li>
              <li><Link href="/services/leak-repair" className="text-gray-400 hover:text-orange-400 transition">Roof Leak Repair</Link></li>
              <li><Link href="/services/insurance-claims" className="text-gray-400 hover:text-orange-400 transition">Insurance Claims</Link></li>
              <li><Link href="/services/inspection" className="text-gray-400 hover:text-orange-400 transition">Roof Inspection</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li><Link href="/locations/miami" className="text-gray-400 hover:text-orange-400 transition">Miami</Link></li>
              <li><Link href="/locations/tampa" className="text-gray-400 hover:text-orange-400 transition">Tampa</Link></li>
              <li><Link href="/locations/orlando" className="text-gray-400 hover:text-orange-400 transition">Orlando</Link></li>
              <li><Link href="/locations/jacksonville" className="text-gray-400 hover:text-orange-400 transition">Jacksonville</Link></li>
              <li><Link href="/locations/fort-lauderdale" className="text-gray-400 hover:text-orange-400 transition">Fort Lauderdale</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Restoration Way<br/>Tampa, FL 33601</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@floridaroofrestore.com" className="hover:text-orange-400 transition">info@floridaroofrestore.com</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>24/7 Emergency Service</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Florida Roof Restore. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Licensed & Insured</span>
              <span>FL License #CCC123456</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
