import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Professional Roof Inspection Services | Florida Roof Restore',
  description: 'Comprehensive roof inspections in Florida. Identify damage, assess condition, and get expert recommendations. Free inspections for storm damage.',
};

export default function InspectionPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Roof Inspection
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Whether you suspect storm damage, are buying a home, or just want to know your roof&apos;s condition, our thorough inspections give you the answers you need with detailed reports you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                Schedule Inspection
              </Link>
              <a
                href="tel:9542310508"
                className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                Call (954) 231-0508
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Inspect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            What We Inspect
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Roofing Materials',
                items: ['Shingles, tiles, or metal panels', 'Signs of wear, cracking, or damage', 'Missing or loose materials', 'Granule loss on shingles'],
              },
              {
                title: 'Flashing & Seals',
                items: ['Chimney and vent flashing', 'Valley and edge flashing', 'Pipe boots and penetration seals', 'Skylight seals'],
              },
              {
                title: 'Structural Elements',
                items: ['Roof decking condition', 'Fascia and soffit', 'Rafters and trusses (attic)', 'Signs of sagging or damage'],
              },
              {
                title: 'Drainage System',
                items: ['Gutters and downspouts', 'Proper slope and drainage', 'Signs of water pooling', 'Debris buildup'],
              },
              {
                title: 'Ventilation',
                items: ['Ridge and soffit vents', 'Attic ventilation adequacy', 'Signs of moisture or heat damage', 'Vent functionality'],
              },
              {
                title: 'Interior Signs',
                items: ['Attic insulation condition', 'Signs of leaks or water damage', 'Mold or mildew presence', 'Daylight through roof boards'],
              },
            ].map((section, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600 text-sm">
                      <svg className="w-4 h-4 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Inspections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Types of Roof Inspections
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Storm Damage Inspection',
                desc: 'After a storm, we inspect for hurricane, wind, or hail damage and provide documentation for insurance claims.',
                features: ['Complete damage assessment', 'Photo documentation', 'Insurance claim report', 'Repair recommendations'],
              },
              {
                title: 'Pre-Purchase Inspection',
                desc: 'Buying a home? Know the true condition of the roof before you close with our detailed inspection.',
                features: ['Full condition assessment', 'Remaining life estimate', 'Repair cost estimates', 'Detailed written report'],
              },
              {
                title: 'Maintenance Inspection',
                desc: 'Regular inspections help catch small problems before they become expensive repairs.',
                features: ['Annual condition check', 'Problem identification', 'Maintenance recommendations', 'Priority scheduling'],
              },
            ].map((type, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{type.desc}</p>
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600 text-sm">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block text-center bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-lg font-semibold transition"
                >
                  Request an Estimate
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Know Your Roof&apos;s True Condition
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Schedule a professional inspection today and get the answers you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
            >
              Schedule Inspection
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
