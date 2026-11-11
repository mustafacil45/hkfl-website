import type { Metadata } from 'next';
import DuyurularClient from '@/app/duyurular/DuyurularClient';

export const metadata: Metadata = {
  title: 'Announcements',
  description: 'Announcements from the Halil Kale Science High School Alumni Association (HKMED): general assembly notices, meetings and events.',
  openGraph: { locale: 'en_US', alternateLocale: ['tr_TR'] },
  alternates: {
    canonical: '/en/announcements',
    languages: { tr: '/duyurular', en: '/en/announcements' },
  },
};

export default function AnnouncementsPage() {
  return <DuyurularClient />;
}
