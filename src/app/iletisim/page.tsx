import type { Metadata } from 'next';
import IletisimClient from './IletisimClient';

export const metadata: Metadata = {
  title: 'İletişim | Halil Kale Fen Liseliler Derneği',
  description: 'Halil Kale Fen Liseliler Derneği ile iletişime geçin. Adres, telefon ve e-posta bilgilerimizi bulun ya da iletişim formumuzu kullanın.',
};

export default function IletisimPage() {
  return <IletisimClient />;
}
