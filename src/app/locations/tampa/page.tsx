import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Roof Restoration Tampa | Emergency Tarping & Storm Damage Repair',
  description: 'Tampa roof restoration services. 24/7 emergency tarping, storm damage repair, and leak repairs. Serving Hillsborough County. Licensed and insured.',
};

export default function TampaPage() {
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
              Tampa, FL
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tampa Roof Restoration Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Tampa Bay&apos;s lightning capital status and frequent severe storms demand responsive, reliable roofing services. Our Tampa crews provide fast emergency response and expert restoration throughout Hillsborough County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:1-800-555-ROOF"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                Call Now: 1-800-555-ROOF
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
            Our Tampa Roofing Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Emergency Roof Tarping', desc: 'Fast tarping services to protect your Tampa home after storm damage.', href: '/services/roof-tarping' },
              { title: 'Storm Damage Repair', desc: 'Complete restoration after hurricanes, lightning strikes, and severe weather.', href: '/services/storm-damage' },
              { title: 'Roof Leak Repair', desc: 'Expert leak detection and repair for Tampa\'s rainy season.', href: '/services/leak-repair' },
              { title: 'Insurance Claims Help', desc: 'Full support with damage documentation and insurance claim filing.', href: '/services/insurance-claims' },
              { title: 'Roof Inspections', desc: 'Comprehensive inspections for damage assessment or home purchases.', href: '/services/inspection' },
              { title: 'All Roof Types', desc: 'Shingle, tile, metal, and flat roof repair and restoration.', href: '/contact' },
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
                Tampa&apos;s Trusted Roof Restoration Experts
              </h2>
              <p className="text-gray-600 mb-6">
                The Tampa Bay area experiences some of Florida&apos;s most severe weather, from afternoon thunderstorms to tropical systems. Our local team understands these challenges and is equipped to respond quickly when your roof needs help.
              </p>
              <ul className="space-y-3">
                {[
                  'Headquarters located in Tampa for immediate response',
                  'Experienced with Tampa\'s unique weather patterns',
                  'Knowledge of Hillsborough County building codes',
                  '24/7 emergency services available',
                  'Strong track record with Tampa homeowners',
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
              <h3 className="text-xl font-bold text-slate-900 mb-4">Areas We Serve in Tampa</h3>
              <div className="grid grid-cols-2 gap-2 text-gray-600">
                {[
                  'Downtown Tampa',
                  'South Tampa',
                  'Westchase',
                  'Carrollwood',
                  'Brandon',
                  'Temple Terrace',
                  'Town \'n\' Country',
                  'Riverview',
                  'Lutz',
                  'Wesley Chapel',
                  'Plant City',
                  'New Tampa',
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
            Tampa Roof Emergency? We&apos;re Ready.
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Fast response times and quality workmanship for Tampa Bay homeowners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:1-800-555-ROOF"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition"
            >
              Call 1-800-555-ROOF
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
