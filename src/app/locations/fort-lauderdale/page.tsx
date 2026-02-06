import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Roof Restoration Fort Lauderdale | Emergency Tarping & Storm Damage Repair',
  description: 'Fort Lauderdale roof restoration services. 24/7 emergency tarping, hurricane damage repair, and leak repairs. Serving Broward County. Licensed and insured.',
};

export default function FortLauderdalePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              Fort Lauderdale, FL
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fort Lauderdale Roof Restoration Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Fort Lauderdale&apos;s coastal location makes quality roofing essential. Our Broward County crews specialize in hurricane damage restoration, emergency tarping, and protecting homes from South Florida&apos;s severe weather.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:9542310508"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                Call Now: (954) 231-0508
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Our Fort Lauderdale Roofing Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Emergency Roof Tarping', desc: 'Immediate protection for hurricane and storm-damaged roofs.', href: '/services/roof-tarping' },
              { title: 'Hurricane Damage Repair', desc: 'Complete restoration after South Florida\'s powerful storms.', href: '/services/storm-damage' },
              { title: 'Roof Leak Repair', desc: 'Fast leak repairs to prevent water damage.', href: '/services/leak-repair' },
              { title: 'Insurance Claims Help', desc: 'Expert guidance through the insurance claim process.', href: '/services/insurance-claims' },
              { title: 'Roof Inspections', desc: 'Thorough inspections for damage assessment or real estate.', href: '/services/inspection' },
              { title: 'Tile Roof Specialists', desc: 'Expert repair of South Florida\'s popular tile roofs.', href: '/contact' },
            ].map((service, i) => (
              <Link key={i} href={service.href} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition group">
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-orange-500 transition">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Fort Lauderdale&apos;s Roofing Professionals
              </h2>
              <p className="text-gray-600 mb-6">
                Living in Fort Lauderdale means living in hurricane country. Our team has helped thousands of Broward County homeowners protect and restore their roofs after storms, and we&apos;re ready to help you too.
              </p>
              <ul className="space-y-3">
                {[
                  'Local crews throughout Broward County',
                  'Specialists in tile and flat roof systems',
                  'Compliant with Florida Building Code (High-Velocity Hurricane Zone)',
                  'Bilingual staff available',
                  'Extensive hurricane restoration experience',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Areas We Serve in Fort Lauderdale</h3>
              <div className="grid grid-cols-2 gap-2 text-gray-600">
                {[
                  'Downtown Fort Lauderdale',
                  'Fort Lauderdale Beach',
                  'Las Olas',
                  'Wilton Manors',
                  'Oakland Park',
                  'Pompano Beach',
                  'Deerfield Beach',
                  'Coral Springs',
                  'Plantation',
                  'Davie',
                  'Hollywood',
                  'Weston',
                ].map((area, i) => (
                  <span key={i} className="text-sm">{area}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Fort Lauderdale Roof Help Available Now
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            From emergency tarping to complete restoration, we serve all of Broward County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:9542310508"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition"
            >
              Call (954) 231-0508
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
