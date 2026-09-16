import type { Metadata } from 'next';
import HaritaClient from '@/app/harita/HaritaClient';

export const metadata: Metadata = {
  title: 'Alumni Map',
  description: 'Where Halil Kale Science High School alumni live and work around the world, and the sectors they are active in.',
  openGraph: { locale: 'en_US', alternateLocale: ['tr_TR'] },
  alternates: {
    canonical: '/en/alumni-map',
    languages: { tr: '/harita', en: '/en/alumni-map' },
  },
};

export default function AlumniMapPage() {
  return <HaritaClient />;
}
