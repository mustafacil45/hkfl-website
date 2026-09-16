'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { useLang } from '@/i18n/useLang';

export default function NotFound() {
  const { t, href } = useLang();

  return (
    <section
      className="min-h-screen flex items-center justify-center"
      style={{ background: '#0f1117' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-white px-6"
      >
        <div
          className="font-display font-black mb-4 opacity-10 select-none"
          style={{ fontSize: '180px', lineHeight: 1, color: '#ffffff' }}
        >
          404
        </div>
        <h1 className="font-display text-4xl font-bold mb-4" style={{ marginTop: '-60px' }}>
          {t.notFound.title}
        </h1>
        <p className="text-gray-400 mb-8 max-w-sm mx-auto">
          {t.notFound.text}
        </p>
        <div className="flex gap-4 justify-center">
          <Link href={href('home')} className="btn-primary">
            <Home size={16} />
            {t.notFound.home}
          </Link>
          <button
            onClick={() => history.back()}
            className="btn-outline"
          >
            <ArrowLeft size={16} />
            {t.notFound.back}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
