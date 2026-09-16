'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight, MapPin, Mail, Users, Star,
  Briefcase, GraduationCap, Heart,
} from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import { useLang } from '@/i18n/useLang';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const featureIcons = [Users, GraduationCap, Briefcase, Heart];

export default function HomeClient() {
  const { t, href, locale } = useLang();

  const stats = [
    { value: 1500, suffix: '+', label: t.home.stats.alumni, icon: GraduationCap },
    { value: 30, suffix: '+', label: t.home.stats.tradition, icon: Star },
    { value: 20, suffix: '+', label: t.home.stats.countries, icon: MapPin },
  ];

  return (
    <>
      {/* ═══════════════════════════════════════ HERO ═══════════════════════════════════════ */}
      <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt={t.home.hero.imageAlt}
            fill
            /* scale-105: blur kenarlarda saydamlık birakmasin diye tasirilir */
            className="object-cover blur-[3px] scale-105"
            priority
            quality={90}
          />
          {/* Overlay */}
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.58)' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-900 leading-tight mb-4"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
          >
            {t.home.hero.title[0]}<br />
            {t.home.hero.title[1]}<br />
            {t.home.hero.title[2]}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed"
            style={{
              maxWidth: '42rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
            }}
          >
            {t.home.hero.subtitle1}
            <br className="hidden md:block" />
            {' '}{t.home.hero.subtitle2}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center"
          >
            <Link href={href('about')} className="btn-primary">
              {t.home.hero.ctaAbout}
              <ArrowRight size={18} />
            </Link>
            <Link href={href('contact')} className="btn-outline">
              <Mail size={18} />
              {t.home.hero.ctaContact}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ STATS ═══════════════════════════════════════ */}
      <section className="relative z-10" style={{ marginTop: '-4rem' }}>
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto w-full"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow flex flex-col items-center justify-center text-center min-h-[180px] w-full"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: 'rgba(15,35,66,0.08)' }}
                >
                  <stat.icon size={22} style={{ color: '#0f2342' }} />
                </div>
                <div className="stat-number">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} locale={locale} />
                </div>
                <div className="text-gray-500 text-sm font-medium mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ MİSYON ═══════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-label">
                <Heart size={14} />
                {t.home.mission.label}
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {t.home.mission.title1}<br />
                <span className="text-accent">{t.home.mission.title2}</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t.home.mission.text}
              </p>
            </motion.div>

            {/* Öne çıkanlar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {t.home.mission.features.map((text, i) => {
                const Icon = featureIcons[i] ?? Users;
                return (
                  <motion.div
                    key={text}
                    variants={itemVariants}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(15,35,66,0.08)' }}
                    >
                      <Icon size={20} style={{ color: '#0f2342' }} />
                    </div>
                    <span className="text-base font-semibold text-gray-800 leading-snug">{text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ CTA ═══════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden" style={{ background: '#0f2342' }}>
        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              {t.home.cta.title}
            </h2>
            {/* Başvurular açılana kadar düğme tıklanamaz. */}
            <span
              aria-disabled="true"
              className="inline-flex items-center justify-center px-8 py-3.5 min-h-12 rounded-md border-2 border-white/40 text-white/75 font-semibold text-[0.95rem] cursor-not-allowed select-none"
            >
              {t.home.cta.soon}
            </span>
          </motion.div>
        </div>
      </section>
    </>
  );
}
