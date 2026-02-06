import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Roof Leak Repair Services | Florida Roof Restore',
  description: 'Professional roof leak detection and repair in Florida. Fast, reliable service to stop leaks and prevent water damage. Licensed and insured.',
};

export default function LeakRepairPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Roof Leak Repair
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A leaking roof can cause extensive damage to your home if not addressed quickly. Our expert technicians locate the source of leaks and provide lasting repairs—not temporary fixes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                Schedule Repair
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

      {/* Signs of Leaks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Signs You May Have a Roof Leak
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Water Stains on Ceiling', desc: 'Brown or yellow spots on your ceiling often indicate water intrusion from above.' },
              { title: 'Dripping Water', desc: 'Visible drips during or after rain are an obvious sign of an active leak.' },
              { title: 'Mold or Mildew', desc: 'Musty odors or visible mold growth can indicate hidden moisture problems.' },
              { title: 'Damaged Shingles', desc: 'Missing, cracked, or curling shingles create entry points for water.' },
              { title: 'Damaged Flashing', desc: 'Worn or lifted flashing around vents, chimneys, and edges causes many leaks.' },
              { title: 'Attic Moisture', desc: 'Wet insulation, damp rafters, or daylight through the roof boards.' },
            ].map((sign, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{sign.title}</h3>
                  <p className="text-gray-600 text-sm">{sign.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Leak Detection & Repair Process
              </h2>
              <p className="text-gray-600 mb-6">
                Finding a leak&apos;s source isn&apos;t always straightforward. Water can travel along rafters and sheathing before dripping down, making the visible leak far from the actual entry point.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Thorough Inspection', desc: 'We check your roof, attic, and interior to trace the leak path back to its source.' },
                  { title: 'Accurate Diagnosis', desc: 'We identify exactly what&apos;s causing the leak—not just where water is appearing.' },
                  { title: 'Proper Repair', desc: 'We fix the root cause with quality materials and proven techniques.' },
                  { title: 'Prevention', desc: 'We address potential problem areas to prevent future leaks.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Common Leak Causes</h3>
              <ul className="space-y-3">
                {[
                  'Damaged or missing shingles',
                  'Cracked or deteriorated flashing',
                  'Clogged gutters causing water backup',
                  'Improperly sealed roof penetrations',
                  'Aging roofing materials',
                  'Poor initial installation',
                  'Storm or impact damage',
                  'Ice dams (rare in Florida)',
                ].map((cause, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{cause}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stop the Leak Before It Gets Worse
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Small leaks become big problems. Get professional leak repair from Florida&apos;s restoration experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
            >
              Schedule Repair
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
