import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: { tr: '/', en: '/en' },
  },
};

export default function Home() {
  return <HomeClient />;
}
