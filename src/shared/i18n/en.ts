export const en = {
  tagline: 'Law Firm',
  nav: { home: 'Home', services: 'Practice', team: 'Team', contacts: 'Contacts' },
  hero: {
    kicker: 'International Law Firm',
    title: 'Legal strategy for businesses and individuals worldwide',
    text: 'We protect your interests in court, negotiations and cross-border transactions — with precision, discretion and results.',
    cta1: 'Book a consultation',
    cta2: 'Our practice areas',
  },
  about: { label: 'About the firm', text: 'We are attorneys who treat every case as our own. Local expertise, international outlook and a simple promise: honest advice, strong strategy, real results for our clients.' },
  stats: [
    { value: '15+', label: 'Years of experience' },
    { value: '1,200+', label: 'Cases handled' },
    { value: '20+', label: 'Jurisdictions covered' },
    { value: '24/7', label: 'Client support' },
  ],
  practice: { title: 'Practice areas', lead: 'Comprehensive legal support across the areas that matter most to our clients.' },
  areas: [
    { icon: 'briefcase', title: 'Corporate & M&A', text: 'Company formation, governance, mergers, acquisitions and shareholder disputes.' },
    { icon: 'scale', title: 'Litigation & Arbitration', text: 'Representation before state courts and international arbitration tribunals.' },
    { icon: 'shield', title: 'Criminal Defense', text: 'Strategic defense at every stage — investigation, trial and appeal.' },
    { icon: 'globe', title: 'International Law', text: 'Cross-border contracts, foreign investment and sanctions compliance.' },
    { icon: 'home', title: 'Real Estate', text: 'Due diligence, transactions, land disputes and development projects.' },
    { icon: 'percent', title: 'Tax & Customs', text: 'Tax planning, audits and disputes with regulatory authorities.' },
  ],
  why: {
    title: 'Why Gulyamov and Partners',
    lead: 'A boutique firm with the standards of a global practice.',
    items: [
      { title: 'Senior-led teams', text: 'Every matter is overseen personally by a partner.' },
      { title: 'Confidentiality', text: 'Attorney–client privilege and strict data protection.' },
      { title: 'Multilingual', text: 'We work in English, Russian and Uzbek.' },
      { title: 'Transparent fees', text: 'Clear scope and pricing agreed upfront.' },
    ],
  },
  process: {
    title: 'How we work',
    lead: 'A clear process from first call to final result.',
    steps: [
      { title: 'Consultation', text: 'We listen, assess risks and outline options.' },
      { title: 'Strategy', text: 'A tailored plan with timeline and budget.' },
      { title: 'Execution', text: 'Our team acts on your behalf at every stage.' },
      { title: 'Result', text: 'Regular reporting until the matter is closed.' },
    ],
  },
  team: {
    title: 'Our team',
    lead: 'Attorneys and partners with deep expertise.',
    members: [
      { name: 'A. Gulyamov', role: 'Managing Partner', bio: 'Corporate and dispute resolution practice.' },
      { name: 'Partner', role: 'Partner, Criminal Defense', bio: 'Defense in complex criminal proceedings.' },
      { name: 'Partner', role: 'Partner, Civil & Real Estate', bio: 'Property transactions and civil disputes.' },
    ],
  },
  cta: { title: 'Need legal advice?', text: 'Tell us about your situation — your first consultation is confidential.', button: 'Contact us' },
  contact: {
    title: 'Contact us',
    lead: 'We usually reply within one business day.',
    name: 'Full name',
    phone: 'Phone or email',
    message: 'Briefly describe your matter',
    send: 'Send request',
    ok: 'Thank you! We will get back to you shortly.',
    address: 'Tashkent, Uzbekistan',
    hours: 'Mon–Fri, 09:00–18:00',
  },
  footer: { rights: 'All rights reserved.', disclaimer: 'Information on this website does not constitute legal advice.' },
};

export type Dictionary = typeof en;
