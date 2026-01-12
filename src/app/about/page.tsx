import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Florida Roof Restore',
  description: 'Learn about Florida Roof Restore - Florida\'s trusted roof restoration specialists with 15+ years of experience in emergency tarping and storm damage repair.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Florida Roof Restore
            </h1>
            <p className="text-xl text-gray-300">
              For over 15 years, we&apos;ve been protecting Florida homes from storm damage. When disaster strikes, we respond.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Florida Roof Restore was founded in 2009 after Hurricane season left thousands of Florida homeowners struggling to find reliable help. Our founder saw families waiting weeks for contractors while their homes suffered additional water damage.
                </p>
                <p>
                  We built this company on a simple promise: when Florida homeowners need roof help, we&apos;ll be there—fast. That commitment to rapid response and quality work has made us one of Florida&apos;s most trusted roof restoration companies.
                </p>
                <p>
                  Today, we have crews stationed across Florida, ready to respond 24/7. We&apos;ve helped over 10,000 homeowners protect and restore their roofs, and we&apos;re proud to be the company Floridians call when storms hit.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-orange-500">15+</div>
                  <div className="text-gray-600">Years in Business</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-500">10K+</div>
                  <div className="text-gray-600">Roofs Restored</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-500">50+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-500">5</div>
                  <div className="text-gray-600">Florida Locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Rapid Response',
                desc: 'When you call with an emergency, we respond—not tomorrow, not next week, but now. Our crews are positioned across Florida for fast deployment.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: 'Honest Assessment',
                desc: 'We tell you what you need, not what makes us the most money. If a repair will do the job, we won\'t push for a replacement.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Quality Work',
                desc: 'Every repair we make is done right the first time using quality materials and proven techniques. We stand behind our work with solid warranties.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ),
              },
            ].map((value, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Licensed, Insured & Qualified
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'State Licensed', desc: 'Florida State Certified Roofing Contractor #CCC123456' },
              { title: 'Fully Insured', desc: 'General liability and workers\' compensation coverage' },
              { title: 'BBB Accredited', desc: 'A+ rating with the Better Business Bureau' },
              { title: 'Manufacturer Certified', desc: 'Certified installer for major roofing brands' },
            ].map((cred, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{cred.title}</h3>
                <p className="text-gray-600 text-sm">{cred.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Whether you need emergency help or a free estimate, we&apos;re here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
            >
              Contact Us
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
