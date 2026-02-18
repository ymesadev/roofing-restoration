import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getLocationBySlug,
  getAllLocationSlugs,
  locations,
} from "@/data/locations";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return { title: "Location Not Found" };
  return {
    title: `Roof Restoration ${location.city} | Emergency Tarping & Storm Damage Repair`,
    description: `${location.city} roof restoration services. 24/7 emergency tarping, hurricane damage repair, and leak repairs. Serving ${location.region}. Licensed and insured.`,
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const relatedLocations = locations
    .filter((l) => l.region === location.region && l.slug !== location.slug)
    .slice(0, 4);

  const services = [
    {
      title: "Emergency Roof Tarping",
      desc: "Rapid response tarping to protect your home after storm damage. We arrive within hours.",
      href: "/services/roof-tarping",
    },
    {
      title: "Hurricane Damage Repair",
      desc: "Complete restoration after hurricane and tropical storm damage. Insurance claim assistance included.",
      href: "/services/storm-damage",
    },
    {
      title: "Roof Leak Repair",
      desc: "Fast leak detection and repair to stop water damage before it spreads.",
      href: "/services/leak-repair",
    },
    {
      title: "Insurance Claims Help",
      desc: "We work with your insurance company to document damage and maximize your claim.",
      href: "/services/insurance-claims",
    },
    {
      title: "Roof Inspections",
      desc: "Comprehensive inspections for storm damage, pre-purchase, or annual maintenance.",
      href: "/services/inspection",
    },
    {
      title: "Tile & Shingle Repair",
      desc: "Expert repair of all roofing materials common to South Florida homes.",
      href: "/contact",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
              </svg>
              {location.city}, FL
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {location.city} Roof Restoration Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {location.description}
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
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Our {location.city} Roofing Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition group"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-orange-500 transition">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why {location.city} Homeowners Choose Us
              </h2>
              <ul className="space-y-3">
                {location.highlights.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-orange-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Areas We Serve in {location.city}
              </h3>
              <div className="grid grid-cols-2 gap-2 text-gray-600">
                {location.neighborhoods.map((area, i) => (
                  <span key={i} className="text-sm">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Roofing Challenges in {location.city}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {location.challenges.map((challenge, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-gray-50 rounded-xl p-6"
              >
                <svg
                  className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
                <p className="text-gray-700">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Locations */}
      {relatedLocations.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Other {location.region} Locations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition group text-center"
                >
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-orange-500 transition">
                    {loc.city}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{loc.region}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Roof Help in {location.city}?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            From emergency tarping to complete restoration, we&apos;re here for{" "}
            {location.city} homeowners 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
            >
              Get Free Estimate
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
