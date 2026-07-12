import type { Metadata } from 'next';
import GizlilikPolitikasiClient from './GizlilikPolitikasiClient';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | Halil Kale Fen Liseliler Derneği',
  description: 'Halil Kale Fen Liseliler Derneği web sitesi gizlilik politikası ve yasal haklar bildirimi.',
};

export default function GizlilikPolitikasiPage() {
  return <GizlilikPolitikasiClient />;
}
