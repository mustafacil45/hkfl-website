'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, CircleHelp } from 'lucide-react';
import type { FaqItem } from '@/i18n';
import { useLang } from '@/i18n/useLang';

function FaqLink({ link }: { link: NonNullable<FaqItem['link']> }) {
  const { href } = useLang();
  const cls = 'inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-[#0f2342] hover:underline';
  if (link.route) {
    return (
      <Link href={href(link.route)} className={cls}>
        {link.label} <ArrowRight size={14} />
      </Link>
    );
  }
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={cls}>
      {link.label} <ArrowRight size={14} />
    </a>
  );
}

export default function FaqSection() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  const faq = t.faq;

  return (
    <section id={faq.anchor} className="section-padding bg-slate-50/60 border-y border-slate-100 scroll-mt-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="section-label">
            <CircleHelp size={14} />
            {faq.label}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-3">{faq.title}</h2>
          <p className="text-gray-500 max-w-xl mx-auto">{faq.subtitle}</p>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faq.items.map((item, i) => {
            const expanded = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  id={`faq-btn-${i}`}
                  aria-expanded={expanded}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(expanded ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
                >
                  <span className="font-semibold text-gray-900">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-[#0f2342] transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-gray-600 text-sm md:text-base leading-relaxed">
                        <p>{item.a}</p>
                        {item.link && <FaqLink link={item.link} />}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
