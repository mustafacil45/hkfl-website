import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda | Halil Kale Fen Lisesi Mezunlar Derneği',
  description: 'Halil Kale Fen Lisesi Mezunlar Derneği hakkında bilgi alın. Misyonumuz, vizyonumuz, yönetim kurulumuz ve derneğimizin hikayesi.',
};

import HakkimizdaClient from './HakkimizdaClient';

export default function HakkimizdaPage() {
  return <HakkimizdaClient />;
}
