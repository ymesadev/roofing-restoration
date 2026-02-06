import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Emergency Roof Tarping Services | Florida Roof Restore',
  description: 'Professional emergency roof tarping services in Florida. 24/7 rapid response to protect your home from water damage after storms. Licensed and insured.',
};

export default function RoofTarpingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              24/7 Emergency Service
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Emergency Roof Tarping
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              When storm damage strikes, every minute counts. Our emergency tarping crews deploy heavy-duty protective tarps to stop water intrusion and prevent further damage to your home.
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
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Fast Protection When You Need It Most
              </h2>
              <p className="text-gray-600 mb-6">
                Florida&apos;s unpredictable weather can leave your roof vulnerable in an instant. Whether it&apos;s hurricane damage, fallen trees, or severe storm impact, exposed roofing can lead to catastrophic water damage within hours.
              </p>
              <p className="text-gray-600 mb-6">
                Our professional tarping service provides immediate protection using industrial-grade tarps securely fastened to prevent wind uplift and water penetration. We arrive quickly, assess the damage, and get your roof covered fast.
              </p>
              <ul className="space-y-3">
                {[
                  'Response within 2-4 hours for emergencies',
                  'Heavy-duty UV-resistant tarps',
                  'Secure fastening to withstand continued storms',
                  'Documentation for insurance claims',
                  'Licensed and insured crews',
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
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Our Tarping Process</h3>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Emergency Call', desc: 'Call our 24/7 hotline and speak with a dispatcher immediately.' },
                  { step: '2', title: 'Rapid Dispatch', desc: 'We deploy the nearest available crew to your location.' },
                  { step: '3', title: 'Damage Assessment', desc: 'Our team evaluates the damage and determines tarp coverage needed.' },
                  { step: '4', title: 'Professional Installation', desc: 'Heavy-duty tarps are secured with proper fastening systems.' },
                  { step: '5', title: 'Documentation', desc: 'We photograph and document everything for your insurance claim.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Call */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            When to Call for Emergency Tarping
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Hurricane & Storm Damage',
                desc: 'High winds can tear off shingles, tiles, or entire roof sections. Immediate tarping prevents interior water damage.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: 'Fallen Trees & Debris',
                desc: 'Trees and large debris can puncture or collapse roof sections. We safely tarp around obstacles.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
              {
                title: 'Fire Damage',
                desc: 'After a fire, exposed roof areas need immediate protection from rain and elements.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don&apos;t Wait for More Damage
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Every hour without protection can mean thousands in additional water damage. Call now for emergency tarping.
          </p>
          <a
            href="tel:9542310508"
            className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
          >
            Call (954) 231-0508 Now
          </a>
        </div>
      </section>
    </div>
  );
}
