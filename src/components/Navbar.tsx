'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/i18n/useLang';
import LangSwitch from './LangSwitch';

const NAV_KEYS = ['home', 'about', 'map', 'contact'] as const;
type NavKey = (typeof NAV_KEYS)[number];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, href, pathname } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (key: NavKey) => pathname === href(key);

  // Sayfa bağlantıları + İletişim sayfasındaki SSS bölümüne giden çapa (İletişim'den önce).
  const navItems: { key: string; label: string; href: string; active: boolean }[] = NAV_KEYS.map((key) => ({
    key,
    label: t.nav[key],
    href: href(key),
    active: isActive(key),
  }));
  navItems.splice(3, 0, {
    key: 'faq',
    label: t.nav.faq,
    href: `${href('contact')}#${t.faq.anchor}`,
    active: false,
  });

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[1050] backdrop-blur-md border-b transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-white/95 border-gray-200 shadow-md'
          : 'bg-white/85 border-gray-100'
      }`}
    >
      <div className="container-custom flex items-center justify-between gap-4 min-h-[72px]">
        {/* Marka */}
        <Link href={href('home')} className="flex items-center gap-3 min-w-0 group" aria-label={t.brand.full}>
          <span className="w-10 h-10 rounded-full overflow-hidden bg-white ring-1 ring-gray-200 flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpg" alt="" className="w-full h-full object-cover" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block font-bold text-sm tracking-wider text-[#0f2342]">{t.brand.short}</span>
            <span className="hidden sm:block text-[11px] text-gray-500 truncate">{t.brand.full}</span>
          </span>
        </Link>

        {/* Masaüstü menü */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Ana menü">
          {navItems.map(({ key, label, href: to, active }) => {
            return (
              <Link
                key={key}
                href={to}
                aria-current={active ? 'page' : undefined}
                className={`relative py-2 text-sm font-semibold whitespace-nowrap transition-colors hover:text-[#0f2342] ${
                  active ? 'text-[#0f2342]' : 'text-gray-700'
                }`}
              >
                {label}
                {active && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#0f2342] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Sağ: dil + mobil menü düğmesi */}
        <div className="flex items-center gap-2 sm:gap-3">
          <LangSwitch />
          <button
            id="mobile-menu-btn"
            type="button"
            className="md:hidden p-2 -mr-2 text-gray-700 hover:text-[#0f2342] transition-colors"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={t.nav.menuToggle}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobil menü: çubuğun altında tam genişlikte açılır */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-gray-100"
            aria-label="Mobil menü"
          >
            <div className="container-custom py-3 flex flex-col">
              {navItems.map(({ key, label, href: to, active }) => {
                return (
                  <Link
                    key={key}
                    href={to}
                    onClick={() => setMobileOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    className={`py-3 border-b border-gray-50 last:border-0 text-base font-semibold transition-colors hover:text-[#0f2342] ${
                      active ? 'text-[#0f2342]' : 'text-gray-700'
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
