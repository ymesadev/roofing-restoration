import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '7 Warning Signs Your Roof Needs Emergency Tarping | Florida Roof Restore',
  description: 'Learn to identify signs of roof damage that require immediate tarping to prevent costly water damage to your home.',
};

export default function BlogPost() {
  return (
    <article>
      {/* Header */}
      <header className="bg-slate-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-orange-400 hover:text-orange-300 text-sm font-medium mb-4 inline-block">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
              Emergency Response
            </span>
            <span className="text-gray-400 text-sm">6 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            7 Warning Signs Your Roof Needs Emergency Tarping After a Storm
          </h1>
          <div className="flex items-center gap-4 text-gray-400">
            <span>December 15, 2025</span>
            <span>•</span>
            <span>By Sarah Chen, Emergency Response Coordinator</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              After a storm passes through, many homeowners aren&apos;t sure whether their roof sustained damage serious enough to warrant emergency tarping. Waiting to find out can be a costly mistake—water damage can begin within hours and worsen exponentially.
            </p>

            <p className="text-gray-700 mb-6">
              Here are the seven warning signs that indicate you need to call for emergency tarping immediately.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Visible Daylight Through Your Roof</h2>
            <p className="text-gray-700 mb-6">
              If you can see daylight coming through your roof from inside your attic, you have an immediate problem. This means there&apos;s a hole or significant gap in your roofing materials, and water will follow the same path light does. Don&apos;t wait for rain to confirm this—call for tarping immediately.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Missing Shingles or Tiles</h2>
            <p className="text-gray-700 mb-6">
              Walk around your property after a storm and look at your roof from ground level. If you can see patches of exposed underlayment (usually black felt paper or synthetic material) where shingles or tiles should be, your roof is vulnerable. Even if it&apos;s not currently raining, the next weather event could cause serious water intrusion.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Active Water Intrusion</h2>
            <p className="text-gray-700 mb-6">
              This one seems obvious, but it&apos;s worth stating: if water is actively coming into your home through the roof or ceiling, you need emergency help immediately. Document the leak with photos and video, then call for emergency tarping. Place buckets to catch water and move valuables away from the affected area.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Warning: Electrical Hazards</h3>
              <p className="text-gray-700">
                If water is leaking near electrical fixtures, outlets, or your electrical panel, turn off power to the affected area at the breaker and call an electrician in addition to a roofing emergency service. Water and electricity are a dangerous combination.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Ceiling Stains or Bubbling</h2>
            <p className="text-gray-700 mb-6">
              New water stains on your ceiling after a storm indicate water is getting through your roof. Similarly, paint that&apos;s bubbling or peeling, or drywall that feels soft or spongy, are signs of water accumulation. Even if you don&apos;t see active dripping, water is present and damage is occurring.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Debris Impact Damage</h2>
            <p className="text-gray-700 mb-6">
              If a tree limb, fence section, or other debris struck your roof during the storm, assume damage until proven otherwise. Impact damage can crack tiles, puncture shingles, or damage the underlying decking even when it&apos;s not immediately visible. The longer this goes unprotected, the greater the risk of water damage.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">6. Sagging or Deformed Roof Sections</h2>
            <p className="text-gray-700 mb-6">
              If any section of your roof appears to be sagging, dipping, or deformed after a storm, this indicates structural damage. This is a serious situation that requires immediate attention—not only for water protection but for safety. Don&apos;t go into your attic to investigate; call professionals immediately.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">7. Damaged Flashing or Vents</h2>
            <p className="text-gray-700 mb-6">
              Check the metal flashing around chimneys, vents, and roof edges. If you can see that flashing has been lifted, bent, or torn away, water has a direct path into your home. Similarly, if roof vents, turbines, or pipe boots appear damaged or displaced, these are entry points for water.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What to Do If You See These Signs</h2>
            <p className="text-gray-700 mb-6">
              If you identify any of these warning signs:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Document everything</strong> with photos and video before any temporary repairs</li>
              <li><strong>Call for emergency tarping</strong> immediately—don&apos;t wait for your insurance company&apos;s approval</li>
              <li><strong>Protect your belongings</strong> by moving them away from affected areas</li>
              <li><strong>Contact your insurance company</strong> to report the damage</li>
              <li><strong>Don&apos;t attempt DIY roof repairs</strong> unless you have proper equipment and training</li>
            </ol>

            <p className="text-gray-700 mb-6">
              Remember: your insurance policy typically covers emergency tarping as part of your claim, and it requires you to take reasonable steps to prevent further damage. Getting a tarp on quickly protects your home and supports your insurance claim.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-slate-900 rounded-2xl p-8 mt-12 text-white">
            <h3 className="text-xl font-bold mb-4">Need Emergency Tarping?</h3>
            <p className="text-gray-300 mb-6">
              Our crews are available 24/7 for emergency response. Call now for immediate assistance.
            </p>
            <a
              href="tel:9542310508"
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Call (954) 231-0508 Now
            </a>
          </div>

          {/* Author */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Sarah Chen</h4>
                <p className="text-gray-600 text-sm">Emergency Response Coordinator at Florida Roof Restore. Sarah manages our 24/7 emergency dispatch team and has coordinated response efforts for major hurricanes including Ian, Irma, and Michael.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
