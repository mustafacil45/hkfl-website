'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Users, Heart, Star, Briefcase, Award } from 'lucide-react';

const boardMembers = [
  { name: 'Haktan Badalı', role: 'Dernek Başkanı', year: 'HKFL Mezunu', initials: 'HB', color: '#0284c7' },
  { name: 'Arif Burhan Kahya', role: 'Başkan Yardımcısı', year: 'HKFL Mezunu', initials: 'AK', color: '#38bdf8' },
  { name: 'Hafız', role: 'Sayman', year: 'HKFL Mezunu', initials: 'HF', color: '#1d4ed8' },
  { name: 'Mustafa Sayar', role: 'Yönetim Kurulu Üyesi', year: 'HKFL Mezunu', initials: 'MS', color: '#059669' },
  { name: 'Mustafa Çil', role: 'Yönetim Kurulu Üyesi', year: 'HKFL Mezunu', initials: 'MÇ', color: '#7c3aed' },
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
              <div className="text-[#38bdf8] font-bold text-xs uppercase mb-3">
                HAKKIMIZDA
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-[#38bdf8]">Halil Kale Fen Lisesi</span>
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
                <div className="text-[#38bdf8] font-semibold text-xs uppercase mb-2">
                  1996&apos;DAN BUGÜNE
                </div>
                <h3 className="text-white font-display text-xl sm:text-2xl font-bold mb-4">30 Yıllık Başarı ve Bağ</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  Fen Liseleri ailesinin 26. halkası olarak kurulan okulumuzun değerli mezunları olarak, aramızdaki bağı güçlendirmek ve geleceğe birlikte yürümek için bir aradayız.
                </p>
                <div className="flex items-center justify-center gap-6 text-[#38bdf8] text-sm font-semibold min-w-0">
                  <span className="flex items-center gap-1.5">👥 2000+ Mezun</span>
                  <span className="flex items-center gap-1.5">🌍 30+ Ülke</span>
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
              className="rounded-3xl p-8 md:p-10 flex flex-col justify-center items-start border border-sky-100/70 shadow-sm min-h-[260px] relative overflow-hidden group hover:shadow-md transition-shadow"
              style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)' }}
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-5 flex-shrink-0 text-blue-500">
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
              className="rounded-3xl p-8 md:p-10 flex flex-col justify-center items-start border border-sky-100/70 shadow-sm min-h-[260px] relative overflow-hidden group hover:shadow-md transition-shadow"
              style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)' }}
            >
              <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center mb-5 flex-shrink-0 text-sky-500">
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wide uppercase mb-3">
              🎖️ DEĞERLERİMİZ
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
              Bizi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">Yapan</span> Değerler
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

      {/* ── Tarihçe & Başarılarımız ── */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Sol Taraf: Tarihçe ve Kampüs Bilgileri */}
            <div className="lg:col-span-7 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wide uppercase mb-4">
                  🏫 TARİHÇEMİZ
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                  Turgutlu Halil Kale <span className="text-gradient">Fen Lisesi</span>
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                  İlçe bazında ilk Fen Lisesi olma özelliğini taşıyan Turgutlu Halil Kale Fen Lisesi, Fen Liseleri ailesinin 26. halkası olarak, Turgutlulu hayırsever Halil Kale tarafından yaptırılarak Millî Eğitim Bakanlığına bağışlanmış ve 1996–1997 eğitim-öğretim yılında hizmete açılmıştır.
                </p>
              </motion.div>

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
                    Modern ve çağdaş bir eğitim anlayışını yansıtan okul kampüsü; iki pansiyon binası, bir idare binası ve bir konferans salonu binası olmak üzere toplam dört yapıdan oluşmaktadır. Kız ve erkek öğrenciler için ayrı olarak düzenlenen pansiyon binalarında yatakhaneler, yemekhane, çamaşırhane ve revir bulunmaktadır.
                  </p>
                  <p>
                    Temiz, güvenli ve düzenli yaşam alanlarının yanı sıra; fizik, kimya ve biyoloji dersleri için donatılmış laboratuvarlar, okulumuzun eğitim kalitesini destekleyen önemli imkânlar arasında yer almaktadır. Ayrıca okul bahçesinde bulunan iki basketbol ve iki voleybol sahası, öğrencilerin ders dışı zamanlarını verimli ve sosyal bir şekilde değerlendirebilmelerine olanak sağlamaktadır.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h3 className="font-display text-xl font-bold text-gray-900 flex items-center gap-2">
                  <span>🔬</span> Bilimsel İş Birlikleri ve Araştırmalar
                </h3>
                <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
                  <p>
                    Ortaöğretim Kurumları Öğrenci Seçme Sınavı sonuçlarına göre sürekli olarak ilk beş içerisinde yer alan okulumuz; Ege Üniversitesi, Dokuz Eylül Üniversitesi, Celal Bayar Üniversitesi, Yüksek Teknoloji Enstitüsü ve PETKİM gibi çeşitli kurumlarla gerçekleştirilen iş birlikleri kapsamında, bilim kurulunun rehberliğinde düzenli proje çalışmaları yürütmektedir.
                  </p>
                  <p>
                    Ayrıca her yıl TÜBİTAK Bilim Olimpiyatları ile TÜBİTAK, MEF, Mucitler ve Araştırmacılar Derneği ve Enerji Bakanlığı tarafından düzenlenen araştırma projeleri yarışmalarına aktif olarak katılım sağlamaktadır.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Sağ Taraf: Başarı Tablosu ve Dereceler */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-slate-950 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800/20 rounded-full blur-2xl" />
                <h3 className="font-display text-2xl font-black mb-6 flex items-center gap-2">
                  <Award className="text-[#38bdf8]" /> Akademik Dereceler
                </h3>
                
                <div className="space-y-6 divide-y divide-white/10">
                  <div className="pt-0">
                    <span className="text-[#38bdf8] text-xs font-bold uppercase tracking-wider">1999 ÖSS</span>
                    <h4 className="font-bold text-lg mt-1">%100 Başarı Oranı</h4>
                    <p className="text-gray-400 text-xs mt-1">169 sayısal puan ortalamasıyla Türkiye 32&apos;ncisi</p>
                  </div>
                  
                  <div className="pt-4">
                    <span className="text-[#38bdf8] text-xs font-bold uppercase tracking-wider">2001 ÖSS</span>
                    <h4 className="font-bold text-lg mt-1">Türkiye İkinciliği</h4>
                    <p className="text-gray-400 text-xs mt-1">181 sayısal puan ortalamasıyla tarihi derece</p>
                  </div>

                  <div className="pt-4">
                    <span className="text-[#38bdf8] text-xs font-bold uppercase tracking-wider">2004 ÖSS</span>
                    <h4 className="font-bold text-lg mt-1">Türkiye Birinciliği & İkinciliği</h4>
                    <p className="text-gray-400 text-xs mt-1">Yerleştirme bazında %96.6 ile TR birincisi; 283.142 ortalamayla TR ikincisi. Matematik alanında TR birincisi.</p>
                  </div>

                  <div className="pt-4">
                    <span className="text-[#38bdf8] text-xs font-bold uppercase tracking-wider">2005 ÖSS</span>
                    <h4 className="font-bold text-lg mt-1">Sürdürülebilir Başarı</h4>
                    <p className="text-gray-400 text-xs mt-1">47 öğrenciyle katılım, 282.672 yüksek sayısal puan ortalaması</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl"
              >
                <h3 className="font-display text-2xl font-black mb-6 flex items-center gap-2">
                  <Star className="text-amber-400 animate-pulse" /> Proje Başarıları
                </h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 text-amber-400 font-bold">01</div>
                    <div>
                      <h4 className="font-bold text-sm">2001–2002 Öğretim Yılı</h4>
                      <p className="text-gray-400 text-xs mt-1">MEK Fizik Projesi Türkiye birincisi & Kimya Projesi Jüri Özel Ödülü</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 text-amber-400 font-bold">02</div>
                    <div>
                      <h4 className="font-bold text-sm">2002–2003 Öğretim Yılı</h4>
                      <p className="text-gray-400 text-xs mt-1">MEK Fizik Projesi Türkiye birincisi & Biyoloji Projesi Türkiye üçüncüsü</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 text-amber-400 font-bold">03</div>
                    <div>
                      <h4 className="font-bold text-sm">2003–2004 Öğretim Yılı</h4>
                      <p className="text-gray-400 text-xs mt-1">MEK Fizik Türkiye üçüncülüğü. Fizik alanında üst üste üç yıl derece alan tek okul unvanı.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 text-amber-400 font-bold">05</div>
                    <div>
                      <h4 className="font-bold text-sm">2005 TÜBİTAK Proje Yarışması</h4>
                      <p className="text-gray-400 text-xs mt-1">Matematik projesi Ege Bölgesi finalisti & Türkiye ikincisi</p>
                    </div>
                  </div>
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

      {/* ── Yönetim Kurulu ── */}
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
              style={{ background: 'rgba(56,189,248,0.15)', color: '#38bdf8' }}
            >
              <Users size={14} />
              Ekibimiz
            </div>
            <h2 className="font-display text-4xl font-bold text-white mt-2">
              Yönetim <span style={{ color: '#38bdf8' }}>Kurulu</span>
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              Derneğimizi yöneten, deneyimli ve kararlı mezun liderlerimiz.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {boardMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="rounded-2xl p-6 text-center transition-transform hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4"
                  style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}99)` }}
                >
                  {member.initials}
                </div>
                <h3 className="font-semibold text-white mb-1 leading-snug">{member.name}</h3>
                <div
                  className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-2"
                  style={{ background: `${member.color}22`, color: member.color }}
                >
                  {member.role}
                </div>
                <p className="text-gray-500 text-xs">{member.year}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}