import type { Metadata } from 'next';
import HakkimizdaClient from './HakkimizdaClient';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Halil Kale Fen Lisesi Mezunlar Derneği (HKMED) hakkında bilgi alın. Misyonumuz, vizyonumuz, kurucularımız ve derneğimizin hikayesi.',
  alternates: {
    canonical: '/hakkimizda',
    languages: { tr: '/hakkimizda', en: '/en/about' },
  },
};

export default function HakkimizdaPage() {
  return <HakkimizdaClient />;
}
