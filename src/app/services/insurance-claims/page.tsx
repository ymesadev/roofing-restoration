import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Roof Insurance Claims Assistance | Florida Roof Restore',
  description: 'Expert help with roof insurance claims in Florida. We document damage, work with adjusters, and help maximize your claim for storm and water damage.',
};

export default function InsuranceClaimsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insurance Claims Assistance
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Navigating roof insurance claims can be overwhelming. Our team has extensive experience working with insurance companies and knows exactly how to document damage to help ensure you receive fair compensation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                Get Free Consultation
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

      {/* How We Help */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            How We Help With Your Insurance Claim
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Damage Documentation',
                desc: 'We provide detailed photos, measurements, and written reports of all roof damage for your claim.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: 'Claim Filing Help',
                desc: 'We guide you through the claim process and help ensure all required information is submitted correctly.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: 'Adjuster Meetings',
                desc: 'We meet with your insurance adjuster on-site to ensure all damage is properly identified and recorded.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: 'Supplemental Claims',
                desc: 'If additional damage is discovered during repairs, we help file supplemental claims for full coverage.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                The Insurance Claim Process
              </h2>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Free Inspection', desc: 'We inspect your roof and document all storm-related damage at no cost.' },
                  { step: '2', title: 'Report Preparation', desc: 'We prepare a comprehensive damage report with photos and detailed findings.' },
                  { step: '3', title: 'Claim Filing', desc: 'We help you file your claim and provide all necessary documentation.' },
                  { step: '4', title: 'Adjuster Meeting', desc: 'We meet with the insurance adjuster to walk through all documented damage.' },
                  { step: '5', title: 'Claim Approval', desc: 'Once approved, we schedule repairs and coordinate with your insurance.' },
                  { step: '6', title: 'Quality Repairs', desc: 'We complete all repairs to your satisfaction and handle final paperwork.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
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
              <h3 className="text-xl font-bold text-slate-900 mb-4">What You Should Know</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong className="text-slate-900">Time limits apply.</strong> Most policies require you to report damage within a specific timeframe—often 1-2 years from the date of the storm.
                </p>
                <p>
                  <strong className="text-slate-900">Don&apos;t delay repairs.</strong> Insurance companies may deny claims for damage that worsened due to delayed repairs.
                </p>
                <p>
                  <strong className="text-slate-900">Document everything.</strong> Take photos before any temporary repairs and keep records of all communications.
                </p>
                <p>
                  <strong className="text-slate-900">Get professional help.</strong> Insurance adjusters work for the insurance company—having a roofing professional on your side helps level the playing field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don&apos;t Navigate Insurance Claims Alone
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let our experienced team help you get the coverage you deserve for your roof damage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
            >
              Free Consultation
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
