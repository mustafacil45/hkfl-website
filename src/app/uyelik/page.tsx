import type { Metadata } from 'next';
import UyelikClient from './UyelikClient';

export const metadata: Metadata = {
  title: 'Üyelik',
  description: 'Halil Kale Fen Lisesi Mezunlar Derneği (HKMED) üyelik başvurusu. Üyelik formunu indirin, doldurup imzalayın ve e-posta ile bize gönderin.',
  alternates: {
    canonical: '/uyelik',
    languages: { tr: '/uyelik', en: '/en/membership' },
  },
};

export default function UyelikPage() {
  return <UyelikClient />;
}
