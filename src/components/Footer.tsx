'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';


const SocialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/hkflmezunlar?igsh=OGloamR4cGljeWU1',
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/groups/16196087/',
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0f1117' }} className="text-white">
      {/* Top border gradient */}
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #0284c7, #38bdf8, #0284c7)' }} />

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0284c7] flex items-center justify-center font-bold text-sm">
                HKFL
              </div>
              <div>
                <div className="font-bold text-sm leading-tight">HKFL Derneği</div>
                <div className="text-xs text-gray-400">Halil Kale Fen Liseliler</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Geçmişimizin gücüyle geleceği birlikte inşa ediyoruz. Mezunlarımız dünyayı değiştiriyor.
            </p>
            <div className="flex gap-3 mt-5">
              {SocialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.07)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#0284c7')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Hızlı Bağlantılar */}
          <div>
            <h4 className="font-semibold text-sm mb-5 text-gray-200 uppercase tracking-wider">Sayfalar</h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Ana Sayfa' },
                { href: '/hakkimizda', label: 'Hakkımızda' },
                { href: '/harita', label: 'Mezun Haritası' },
                { href: '/iletisim', label: 'İletişim' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0284c7] group-hover:w-2 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="font-semibold text-sm mb-5 text-gray-200 uppercase tracking-wider">İletişim</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#0284c7] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Subaşı, Seyfi Demirsoy Sk. No:45,<br />45400 Turgutlu/Manisa</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#0284c7] flex-shrink-0" />
                <a href="tel:+905392459454" className="text-gray-400 text-sm hover:text-white transition-colors">
                  +90 (539) 245 94 54
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#0284c7] flex-shrink-0" />
                <a href="mailto:iletisim@hkmed.org" className="text-gray-400 text-sm hover:text-white transition-colors">
                  iletisim@hkmed.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-gray-500 text-sm">
            © 2026 Halil Kale Fen Lisesi Mezunlar Derneği. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">
              Gizlilik Politikası
            </Link>
            <span>•</span>
            <div className="flex items-center gap-2">
              <ExternalLink size={12} />
              <a href="https://halilkalefenliler.org" className="hover:text-white transition-colors">
                halilkalefenliler.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
