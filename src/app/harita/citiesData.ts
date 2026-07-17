export interface CityData {
  id: string;
  city: string;
  country: string;
  flag: string;
  count: number;
  lat: number;
  lng: number;
  sectors: {
    name: string;
    pct: number;
    color: string;
  }[];
  roles: string[];
}

export const citiesData: CityData[] = [
  {
    "id": "istanbul",
    "city": "İstanbul",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 238,
    "lat": 41.01,
    "lng": 28.97,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 74,
        "color": "#059669"
      },
      {
        "name": "Diğer",
        "pct": 13,
        "color": "#6b7280"
      },
      {
        "name": "İdari & İktisadi Bilimler",
        "pct": 5,
        "color": "#dc2626"
      },
      {
        "name": "Eğitim & Temel Bilimler",
        "pct": 4,
        "color": "#d97706"
      },
      {
        "name": "Mühendislik & Tasarım",
        "pct": 3,
        "color": "#7c3aed"
      },
      {
        "name": "Yazılım & Teknoloji",
        "pct": 1,
        "color": "#0284c7"
      }
    ],
    "roles": [
      "Tıp (31)",
      "Endüstri Mühendisliği (31)",
      "Makine Mühendisliği (30)",
      "Yazılım Mühendisliği (17)",
      "Bilgisayar Mühendisliği (14)",
      "Hukuk (10)",
      "Ekonomi (6)",
      "Elektrik Elektronik Mühendisliği (5)",
      "İşletme (5)",
      "Tıp Fakültesi (5)",
      "Elektronik Ve Haberleşme Mühendisliği (5)",
      "İşletme Mühendisliği (4)",
      "Elektrik Mühendisliği (4)",
      "Eğitim (4)",
      "Makina Mühendisliği (3)",
      "Maliye (3)",
      "Elektrik-elektronik Mühendisliği (2)",
      "İktisat (2)",
      "Yönetim Bilişim Sistemleri (2)",
      "Mimarlık (2)",
      "İstanbul Tıp Fakültesi (2)",
      "Matematik (2)",
      "Diş Hekimliği (2)",
      "Endüstri Mühendisi",
      "Elektrik Mühendisligi",
      "Şehir Ve Bölge Planlama",
      "Deniz Ulaştırma İşletme Mühendisliği",
      "İşletme Fakültesi",
      "Lisans Ekonomi/ Yüksek Lisans Finans Mühendisliği",
      "Kimya",
      "Kimya Mühendisliği",
      "Tarih",
      "Bilgisayar Muhendisligi",
      "Endustri Muhendisligi",
      "Lisans: Odtü Elektrik Elektronik Mühendisliği Y. Lisans: Bilkent İşletme (executive Mba)",
      "Genetik",
      "Jeoloji Mühendisliği",
      "Mekatronik Mühendisliği / Mba",
      "Mekatronik, Finans (master)",
      "Cerrahpaşa Tıp Fakültesi",
      "Telekomuniksyon Muhendisligi",
      "Elektronik Haberleşme Mühendisliği",
      "Ee",
      "İşletme Yüksek Lisans / Endüstri Mühendisliği",
      "Uçak Mühendisliği",
      "Endüstri Ürünleri Tasarımı",
      "Business Administration",
      "Moleküler Biyoteknoloji",
      "Tıp (ingilizce)",
      "İşletme - Mis",
      "Hukuk Fakültesi",
      "Yabancı Diller Eğitimi",
      "Siyaset Bilimi",
      "Computer Science",
      "Elektrik Elektronik Mühendisliği - Bilgisayar",
      "Matematik/ekonomi",
      "Psikoloji",
      "Bilgisayar Mühendisliği + Endüstri",
      "Endüstriyel Tasarım",
      "Beslenme Ve Diyetetik",
      "Dijital Oyun Tasarımı",
      "Elektronik Mühendisliği",
      "Endüstri",
      "Gemi Makineleri İşletme Mühendisliği",
      "Cevher Hazırlama",
      "Endustri Mühendisliği",
      "Moleküler Biyoloji Ve Genetik",
      "Tip Fakültesi",
      "Turizm İşletmeciliği",
      "Uluslararası İlişkiler"
    ]
  },
  {
    "id": "izmir",
    "city": "İzmir",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 169,
    "lat": 38.42,
    "lng": 27.14,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 88,
        "color": "#059669"
      },
      {
        "name": "Diğer",
        "pct": 5,
        "color": "#6b7280"
      },
      {
        "name": "Eğitim & Temel Bilimler",
        "pct": 3,
        "color": "#d97706"
      },
      {
        "name": "Mühendislik & Tasarım",
        "pct": 2,
        "color": "#7c3aed"
      },
      {
        "name": "Yazılım & Teknoloji",
        "pct": 1,
        "color": "#0284c7"
      },
      {
        "name": "İdari & İktisadi Bilimler",
        "pct": 1,
        "color": "#dc2626"
      }
    ],
    "roles": [
      "Tıp (59)",
      "Tıp Fakültesi (23)",
      "Elektrik Elektronik Mühendisliği (18)",
      "Diş Hekimliği (10)",
      "Bilgisayar Mühendisliği (10)",
      "Makine Mühendisliği (8)",
      "Eczacılık (3)",
      "İsletme (2)",
      "Mimarlık (2)",
      "Makina Mühendisliği (2)",
      "Moleküler Biyoloji Ve Genetik (2)",
      "Tip (2)",
      "Kimya Mühendisliği (2)",
      "İktisat",
      "İnşaat Mühendisliği",
      "İşletme",
      "İktisat (ingilizce)",
      "İlköğretim Sınıf Öğretmenliği",
      "Kimya Mühendisi",
      "Bilgisayar Ve Öğretim Teknolojileri Eğitimi",
      "Ekonomi",
      "Endüstriyel Tasarım",
      "İşletme Fakültesi",
      "Tıp Fakultesi",
      "Tip Fakültesi",
      "Metalurji Ve Malzeme Mühendisliği",
      "Tip Fak",
      "Elektronik Mühendisliği",
      "Elektrik Elektronik",
      "Elektronik-haberleşme & Bilgisayar Müh.",
      "Hukuk",
      "Cerrahpaşa Tıp Fakültesi",
      "Diş Hekimliği Fakültesi",
      "Subaylık-bilgisayar Mühendisliği",
      "Elektrik-elektronik Mühendisliği",
      "Ziraat Fakültesi Bitki Koruma",
      "Elektronik Ve Haberleşme Mühendisliği",
      "Fizik",
      "Matematik"
    ]
  },
  {
    "id": "ankara",
    "city": "Ankara",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 104,
    "lat": 39.93,
    "lng": 32.86,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 80,
        "color": "#059669"
      },
      {
        "name": "Diğer",
        "pct": 10,
        "color": "#6b7280"
      },
      {
        "name": "Eğitim & Temel Bilimler",
        "pct": 8,
        "color": "#d97706"
      },
      {
        "name": "Mühendislik & Tasarım",
        "pct": 2,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Tıp (22)",
      "Bilgisayar Mühendisliği (12)",
      "Elektrik Elektronik Mühendisliği (9)",
      "Makine Mühendisliği (9)",
      "Tıp Fakültesi (8)",
      "Eğitim (4)",
      "Endüstri Mühendisliği (4)",
      "Eczacılık (3)",
      "Kimya Mühendisliği (2)",
      "Makina Mühendisliği (2)",
      "Moleküler Biyoloji Ve Genetik (2)",
      "Elektrik-elektronik Mühendisliği",
      "İşletme",
      "Elektronic Engineer",
      "Elektronik Mühendisliği",
      "Tıp Doktorluğu",
      "Elektronik Haberleşme Mühendisliği",
      "Elektrik Ve Elektronik Mühendisliği",
      "Eczacılık Fakültesi",
      "Elektrik-elektronik Müh.",
      "Makine",
      "Tip Fakültesi",
      "Fizyoterapi Ve Rehabilitasyon",
      "Beslenme Ve Diyetetik",
      "Havacılık Ve Uzay Mühendisliği",
      "Diş Hekimliği Fak.",
      "Askeri Tıp",
      "Diş Hekimliği Fakültesi",
      "Fizik",
      "İktisat",
      "İşletme(ing)",
      "Elektrik - Elektronik Mühendisliği",
      "Matematik İngilizce",
      "Veteriner Fakültesi",
      "Metalurji Ve Malzeme Mühendisliği",
      "Hukuk",
      "Turizm Ve Otel İşletmeciliği",
      "Psikoloji"
    ]
  },
  {
    "id": "manisa",
    "city": "Manisa",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 52,
    "lat": 38.61,
    "lng": 27.43,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 82,
        "color": "#059669"
      },
      {
        "name": "Diğer",
        "pct": 6,
        "color": "#6b7280"
      },
      {
        "name": "Eğitim & Temel Bilimler",
        "pct": 4,
        "color": "#d97706"
      },
      {
        "name": "İdari & İktisadi Bilimler",
        "pct": 4,
        "color": "#dc2626"
      },
      {
        "name": "Yazılım & Teknoloji",
        "pct": 2,
        "color": "#0284c7"
      },
      {
        "name": "Mühendislik & Tasarım",
        "pct": 2,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Tıp (23)",
      "Tıp Fakültesi (10)",
      "Bilgisayar Mühendisliği (2)",
      "Matematik Öğretmenliği",
      "Matematik",
      "İşletme",
      "Dişhekimi",
      "Eczacılık",
      "Bilgisayar Müh",
      "Ekonomi",
      "Endüstri Mühendisliği + Bilgisayar Mühendisliği",
      "Hukuk",
      "Gemi Makineleri İşletme Mühendisliği",
      "Yönetim Bilimleri (işletme)",
      "İnşaat Mühendisliği",
      "Hemşirelik",
      "Mimar",
      "Diş Hekimliği",
      "Uçak Mühendisliği",
      "Yazılım Mühendisliği"
    ]
  },
  {
    "id": "eskisehir",
    "city": "Eskişehir",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 12,
    "lat": 39.78,
    "lng": 30.52,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 92,
        "color": "#059669"
      },
      {
        "name": "Eğitim & Temel Bilimler",
        "pct": 8,
        "color": "#d97706"
      }
    ],
    "roles": [
      "Tıp (7)",
      "Tıp Fakültesi (2)",
      "İçmimarlık",
      "Dil Ve Konuşma Terapisi",
      "Eczacılık"
    ]
  },
  {
    "id": "aydin",
    "city": "Aydın",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 11,
    "lat": 37.85,
    "lng": 27.84,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 73,
        "color": "#059669"
      },
      {
        "name": "Diğer",
        "pct": 18,
        "color": "#6b7280"
      },
      {
        "name": "Mühendislik & Tasarım",
        "pct": 9,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Tıp (4)",
      "Tıp Fakültesi (2)",
      "Veteriner Hekimliği Fakültesi",
      "Beslenme Ve Diyetetik",
      "Veterinerlik",
      "Diş Hekimliği",
      "Elektrik Elektronik Müh."
    ]
  },
  {
    "id": "mugla",
    "city": "Muğla",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 10,
    "lat": 37.03,
    "lng": 27.43,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 60,
        "color": "#059669"
      },
      {
        "name": "Diğer",
        "pct": 20,
        "color": "#6b7280"
      },
      {
        "name": "Eğitim & Temel Bilimler",
        "pct": 10,
        "color": "#d97706"
      },
      {
        "name": "Yazılım & Teknoloji",
        "pct": 10,
        "color": "#0284c7"
      }
    ],
    "roles": [
      "Tıp (2)",
      "İşletme Fakültesi İngilizce İşletme Bölümü",
      "Anesteziyoloji Ve Reanimasyon Uzmanı",
      "Mimarlık",
      "Tıp (ingilizce)",
      "Tıp Fakültesi",
      "Bilisim Sistemleri Muhendisligi",
      "Bilgisayar Mühendisliği",
      "Türkçe Tıp"
    ]
  },
  {
    "id": "balikesir",
    "city": "Balıkesir",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 10,
    "lat": 39.64,
    "lng": 27.89,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 60,
        "color": "#059669"
      },
      {
        "name": "Yazılım & Teknoloji",
        "pct": 20,
        "color": "#0284c7"
      },
      {
        "name": "Mühendislik & Tasarım",
        "pct": 10,
        "color": "#7c3aed"
      },
      {
        "name": "Diğer",
        "pct": 10,
        "color": "#6b7280"
      }
    ],
    "roles": [
      "Tıp Fakültesi (3)",
      "Tıp (3)",
      "Kimya Mühendisliği",
      "Tip Fakültesi",
      "Bilgisayar Mühendisliği",
      "Yazılım Mühendisliği"
    ]
  },
  {
    "id": "bursa",
    "city": "Bursa",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 9,
    "lat": 40.18,
    "lng": 29.06,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 78,
        "color": "#059669"
      },
      {
        "name": "Mühendislik & Tasarım",
        "pct": 11,
        "color": "#7c3aed"
      },
      {
        "name": "Yazılım & Teknoloji",
        "pct": 11,
        "color": "#0284c7"
      }
    ],
    "roles": [
      "Tıp Fakültesi (4)",
      "Tıp (2)",
      "Eczacilik",
      "Metalurji Ve Malzeme Mühendisi",
      "İnşaat Mühendisliği / İnşaat Yönetiminde Bilişim (yl)"
    ]
  },
  {
    "id": "denizli",
    "city": "Denizli",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 9,
    "lat": 37.77,
    "lng": 29.09,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 78,
        "color": "#059669"
      },
      {
        "name": "Mühendislik & Tasarım",
        "pct": 22,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Tıp (4)",
      "Tıp Fakültesi (3)",
      "Elektrik Elektronik Mühendisliği",
      "Makine Mühendisliği"
    ]
  },
  {
    "id": "usak",
    "city": "Uşak",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 5,
    "lat": 38.67,
    "lng": 29.41,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 80,
        "color": "#059669"
      },
      {
        "name": "Mühendislik & Tasarım",
        "pct": 20,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Tıp (3)",
      "Makina Muhendisligi",
      "Diş Hekimliği"
    ]
  },
  {
    "id": "isparta",
    "city": "Isparta",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 5,
    "lat": 37.76,
    "lng": 30.56,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 60,
        "color": "#059669"
      },
      {
        "name": "Yazılım & Teknoloji",
        "pct": 20,
        "color": "#0284c7"
      },
      {
        "name": "Mühendislik & Tasarım",
        "pct": 20,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Tıp (aile Hekimliği)",
      "Diş Hekimliği Fakültesi",
      "Bilgisayar Mühendisliği",
      "Tıp",
      "Makine Mühendisliği (şimdilik)"
    ]
  },
  {
    "id": "canakkale",
    "city": "Çanakkale",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 5,
    "lat": 40.15,
    "lng": 26.41,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 80,
        "color": "#059669"
      },
      {
        "name": "Yazılım & Teknoloji",
        "pct": 20,
        "color": "#0284c7"
      }
    ],
    "roles": [
      "Tıp (3)",
      "Bilgisayar Mühendisliği",
      "Diş Hekimliği"
    ]
  },
  {
    "id": "amsterdam",
    "city": "Amsterdam",
    "country": "Hollanda",
    "flag": "🇳🇱",
    "count": 4,
    "lat": 52.37,
    "lng": 4.9,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 75,
        "color": "#7c3aed"
      },
      {
        "name": "Yazılım & Teknoloji",
        "pct": 25,
        "color": "#0284c7"
      }
    ],
    "roles": [
      "Bilgisayar Muh",
      "Elektrik Mühendisliği",
      "Elektrik Ve Elektronik Mühendisliği",
      "Endüstri Mühendisliği"
    ]
  },
  {
    "id": "stockholm",
    "city": "Stockholm",
    "country": "İsveç",
    "flag": "🇸🇪",
    "count": 4,
    "lat": 59.32,
    "lng": 18.06,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 75,
        "color": "#059669"
      },
      {
        "name": "Mühendislik & Tasarım",
        "pct": 25,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Tıp Fakültesi (3)",
      "Elektronik Haberleşme Müh"
    ]
  },
  {
    "id": "kutahya",
    "city": "Kütahya",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 4,
    "lat": 39.41,
    "lng": 29.98,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 100,
        "color": "#059669"
      }
    ],
    "roles": [
      "Tıp Fakültesi (2)",
      "Tıp (2)"
    ]
  },
  {
    "id": "afyon",
    "city": "Afyon",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 4,
    "lat": 38.75,
    "lng": 30.53,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 100,
        "color": "#059669"
      }
    ],
    "roles": [
      "Tıp Fakültesi (2)",
      "Tıp",
      "Eczacılık"
    ]
  },
  {
    "id": "lahey",
    "city": "Lahey",
    "country": "Hollanda",
    "flag": "🇳🇱",
    "count": 3,
    "lat": 52.07,
    "lng": 4.3,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 67,
        "color": "#7c3aed"
      },
      {
        "name": "Diğer",
        "pct": 33,
        "color": "#6b7280"
      }
    ],
    "roles": [
      "Makina Muhendisligi (2)",
      "İsletme (ingilizce)"
    ]
  },
  {
    "id": "kocaeli",
    "city": "Kocaeli",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 3,
    "lat": 40.76,
    "lng": 29.92,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 33,
        "color": "#7c3aed"
      },
      {
        "name": "Eğitim & Temel Bilimler",
        "pct": 33,
        "color": "#d97706"
      },
      {
        "name": "Sağlık & Tıp",
        "pct": 33,
        "color": "#059669"
      }
    ],
    "roles": [
      "Kontrol Mühendisliği",
      "Matematik",
      "Tıp"
    ]
  },
  {
    "id": "zurih",
    "city": "Zürih",
    "country": "İsviçre",
    "flag": "🇨🇭",
    "count": 3,
    "lat": 47.37,
    "lng": 8.54,
    "sectors": [
      {
        "name": "Diğer",
        "pct": 33,
        "color": "#6b7280"
      },
      {
        "name": "Eğitim & Temel Bilimler",
        "pct": 33,
        "color": "#d97706"
      },
      {
        "name": "İdari & İktisadi Bilimler",
        "pct": 33,
        "color": "#dc2626"
      }
    ],
    "roles": [
      "İşletme Mühendisliği",
      "Fizik",
      "İşletme Teknoloji Ve Ekonomi"
    ]
  },
  {
    "id": "berlin",
    "city": "Berlin",
    "country": "Almanya",
    "flag": "🇩🇪",
    "count": 3,
    "lat": 52.52,
    "lng": 13.4,
    "sectors": [
      {
        "name": "Diğer",
        "pct": 33,
        "color": "#6b7280"
      },
      {
        "name": "Eğitim & Temel Bilimler",
        "pct": 33,
        "color": "#d97706"
      },
      {
        "name": "Yazılım & Teknoloji",
        "pct": 33,
        "color": "#0284c7"
      }
    ],
    "roles": [
      "Tip",
      "Mimarlık",
      "Bilgisayar Bilimi"
    ]
  },
  {
    "id": "edirne",
    "city": "Edirne",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 3,
    "lat": 41.67,
    "lng": 26.55,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 100,
        "color": "#059669"
      }
    ],
    "roles": [
      "Tıp Fakültesi (3)"
    ]
  },
  {
    "id": "kirsehir",
    "city": "Kırşehir",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 3,
    "lat": 39.14,
    "lng": 34.16,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 67,
        "color": "#059669"
      },
      {
        "name": "Diğer",
        "pct": 33,
        "color": "#6b7280"
      }
    ],
    "roles": [
      "Tıp Fakültesi",
      "Tıp",
      "Tip"
    ]
  },
  {
    "id": "corum",
    "city": "Çorum",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 3,
    "lat": 40.55,
    "lng": 34.95,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 100,
        "color": "#059669"
      }
    ],
    "roles": [
      "Tıp (3)"
    ]
  },
  {
    "id": "turgutlu",
    "city": "Turgutlu",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 2,
    "lat": 38.5,
    "lng": 27.7,
    "sectors": [
      {
        "name": "Eğitim & Temel Bilimler",
        "pct": 50,
        "color": "#d97706"
      },
      {
        "name": "Sağlık & Tıp",
        "pct": 50,
        "color": "#059669"
      }
    ],
    "roles": [
      "Matematik",
      "Tıp Fakültesi"
    ]
  },
  {
    "id": "eindhoven",
    "city": "Eindhoven",
    "country": "Hollanda",
    "flag": "🇳🇱",
    "count": 2,
    "lat": 51.44,
    "lng": 5.46,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Elektronik Mühendisliği",
      "Elektrik-elektronik Mühendisliği"
    ]
  },
  {
    "id": "kayseri",
    "city": "Kayseri",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 2,
    "lat": 38.73,
    "lng": 35.48,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 50,
        "color": "#059669"
      },
      {
        "name": "Mühendislik & Tasarım",
        "pct": 50,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Diş Hekimliği Fakültesi",
      "Uçak Mühendisliği"
    ]
  },
  {
    "id": "rize",
    "city": "Rize",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 2,
    "lat": 41.02,
    "lng": 40.51,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 100,
        "color": "#059669"
      }
    ],
    "roles": [
      "Tıp Fakültesi",
      "Tıp"
    ]
  },
  {
    "id": "salihli",
    "city": "Salihli",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 2,
    "lat": 38.48,
    "lng": 28.14,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 50,
        "color": "#059669"
      },
      {
        "name": "Diğer",
        "pct": 50,
        "color": "#6b7280"
      }
    ],
    "roles": [
      "Tıp",
      "Beslenme Ve Diyetetik"
    ]
  },
  {
    "id": "yozgat",
    "city": "Yozgat",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 2,
    "lat": 39.81,
    "lng": 34.8,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 100,
        "color": "#059669"
      }
    ],
    "roles": [
      "Tıp Fakültesi",
      "Tıp"
    ]
  },
  {
    "id": "rochester",
    "city": "Rochester",
    "country": "ABD",
    "flag": "🇺🇸",
    "count": 2,
    "lat": 43.15,
    "lng": -77.61,
    "sectors": [
      {
        "name": "Yazılım & Teknoloji",
        "pct": 100,
        "color": "#0284c7"
      }
    ],
    "roles": [
      "Computer Engineering",
      "Sabancı - Elektronik Mühendisliği, Rit - Microsystems Engineering Phd"
    ]
  },
  {
    "id": "munih",
    "city": "Münih",
    "country": "Almanya",
    "flag": "🇩🇪",
    "count": 2,
    "lat": 48.13,
    "lng": 11.58,
    "sectors": [
      {
        "name": "İdari & İktisadi Bilimler",
        "pct": 50,
        "color": "#dc2626"
      },
      {
        "name": "Mühendislik & Tasarım",
        "pct": 50,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Sürdürülebilir Yönetim Ve Teknoloji",
      "Endüstri Mühendisliği"
    ]
  },
  {
    "id": "antalya",
    "city": "Antalya",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 2,
    "lat": 36.89,
    "lng": 30.71,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 100,
        "color": "#059669"
      }
    ],
    "roles": [
      "Tıp Fakültesi (2)"
    ]
  },
  {
    "id": "aksaray",
    "city": "Aksaray",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 2,
    "lat": 38.36,
    "lng": 34.02,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 100,
        "color": "#059669"
      }
    ],
    "roles": [
      "Tıp Fakültesi (2)"
    ]
  },
  {
    "id": "burdur",
    "city": "Burdur",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 2,
    "lat": 37.72,
    "lng": 30.29,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 100,
        "color": "#059669"
      }
    ],
    "roles": [
      "Diş Hekimliği (2)"
    ]
  },
  {
    "id": "karlsruhe",
    "city": "Karlsruhe",
    "country": "Almanya",
    "flag": "🇩🇪",
    "count": 2,
    "lat": 49,
    "lng": 8.4,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Makine Mühendisliği",
      "Elektrik Elektronik Mühendisliği"
    ]
  },
  {
    "id": "sakarya",
    "city": "Sakarya",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 2,
    "lat": 40.76,
    "lng": 30.4,
    "sectors": [
      {
        "name": "Yazılım & Teknoloji",
        "pct": 100,
        "color": "#0284c7"
      }
    ],
    "roles": [
      "Bilgisayar Mühendisliği",
      "Yazılım Mühendisliği"
    ]
  },
  {
    "id": "erlangen",
    "city": "Erlangen",
    "country": "Almanya",
    "flag": "🇩🇪",
    "count": 1,
    "lat": 49.58,
    "lng": 11.01,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Elektrik Muh"
    ]
  },
  {
    "id": "krakow",
    "city": "Krakow",
    "country": "Polonya",
    "flag": "🇵🇱",
    "count": 1,
    "lat": 50.06,
    "lng": 19.94,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Elektronik Mühendisliği"
    ]
  },
  {
    "id": "adana",
    "city": "Adana",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 1,
    "lat": 36.99,
    "lng": 35.32,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Elektrik-elektronik Mühendisliği"
    ]
  },
  {
    "id": "brugge",
    "city": "Brugge",
    "country": "Belçika",
    "flag": "🇧🇪",
    "count": 1,
    "lat": 51.21,
    "lng": 3.22,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Deniz Jeolojisi Ve Jeofiziği"
    ]
  },
  {
    "id": "gevelsberg",
    "city": "Gevelsberg",
    "country": "Almanya",
    "flag": "🇩🇪",
    "count": 1,
    "lat": 51.32,
    "lng": 7.34,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Makine Mühendisliği"
    ]
  },
  {
    "id": "tanzanya",
    "city": "Tanzanya",
    "country": "Tanzanya",
    "flag": "🇹🇿",
    "count": 1,
    "lat": -6.36,
    "lng": 34.88,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Makina Mühendisliği"
    ]
  },
  {
    "id": "milano",
    "city": "Milano",
    "country": "İtalya",
    "flag": "🇮🇹",
    "count": 1,
    "lat": 45.46,
    "lng": 9.18,
    "sectors": [
      {
        "name": "İdari & İktisadi Bilimler",
        "pct": 100,
        "color": "#dc2626"
      }
    ],
    "roles": [
      "Ekonomi"
    ]
  },
  {
    "id": "viyana",
    "city": "Viyana",
    "country": "Avusturya",
    "flag": "🇦🇹",
    "count": 1,
    "lat": 48.2,
    "lng": 16.37,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Moleküler Biyoloji & Kimya Çift Anadal"
    ]
  },
  {
    "id": "alkmaar",
    "city": "Alkmaar",
    "country": "Hollanda",
    "flag": "🇳🇱",
    "count": 1,
    "lat": 52.63,
    "lng": 4.75,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Makina Mühendisliği"
    ]
  },
  {
    "id": "chicago",
    "city": "Chicago",
    "country": "ABD",
    "flag": "🇺🇸",
    "count": 1,
    "lat": 41.87,
    "lng": -87.62,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Endüstri Mühendisliği"
    ]
  },
  {
    "id": "columbus",
    "city": "Columbus",
    "country": "ABD",
    "flag": "🇺🇸",
    "count": 1,
    "lat": 39.96,
    "lng": -82.99,
    "sectors": [
      {
        "name": "Diğer",
        "pct": 100,
        "color": "#6b7280"
      }
    ],
    "roles": [
      "İngilizce Tip"
    ]
  },
  {
    "id": "paris",
    "city": "Paris",
    "country": "Fransa",
    "flag": "🇫🇷",
    "count": 1,
    "lat": 48.85,
    "lng": 2.35,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Mekatronik Mühendisliği"
    ]
  },
  {
    "id": "reutlingen",
    "city": "Reutlingen",
    "country": "Almanya",
    "flag": "🇩🇪",
    "count": 1,
    "lat": 48.49,
    "lng": 9.21,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Metalürji Ve Malzeme Mühendisliği Bölümü Doktora Programı"
    ]
  },
  {
    "id": "sanjose",
    "city": "San Jose",
    "country": "ABD",
    "flag": "🇺🇸",
    "count": 1,
    "lat": 37.33,
    "lng": -121.88,
    "sectors": [
      {
        "name": "Yazılım & Teknoloji",
        "pct": 100,
        "color": "#0284c7"
      }
    ],
    "roles": [
      "Bilgisayar Muhendisligi"
    ]
  },
  {
    "id": "newjersey",
    "city": "New Jersey",
    "country": "ABD",
    "flag": "🇺🇸",
    "count": 1,
    "lat": 40.05,
    "lng": -74.4,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 100,
        "color": "#059669"
      }
    ],
    "roles": [
      "İstanbul Tıp Fakültesi"
    ]
  },
  {
    "id": "luksemburg",
    "city": "Lüksemburg",
    "country": "Lüksemburg",
    "flag": "🇱🇺",
    "count": 1,
    "lat": 49.81,
    "lng": 6.12,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Endustri Muhendisligi"
    ]
  },
  {
    "id": "utrecht",
    "city": "Utrecht",
    "country": "Hollanda",
    "flag": "🇳🇱",
    "count": 1,
    "lat": 52.09,
    "lng": 5.12,
    "sectors": [
      {
        "name": "Yazılım & Teknoloji",
        "pct": 100,
        "color": "#0284c7"
      }
    ],
    "roles": [
      "Bilgisayar Mühendisliği"
    ]
  },
  {
    "id": "boston",
    "city": "Boston",
    "country": "ABD",
    "flag": "🇺🇸",
    "count": 1,
    "lat": 42.36,
    "lng": -71.05,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Endüstri Mühendisliği"
    ]
  },
  {
    "id": "leipzig",
    "city": "Leipzig",
    "country": "Almanya",
    "flag": "🇩🇪",
    "count": 1,
    "lat": 51.33,
    "lng": 12.37,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Elektrik Mühendisliği"
    ]
  },
  {
    "id": "regensburg",
    "city": "Regensburg",
    "country": "Almanya",
    "flag": "🇩🇪",
    "count": 1,
    "lat": 49.01,
    "lng": 12.1,
    "sectors": [
      {
        "name": "Yazılım & Teknoloji",
        "pct": 100,
        "color": "#0284c7"
      }
    ],
    "roles": [
      "Bilgisayar Mühendisliği"
    ]
  },
  {
    "id": "toronto",
    "city": "Toronto",
    "country": "Kanada",
    "flag": "🇨🇦",
    "count": 1,
    "lat": 43.65,
    "lng": -79.38,
    "sectors": [
      {
        "name": "İdari & İktisadi Bilimler",
        "pct": 100,
        "color": "#dc2626"
      }
    ],
    "roles": [
      "Ekonomi"
    ]
  },
  {
    "id": "miami",
    "city": "Miami",
    "country": "ABD",
    "flag": "🇺🇸",
    "count": 1,
    "lat": 25.76,
    "lng": -80.19,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Elektrik-elektronik Mühendisliği"
    ]
  },
  {
    "id": "houston",
    "city": "Houston",
    "country": "ABD",
    "flag": "🇺🇸",
    "count": 1,
    "lat": 29.76,
    "lng": -95.36,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Endustri Muhendisligi"
    ]
  },
  {
    "id": "oslo",
    "city": "Oslo",
    "country": "Norveç",
    "flag": "🇳🇴",
    "count": 1,
    "lat": 59.91,
    "lng": 10.75,
    "sectors": [
      {
        "name": "Yazılım & Teknoloji",
        "pct": 100,
        "color": "#0284c7"
      }
    ],
    "roles": [
      "Bilgisayar Mühendisliği"
    ]
  },
  {
    "id": "leeds",
    "city": "Leeds",
    "country": "İngiltere",
    "flag": "🇬🇧",
    "count": 1,
    "lat": 53.8,
    "lng": -1.54,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Elektrik Muhendisligi"
    ]
  },
  {
    "id": "sidney",
    "city": "Sidney",
    "country": "Avustralya",
    "flag": "🇦🇺",
    "count": 1,
    "lat": -33.86,
    "lng": 151.2,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Endüstri Mühendisliği"
    ]
  },
  {
    "id": "stuttgart",
    "city": "Stuttgart",
    "country": "Almanya",
    "flag": "🇩🇪",
    "count": 1,
    "lat": 48.77,
    "lng": 9.18,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Makine Mühendisliği"
    ]
  },
  {
    "id": "bayburt",
    "city": "Bayburt",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 1,
    "lat": 40.25,
    "lng": 40.22,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 100,
        "color": "#059669"
      }
    ],
    "roles": [
      "Tıp- Kalp Ve Damar Cerrahisi"
    ]
  },
  {
    "id": "diyarbakir",
    "city": "Diyarbakır",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 1,
    "lat": 37.91,
    "lng": 40.23,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 100,
        "color": "#059669"
      }
    ],
    "roles": [
      "Tıp"
    ]
  },
  {
    "id": "londra",
    "city": "Londra",
    "country": "İngiltere",
    "flag": "🇬🇧",
    "count": 1,
    "lat": 51.5,
    "lng": -0.12,
    "sectors": [
      {
        "name": "İdari & İktisadi Bilimler",
        "pct": 100,
        "color": "#dc2626"
      }
    ],
    "roles": [
      "Ekonomi"
    ]
  },
  {
    "id": "van",
    "city": "Van",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 1,
    "lat": 38.5,
    "lng": 43.38,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 100,
        "color": "#059669"
      }
    ],
    "roles": [
      "Lisans: Tıp; Uzmanlık: Çocuk Ve Ergen Ruh Sağlığı"
    ]
  },
  {
    "id": "delft",
    "city": "Delft",
    "country": "Hollanda",
    "flag": "🇳🇱",
    "count": 1,
    "lat": 52.01,
    "lng": 4.35,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Malzeme Bilimi Ve Nanomuhendislik"
    ]
  },
  {
    "id": "sandiego",
    "city": "San Diego",
    "country": "ABD",
    "flag": "🇺🇸",
    "count": 1,
    "lat": 32.71,
    "lng": -117.16,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Elektrik Elektronik Muhendisligi"
    ]
  },
  {
    "id": "tekirdag",
    "city": "Tekirdağ",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 1,
    "lat": 40.97,
    "lng": 27.51,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 100,
        "color": "#059669"
      }
    ],
    "roles": [
      "Tıp"
    ]
  },
  {
    "id": "zonguldak",
    "city": "Zonguldak",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 1,
    "lat": 41.45,
    "lng": 31.79,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 100,
        "color": "#059669"
      }
    ],
    "roles": [
      "Tıp Fakültesi"
    ]
  },
  {
    "id": "ordu",
    "city": "Ordu",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 1,
    "lat": 40.98,
    "lng": 37.87,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 100,
        "color": "#059669"
      }
    ],
    "roles": [
      "Tıp"
    ]
  },
  {
    "id": "erzurum",
    "city": "Erzurum",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 1,
    "lat": 39.9,
    "lng": 41.27,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 100,
        "color": "#059669"
      }
    ],
    "roles": [
      "Tıp Fakültesi"
    ]
  },
  {
    "id": "kopenhag",
    "city": "Kopenhag",
    "country": "Danimarka",
    "flag": "🇩🇰",
    "count": 1,
    "lat": 55.67,
    "lng": 12.56,
    "sectors": [
      {
        "name": "İdari & İktisadi Bilimler",
        "pct": 100,
        "color": "#dc2626"
      }
    ],
    "roles": [
      "Ekonomi/finans"
    ]
  },
  {
    "id": "aachen",
    "city": "Aachen",
    "country": "Almanya",
    "flag": "🇩🇪",
    "count": 1,
    "lat": 50.77,
    "lng": 6.08,
    "sectors": [
      {
        "name": "Mühendislik & Tasarım",
        "pct": 100,
        "color": "#7c3aed"
      }
    ],
    "roles": [
      "Endüstri-elektrik Ve Enerji Mühendisliği"
    ]
  },
  {
    "id": "kastamonu",
    "city": "Kastamonu",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 1,
    "lat": 41.38,
    "lng": 33.78,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 100,
        "color": "#059669"
      }
    ],
    "roles": [
      "Tıp"
    ]
  },
  {
    "id": "konya",
    "city": "Konya",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 1,
    "lat": 37.87,
    "lng": 32.48,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 100,
        "color": "#059669"
      }
    ],
    "roles": [
      "Tıp"
    ]
  },
  {
    "id": "essen",
    "city": "Essen",
    "country": "Almanya",
    "flag": "🇩🇪",
    "count": 1,
    "lat": 51.45,
    "lng": 7.01,
    "sectors": [
      {
        "name": "Diğer",
        "pct": 100,
        "color": "#6b7280"
      }
    ],
    "roles": [
      "İnformatik"
    ]
  },
  {
    "id": "frankfurt",
    "city": "Frankfurt",
    "country": "Almanya",
    "flag": "🇩🇪",
    "count": 1,
    "lat": 50.11,
    "lng": 8.68,
    "sectors": [
      {
        "name": "Yazılım & Teknoloji",
        "pct": 100,
        "color": "#0284c7"
      }
    ],
    "roles": [
      "Bioinformatik"
    ]
  },
  {
    "id": "karabuk",
    "city": "Karabük",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 1,
    "lat": 41.2,
    "lng": 32.62,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 100,
        "color": "#059669"
      }
    ],
    "roles": [
      "Tıp Fakültesi"
    ]
  },
  {
    "id": "giresun",
    "city": "Giresun",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "count": 1,
    "lat": 40.91,
    "lng": 38.38,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 100,
        "color": "#059669"
      }
    ],
    "roles": [
      "Tıp Fakültesi"
    ]
  },
  {
    "id": "lefkosa",
    "city": "Lefkoşa",
    "country": "Kıbrıs",
    "flag": "🇨🇾",
    "count": 1,
    "lat": 35.18,
    "lng": 33.38,
    "sectors": [
      {
        "name": "Sağlık & Tıp",
        "pct": 100,
        "color": "#059669"
      }
    ],
    "roles": [
      "Tıp"
    ]
  }
];
