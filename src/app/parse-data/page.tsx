import fs from 'fs';
import path from 'path';

const cityMap: Record<string, [string, string, string, number, number]> = {
  'izmir': ['İzmir', 'Türkiye', '🇹🇷', 38.42, 27.14],
  'izmir karsiyaka': ['İzmir', 'Türkiye', '🇹🇷', 38.42, 27.14],
  'izmir ': ['İzmir', 'Türkiye', '🇹🇷', 38.42, 27.14],
  'ankara': ['Ankara', 'Türkiye', '🇹🇷', 39.93, 32.86],
  'ankara/cankaya': ['Ankara', 'Türkiye', '🇹🇷', 39.93, 32.86],
  'aydin': ['Aydın', 'Türkiye', '🇹🇷', 37.85, 27.84],
  'erlangen': ['Erlangen', 'Almanya', '🇩🇪', 49.58, 11.01],
  'istanbul': ['İstanbul', 'Türkiye', '🇹🇷', 41.01, 28.97],
  'i̇stanbul': ['İstanbul', 'Türkiye', '🇹🇷', 41.01, 28.97],
  'krakow': ['Krakow', 'Polonya', '🇵🇱', 50.06, 19.94],
  'kraków': ['Krakow', 'Polonya', '🇵🇱', 50.06, 19.94],
  'manisa': ['Manisa', 'Türkiye', '🇹🇷', 38.61, 27.43],
  'manisa merkez': ['Manisa', 'Türkiye', '🇹🇷', 38.61, 27.43],
  'manisa/izmir': ['Manisa', 'Türkiye', '🇹🇷', 38.61, 27.43],
  'manisa kula': ['Manisa', 'Türkiye', '🇹🇷', 38.61, 27.43],
  'manisa/turgutlu': ['Turgutlu', 'Türkiye', '🇹🇷', 38.50, 27.70],
  'manisa turgutlu': ['Turgutlu', 'Türkiye', '🇹🇷', 38.50, 27.70],
  'turgutlu manisa': ['Turgutlu', 'Türkiye', '🇹🇷', 38.50, 27.70],
  'turgutlu/manisa': ['Turgutlu', 'Türkiye', '🇹🇷', 38.50, 27.70],
  'turgutlu': ['Turgutlu', 'Türkiye', '🇹🇷', 38.50, 27.70],
  'usak': ['Uşak', 'Türkiye', '🇹🇷', 38.67, 29.41],
  'uşak': ['Uşak', 'Türkiye', '🇹🇷', 38.67, 29.41],
  'uşak üniversite': ['Uşak', 'Türkiye', '🇹🇷', 38.67, 29.41],
  'adana': ['Adana', 'Türkiye', '🇹🇷', 36.99, 35.32],
  'amsterdam': ['Amsterdam', 'Hollanda', '🇳🇱', 52.37, 4.90],
  'bodrum mugla': ['Muğla', 'Türkiye', '🇹🇷', 37.03, 27.43],
  'bodrum': ['Muğla', 'Türkiye', '🇹🇷', 37.03, 27.43],
  'mugla': ['Muğla', 'Türkiye', '🇹🇷', 37.22, 28.36],
  'brugge/belcika': ['Brugge', 'Belçika', '🇧🇪', 51.21, 3.22],
  'brugge/belçika': ['Brugge', 'Belçika', '🇧🇪', 51.21, 3.22],
  'bursa': ['Bursa', 'Türkiye', '🇹🇷', 40.18, 29.06],
  'eskisehir': ['Eskişehir', 'Türkiye', '🇹🇷', 39.78, 30.52],
  'eskişehir': ['Eskişehir', 'Türkiye', '🇹🇷', 39.78, 30.52],
  'eskişehir(üniversite) manisa (memleket)': ['Eskişehir', 'Türkiye', '🇹🇷', 39.78, 30.52],
  'gevelsberg, almanya': ['Gevelsberg', 'Almanya', '🇩🇪', 51.32, 7.34],
  'hollanda - lahey': ['Lahey', 'Hollanda', '🇳🇱', 52.07, 4.30],
  'the hague - netherlands': ['Lahey', 'Hollanda', '🇳🇱', 52.07, 4.30],
  'tanzanya': ['Tanzanya', 'Tanzanya', '🇹🇿', -6.36, 34.88],
  'italya milano': ['Milano', 'İtalya', '🇮🇹', 45.46, 9.18],
  'viyana': ['Viyana', 'Avusturya', '🇦🇹', 48.20, 16.37],
  'alkmaar - hollanda': ['Alkmaar', 'Hollanda', '🇳🇱', 52.63, 4.75],
  'chicago': ['Chicago', 'ABD', '🇺🇸', 41.87, -87.62],
  'colombus, ohio (abd)': ['Columbus', 'ABD', '🇺🇸', 39.96, -82.99],
  'eindhoven hollanda': ['Eindhoven', 'Hollanda', '🇳🇱', 51.44, 5.46],
  'eindhoven': ['Eindhoven', 'Hollanda', '🇳🇱', 51.44, 5.46],
  'isparta': ['Isparta', 'Türkiye', '🇹🇷', 37.76, 30.56],
  'kayseri': ['Kayseri', 'Türkiye', '🇹🇷', 38.73, 35.48],
  'stockholm': ['Stockholm', 'İsveç', '🇸🇪', 59.32, 18.06],
  'stokholm/isvec': ['Stockholm', 'İsveç', '🇸🇪', 59.32, 18.06],
  'stokholm/i̇sveç': ['Stockholm', 'İsveç', '🇸🇪', 59.32, 18.06],
  'demarest, new jersey, usa': ['New Jersey', 'ABD', '🇺🇸', 40.05, -74.40],
  'luksemburg': ['Lüksemburg', 'Lüksemburg', '🇱🇺', 49.81, 6.12],
  'rize': ['Rize', 'Türkiye', '🇹🇷', 41.02, 40.51],
  'utrecht': ['Utrecht', 'Hollanda', '🇳🇱', 52.09, 5.12],
  'boston, ma, abd': ['Boston', 'ABD', '🇺🇸', 42.36, -71.05],
  'leipzig/ germany': ['Leipzig', 'Almanya', '🇩🇪', 51.33, 12.37],
  'regensburg': ['Regensburg', 'Almanya', '🇩🇪', 49.01, 12.10],
  'toronto': ['Toronto', 'Kanada', '🇨🇦', 43.65, -79.38],
  'miami': ['Miami', 'ABD', '🇺🇸', 25.76, -80.19],
  'zurih isvicre': ['Zürih', 'İsviçre', '🇨🇭', 47.37, 8.54],
  'zurich': ['Zürih', 'İsviçre', '🇨🇭', 47.37, 8.54],
  'salihli': ['Salihli', 'Türkiye', '🇹🇷', 38.48, 28.14],
  'salihli manisa': ['Salihli', 'Türkiye', '🇹🇷', 38.48, 28.14],
  'amerika': ['Houston', 'ABD', '🇺🇸', 29.76, -95.36],
  'oslo, norvec': ['Oslo', 'Norveç', '🇳🇴', 59.91, 10.75],
  'leeds': ['Leeds', 'İngiltere', '🇬🇧', 53.80, -1.54],
  'sidney, avustralya': ['Sidney', 'Avustralya', '🇦🇺', -33.86, 151.20],
  'stuttgart': ['Stuttgart', 'Almanya', '🇩🇪', 48.77, 9.18],
  'bayburt': ['Bayburt', 'Türkiye', '🇹🇷', 40.25, 40.22],
  'berlin': ['Berlin', 'Almanya', '🇩🇪', 52.52, 13.40],
  'diyarbakir': ['Diyarbakır', 'Türkiye', '🇹🇷', 37.91, 40.23],
  'kirsehir': ['Kırşehir', 'Türkiye', '🇹🇷', 39.14, 34.16],
  'tekirdag': ['Tekirdağ', 'Türkiye', '🇹🇷', 40.97, 27.51],
  'zonguldak': ['Zonguldak', 'Türkiye', '🇹🇷', 41.45, 31.79],
  'antalya': ['Antalya', 'Türkiye', '🇹🇷', 36.89, 30.71],
  'corum': ['Çorum', 'Türkiye', '🇹🇷', 40.55, 34.95],
  'kutahya': ['Kütahya', 'Türkiye', '🇹🇷', 39.41, 29.98],
  'ordu': ['Ordu', 'Türkiye', '🇹🇷', 40.98, 37.87],
  'afyon': ['Afyon', 'Türkiye', '🇹🇷', 38.75, 30.53],
  'erzurum': ['Erzurum', 'Türkiye', '🇹🇷', 39.90, 41.27],
  'kopenhag': ['Kopenhag', 'Danimarka', '🇩🇰', 55.67, 12.56],
  'rochester, new york': ['Rochester', 'ABD', '🇺🇸', 43.15, -77.61],
  'aachen': ['Aachen', 'Almanya', '🇩🇪', 50.77, 6.08],
  'konya': ['Konya', 'Türkiye', '🇹🇷', 37.87, 32.48],
  'aksaray': ['Aksaray', 'Türkiye', '🇹🇷', 38.36, 34.02],
  'karlsruhe': ['Karlsruhe', 'Almanya', '🇩🇪', 49.00, 8.40],
  'edirne': ['Edirne', 'Türkiye', '🇹🇷', 41.67, 26.55],
  'lefkosa': ['Lefkoşa', 'Kıbrıs', '🇨🇾', 35.18, 33.38],
  'yozgat': ['Yozgat', 'Türkiye', '🇹🇷', 39.81, 34.80],
  'kocaeli': ['Kocaeli', 'Türkiye', '🇹🇷', 40.76, 29.92],
  'darica/kocaeli': ['Kocaeli', 'Türkiye', '🇹🇷', 40.76, 29.92],
  'darica-kocaeli': ['Kocaeli', 'Türkiye', '🇹🇷', 40.76, 29.92],
  'kastamonu': ['Kastamonu', 'Türkiye', '🇹🇷', 41.38, 33.78],
  'giresun': ['Giresun', 'Türkiye', '🇹🇷', 40.91, 38.38],
  'yok': ['İzmir', 'Türkiye', '🇹🇷', 38.42, 27.14],
  'suan mezun statusundeyim': ['Turgutlu', 'Türkiye', '🇹🇷', 38.50, 27.70],
  
  // New cities / locations added from new dataset:
  'fransa': ['Paris', 'Fransa', '🇫🇷', 48.85, 2.35],
  'san jose': ['San Jose', 'ABD', '🇺🇸', 37.33, -121.88],
  'hollanda': ['Amsterdam', 'Hollanda', '🇳🇱', 52.37, 4.90],
  'delft': ['Delft', 'Hollanda', '🇳🇱', 52.01, 4.35],
  'londra': ['Londra', 'İngiltere', '🇬🇧', 51.50, -0.12],
  'new york': ['New York', 'ABD', '🇺🇸', 40.71, -74.00],
  'van': ['Van', 'Türkiye', '🇹🇷', 38.50, 43.38],
  'breda': ['Breda', 'Hollanda', '🇳🇱', 51.57, 4.76],
  'st. gallen': ['St. Gallen', 'İsviçre', '🇨🇭', 47.42, 9.37],
  'munih': ['Münih', 'Almanya', '🇩🇪', 48.13, 11.58],
  'munich': ['Münih', 'Almanya', '🇩🇪', 48.13, 11.58],
  'san diego': ['San Diego', 'ABD', '🇺🇸', 32.71, -117.16],
  'denizli': ['Denizli', 'Türkiye', '🇹🇷', 37.77, 29.09],
  
  // Newly identified missing cities from validation:
  'balikesir': ['Balıkesir', 'Türkiye', '🇹🇷', 39.64, 27.89],
  'balıkesir': ['Balıkesir', 'Türkiye', '🇹🇷', 39.64, 27.89],
  'reutlingen': ['Reutlingen', 'Almanya', '🇩🇪', 48.49, 9.21],
  'canakkale': ['Çanakkale', 'Türkiye', '🇹🇷', 40.15, 26.41],
  'çanakkale': ['Çanakkale', 'Türkiye', '🇹🇷', 40.15, 26.41],
  'burdur': ['Burdur', 'Türkiye', '🇹🇷', 37.72, 30.29],
  'essen': ['Essen', 'Almanya', '🇩🇪', 51.45, 7.01],
  'frankfurt': ['Frankfurt', 'Almanya', '🇩🇪', 50.11, 8.68],
  'karabuk': ['Karabük', 'Türkiye', '🇹🇷', 41.20, 32.62],
  'karabük': ['Karabük', 'Türkiye', '🇹🇷', 41.20, 32.62],
  'sakarya': ['Sakarya', 'Türkiye', '🇹🇷', 40.76, 30.40]
};

function cleanString(str: string): string {
  if (!str) return '';
  return str.trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/ı/g, 'i')
    .replace(/\s+/g, ' ');
}

function toTitleCase(str: string): string {
  if (!str) return '';
  const lowerClean = str.toLowerCase().replace(/\u0307/g, '');
  return lowerClean.split(/\s+/).map(word => {
    if (!word) return '';
    const first = word.charAt(0);
    let upperFirst = first.toUpperCase();
    if (first === 'i') upperFirst = 'İ';
    if (first === 'ı') upperFirst = 'I';
    return upperFirst + word.slice(1);
  }).join(' ');
}

function classifySector(dept: string): string {
  const dl = dept.toLowerCase();
  if (/tıp|hekim|eczacı|eczacilik|diş|dermatolog|nöroloji|anestezi|kbb|cerrahi|geriatri|patoloji|hemşire|terapi|reanimasyon|biyomedikal/i.test(dl)) {
    return 'Sağlık & Tıp';
  }
  if (/bilgisayar|computer|yazılım|yazilim|informatik|bilişim|dijital oyun|it /i.test(dl)) {
    return 'Yazılım & Teknoloji';
  }
  if (/elektrik|elektronik|haberleşme|makine|makina|mekatronik|inşaat|insaat|endüstri|endustri|kimya|metalürji|malzeme|jeoloji|jeofizik|uzay|uçak|kontrol|üretim|cevher|gemi/i.test(dl)) {
    return 'Mühendislik & Tasarım';
  }
  if (/işletme|isletme|iktisat|ekonomi|ekonomi̇|finans|yönetim|mba|pazarlama|siyaset|uluslararası/i.test(dl)) {
    return 'İdari & İktisadi Bilimler';
  }
  if (/öğretmen|matematik|fizik|kimya|genetik|biyoloji|tarih|psikoloji|planlama|mimarlık|tasarım|içmimarlık/i.test(dl)) {
    return 'Eğitim & Temel Bilimler';
  }
  return 'Diğer';
}

const sectorColors: Record<string, string> = {
  'Sağlık & Tıp': '#059669',
  'Yazılım & Teknoloji': '#0284c7',
  'Mühendislik & Tasarım': '#7c3aed',
  'İdari & İktisadi Bilimler': '#dc2626',
  'Eğitim & Temel Bilimler': '#d97706',
  'Diğer': '#6b7280'
};

export default function ParsePage() {
  const filePath = '/Users/mustafacil/.gemini/antigravity/brain/cba55b95-d963-4760-ae4e-035a2f4287d1/scratch/raw_data.txt';
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  const lines = fileContent.split('\n');
  const processedAlumni: any[] = [];
  
  for (const line of lines) {
    if (!line.trim()) continue;
    const parts = line.split('\t');
    if (parts.length < 2) continue;
    
    // Find the part that matches a city from cityMap
    let matchedCity: any = null;
    let matchedIndex = -1;
    
    for (let i = parts.length - 1; i >= 0; i--) {
      const pClean = cleanString(parts[i]);
      if (!pClean) continue;
      
      for (const [k, v] of Object.entries(cityMap)) {
        const cleanKey = cleanString(k);
        if (cleanKey === pClean || pClean.includes(cleanKey) || cleanKey.includes(pClean)) {
          matchedCity = v;
          matchedIndex = i;
          break;
        }
      }
      if (matchedCity) break;
    }
    
    if (!matchedCity) {
      const lastPart = cleanString(parts[parts.length - 1]);
      for (const [k, v] of Object.entries(cityMap)) {
        const cleanKey = cleanString(k);
        if (lastPart.includes(cleanKey) || cleanKey.includes(lastPart)) {
          matchedCity = v;
          matchedIndex = parts.length - 1;
          break;
        }
      }
    }
    
    if (!matchedCity) {
      continue;
    }
    
    // Construct roleDesc from all parts before the matched city
    const rolesBeforeCity = parts.slice(0, matchedIndex).map(p => p.trim()).filter(Boolean);
    const roleRaw = rolesBeforeCity.join(' - ');
    const roleDesc = toTitleCase(roleRaw);
    const sector = classifySector(roleDesc);
    
    processedAlumni.push({
      city: matchedCity[0],
      country: matchedCity[1],
      flag: matchedCity[2],
      lat: matchedCity[3],
      lng: matchedCity[4],
      roleDesc,
      sector
    });
  }
  
  // Group by city
  const byCity: Record<string, any> = {};
  for (const al of processedAlumni) {
    if (!byCity[al.city]) {
      byCity[al.city] = {
        city: al.city,
        country: al.country,
        flag: al.flag,
        lat: al.lat,
        lng: al.lng,
        roles: [],
        sectorsCount: {}
      };
    }
    byCity[al.city].roles.push(al.roleDesc);
    byCity[al.city].sectorsCount[al.sector] = (byCity[al.city].sectorsCount[al.sector] || 0) + 1;
  }
  
  const citiesDataList: any[] = [];
  for (const [cityName, data] of Object.entries(byCity)) {
    const totalInCity = data.roles.length;
    const sectors: any[] = [];
    
    for (const [secName, count] of Object.entries(data.sectorsCount)) {
      const pct = Math.round(((count as number) / totalInCity) * 100);
      sectors.push({
        name: secName,
        pct,
        color: sectorColors[secName] || '#6b7280'
      });
    }
    
    sectors.sort((a, b) => b.pct - a.pct);
    
    const cityId = cityName.toLowerCase()
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ç/g, 'c')
      .replace(/ğ/g, 'g')
      .replace(/[^a-z0-9]/g, '');
      
    const roleCounts: Record<string, number> = {};
    for (const r of data.roles) {
      roleCounts[r] = (roleCounts[r] || 0) + 1;
    }
    const aggregatedRoles = Object.entries(roleCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([roleName, count]) => count > 1 ? `${roleName} (${count})` : roleName);

    citiesDataList.push({
      id: cityId,
      city: cityName,
      country: data.country,
      flag: data.flag,
      count: totalInCity,
      lat: data.lat,
      lng: data.lng,
      sectors,
      roles: aggregatedRoles
    });
  }
  
  citiesDataList.sort((a, b) => b.count - a.count);
  
  // Write the structured file
  const outputTsPath = path.join(process.cwd(), 'src/app/harita/citiesData.ts');
  const codeContent = `import { CityData } from './HaritaClient';\n\nexport const citiesData: CityData[] = ${JSON.stringify(citiesDataList, null, 2)};\n`;
  fs.writeFileSync(outputTsPath, codeContent, 'utf-8');
  
  return (
    <div style={{ padding: 20 }}>
      <h1>Parsed and Written Successfully!</h1>
      <p>Target file: {outputTsPath}</p>
      <p>Total processed entries: {processedAlumni.length}</p>
    </div>
  );
}
