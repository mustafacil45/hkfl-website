'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Users, Globe, Target, Eye, Award, Star, Handshake, Briefcase,
  Landmark, Building2, HeartHandshake, Sparkles,
} from 'lucide-react';
import type { Dict } from '@/i18n';
import { useLang } from '@/i18n/useLang';

type RoleKey = keyof Dict['about']['founders']['roles'];

// Sıralama, yönetim kurulu listesindeki üye numaralarını (01–07) izler.
const boardMembers: { name: string; role: RoleKey; year: string }[] = [
  { name: 'Haktan Badalı', role: 'president', year: "HKFL '22" },
  { name: 'Arif Burhan Kahya', role: 'vpOrganization', year: "HKFL '22" },
  { name: 'Oğuzhan Yazar', role: 'vpFinance', year: "HKFL '24" },
  { name: 'Mustafa Sayar', role: 'secretary', year: "HKFL '24" },
  { name: 'Mustafa Çil', role: 'alumniRelations', year: "HKFL '22" },
  { name: 'Berke Yardımcı', role: 'media', year: "HKFL '22" },
  { name: 'Bahadır Yılmaz', role: 'studentRelations', year: "HKFL '24" },
];

const campusPhotoSrcs = [
  '/images/okul-ana-bina.jpeg',
  '/images/pansiyon-hali-saha.jpeg',
  '/images/okul-cephe.jpeg',
];

const valueIcons = [Star, Handshake, Briefcase, Users];
const cultureIcons = [Target, HeartHandshake, Sparkles];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function HakkimizdaClient() {
  const { t } = useLang();
  const a = t.about;

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative pt-36 sm:pt-44 lg:pt-60 pb-20 sm:pb-28 lg:pb-32 overflow-hidden flex items-center min-h-[560px] lg:min-h-[650px] bg-slate-950">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-bg.png"
            alt={t.brand.school}
            className="w-full h-full object-cover opacity-25"
          />
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(2, 132, 199, 0.45) 100%)',
            }}
          />
        </div>

        <div className="container-custom relative z-10 text-white w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-left"
            >
              <div className="text-slate-300 font-bold text-xs uppercase tracking-wider mb-3">
                {a.hero.label}
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-white">{a.hero.title[0]}</span>
                <br />
                <span className="text-white">{a.hero.title[1]}</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
                {a.hero.text}
              </p>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="bg-black/45 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center min-h-[320px] lg:min-h-[350px] w-full max-w-lg">
                <div className="text-slate-300 font-semibold text-xs uppercase tracking-wider mb-2">
                  {a.hero.cardLabel}
                </div>
                <h3 className="text-white font-display text-xl sm:text-2xl font-bold mb-4">{a.hero.cardTitle}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {a.hero.cardText}
                </p>
                <div className="flex items-center justify-center gap-6 text-slate-300 text-sm font-semibold min-w-0">
                  <span className="flex items-center gap-1.5"><Users size={16} className="text-white" /> {a.hero.statAlumni}</span>
                  <span className="flex items-center gap-1.5"><Globe size={16} className="text-white" /> {a.hero.statCountries}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Misyon & Vizyon ── */}
      <section className="pt-36 pb-16">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {[
              { icon: Target, ...a.mission },
              { icon: Eye, ...a.vision },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="rounded-3xl p-8 md:p-10 flex flex-col justify-center items-start border border-slate-100 shadow-sm min-h-[260px] relative overflow-hidden group hover:shadow-md transition-shadow"
                style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)' }}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0f2342]/10 flex items-center justify-center mb-5 flex-shrink-0 text-[#0f2342]">
                  <card.icon size={22} />
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-950 mb-3 text-left">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed text-left">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Değerlerimiz ── */}
      <section className="bg-gray-50/50 py-20 border-t border-gray-100">
        <div className="container-custom max-w-7xl mx-auto px-6">
          {/* Başlık Alanı */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f2342]/10 text-[#0f2342] text-xs font-bold tracking-wide uppercase mb-3">
              <Award size={14} /> {a.values.label}
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
              {a.values.titlePre}<span className="text-gradient">{a.values.titleHighlight}</span>{a.values.titlePost}
            </h2>
          </motion.div>

          {/* 4'lü Değerler Grid'i */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          >
            {a.values.items.map((val, i) => {
              const Icon = valueIcons[i] ?? Star;
              return (
                <motion.div
                  key={val.title}
                  variants={itemVariants}
                  className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between items-center text-center shadow-sm hover:shadow-md transition-all min-h-[220px]"
                >
                  {/* Üst kısım: İkon ve Başlık */}
                  <div className="flex flex-col items-center flex-grow justify-start w-full">
                    <div className="w-11 h-11 rounded-xl bg-[#0f2342]/10 flex items-center justify-center mb-4 text-[#0f2342] flex-shrink-0">
                      <Icon size={20} />
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">{val.title}</h4>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-[200px] mx-auto">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Tarihçe ── */}
      <section className="py-24 border-t border-gray-100">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Sol Taraf: Tarihçe */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f2342]/10 text-[#0f2342] text-xs font-bold tracking-wide uppercase mb-4">
                  <Landmark size={14} /> {a.history.label}
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                  {a.history.titlePre}<span className="text-gradient">{a.history.titleHighlight}</span>
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {a.history.text}
                </p>
              </motion.div>
            </div>

            {/* Sağ Taraf: Kampüs Bilgileri */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-8 space-y-6"
              >
                <h3 className="font-display text-xl font-bold text-gray-900 flex items-center gap-2.5">
                  <span className="w-9 h-9 rounded-xl bg-[#0f2342]/10 text-[#0f2342] flex items-center justify-center flex-shrink-0">
                    <Building2 size={18} />
                  </span>
                  {a.campus.title}
                </h3>
                <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
                  <p>{a.campus.p1}</p>
                  <p>{a.campus.p2}</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Kampüs Fotoğrafları */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {campusPhotoSrcs.map((src, i) => {
              const photo = a.photos[i];
              return (
                <motion.figure
                  key={src}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-[4/3] bg-slate-100">
                    <Image
                      src={src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  </div>
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <div className="font-display text-base font-bold text-white">{photo.title}</div>
                    <div className="mt-0.5 text-xs text-white/75">{photo.caption}</div>
                  </figcaption>
                </motion.figure>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Eğitim Kültürü ve Amacımız ── */}
      <section className="bg-slate-50/60 py-24 border-t border-b border-slate-100">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {a.culture.map((card, i) => {
              const Icon = cultureIcons[i] ?? Target;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#0f2342]/10 text-[#0f2342] flex items-center justify-center mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Kurucular ── */}
      <section className="section-padding" style={{ background: '#0f1117' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-4xl font-bold text-white">
              {a.founders.title}
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              {a.founders.text}
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {boardMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="rounded-xl p-5 text-left flex flex-col transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-black/10"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderLeft: '4px solid #ffffff',
                }}
              >
                <h3 className="font-semibold text-white mb-1.5 leading-snug text-base sm:text-lg">{member.name}</h3>
                <p className="text-gray-400 text-sm leading-snug mb-4">{a.founders.roles[member.role]}</p>
                {/* mt-auto: gorevler farkli uzunlukta, rozetler yine de ayni hizada dursun */}
                <span
                  className="inline-block self-start mt-auto text-xs font-bold tracking-wider px-2.5 py-0.5 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.08)', color: '#ffffff' }}
                >
                  {member.year}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
