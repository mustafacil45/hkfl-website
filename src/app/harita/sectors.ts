/**
 * Sektör dağılımı, her şehrin `roles` listesinden türetilir.
 * Yüzdeler elle tutulduğunda roller güncellendikçe veriyle uyumsuz hale
 * geldiği için tek doğru kaynak roller listesidir.
 */

export interface Sector {
  name: string;
  pct: number;
  color: string;
}

const SAGLIK = 'Sağlık & Tıp';
const MUHENDISLIK = 'Mühendislik & Tasarım';
const YAZILIM = 'Yazılım & Teknoloji';
const IDARI = 'İdari & İktisadi Bilimler';
const EGITIM = 'Eğitim & Temel Bilimler';
const DIGER = 'Diğer';

const SECTOR_COLORS: Record<string, string> = {
  [SAGLIK]: '#059669',
  [MUHENDISLIK]: '#7c3aed',
  [YAZILIM]: '#0284c7',
  [IDARI]: '#dc2626',
  [EGITIM]: '#d97706',
  [DIGER]: '#6b7280',
};

// Veri elle girildiği için "Mühendisliği/Muhendisligi", "Tıp/Tip" gibi
// varyantlar bir arada bulunuyor. Türkçe karakterleri sadeleştirip
// karşılaştırmayı tek biçim üzerinden yapıyoruz.
const TR_ASCII: Record<string, string> = {
  ı: 'i', İ: 'I', ş: 's', Ş: 'S', ğ: 'g', Ğ: 'G',
  ü: 'u', Ü: 'U', ö: 'o', Ö: 'O', ç: 'c', Ç: 'C',
};

const normalize = (text: string) =>
  text.replace(/[ıİşŞğĞüÜöÖçÇ]/g, (ch) => TR_ASCII[ch]).toLowerCase();

// Sıra önemli: ilk eşleşen kural kazanır, bu yüzden daha özel kalıplar üstte.
const RULES: [string, RegExp][] = [
  // Sağlık & Tıp
  [SAGLIK, /\btip\b|tip fak|tip doktor|askeri tip|turkce tip|ingilizce tip|anesteziyoloji|cerrahi|hekimlig/],
  [SAGLIK, /dis hekim|dishekim|eczaci|hemsire|beslenme ve diyetetik|fizyoterapi|dil ve konusma|veteriner|psikoloji/],

  // Yazılım & Teknoloji — "bilgisayar mühendisliği" genel mühendislikten önce yakalanmalı.
  [YAZILIM, /bilgisayar muhendis|bilgisayar muh\b|bilgisayar muh\.|computer engineer|computer science|bilgisayar bilimi/],
  [YAZILIM, /yazilim|bilisim sistemleri|yonetim bilisim|informatik|dijital oyun/],

  // Eğitim — "… Öğretmenliği" / "… Eğitimi" kendi alanından önce gelir.
  [EGITIM, /ogretmenlig|egitimi\b|^egitim$|yabanci diller egitim/],

  // Mühendislik & Tasarım
  [MUHENDISLIK, /muhendis|\bmuh\b|\bmuh\.|engineering|elektronic engineer|^ee$|^makine|telekomuniksyon/],
  [MUHENDISLIK, /^elektrik elektronik$|mekatronik/],
  [MUHENDISLIK, /mimarlik|^mimar$|icmimarlik|endustriyel tasarim|endustri urunleri tasarimi|sehir ve bolge planlama/],
  [MUHENDISLIK, /^endustri$|cevher hazirlama|deniz jeolojisi|malzeme bilimi|metalurji/],

  // İdari & İktisadi Bilimler
  [IDARI, /isletme|business administration|iktisat|ekonomi|maliye|finans|hukuk|siyaset|uluslararasi iliskiler|turizm|yonetim/],

  // Eğitim & Temel Bilimler
  [EGITIM, /matematik|^fizik$|^kimya$|molekuler|genetik|biyoteknoloji|biyoloji/],
];

export function classifyRole(role: string): string {
  const text = normalize(role);
  for (const [sector, pattern] of RULES) {
    if (pattern.test(text)) return sector;
  }
  return DIGER;
}

/** "Tıp (31)" -> ["Tıp", 31] · "Hukuk" -> ["Hukuk", 1] */
function parseRole(role: string): [string, number] {
  const match = /^(.*?)\s*\((\d+)\)$/.exec(role);
  return match ? [match[1], Number(match[2])] : [role, 1];
}

export function buildSectors(roles: string[]): Sector[] {
  const tally = new Map<string, number>();
  for (const role of roles) {
    const [name, people] = parseRole(role);
    const sector = classifyRole(name);
    tally.set(sector, (tally.get(sector) ?? 0) + people);
  }

  const total = [...tally.values()].reduce((sum, n) => sum + n, 0);
  if (total === 0) return [];

  // En büyük kalan yöntemi: yuvarlamadan sonra da yüzdeler tam 100 etsin.
  const rows = [...tally.entries()].map(([name, people]) => {
    const exact = (people * 100) / total;
    return { name, exact, pct: Math.floor(exact) };
  });

  let remaining = 100 - rows.reduce((sum, r) => sum + r.pct, 0);
  for (const row of [...rows].sort((a, b) => ((b.exact % 1) - (a.exact % 1)) || (b.exact - a.exact))) {
    if (remaining <= 0) break;
    row.pct += 1;
    remaining -= 1;
  }

  // %0'a yuvarlananlar listeden düşer; toplam yine 100 kalır.
  return rows
    .filter((row) => row.pct > 0)
    .sort((a, b) => b.pct - a.pct)
    .map((row) => ({ name: row.name, pct: row.pct, color: SECTOR_COLORS[row.name] }));
}
