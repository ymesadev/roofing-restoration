import Link from "next/link";
import type { Metadata } from "next";
import { locations, getLocationsByRegion } from "@/data/locations";

export const metadata: Metadata = {
  title: "Service Areas | Roof Restoration in South Florida",
  description:
    "Florida Roof Restore provides emergency tarping, storm damage repair, and roof restoration across South Florida. Serving Miami-Dade, Broward, and Palm Beach counties.",
};

export default function LocationsPage() {
  const locationsByRegion = getLocationsByRegion();
  const regions = Object.keys(locationsByRegion);

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            South Florida Service Areas
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Emergency roof tarping, storm damage repair, and full restoration
            across Miami-Dade, Broward, and Palm Beach counties.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <span className="text-gray-600">Service Locations</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-600">
                  {locations.length} Cities Served
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-600">24/7 Emergency Response</span>
              </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="bg-orange-50 hover:bg-orange-100 text-orange-700 px-3 py-2 rounded-lg text-sm font-medium transition"
                >
                  {location.city}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations by Region */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regions.map((region) => (
            <div key={region} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                {region}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {locationsByRegion[region].map((location) => (
                  <Link
                    key={location.slug}
                    href={`/locations/${location.slug}`}
                    className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition">
                        {location.city}
                      </h3>
                      <span className="text-orange-600 bg-orange-50 px-2 py-1 rounded text-xs font-medium">
                        {location.state}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {location.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {location.neighborhoods.slice(0, 3).map((neighborhood) => (
                        <span
                          key={neighborhood}
                          className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                        >
                          {neighborhood}
                        </span>
                      ))}
                      {location.neighborhoods.length > 3 && (
                        <span className="text-xs text-gray-400">
                          +{location.neighborhoods.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-orange-500 text-sm font-medium group-hover:text-orange-600">
                      View {location.city} Services
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Local */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Local Expertise Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              South Florida&apos;s tri-county area has unique roofing challenges
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Hurricane Experience
              </h3>
              <p className="text-gray-600 text-sm">
                South Florida faces unique hurricane and tropical storm threats.
                We know the damage patterns and how to fix them fast.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Faster Response Times
              </h3>
              <p className="text-gray-600 text-sm">
                Local crews mean faster emergency response. We can be at your
                property within hours, not days.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Local Building Codes
              </h3>
              <p className="text-gray-600 text-sm">
                We know Miami-Dade, Broward, and Palm Beach county building
                codes and permit requirements inside and out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Roof Help in South Florida?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            We serve all of Miami-Dade, Broward, and Palm Beach counties. Call
            for a free inspection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-lg transition shadow-lg hover:bg-gray-100"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:9542310508"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition border border-white/30"
            >
              Call (954) 231-0508
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
