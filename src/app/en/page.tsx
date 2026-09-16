import type { Metadata } from 'next';
import HomeClient from '../HomeClient';
import WebSiteJsonLd from '@/components/WebSiteJsonLd';

export const metadata: Metadata = {
  title: { absolute: 'HKMED | Halil Kale Science High School Alumni Association' },
  description:
    'Official website of the Halil Kale Science High School Alumni Association (HKMED). Events, announcements and a global alumni network.',
  openGraph: { locale: 'en_US', alternateLocale: ['tr_TR'] },
  alternates: {
    canonical: '/en',
    languages: { tr: '/', en: '/en' },
  },
};

export default function HomeEn() {
  return (
    <>
      <WebSiteJsonLd />
      <HomeClient />
    </>
  );
}
