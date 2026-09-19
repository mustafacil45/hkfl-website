import type { Dict } from './tr';

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdUXscqyML17OXnwAQktTBO6M0wHADs3okxPQWW-Wm9P602YA/viewform';

export const en: Dict = {
  brand: {
    short: 'HKMED',
    full: 'Halil Kale Science High School Alumni Association',
    school: 'Halil Kale Science High School',
  },

  nav: {
    home: 'Home',
    about: 'About Us',
    map: 'Alumni Map',
    contact: 'Contact',
    faq: 'FAQ',
    menuToggle: 'Toggle menu',
    language: 'Language',
  },

  footer: {
    tagline: 'Building the future together with the strength of our past. Our alumni are changing the world.',
    pages: 'Pages',
    contact: 'Contact',
    faq: 'Frequently Asked Questions',
    privacy: 'Privacy Policy',
    rights: '© 2026 Halil Kale Science High School Alumni Association. All rights reserved.',
    address: ['Subaşı, Seyfi Demirsoy Sk. No:45,', '45400 Turgutlu/Manisa, Türkiye'],
  },

  faq: {
    anchor: 'faq',
    label: 'FAQ',
    title: 'Frequently Asked Questions',
    subtitle: 'The most common questions about our association and membership.',
    items: [
      {
        q: 'Who can become a member?',
        a: 'Graduates of Halil Kale Science High School, as well as anyone who studied at the school for at least one academic year, are eligible to join the association. Teachers and staff who have served at Halil Kale Science High School may also become honorary members. Full membership terms will be published on this page once applications open.',
      },
      {
        q: 'How do I apply for membership?',
        a: 'Membership applications will open on our website very soon. Follow our social media accounts to be notified.',
      },
      {
        q: 'How can I appear on the Alumni Map?',
        a: 'The map only shows alumni who have filled in our alumni information form. Complete the form to claim your place on the map.',
        link: { label: 'Alumni Information Form', href: GOOGLE_FORM_URL },
      },
      {
        q: 'Is my personal information visible on the map?',
        a: 'No. In line with Turkish data protection law (KVKK), names and individual employer details are never shown; only city-level statistics are shared.',
      },
      {
        q: 'How can I get in touch with the association?',
        a: 'Use the form on our contact page, e-mail us at iletisim@hkmed.org, or give us a call.',
        link: { label: 'Contact Page', route: 'contact' },
      },
      {
        q: 'How can I keep up with events and announcements?',
        a: 'Follow us on Instagram and LinkedIn to be the first to hear about our events and announcements.',
      },
    ],
  },

  home: {
    hero: {
      imageAlt: 'Halil Kale Science High School',
      title: ['Halil Kale', 'Science High School', 'Alumni Association'],
      subtitle: 'Building the future together with the strength of our past.',
      ctaAbout: 'About Us',
      ctaContact: 'Contact Us',
    },
    stats: {
      alumni: 'Alumni',
      tradition: 'Years of Tradition',
      countries: 'Countries',
    },
    mission: {
      label: 'Our Mission',
      title: 'Building our future together.',
      text: 'As the Halil Kale Science High School Alumni Association, our mission is to remind our alumni how large a family they belong to and to build the future of our school together.',
      features: ['Belonging', 'Strong Alumni Network', 'Career Opportunities', 'Mentoring'],
    },
    cta: {
      soon: 'Coming Soon',
      title: 'Membership Application',
    },
  },

  about: {
    hero: {
      label: 'About Us',
      title: ['Halil Kale Science High School', 'Alumni Association'],
      cardLabel: 'Since 1996',
      cardTitle: '30 Years of Success and Connection',
      cardText: "As proud graduates of Manisa's first science high school, we come together to strengthen the bonds between us and to walk into the future side by side.",
      statAlumni: '1,500+ Alumni',
      statCountries: '20+ Countries',
    },
    mission: {
      title: 'Our Mission',
      text: 'To remind Halil Kale Science High School alumni how large a family they belong to, and to build the future of our school together.',
    },
    vision: {
      title: 'Our Vision',
      text: 'To build a wide, supportive alumni network that contributes to the career and personal development of Halil Kale graduates and creates value for society.',
    },
    history: {
      label: 'Our History',
      titlePre: 'Halil Kale ',
      titleHighlight: 'Science High School',
      text: 'Halil Kale Science High School, the first science high school founded at district level in Türkiye, was built by Turgutlu philanthropist Halil Kale, donated to the Ministry of National Education, and opened its doors in the 1996–1997 academic year.',
    },
    campus: {
      title: 'Campus and Social Life',
      p1: 'Reflecting the educational vision of our school, the campus consists of three buildings: a dormitory, an administration building and a conference hall.',
      p2: 'Alongside clean, safe and well-kept living spaces, fully equipped physics, chemistry and biology laboratories are among the key facilities supporting the quality of education. A basketball court, a volleyball court and an artificial-turf football pitch in the school grounds let students spend their free time actively and socially.',
    },
    photos: [
      { alt: 'Front façade of the Halil Kale Science High School main building', title: 'Main Building', caption: 'Front façade of our school' },
      { alt: 'Close-up view of the main building and school entrance', title: 'Campus Entrance', caption: 'Main building and school entrance' },
      { alt: 'School entrance steps, garden path and flagpole', title: 'School Entrance', caption: 'Entrance steps and garden path' },
      { alt: 'Boys’ dormitory building behind the artificial-turf pitch', title: 'Student Dormitory', caption: 'Boys’ dormitory' },
      { alt: 'Artificial-turf football pitch in the school grounds', title: 'Football Pitch', caption: 'Artificial-turf pitch in the school grounds' },
      { alt: 'School grounds with basketball hoop and flagpole', title: 'School Grounds', caption: 'Basketball court and rest area' },
    ],
    founders: {
      title: 'Founders',
      text: 'The founding members who led the establishment of our association.',
      roles: {
        president: 'President',
        vpOrganization: 'Vice President - Organization',
        vpFinance: 'Vice President - Finance',
        secretary: 'General Secretary',
        alumniRelations: 'Alumni Relations',
        media: 'Media & Communications',
        studentRelations: 'Student Relations',
      },
    },
  },

  map: {
    hero: {
      titlePre: 'Alumni ',
      titleHighlight: 'Map',
      text: 'City-level distribution of Halil Kale Science High School alumni around the world and the sectors they work in.',
    },
    searchPlaceholder: 'Search a country or city...',
    cityCount: (n: number) => `${n} ${n === 1 ? 'city' : 'cities'}`,
    alumniCount: (n: number) => `${n} alumni`,
    alumni: 'Alumni',
    sectors: 'Sectors',
    kvkk1: 'In line with Turkish data protection law (KVKK), only statistical distribution is shared; alumni names and individual employer details are never shown.',
    kvkk2: 'The map only shows alumni who have filled in our alumni information form.',
    countryNames: {
      'Türkiye': 'Türkiye',
      'Almanya': 'Germany',
      'ABD': 'United States',
      'Hollanda': 'Netherlands',
      'İngiltere': 'United Kingdom',
      'İsveç': 'Sweden',
      'İsviçre': 'Switzerland',
      'Polonya': 'Poland',
      'Belçika': 'Belgium',
      'Tanzanya': 'Tanzania',
      'İtalya': 'Italy',
      'Avusturya': 'Austria',
      'Fransa': 'France',
      'Lüksemburg': 'Luxembourg',
      'Kanada': 'Canada',
      'Norveç': 'Norway',
      'Avustralya': 'Australia',
      'Danimarka': 'Denmark',
      'Kıbrıs': 'Cyprus',
    },
    sectorNames: {
      'Sağlık & Tıp': 'Health & Medicine',
      'Mühendislik & Tasarım': 'Engineering & Design',
      'Yazılım & Teknoloji': 'Software & Technology',
      'İdari & İktisadi Bilimler': 'Business & Economics',
      'Eğitim & Temel Bilimler': 'Education & Basic Sciences',
      'Diğer': 'Other',
    },
  },

  contact: {
    hero: {
      label: 'Contact',
      title: 'Get in Touch',
      text: 'We are here for all your questions about membership and sponsorship. Fill in the form or reach us directly by e-mail or phone.',
    },
    info: {
      label: 'Contact Details',
      titlePre: 'Get in ',
      titleHighlight: 'Touch',
      text: 'You can reach us using the details below or by filling in the form.',
      address: 'Address',
      addressLines: ['Subaşı, Seyfi Demirsoy Sk. No:45', '45400 Turgutlu/Manisa, Türkiye'],
      phone: 'Phone',
      email: 'E-mail',
      mapTitle: 'Halil Kale Science High School location',
    },
    form: {
      title: 'Send a Message',
      subtitle: 'Fill in all the fields and we will get back to you as soon as possible.',
      name: 'Full Name',
      namePlaceholder: 'Your full name',
      email: 'E-mail',
      emailPlaceholder: 'example@email.com',
      subject: 'Subject',
      subjectPlaceholder: 'Choose a subject...',
      subjects: ['Event Information', 'Membership Application', 'Sponsorship Proposal', 'Alumni Registration', 'Press & Media', 'Other'],
      message: 'Message',
      messagePlaceholder: 'Write your message here...',
      error: 'Something went wrong. Please try again.',
      sending: 'Sending...',
      submit: 'Send Message',
      successTitle: 'Message Sent!',
      successText: 'We will get back to you as soon as possible.',
    },
  },

  privacy: {
    label: 'Privacy & Policies',
    title: 'Privacy Policy',
    text: 'As the Halil Kale Science High School Alumni Association, we value the privacy of our visitors.',
    sections: [
      {
        title: 'Information and Traffic Data',
        paragraphs: [
          'This website is used solely for information and promotional purposes. Standard server logs and traffic data generated by the technical systems used during your visit may be processed to keep the site secure and to resolve technical issues.',
          'This data is not shared with third parties and is disclosed to competent authorities only where required by law.',
        ],
      },
      {
        title: 'Intellectual Property and Use of Content',
        paragraphs: [
          'The texts, images, logo and other content on this website belong to the Halil Kale Science High School Alumni Association or are used under licence. Unauthorised use, reproduction or distribution of this content may give rise to legal liability.',
        ],
      },
      {
        title: 'Policy Updates',
        paragraphs: [
          'The association reserves the right to amend this Privacy Policy whenever it deems necessary. The current version of the policy is published on this website.',
        ],
      },
    ],
  },

  notFound: {
    title: 'Page Not Found',
    text: 'The page you are looking for does not exist or may have been moved.',
    home: 'Home',
    back: 'Go Back',
  },
};
