'use client';

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const boardMembers = [
  { name: 'Haktan Badalı', year: "HKFL '22", initials: 'HB', color: '#0284c7' },
  { name: 'Arif Burhan Kahya', year: "HKFL '22", initials: 'AK', color: '#38bdf8' },
  { name: 'Mustafa Çil', year: "HKFL '22", initials: 'MÇ', color: '#7c3aed' },
  { name: 'Berke Yardımcı', year: "HKFL '22", initials: 'BY', color: '#ec4899' },
  { name: 'Oğuzhan Yazar', year: "HKFL '24", initials: 'OY', color: '#eab308' },
  { name: 'Mustafa Sayar', year: "HKFL '24", initials: 'MS', color: '#059669' },
  { name: 'Bahadır Yılmaz', year: "HKFL '24", initials: 'BY', color: '#f97316' },
];



const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function HakkimizdaClient() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative pt-36 sm:pt-44 lg:pt-60 pb-20 sm:pb-28 lg:pb-32 overflow-hidden flex items-center min-h-[560px] lg:min-h-[650px] bg-slate-950">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="Halil Kale Fen Lisesi"
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
              <div className="text-slate-300 font-bold text-xs uppercase mb-3">
                HAKKIMIZDA
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-white">Halil Kale Fen Lisesi</span>
                <br />
                <span className="text-white">Mezunlar Derneği</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
                İlçe bazında ilk Fen Lisesi olma özelliğini taşıyan Turgutlu Halil Kale Fen Lisesi, 1996 yılından bu yana yetiştirdiği başarılı mezunlarını bir araya getiren derneğimizle, eğitim, dayanışma ve toplumsal fayda ilkeleriyle çalışmalarını sürdürmektedir.
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
                <div className="text-slate-300 font-semibold text-xs uppercase mb-2">
                  1996&apos;DAN BUGÜNE
                </div>
                <h3 className="text-white font-display text-xl sm:text-2xl font-bold mb-4">30 Yıllık Başarı ve Bağ</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  Fen Liseleri ailesinin 26. halkası olarak kurulan okulumuzun değerli mezunları olarak, aramızdaki bağı güçlendirmek ve geleceğe birlikte yürümek için bir aradayız.
                </p>
                <div className="flex items-center justify-center gap-6 text-slate-300 text-sm font-semibold min-w-0">
                  <span className="flex items-center gap-1.5">👥 1500+ Mezun</span>
                  <span className="flex items-center gap-1.5">🌍 20+ Ülke</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Misyon & Vizyon ── */}
      <section className="bg-white pt-36 pb-16">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* MİSYONUMUZ KARTU */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl p-8 md:p-10 flex flex-col justify-center items-start border border-slate-100 shadow-sm min-h-[260px] relative overflow-hidden group hover:shadow-md transition-shadow"
              style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)' }}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0f2342]/10 flex items-center justify-center mb-5 flex-shrink-0 text-[#0f2342]">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-950 mb-3 text-left">
                Misyonumuz
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed text-left">
                Halil Kale Fen Lisesi mezunları arasında dayanışmayı artırmak, öğrencilerimize destek olmak ve kurumumuzun bilim ile insanlık değerlerine bağlı geleneğini yaşatmak.
              </p>
            </motion.div>

            {/* VİZYONUMUZ KARTU */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-3xl p-8 md:p-10 flex flex-col justify-center items-start border border-slate-100 shadow-sm min-h-[260px] relative overflow-hidden group hover:shadow-md transition-shadow"
              style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)' }}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0f2342]/10 flex items-center justify-center mb-5 flex-shrink-0 text-[#0f2342]">
                <span className="text-xl">👁️</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-3 text-left">
                Vizyonumuz
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed text-left">
                Türkiye&apos;nin en güçlü lise mezun ağlarından biri olmak. Mezunlarımızın kariyer ve kişisel gelişimine katkı sağlayan, topluma değer üretmek için çalışan bir dernek olmak.
              </p>
            </motion.div>
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
              🎖️ DEĞERLERİMİZ
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
              Bizi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f2342] to-slate-400">Biz Yapan</span> Değerler
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
            {[
              { title: 'Mükemmellik', desc: 'Fen lisesi ruhunu taşıyan bir topluluk olarak her şeyde en iyisini hedefliyoruz.', icon: '⭐' },
              { title: 'Dayanışma', desc: 'Mezunlarımız birbirini destekler, zorlukları birlikte aşarız.', icon: '🤝' },
              { title: 'Kariyer', desc: 'Mezunlarımızın kariyer yolculuklarında rehberlik eder ve fırsatlar yaratırız.', icon: '💼' },
              { title: 'Topluluk', desc: 'Güçlü bir mezun ağı inşa ederek kurumumuzun adını yaşatırız.', icon: '👥' }
            ].map((val) => (
              <motion.div
                key={val.title}
                variants={itemVariants}
                className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between items-center text-center shadow-sm hover:shadow-md transition-all min-h-[220px]"
              >
                {/* Üst kısım: İkon ve Başlık */}
                <div className="flex flex-col items-center flex-grow justify-start w-full">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-4 text-lg border border-gray-100 flex-shrink-0">
                    {val.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{val.title}</h4>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-[200px] mx-auto">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Tarihçe ── */}
      <section className="bg-white py-24 border-t border-gray-100">
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
                  🏫 TARİHÇEMİZ
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                  Turgutlu Halil Kale <span className="text-gradient">Fen Lisesi</span>
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  İlçe bazında ilk Fen Lisesi olma özelliğini taşıyan Turgutlu Halil Kale Fen Lisesi, Fen Liseleri ailesinin 26. halkası olarak, Turgutlulu hayırsever Halil Kale tarafından yaptırılarak Millî Eğitim Bakanlığına bağışlanmış ve 1996–1997 eğitim-öğretim yılında hizmete açılmıştır.
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
                <h3 className="font-display text-xl font-bold text-gray-900 flex items-center gap-2">
                  <span>🏢</span> Okul Kampüsü ve Sosyal Yaşam
                </h3>
                <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
                  <p>
                    Modern ve çağdaş bir eğitim anlayışını yansıtan okul kampüsü; bir pansiyon binası, bir idare binası ve bir konferans salonu binası olmak üzere toplam üç yapıdan oluşmaktadır. Pansiyon binasında yatakhaneler, yemekhane, çamaşırhane ve revir bulunmaktadır.
                  </p>
                  <p>
                    Temiz, güvenli ve düzenli yaşam alanlarının yanı sıra; fizik, kimya ve biyoloji dersleri için donatılmış laboratuvarlar, okulumuzun eğitim kalitesini destekleyen önemli imkânlar arasında yer almaktadır. Ayrıca okul bahçesinde bulunan iki basketbol, iki voleybol ve bir halı saha, öğrencilerin ders dışı zamanlarını verimli ve sosyal bir şekilde değerlendirebilmelerine olanak sağlamaktadır.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Eğitim Kültürü ve Amacımız ── */}
      <section className="bg-slate-50 py-24 border-t border-b border-slate-100">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3">Eğitim Misyonu</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Fen liseleri; matematik ve fen bilimleri alanlarında üstün yeteneklere sahip öğrencilerin yetiştirildiği; ülkemizin ihtiyaç duyduğu yüksek nitelikli bilim insanlarının ve araştırmacıların yetişmesine kaynaklık eden eğitim kurumlarıdır. Turgutlu Halil Kale Fen Lisesi de bu bilinç ve sorumlulukla hareket ederek öğrencilerine en uygun eğitim ortamını sunmayı amaç edinmiştir.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3">Samimi Okul Kültürü</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Güçlü idare–öğretmen–öğrenci ilişkileri ve samimi okul kültürü, özellikle yatılı öğrenciler için aile ortamını aratmayan bir atmosfer oluşturmaktadır. Bu okulda öğrencilerden beklenen temel unsur çalışmaktır; çünkü ihtiyaç duydukları eğitim ortamı ve imkânlar kendilerine eksiksiz sunulmuştur. Öğrencilerin demokratik, mantıklı ve makul talepleri her zaman dikkate alınmaktadır.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">🇹🇷</div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3">Geleceğe Taşınan Değerler</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Temel amacımız; öğrencileri bu köklü eğitim yuvasını geleceğe taşıyacak iyi alışkanlıkların, güçlü geleneklerin ve özellikle Atatürkçü düşüncenin bilinçli temsilcileri ve kararlı savunucuları olarak yetiştirmektir. Mezun olan her öğrencimiz, bu okulun bir parçası olmanın gururunu hayatı boyunca taşıyacaktır.
              </p>
            </motion.div>
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
            <div
              className="section-label mx-auto w-fit"
              style={{ background: 'rgba(255,255,255,0.08)', color: '#ffffff' }}
            >
              <Users size={14} />
              Kurucularımız
            </div>
            <h2 className="font-display text-4xl font-bold text-white mt-2">
              Kurucular
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              Derneğimizin kuruluşuna öncülük eden kurucu üyelerimiz.
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
                className="rounded-xl p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-black/10"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderLeft: '4px solid #ffffff',
                }}
              >
                <h3 className="font-semibold text-white mb-2 leading-snug text-base sm:text-lg">{member.name}</h3>
                <span 
                  className="inline-block text-xs font-bold tracking-wider px-2.5 py-0.5 rounded-full"
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