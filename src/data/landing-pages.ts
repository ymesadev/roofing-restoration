export interface LandingPage {
  slug: string;
  headline: string;
  subheading: string;
  bullets: string[];
  testimonials: { name: string; location: string; text: string }[];
}

export const landingPages: LandingPage[] = [
  {
    slug: 'roof-repair',
    headline: 'Expert Roof Repair - Fast, Affordable, Guaranteed',
    subheading: 'Licensed Florida roofers with 15+ years experience. Free inspection, same-day estimates, insurance accepted.',
    bullets: [
      'Free roof inspection and same-day written estimate',
      'Licensed, insured & certified - we handle your insurance claim',
      'Lifetime warranty on workmanship with quality materials',
    ],
    testimonials: [
      { name: 'James R.', location: 'Fort Lauderdale, FL', text: 'They found the leak other companies missed. Fixed it the same day and even helped with our insurance claim. Outstanding service!' },
      { name: 'Patricia M.', location: 'Miami, FL', text: 'After the storm hit, they were here within hours. Professional crew, fair pricing, and the roof looks better than new.' },
    ],
  },
  {
    slug: 'storm-damage',
    headline: 'Storm Damage? We Respond in Hours, Not Days',
    subheading: '24/7 emergency response across Florida. We tarp, repair, and handle your insurance claim from start to finish.',
    bullets: [
      '24/7 emergency dispatch - crews on-site within hours',
      'Emergency tarping to prevent further interior damage',
      'Full insurance claim assistance - we work with all carriers',
    ],
    testimonials: [
      { name: 'Carlos D.', location: 'Orlando, FL', text: 'Hurricane season hit us hard. Florida Roof Restore had our roof tarped the same night and started permanent repairs within a week.' },
      { name: 'Angela W.', location: 'Tampa, FL', text: 'They handled everything with our insurance company. We didn\'t pay a dime out of pocket and our roof is stronger than ever.' },
    ],
  },
  {
    slug: 'roof-tarping',
    headline: 'Emergency Roof Tarping - Available Right Now',
    subheading: 'Stop the damage before it gets worse. Our crews deploy 24/7 across Florida with professional-grade tarping.',
    bullets: [
      'Available 24/7 including holidays and weekends',
      'Professional-grade tarps that withstand 100+ mph winds',
      'Prevents mold, structural damage, and interior water damage',
    ],
    testimonials: [
      { name: 'Robert H.', location: 'Jacksonville, FL', text: 'Called at 2 AM during a storm. They had a crew at our house by 5 AM and the tarp held through everything. Saved our home.' },
      { name: 'Lisa K.', location: 'Miami, FL', text: 'Tree went through our roof during the hurricane. They came out immediately and their tarping protected everything inside until repairs could start.' },
    ],
  },
];

export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return landingPages.find((lp) => lp.slug === slug);
}

export function getAllLandingPageSlugs(): string[] {
  return landingPages.map((lp) => lp.slug);
}
