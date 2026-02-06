import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What to Do After a Storm Damages Your Roof | Florida Roof Restore',
  description: 'Step-by-step action plan for the first 24 hours after storm damage to your roof. Protect your home and your insurance claim.',
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
            What to Do in the First 24 Hours After a Storm Damages Your Roof
          </h1>
          <div className="flex items-center gap-4 text-gray-400">
            <span>October 22, 2025</span>
            <span>•</span>
            <span>By Emergency Response Team</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The storm has passed, and you think your roof may be damaged. The actions you take in the next 24 hours will significantly impact your insurance claim and how much additional damage your home sustains. Here&apos;s exactly what to do.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Immediately: Ensure Safety First</h2>
            <p className="text-gray-700 mb-6">
              Before assessing any damage:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Wait until the storm has fully passed</strong>—don&apos;t go outside during lightning or while winds are still dangerous</li>
              <li><strong>Watch for downed power lines</strong> near your home or in your yard</li>
              <li><strong>Check for gas leaks</strong> if you smell gas, leave immediately and call 911</li>
              <li><strong>Be careful of standing water</strong> which may hide hazards or be electrically charged</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Step 1: Document Everything (Hour 1-2)</h2>
            <p className="text-gray-700 mb-6">
              Documentation is critical for your insurance claim. Before moving anything or making repairs:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Take photos and video</strong> of all damage from multiple angles</li>
              <li><strong>Include wide shots</strong> showing the overall damage and close-ups of specifics</li>
              <li><strong>Photograph interior damage</strong> including water stains, leaks, and damaged belongings</li>
              <li><strong>Document debris</strong> on the ground (fallen shingles, branches, etc.)</li>
              <li><strong>Note the date and time</strong> on your photos or in notes</li>
              <li><strong>Save damaged materials</strong> if possible—don&apos;t throw away broken shingles or tiles</li>
            </ul>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Pro Tip: Video Walkthrough</h3>
              <p className="text-gray-700">
                Take a video walking around your entire property, narrating what you see. This provides context that photos alone cannot and creates a timestamped record of the damage.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Step 2: Prevent Further Damage (Hours 2-4)</h2>
            <p className="text-gray-700 mb-6">
              Your insurance policy requires you to take reasonable steps to prevent additional damage. This is called &quot;mitigating further loss.&quot;
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Call for emergency tarping</strong> if your roof is exposed</li>
              <li><strong>Move furniture and belongings</strong> away from leak areas</li>
              <li><strong>Place buckets or containers</strong> to catch water</li>
              <li><strong>Cover furniture with plastic</strong> if necessary</li>
              <li><strong>Turn off electricity</strong> to affected areas if water is near electrical fixtures</li>
            </ul>
            <p className="text-gray-700 mb-6">
              <strong>Important:</strong> Don&apos;t make permanent repairs yet—only temporary protection. Document all emergency measures with photos.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Step 3: Contact Your Insurance Company (Hours 4-8)</h2>
            <p className="text-gray-700 mb-6">
              Report the damage to your insurance company as soon as possible:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Have your policy number ready</li>
              <li>Provide a general description of the damage</li>
              <li>Ask about the claims process and timeline</li>
              <li>Get your claim number and adjuster&apos;s contact info</li>
              <li>Ask about coverage for emergency repairs/tarping</li>
              <li>Document who you spoke with, when, and what was said</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Step 4: Contact a Roofing Professional (Hours 8-12)</h2>
            <p className="text-gray-700 mb-6">
              Even if you&apos;ve already arranged emergency tarping, contact a reputable roofing contractor for a full inspection:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Get a professional assessment of all damage</li>
              <li>Request a detailed written estimate</li>
              <li>Ask them to be present when the insurance adjuster visits</li>
              <li>Ensure they&apos;re licensed and insured in Florida</li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Warning: Storm Chasers</h3>
              <p className="text-gray-700">
                After major storms, out-of-state contractors often flood affected areas. Be cautious of anyone who shows up uninvited, asks for large upfront payments, or pressures you to sign contracts immediately. Work with established local companies with verifiable track records.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Step 5: Keep Records (Ongoing)</h2>
            <p className="text-gray-700 mb-6">
              From this point forward, document everything related to your claim:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Keep receipts for all emergency repairs and temporary measures</li>
              <li>Log all phone calls with insurance (date, time, person, summary)</li>
              <li>Save all emails and written correspondence</li>
              <li>Keep copies of all estimates and reports</li>
              <li>Document any temporary living expenses if you had to leave your home</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What NOT to Do</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Don&apos;t make permanent repairs</strong> before the adjuster inspects</li>
              <li><strong>Don&apos;t throw away damaged materials</strong> without documenting them</li>
              <li><strong>Don&apos;t sign contracts</strong> under pressure from anyone</li>
              <li><strong>Don&apos;t climb on your roof</strong> unless you have proper equipment and training</li>
              <li><strong>Don&apos;t wait</strong> to report the damage to your insurance company</li>
              <li><strong>Don&apos;t accept the first insurance offer</strong> without reviewing it carefully</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">24-Hour Action Checklist</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <ul className="space-y-3">
                {[
                  'Safety check complete',
                  'Photos and video documentation complete',
                  'Emergency tarping scheduled or complete',
                  'Belongings moved away from affected areas',
                  'Insurance company notified',
                  'Claim number received',
                  'Roofing contractor contacted for inspection',
                  'Records file started',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-slate-900 rounded-2xl p-8 mt-12 text-white">
            <h3 className="text-xl font-bold mb-4">Storm Damage? We&apos;re Here to Help.</h3>
            <p className="text-gray-300 mb-6">
              Our emergency response team is available 24/7. Call now for immediate tarping and inspection services.
            </p>
            <a
              href="tel:9542310508"
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Call (954) 231-0508
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
                <h4 className="font-semibold text-slate-900">Florida Roof Restore Emergency Response Team</h4>
                <p className="text-gray-600 text-sm">Our emergency response team has coordinated storm damage response for thousands of Florida homeowners. This guide represents our collective experience helping families protect their homes after hurricanes, tropical storms, and severe weather events.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
