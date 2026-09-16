/**
 * Türkçe metinler — tüm sayfaların tek doğru kaynağı.
 * `en.ts` bu nesnenin tipini (`Dict`) izler; yeni bir metin eklendiğinde
 * TypeScript İngilizce karşılığının da eklenmesini zorunlu kılar.
 */

import type { RouteKey } from './routes';

export interface FaqItem {
  q: string;
  a: string;
  /** Cevabın altında gösterilecek isteğe bağlı bağlantı: dış adres (`href`) ya da site içi sayfa (`route`). */
  link?: { label: string; href?: string; route?: RouteKey };
}

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdUXscqyML17OXnwAQktTBO6M0wHADs3okxPQWW-Wm9P602YA/viewform';

export const tr = {
  brand: {
    short: 'HKMED',
    full: 'Halil Kale Fen Lisesi Mezunlar Derneği',
    school: 'Halil Kale Fen Lisesi',
  },

  nav: {
    home: 'Ana Sayfa',
    about: 'Hakkımızda',
    map: 'Mezun Haritası',
    contact: 'İletişim',
    faq: 'SSS',
    menuToggle: 'Menüyü aç/kapat',
    language: 'Dil',
  },

  footer: {
    tagline: 'Geçmişimizin gücüyle geleceği birlikte inşa ediyoruz. Mezunlarımız dünyayı değiştiriyor.',
    pages: 'Sayfalar',
    contact: 'İletişim',
    faq: 'Sıkça Sorulan Sorular',
    privacy: 'Gizlilik Politikası',
    rights: '© 2026 Halil Kale Fen Lisesi Mezunlar Derneği. Tüm hakları saklıdır.',
    address: ['Subaşı, Seyfi Demirsoy Sk. No:45,', '45400 Turgutlu/Manisa'],
  },

  home: {
    hero: {
      imageAlt: 'Halil Kale Fen Lisesi',
      title: ['Halil Kale', 'Fen Lisesi', 'Mezunlar Derneği'],
      subtitle1: 'Geçmişimizin gücüyle geleceği birlikte inşa ediyoruz.',
      subtitle2: '20+ ülkede 1500+ mezunuyla güçlü bir topluluk.',
      ctaAbout: 'Hakkımızda',
      ctaContact: 'Bize Ulaşın',
    },
    stats: {
      alumni: 'Mezun',
      tradition: 'Yıllık Gelenek',
      countries: 'Ülkede Mezun',
    },
    mission: {
      label: 'Misyonumuz',
      title1: 'Birlikte güçlü bir',
      title2: 'mezun ağı inşa ediyoruz',
      text: 'Halil Kale Fen Lisesi Mezunlar Derneği olarak misyonumuz; mezunlarımıza ne kadar büyük bir ailenin parçası olduklarını hatırlatmak ve kurumumuzun geleceğini hep birlikte inşa etmek.',
      features: ['Güçlü Mezun Ağı', 'Öğrenci Mentorlüğü', 'Kariyer Fırsatları', 'Toplumsal Sorumluluk'],
    },
    faq: {
      anchor: 'sss',
      label: 'SSS',
      title: 'Sıkça Sorulan Sorular',
      subtitle: 'Derneğimiz ve üyelik hakkında en çok merak edilenler.',
      items: [
        {
          q: 'Derneğe kimler üye olabilir?',
          a: 'Halil Kale Fen Lisesi mezunları ile okulumuzda en az bir eğitim-öğretim yılı okumuş olanlar derneğimize üye olabilir. Üyelik koşullarına ilişkin ayrıntılar, başvurular açıldığında bu sayfada paylaşılacaktır.',
        },
        {
          q: 'Üyelik başvurusu nasıl yapılır?',
          a: 'Dernek üyelik başvuruları çok yakında web sitemiz üzerinden alınmaya başlanacak. Gelişmelerden haberdar olmak için sosyal medya hesaplarımızı takip edebilirsiniz.',
        },
        {
          q: "Mezun Haritası'nda nasıl yer alabilirim?",
          a: 'Haritada yalnızca mezun bilgi formumuzu dolduran mezunlarımız gösterilmektedir. Formu doldurarak siz de haritada yerinizi alabilirsiniz.',
          link: { label: 'Mezun Bilgi Formu', href: GOOGLE_FORM_URL },
        },
        {
          q: 'Kişisel bilgilerim haritada görünür mü?',
          a: 'Hayır. KVKK kapsamında isim ve bireysel kurum bilgileri gösterilmez; yalnızca şehir bazlı istatistiksel dağılım paylaşılır.',
        },
        {
          q: 'Dernekle nasıl iletişime geçebilirim?',
          a: 'İletişim sayfamızdaki formu kullanabilir, iletisim@hkmed.org adresine e-posta gönderebilir ya da telefonla bize ulaşabilirsiniz.',
          link: { label: 'İletişim Sayfası', route: 'contact' },
        },
        {
          q: 'Etkinlik ve duyurulardan nasıl haberdar olabilirim?',
          a: 'Instagram ve LinkedIn hesaplarımızı takip ederek etkinlik ve duyurularımızı ilk siz öğrenebilirsiniz.',
        },
      ] as FaqItem[],
    },
    cta: {
      soon: 'Çok Yakında',
      title: 'Dernek Üyelik Başvurusu',
      text: "Dernek üyelik başvuruları çok yakında bu sayfadan alınmaya başlanacak. 1500'den fazla mezunumuzla güçlü bir ağın parçası olun.",
      button: 'Üyelik Başvurusu',
    },
  },

  about: {
    hero: {
      label: 'Hakkımızda',
      title: ['Halil Kale Fen Lisesi', 'Mezunlar Derneği'],
      text: 'İlçe bazında ilk Fen Lisesi olma özelliğini taşıyan Halil Kale Fen Lisesi, 1996 yılından bu yana yetiştirdiği başarılı mezunlarını bir araya getiren derneğimizle, eğitim, dayanışma ve toplumsal fayda ilkeleriyle çalışmalarını sürdürmektedir.',
      cardLabel: "1996'dan Bugüne",
      cardTitle: '30 Yıllık Başarı ve Bağ',
      cardText: "Manisa'nın ilk Fen Lisesi olarak kurulan okulumuzun değerli mezunları olarak, aramızdaki bağı güçlendirmek ve geleceğe birlikte yürümek için bir aradayız.",
      statAlumni: '1500+ Mezun',
      statCountries: '20+ Ülke',
    },
    mission: {
      title: 'Misyonumuz',
      text: 'Halil Kale Fen Lisesi mezunlarına ne kadar büyük bir ailenin parçası olduklarını hatırlatmak ve kurumumuzun geleceğini hep birlikte inşa etmek.',
    },
    vision: {
      title: 'Vizyonumuz',
      text: 'Halil Kale Fen Liselilerin kariyer ve kişisel gelişimine katkı sağlayan, toplum için değer üreten geniş ve dayanışmacı bir mezun ağı oluşturmak.',
    },
    values: {
      label: 'Değerlerimiz',
      titlePre: 'Bizi ',
      titleHighlight: 'Biz Yapan',
      titlePost: ' Değerler',
      items: [
        { title: 'Mükemmellik', desc: 'Fen lisesi ruhunu taşıyan bir topluluk olarak her şeyde en iyisini hedefliyoruz.' },
        { title: 'Dayanışma', desc: 'Mezunlarımız birbirini destekler, zorlukları birlikte aşarız.' },
        { title: 'Kariyer', desc: 'Mezunlarımızın kariyer yolculuklarında rehberlik eder ve fırsatlar yaratırız.' },
        { title: 'Topluluk', desc: 'Güçlü bir mezun ağı inşa ederek kurumumuzun adını yaşatırız.' },
      ],
    },
    history: {
      label: 'Tarihçemiz',
      titlePre: 'Halil Kale ',
      titleHighlight: 'Fen Lisesi',
      text: 'İlçe bazında ilk Fen Lisesi olma özelliğini taşıyan Halil Kale Fen Lisesi, Fen Liseleri ailesinin 26. halkası olarak, Turgutlulu hayırsever Halil Kale tarafından yaptırılarak Millî Eğitim Bakanlığına bağışlanmış ve 1996–1997 eğitim-öğretim yılında hizmete açılmıştır.',
    },
    campus: {
      title: 'Okul Kampüsü ve Sosyal Yaşam',
      p1: 'Kurumumuzun eğitim anlayışını yansıtan okul kampüsü; bir pansiyon binası, bir idare binası ve bir konferans salonu binası olmak üzere toplam üç yapıdan oluşmaktadır. Pansiyon binasında yatakhaneler, yemekhane, çamaşırhane ve revir bulunmaktadır.',
      p2: 'Temiz, güvenli ve düzenli yaşam alanlarının yanı sıra; fizik, kimya ve biyoloji dersleri için donatılmış laboratuvarlar, okulumuzun eğitim kalitesini destekleyen önemli imkânlar arasında yer almaktadır. Ayrıca okul bahçesinde bulunan bir basketbol, bir voleybol ve bir halı saha, öğrencilerin ders dışı zamanlarını verimli ve sosyal bir şekilde değerlendirebilmelerine olanak sağlamaktadır.',
    },
    photos: [
      { alt: 'Halil Kale Fen Lisesi ana binasının ön cephesi', title: 'Ana Bina', caption: 'Okulumuzun ön cephesi' },
      { alt: 'Halı saha ve arkasında yer alan kız ve erkek öğrenci pansiyonu binası', title: 'Öğrenci Pansiyonu', caption: 'Halı saha ve kız–erkek pansiyon blokları' },
      { alt: 'Ana bina ve okul girişinin yakın plan görünümü', title: 'Kampüs Girişi', caption: 'Ana bina ve okul girişi' },
    ],
    culture: [
      {
        title: 'Eğitim Misyonu',
        text: 'Fen liseleri; matematik ve fen bilimleri alanlarında üstün yeteneklere sahip öğrencilerin yetiştirildiği; ülkemizin ihtiyaç duyduğu yüksek nitelikli bilim insanlarının ve araştırmacıların yetişmesine kaynaklık eden eğitim kurumlarıdır. Halil Kale Fen Lisesi de bu bilinç ve sorumlulukla hareket ederek öğrencilerine en uygun eğitim ortamını sunmayı amaç edinmiştir.',
      },
      {
        title: 'Samimi Okul Kültürü',
        text: 'Güçlü idare–öğretmen–öğrenci ilişkileri ve samimi okul kültürü, özellikle yatılı öğrenciler için aile ortamını aratmayan bir atmosfer oluşturmaktadır. Bu okulda öğrencilerden beklenen temel unsur çalışmaktır; çünkü ihtiyaç duydukları eğitim ortamı ve imkânlar kendilerine eksiksiz sunulmuştur.',
      },
      {
        title: 'Geleceğe Taşınan Değerler',
        text: 'Temel amacımız; öğrencileri bu köklü eğitim yuvasını geleceğe taşıyacak iyi alışkanlıkların ve güçlü geleneklerin bilinçli temsilcileri ve kararlı savunucuları olarak yetiştirmektir. Mezun olan her öğrencimiz, bu okulun bir parçası olmanın gururunu hayatı boyunca taşıyacaktır.',
      },
    ],
    founders: {
      title: 'Kurucular',
      text: 'Derneğimizin kuruluşuna öncülük eden kurucu üyelerimiz.',
      roles: {
        president: 'Başkan',
        vpOrganization: 'Başkanvekili - Organizasyon Sorumlusu',
        vpFinance: 'Başkanvekili - Mali İşler Sorumlusu',
        secretary: 'Genel Sekreter',
        alumniRelations: 'Mezun İlişkileri Sorumlusu',
        media: 'Medya ve Tanıtım Sorumlusu',
        studentRelations: 'Öğrenci İlişkileri Sorumlusu',
      },
    },
  },

  map: {
    hero: {
      label: 'Küresel Mezun Ağı',
      titlePre: 'Mezun ',
      titleHighlight: 'Haritası',
      text: 'Halil Kale Fen Lisesi mezunlarının dünya genelindeki şehir bazlı dağılımı ve çalıştıkları sektörler.',
      statTotal: 'Toplam Mezun',
      statAbroad: 'Yurt Dışı',
      statCountries: 'Ülke',
      statCities: 'Şehir',
    },
    searchPlaceholder: 'Ülke veya şehir ara...',
    cityCount: (n: number) => `${n} şehir`,
    alumniCount: (n: number) => `${n} mezun`,
    alumni: 'Mezun',
    sectors: 'Sektörler',
    kvkk1: 'KVKK kapsamında mezunlarımızın isim ve bireysel kurum bilgileri gösterilmeden yalnızca istatistiksel dağılım paylaşılmaktadır.',
    kvkk2: 'Haritada yalnızca mezun bilgi formumuzu dolduran mezunlarımız gösterilmektedir.',
    // Veri dosyasındaki Türkçe adlar anahtar; bu dilde gösterilecek ad değer.
    countryNames: {} as Record<string, string>,
    sectorNames: {} as Record<string, string>,
  },

  contact: {
    hero: {
      label: 'İletişim',
      title: 'Bize Ulaşın',
      text: 'Üyelik ve sponsorluk ile ilgili tüm sorularınız için buradayız. Formu doldurun veya doğrudan e-posta ve telefonla iletişime geçin.',
    },
    info: {
      label: 'İletişim Bilgileri',
      titlePre: 'Bize ',
      titleHighlight: 'Ulaşın',
      text: 'Aşağıdaki iletişim bilgilerinden veya formu doldurarak bizimle iletişime geçebilirsiniz.',
      address: 'Adres',
      addressLines: ['Subaşı, Seyfi Demirsoy Sk. No:45', '45400 Turgutlu/Manisa'],
      phone: 'Telefon',
      email: 'E-posta',
      mapTitle: 'Halil Kale Fen Lisesi Konum',
    },
    form: {
      title: 'Mesaj Gönder',
      subtitle: 'Tüm alanları doldurun, en kısa sürede dönüş yapacağız.',
      name: 'Ad Soyad',
      namePlaceholder: 'Adınız Soyadınız',
      email: 'E-posta',
      emailPlaceholder: 'ornek@email.com',
      subject: 'Konu',
      subjectPlaceholder: 'Bir konu seçin...',
      subjects: ['Etkinlik Hakkında Bilgi', 'Üyelik Başvurusu', 'Sponsorluk Teklifi', 'Mezun Kaydı', 'Basın & Medya', 'Diğer'],
      message: 'Mesaj',
      messagePlaceholder: 'Mesajınızı buraya yazın...',
      error: 'Bir hata oluştu. Lütfen tekrar deneyin.',
      sending: 'Gönderiliyor...',
      submit: 'Mesajı Gönder',
      successTitle: 'Mesajınız İletildi!',
      successText: 'En kısa sürede sizinle iletişime geçeceğiz.',
    },
  },

  privacy: {
    label: 'Gizlilik ve Politikalar',
    title: 'Gizlilik Politikası',
    text: 'Halil Kale Fen Lisesi Mezunlar Derneği olarak ziyaretçilerimizin gizliliğine önem veriyoruz.',
    sections: [
      {
        title: 'Bilgilendirme ve Trafik Verileri',
        paragraphs: [
          'Bu internet sitesi yalnızca bilgilendirme ve tanıtım amacıyla kullanılmaktadır. İnternet sitesini ziyaret etmeniz sırasında kullanılan teknik sistemler nedeniyle oluşabilecek standart sunucu kayıtları ve trafik verileri, sitenin güvenliğinin sağlanması ve teknik sorunların giderilmesi amacıyla işlenebilir.',
          'Bu veriler üçüncü kişilerle paylaşılmaz ve yalnızca yasal yükümlülüklerin gerektirdiği hâllerde yetkili mercilere açıklanabilir.',
        ],
      },
      {
        title: 'Fikri Mülkiyet ve İçerik Kullanımı',
        paragraphs: [
          "İnternet sitesinde yer alan metinler, görseller, logo ve diğer içerikler Halil Kale Fen Lisesi Mezunlar Derneği'ne aittir veya kullanım hakkı alınmıştır. Bu içeriklerin izinsiz kullanılması, çoğaltılması veya dağıtılması hukuki sorumluluk doğurabilir.",
        ],
      },
      {
        title: 'Politika Güncellemeleri',
        paragraphs: [
          "Derneğimiz, gerekli gördüğü hâllerde bu Gizlilik Politikası'nda değişiklik yapma hakkını saklı tutar. Güncel politika metni internet sitesi üzerinden yayımlanır.",
        ],
      },
    ],
  },

  notFound: {
    title: 'Sayfa Bulunamadı',
    text: 'Aradığınız sayfa mevcut değil veya taşınmış olabilir.',
    home: 'Ana Sayfa',
    back: 'Geri Dön',
  },
};

export type Dict = typeof tr;
