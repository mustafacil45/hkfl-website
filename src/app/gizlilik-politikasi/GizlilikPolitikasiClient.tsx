'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, RefreshCw } from 'lucide-react';
import { useLang } from '@/i18n/useLang';

const sectionIcons = [Eye, Lock, RefreshCw];

export default function GizlilikPolitikasiClient() {
  const { t } = useLang();
  const p = t.privacy;

  return (
    <>
      {/* ── Page Hero ── */}
      <section
        className="relative pt-36 sm:pt-44 lg:pt-60 pb-20 sm:pb-28 lg:pb-32 overflow-hidden flex items-center min-h-[460px] bg-slate-950"
        style={{ background: 'url("/images/okul-bayrak.jpeg") center/cover no-repeat' }}
      >
        {/* Fotoğraf görünür kalsın diye tek renkli koyu örtü, üstünde beyaz yazı */}
        <div className="absolute inset-0" style={{ background: 'rgba(15, 23, 42, 0.62)' }} />
        <div className="container-custom relative z-10 text-center w-full text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/25 px-4 py-1.5 rounded-md text-xs font-bold uppercase mb-6 max-w-full text-center backdrop-blur-sm">
              <Shield size={14} /> {p.label}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ textShadow: '0 4px 24px rgba(0,0,0,0.45)' }}>
              {p.title}
            </h1>
            <p className="text-gray-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {p.text}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            {p.sections.map((section, i) => {
              const Icon = sectionIcons[i] ?? Shield;
              return (
                <div
                  key={section.title}
                  className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-start shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#0f2342]/10 flex items-center justify-center flex-shrink-0 text-[#0f2342]">
                    <Icon size={22} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-display text-xl font-bold text-gray-950">{section.title}</h3>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
