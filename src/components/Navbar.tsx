'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/harita', label: 'Mezun Haritası' },
  { href: '/iletisim', label: 'İletişim' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className={`fixed left-1/2 -translate-x-1/2 z-[1050] transition-all duration-300 w-[calc(100%-2rem)] md:w-auto ${scrolled ? 'top-2' : 'top-4'}`}>
        <nav className="bg-white/90 backdrop-blur-md shadow-lg rounded-full border border-white/20 px-6 md:px-8 py-3 relative flex items-center justify-center min-h-[72px] w-full">

          {/* ORTA ALAN: TAM ORTALANMIŞ MENÜ */}
          <div className="hidden md:flex items-center justify-center gap-8 z-20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold relative py-2 transition-all duration-300 text-gray-700 hover:text-[#db1a22] whitespace-nowrap ${pathname === link.href ? 'text-[#db1a22]' : ''
                  }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#db1a22] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* SAĞ ALAN: Mobil Menü Butonu (absolute ile hizalandı) */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 md:hidden">
            <button
              id="mobile-menu-btn"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menüyü aç/kapat"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </nav>
      </div>

      {/* Mobil Menü Alanı (Aynen Korundu) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-24 z-[1040] bg-white/95 backdrop-blur-md shadow-2xl rounded-3xl border border-gray-100 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base font-semibold py-2 border-b border-gray-50 text-gray-700 hover:text-[#db1a22] transition-colors ${pathname === link.href ? 'text-[#db1a22]' : ''
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}