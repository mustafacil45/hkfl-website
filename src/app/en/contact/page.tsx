import type { Metadata } from 'next';
import IletisimClient from '@/app/iletisim/IletisimClient';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Halil Kale Science High School Alumni Association (HKMED). Address, phone and e-mail, or use our contact form.',
  openGraph: { locale: 'en_US', alternateLocale: ['tr_TR'] },
  alternates: {
    canonical: '/en/contact',
    languages: { tr: '/iletisim', en: '/en/contact' },
  },
};

export default function ContactPage() {
  return <IletisimClient />;
}
