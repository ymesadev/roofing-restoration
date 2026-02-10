import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Florida Roof Restore',
  description: 'Contact Florida Roof Restore for emergency roof tarping, storm damage repair, and restoration services. 24/7 emergency response available.',
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300">
              Need roof help? We&apos;re here 24/7 for emergencies and ready to schedule your free estimate. Reach out today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Request a Free Estimate</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700 mb-2">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    inputMode="numeric"
                    pattern="[0-9]{5}"
                    maxLength={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  >
                    <option value="">Select a service</option>
                    <option value="emergency-tarping">Emergency Roof Tarping</option>
                    <option value="storm-damage">Storm Damage Repair</option>
                    <option value="leak-repair">Roof Leak Repair</option>
                    <option value="insurance-claim">Insurance Claim Help</option>
                    <option value="inspection">Roof Inspection</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell Us About Your Roof Issue
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition resize-none"
                  ></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="emergency"
                    name="emergency"
                    className="mt-1 h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <label htmlFor="emergency" className="text-sm text-gray-600">
                    This is an emergency requiring immediate attention
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="optin"
                    name="optin"
                    defaultChecked
                    className="mt-1 h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <label htmlFor="optin" className="text-sm text-gray-600">
                    I agree to receive text messages and calls regarding my inquiry. Message and data rates may apply.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
                >
                  Submit Request
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-slate-900 rounded-2xl p-8 text-white mb-8">
                <h3 className="text-xl font-bold mb-4">24/7 Emergency Line</h3>
                <p className="text-gray-300 mb-4">
                  Roof emergency? Don&apos;t wait—call us now. Our crews are standing by around the clock.
                </p>
                <a
                  href="tel:9542310508"
                  className="inline-flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-lg font-semibold text-lg transition"
                >
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (954) 231-0508
                </a>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900">Other Ways to Reach Us</h3>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <a href="mailto:info@floridaroofrestore.com" className="text-orange-500 hover:text-orange-600 transition">
                      info@floridaroofrestore.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Business Hours</h4>
                    <p className="text-gray-600">Mon-Fri: 7am - 7pm<br/>Sat: 8am - 5pm<br/>Sun: Emergency Only</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-slate-900 mb-2">Service Areas</h4>
                <p className="text-gray-600 text-sm">
                  We serve all of Florida including Miami, Tampa, Orlando, Jacksonville, Fort Lauderdale, and surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
