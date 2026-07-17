'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ChevronDown, ArrowRight, MapPin, Mail, Users, Star,
  Briefcase, GraduationCap, Heart
} from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

const stats = [
  { value: 1500, suffix: '+', label: 'Mezun', icon: GraduationCap },
  { value: 30, suffix: '+', label: 'Yıllık Gelenek', icon: Star },

  { value: 20, suffix: '+', label: "Ülkede Mezun", icon: MapPin },
];



const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════ HERO ═══════════════════════════════════════ */}
      <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Halil Kale Fen Lisesi"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(15,17,23,0.85) 100%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-medium max-w-full text-center"
            style={{ background: 'rgba(15,35,66,0.85)', backdropFilter: 'blur(10px)' }}
          >
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Kuruluş 2026 · Resmi Web Sitesi
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-900 leading-tight mb-4"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
          >
            Halil Kale<br />
            <span style={{ color: '#ffffff' }}>Fen Lisesi</span><br />
            Mezunlar Derneği
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed"
            style={{
              maxWidth: '42rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
            }}
          >
            Geçmişimizin gücüyle geleceği birlikte inşa ediyoruz.
            <br className="hidden md:block" />
            20+ ülkede 1500+ mezunuyla güçlü bir topluluk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center"
          >
            <Link href="/hakkimizda" className="btn-primary">
              Hakkımızda
              <ArrowRight size={18} />
            </Link>
            <Link href="/iletisim" className="btn-outline">
              <Mail size={18} />
              Bize Ulaşın
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
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-500 text-sm font-medium mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ MİSYON ═══════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-label">
                <Heart size={14} />
                Misyonumuz
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Mezunları bir araya<br />
                <span className="text-gradient">getiriyoruz</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Halil Kale Fen Lisesi Mezunlar Derneği olarak amacımız, mezunlarımız arasındaki dayanışmayı güçlendirmek,
                öğrencilerimize destek olmak ve kurumumuzun köklü geleneğini yaşatmaktır.
              </p>
              <p className="text-gray-600 leading-relaxed" style={{ marginBottom: '2.5rem' }}>
                Her mezun, bir ailenin parçasıdır. Bu aile 30 yıldır birbirini destekliyor, birlikte büyüyor
                ve Halil Kale ruhunu yaşatıyor.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ marginTop: '2.5rem' }}>
                {[
                  { icon: Users, text: 'Güçlü Mezun Ağı' },
                  { icon: GraduationCap, text: 'Öğrenci Mentorlüğü' },
                  { icon: Briefcase, text: 'Kariyer Fırsatları' },
                  { icon: Heart, text: 'Toplumsal Sorumluluk' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4 p-5 rounded-xl bg-gray-50">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(15,35,66,0.08)' }}
                    >
                      <item.icon size={20} style={{ color: '#0f2342' }} />
                    </div>
                    <span className="text-base font-semibold text-gray-800 leading-snug">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div
                className="rounded-3xl overflow-hidden min-h-[420px] sm:aspect-square relative flex flex-col justify-center p-6 md:p-12"
                style={{
                  background: 'linear-gradient(135deg, #0f2342 0%, #1e3a8a 100%)',
                }}
              >
                {/* Arka plandaki büyük '30' sayısı (absolute olarak sağ üste sabitlendi ve opaklığı düşürüldü) */}
                <div
                  className="absolute top-4 right-6 font-display font-black opacity-10 select-none pointer-events-none"
                  style={{ fontSize: '140px', lineHeight: 1 }}
                >
                  30
                </div>

                {/* Üst ve Orta İçerik Alanı (Dikeyde ortalamak ve elemanların arasını açmak için flex-col) */}
                <div className="flex flex-col items-center justify-center text-center gap-4 z-10">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm mb-2">
                    <GraduationCap size={40} className="text-white opacity-95" />
                  </div>
                  
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                    1996 – 2026
                  </h3>
                  
                  <p className="text-white/90 leading-relaxed text-sm md:text-base max-w-sm px-2">
                    30 yıllık köklü bir eğitim geleneğinin mirasçıları olarak, bilimi ve insanlığı ön planda tutuyoruz.
                  </p>
                </div>
              </div>

              {/* Dekoratif dış halkalar */}
              <div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20 pointer-events-none"
                style={{ background: '#0f2342' }}
              />
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-10 pointer-events-none"
                style={{ background: '#ffffff' }}
              />
            </motion.div>
          </div>
        </div>
      </section>



      {/* ═══════════════════════════════════════ CTA ═══════════════════════════════════════ */}
      <section className="section-padding gradient-animate relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{ background: 'radial-gradient(circle, white, transparent)', transform: 'translate(30%, -30%)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full"
            style={{ background: 'radial-gradient(circle, white, transparent)', transform: 'translate(-30%, 30%)' }}
          />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Topluluğumuza Katılın
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              1500&apos;den fazla mezunumuzla güçlü bir ağın parçası olun.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdUXscqyML17OXnwAQktTBO6M0wHADs3okxPQWW-Wm9P602YA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              Topluluğa Katılın
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
