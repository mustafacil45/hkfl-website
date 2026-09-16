import type { Metadata } from 'next';
import GizlilikPolitikasiClient from './GizlilikPolitikasiClient';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: 'Halil Kale Fen Lisesi Mezunlar Derneği (HKMED) web sitesi gizlilik politikası ve yasal haklar bildirimi.',
  alternates: {
    canonical: '/gizlilik-politikasi',
    languages: { tr: '/gizlilik-politikasi', en: '/en/privacy-policy' },
  },
};

export default function GizlilikPolitikasiPage() {
  return <GizlilikPolitikasiClient />;
}
