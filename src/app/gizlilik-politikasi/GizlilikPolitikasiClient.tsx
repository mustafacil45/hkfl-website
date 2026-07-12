'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, RefreshCw } from 'lucide-react';

export default function GizlilikPolitikasiClient() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section
        className="relative pt-36 sm:pt-44 lg:pt-60 pb-20 sm:pb-28 lg:pb-32 overflow-hidden flex items-center min-h-[400px]"
        style={{
          background: 'linear-gradient(rgba(255, 255, 255, 0.88), rgba(248, 249, 250, 0.96)), url("/archive-bg.png") center/cover no-repeat',
        }}
      >
        <div className="container-custom relative z-10 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center justify-center gap-2 bg-[#0284c7]/10 text-[#0284c7] border border-[#0284c7]/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase mb-6 max-w-full text-center">
              <Shield size={14} /> GİZLİLİK VE POLİTİKALAR
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Gizlilik Politikası
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Halil Kale Fen Lisesi Mezun Topluluğu olarak ziyaretçilerimizin gizliliğine önem veriyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            {/* Card 1: Bilgilendirme ve Tanıtım */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-start shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-500">
                <Eye size={22} />
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-xl font-bold text-gray-950">Bilgilendirme ve Trafik Verileri</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Bu internet sitesi yalnızca bilgilendirme ve tanıtım amacıyla kullanılmaktadır. İnternet sitesini ziyaret etmeniz sırasında kullanılan teknik sistemler nedeniyle oluşabilecek standart sunucu kayıtları ve trafik verileri, sitenin güvenliğinin sağlanması ve teknik sorunların giderilmesi amacıyla işlenebilir.
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Bu veriler üçüncü kişilerle paylaşılmaz ve yalnızca yasal yükümlülüklerin gerektirdiği hâllerde yetkili mercilere açıklanabilir.
                </p>
              </div>
            </div>

            {/* Card 2: Fikri Mülkiyet ve İçerik Kullanımı */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-start shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center flex-shrink-0 text-sky-500">
                <Lock size={22} />
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-xl font-bold text-gray-950">Fikri Mülkiyet ve İçerik Kullanımı</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  İnternet sitesinde yer alan metinler, görseller, logo ve diğer içerikler Halil Kale Fen Lisesi Mezun Topluluğu&apos;na aittir veya kullanım hakkı alınmıştır. Bu içeriklerin izinsiz kullanılması, çoğaltılması veya dağıtılması hukuki sorumluluk doğurabilir.
                </p>
              </div>
            </div>

            {/* Card 3: Politika Değişiklikleri */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-start shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0 text-emerald-500">
                <RefreshCw size={22} />
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-xl font-bold text-gray-950">Politika Güncellemeleri</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Topluluğumuz, gerekli gördüğü hâllerde bu Gizlilik Politikası&apos;nda değişiklik yapma hakkını saklı tutar. Güncel politika metni internet sitesi üzerinden yayımlanır.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </>
  );
}
