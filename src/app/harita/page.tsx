import type { Metadata } from 'next';
import HaritaClient from './HaritaClient';

export const metadata: Metadata = {
  title: 'Mezun Haritası | Halil Kale Fen Lisesi Mezunlar Derneği',
  description: 'Halil Kale Fen Lisesi mezunlarının dünya genelindeki dağılımı, çalıştıkları sektörler ve görev yaptıkları alanlar.',
};

export default function HaritaPage() {
  return <HaritaClient />;
}
