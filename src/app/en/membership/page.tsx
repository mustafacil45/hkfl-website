import type { Metadata } from 'next';
import UyelikClient from '@/app/uyelik/UyelikClient';

export const metadata: Metadata = {
  title: 'Membership',
  description: 'Apply for membership of the Halil Kale Science High School Alumni Association (HKMED). Download the membership form, fill it in, sign it and e-mail it to us.',
  openGraph: { locale: 'en_US', alternateLocale: ['tr_TR'] },
  alternates: {
    canonical: '/en/membership',
    languages: { tr: '/uyelik', en: '/en/membership' },
  },
};

export default function MembershipPage() {
  return <UyelikClient />;
}
