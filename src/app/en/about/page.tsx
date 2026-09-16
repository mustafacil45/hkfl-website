import type { Metadata } from 'next';
import HakkimizdaClient from '@/app/hakkimizda/HakkimizdaClient';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the Halil Kale Science High School Alumni Association (HKMED): our mission, vision, founders and story.',
  openGraph: { locale: 'en_US', alternateLocale: ['tr_TR'] },
  alternates: {
    canonical: '/en/about',
    languages: { tr: '/hakkimizda', en: '/en/about' },
  },
};

export default function AboutPage() {
  return <HakkimizdaClient />;
}
