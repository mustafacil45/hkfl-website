'use client';

import { motion } from 'framer-motion';
import { UserPlus } from 'lucide-react';
import { useLang } from '@/i18n/useLang';

const EMAIL = 'iletisim@hkmed.org';

export default function UyelikClient() {
  const { t } = useLang();
  const m = t.membership;

  return (
    <>
      {/* ── Page Hero ── */}
      <section
        className="relative pt-36 sm:pt-44 lg:pt-60 pb-20 sm:pb-28 lg:pb-32 overflow-hidden flex items-center min-h-[460px]"
        style={{ background: 'url("/images/okul-giris.jpeg") center/cover no-repeat' }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(255, 255, 255, 0.92)' }} />
        <div className="container-custom relative z-10 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center justify-center gap-2 bg-[#0f2342]/10 text-[#0f2342] border border-[#0f2342]/20 px-4 py-1.5 rounded-md text-xs font-bold uppercase mb-6 max-w-full text-center">
              <UserPlus size={14} /> {m.hero.label}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              {m.hero.title}
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {m.hero.text}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-2xl mx-auto text-center bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm"
          >
            {/* Site içi yönlendirme değil; form PDF olarak indirilir. */}
            <a href="/uyelik-formu.pdf" download="HKMED-Uyelik-Basvuru-Formu.pdf" className="btn-primary">
              {m.download}
            </a>
            <div className="mt-8 space-y-4 text-left text-gray-700 text-base leading-relaxed">
              <p>
                {m.sendPre}
                <a href={`mailto:${EMAIL}`} className="underline underline-offset-2 hover:text-[#0f2342]">
                  {EMAIL}
                </a>
                {m.sendPost}
              </p>
              {m.notes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
