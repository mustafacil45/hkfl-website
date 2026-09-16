import type { Metadata } from 'next';
import GizlilikPolitikasiClient from '@/app/gizlilik-politikasi/GizlilikPolitikasiClient';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy and legal notice for the Halil Kale Science High School Alumni Association (HKMED) website.',
  openGraph: { locale: 'en_US', alternateLocale: ['tr_TR'] },
  alternates: {
    canonical: '/en/privacy-policy',
    languages: { tr: '/gizlilik-politikasi', en: '/en/privacy-policy' },
  },
};

export default function PrivacyPolicyPage() {
  return <GizlilikPolitikasiClient />;
}
