import type { Metadata } from 'next';
import HaritaClient from './HaritaClient';

export const metadata: Metadata = {
  title: 'Mezun Haritası',
  description: 'Halil Kale Fen Lisesi mezunlarının dünya genelindeki dağılımı, çalıştıkları sektörler ve görev yaptıkları alanlar.',
  alternates: {
    canonical: '/harita',
    languages: { tr: '/harita', en: '/en/alumni-map' },
  },
};

export default function HaritaPage() {
  return <HaritaClient />;
}
