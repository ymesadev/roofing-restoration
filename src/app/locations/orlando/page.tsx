import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Roof Restoration Orlando | Emergency Tarping & Storm Damage Repair',
  description: 'Orlando roof restoration services. 24/7 emergency tarping, storm damage repair, and leak repairs. Serving Orange County. Licensed and insured.',
};

export default function OrlandoPage() {
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
              Orlando, FL
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Orlando Roof Restoration Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Central Florida&apos;s unpredictable weather puts Orlando roofs to the test. From summer thunderstorms to hurricane season, our Orlando team provides reliable emergency response and expert restoration services.
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
            Our Orlando Roofing Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Emergency Roof Tarping', desc: 'Immediate protection when Orlando storms damage your roof.', href: '/services/roof-tarping' },
              { title: 'Storm Damage Repair', desc: 'Complete restoration after severe weather events.', href: '/services/storm-damage' },
              { title: 'Roof Leak Repair', desc: 'Quick leak identification and lasting repairs.', href: '/services/leak-repair' },
              { title: 'Insurance Claims Help', desc: 'Expert assistance with damage documentation and claims.', href: '/services/insurance-claims' },
              { title: 'Roof Inspections', desc: 'Detailed inspections for storm damage or home sales.', href: '/services/inspection' },
              { title: 'Preventive Maintenance', desc: 'Regular maintenance to extend your roof\'s lifespan.', href: '/contact' },
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
                Serving Greater Orlando
              </h2>
              <p className="text-gray-600 mb-6">
                Orlando&apos;s location in Central Florida means exposure to hurricanes from both coasts, plus daily summer storms that can bring damaging winds and hail. Our local team is ready to respond whenever your roof needs attention.
              </p>
              <ul className="space-y-3">
                {[
                  'Local crews throughout Orange and Seminole Counties',
                  'Fast response for afternoon storm damage',
                  'Experience with HOA requirements',
                  'Familiar with Central Florida building codes',
                  'Insurance claim expertise',
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
              <h3 className="text-xl font-bold text-slate-900 mb-4">Areas We Serve in Orlando</h3>
              <div className="grid grid-cols-2 gap-2 text-gray-600">
                {[
                  'Downtown Orlando',
                  'Winter Park',
                  'Altamonte Springs',
                  'Lake Mary',
                  'Sanford',
                  'Kissimmee',
                  'Winter Garden',
                  'Ocoee',
                  'Apopka',
                  'Maitland',
                  'Casselberry',
                  'Dr. Phillips',
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
            Orlando Roof Damage? Call Us Now.
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            24/7 emergency service for Orlando and all of Central Florida.
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
