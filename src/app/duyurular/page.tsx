import type { Metadata } from 'next';
import DuyurularClient from './DuyurularClient';

export const metadata: Metadata = {
  title: 'Duyurular',
  description: 'Halil Kale Fen Lisesi Mezunlar Derneği (HKMED) duyuruları: genel kurul çağrıları, toplantılar ve etkinlikler.',
  alternates: {
    canonical: '/duyurular',
    languages: { tr: '/duyurular', en: '/en/announcements' },
  },
};

export default function DuyurularPage() {
  return <DuyurularClient />;
}
