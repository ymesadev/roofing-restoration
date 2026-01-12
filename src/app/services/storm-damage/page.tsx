import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Storm Damage Roof Repair | Florida Roof Restore',
  description: 'Expert storm damage roof repair in Florida. Hurricane, wind, and hail damage restoration. We work with your insurance for complete roof restoration.',
};

export default function StormDamagePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Storm Damage Roof Repair
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Florida&apos;s severe weather can devastate your roof in minutes. Our storm damage restoration experts assess, document, and repair hurricane, wind, and hail damage—working directly with your insurance company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                Get Free Inspection
              </Link>
              <a
                href="tel:1-800-555-ROOF"
                className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                Call 1-800-555-ROOF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Damage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Types of Storm Damage We Repair
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Hurricane Damage',
                desc: 'High winds can strip shingles, lift tiles, tear off flashing, and cause structural damage. We restore roofs to pre-storm condition.',
                items: ['Missing shingles/tiles', 'Lifted or curled materials', 'Exposed underlayment', 'Structural damage'],
              },
              {
                title: 'Wind Damage',
                desc: 'Even non-hurricane winds can cause significant damage over time or in sudden gusts.',
                items: ['Edge and corner damage', 'Loose or missing materials', 'Damaged vents and fixtures', 'Compromised seals'],
              },
              {
                title: 'Hail Damage',
                desc: 'Hail can crack, dent, and weaken roofing materials, leading to hidden leaks.',
                items: ['Cracked shingles/tiles', 'Dented metal components', 'Granule loss on shingles', 'Bruised underlayment'],
              },
            ].map((type, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.desc}</p>
                <ul className="space-y-2">
                  {type.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Our Storm Damage Restoration Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Free Inspection', desc: 'We thoroughly inspect your roof and document all storm damage with photos and detailed notes.' },
              { step: '2', title: 'Insurance Assistance', desc: 'We help file your claim and work directly with adjusters to ensure fair coverage.' },
              { step: '3', title: 'Professional Repair', desc: 'Our licensed crews perform all repairs using quality materials and proper techniques.' },
              { step: '4', title: 'Final Walkthrough', desc: 'We inspect the completed work with you and ensure your complete satisfaction.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Act Fast */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why You Should Act Fast After Storm Damage
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Storm damage to your roof isn&apos;t just a cosmetic issue—it&apos;s a ticking clock. Even minor damage can quickly escalate into major problems if left unaddressed.
                </p>
                <p>
                  <strong className="text-slate-900">Water intrusion</strong> can begin within hours of damage, leading to mold growth, structural rot, and damage to your home&apos;s interior.
                </p>
                <p>
                  <strong className="text-slate-900">Insurance deadlines</strong> may require you to report damage within a specific timeframe. Delaying could jeopardize your claim.
                </p>
                <p>
                  <strong className="text-slate-900">Secondary damage</strong> from subsequent storms can make the original damage much worse and more expensive to repair.
                </p>
              </div>
            </div>
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Free Storm Damage Inspection</h3>
              <p className="text-gray-300 mb-6">
                Not sure if you have damage? Let our experts inspect your roof at no cost. We&apos;ll provide an honest assessment and help you understand your options.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-lg font-semibold text-lg transition"
              >
                Schedule Free Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Storm Damage? We Can Help.
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get your free inspection today and let us handle the rest—including working with your insurance company.
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
