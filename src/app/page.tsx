import type { Metadata } from 'next';
import HomeClient from './HomeClient';
import WebSiteJsonLd from '@/components/WebSiteJsonLd';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: { tr: '/', en: '/en' },
  },
};

export default function Home() {
  return (
    <>
      <WebSiteJsonLd />
      <HomeClient />
    </>
  );
}
