import type { Metadata } from 'next';
import IletisimClient from './IletisimClient';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Halil Kale Fen Lisesi Mezunlar Derneği (HKMED) ile iletişime geçin. Adres, telefon ve e-posta bilgilerimizi bulun ya da iletişim formumuzu kullanın.',
  alternates: {
    canonical: '/iletisim',
    languages: { tr: '/iletisim', en: '/en/contact' },
  },
};

export default function IletisimPage() {
  return <IletisimClient />;
}
