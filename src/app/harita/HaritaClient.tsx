'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShieldAlert, Briefcase, ChevronRight } from 'lucide-react';
import dynamic from 'next/dynamic';

import { CityData, citiesData } from './citiesData';
import { useLang } from '@/i18n/useLang';

const LeafletMap = dynamic(() => import('./LeafletMap'), { ssr: false });

export default function HaritaClient() {
  const { t } = useLang();
  const m = t.map;
  // Veri dosyasındaki adlar Türkçe; İngilizce sayfada sözlükteki karşılığı gösterilir.
  const countryName = (name: string) => m.countryNames[name] ?? name;
  const sectorName = (name: string) => m.sectorNames[name] ?? name;

  const [selectedCity, setSelectedCity] = useState<CityData | null>(null);
  const [expandedCountry, setExpandedCountry] = useState<string | null>('Türkiye');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return citiesData;
    const q = searchQuery.toLowerCase();
    return citiesData.filter(c =>
      c.city.toLowerCase().includes(q) ||
      c.country.toLowerCase().includes(q) ||
      (m.countryNames[c.country] ?? c.country).toLowerCase().includes(q)
    );
  }, [searchQuery, m]);

  // Group by country
  const grouped = useMemo(() => {
    const map = new Map<string, { flag: string; cities: CityData[]; total: number }>();
    for (const c of filtered) {
      const g = map.get(c.country) ?? { flag: c.flag, cities: [], total: 0 };
      g.cities.push(c);
      g.total += c.count;
      map.set(c.country, g);
    }
    return Array.from(map.entries()).sort((a, b) => b[1].total - a[1].total);
  }, [filtered]);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 sm:pt-44 lg:pt-52 pb-14 sm:pb-16 overflow-hidden" style={{ background:'#0f172a' }}>
        <div className="container-custom relative z-10 w-full">
          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }} className="text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 text-white">
              {m.hero.titlePre}<span className="text-slate-300">{m.hero.titleHighlight}</span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {m.hero.text}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map + Sidebar */}
      <section className="relative" style={{ background:'#0f172a' }}>
        <div className="container-custom py-8 lg:py-12">
          <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2 }} className="mb-6">
            <div className="relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input type="text" placeholder={m.searchPlaceholder} value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0f2342]/30 focus:bg-white/[0.07] transition-all backdrop-blur-sm" />
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Map */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/30" style={{ height:'560px' }}>
                <LeafletMap locations={filtered} selectedId={selectedCity?.id ?? null} onSelect={id => { const c = citiesData.find(x => x.id === id) ?? null; setSelectedCity(c); if (c) setExpandedCountry(c.country); }} />
              </div>
            </div>

            {/* Sidebar grouped by country */}
            <div className="lg:col-span-4 max-h-[560px] overflow-y-auto pr-1 custom-scrollbar space-y-2">
              {grouped.map(([country, group]) => {
                const isExpanded = expandedCountry === country;
                return (
                  <div key={country} className="rounded-2xl border border-white/[0.06] overflow-hidden">
                    {/* Country header */}
                    <button onClick={() => setExpandedCountry(isExpanded ? null : country)}
                      className={`w-full flex items-center justify-between p-4 transition-all ${isExpanded ? 'bg-[#0f2342]/50' : 'bg-white/[0.03] hover:bg-white/[0.06]'}`}>
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg">{group.flag}</span>
                        <span className="font-bold text-sm text-white">{countryName(country)}</span>
                        <span className="text-[10px] text-slate-500">({m.cityCount(group.cities.length)})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-extrabold px-2.5 py-1 rounded-md ${isExpanded ? 'bg-[#0f2342] text-white border border-white/10' : 'bg-white/10 text-slate-300'}`}>{group.total}</span>
                        <ChevronRight size={14} className={`text-slate-500 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </div>
                    </button>

                    {/* City cards */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }} transition={{ duration:0.3 }} className="overflow-hidden">
                          <div className="px-3 pb-3 space-y-2">
                            {group.cities.map(city => {
                              const isActive = selectedCity?.id === city.id;
                              return (
                                <button key={city.id} onClick={() => setSelectedCity(isActive ? null : city)}
                                  className={`w-full text-left p-3 rounded-xl border transition-all ${isActive ? 'bg-[#0f2342]/30 border-[#0f2342]/50' : 'bg-white/[0.02] border-white/[0.04] hover:bg-white/[0.05]'}`}>
                                  <div className="flex items-center justify-between mb-1.5">
                                    <span className={`font-semibold text-xs ${isActive ? 'text-white' : 'text-slate-300'}`}>{city.city}</span>
                                    <span className="text-[10px] font-bold text-slate-400 bg-white/5 px-2 py-0.5 rounded-md">{m.alumniCount(city.count)}</span>
                                  </div>
                                  {/* Mini sector bar */}
                                  <div className="flex gap-0.5 h-1 w-full rounded-full overflow-hidden bg-white/5">
                                    {city.sectors.map((s,i) => <div key={i} className="h-full rounded-full" style={{ width:`${s.pct}%`, background:s.color, opacity:isActive?1:0.5 }} />)}
                                  </div>
                                  {/* Expanded detail */}
                                  <AnimatePresence>
                                    {isActive && (
                                      <motion.div initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }} transition={{ duration:0.25 }} className="overflow-hidden">
                                        <div className="mt-3 pt-3 border-t border-white/[0.06] space-y-3">
                                          <div className="space-y-2">
                                            <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1"><Briefcase size={9} /> {m.sectors}</div>
                                            {city.sectors.map(s => (
                                              <div key={s.name} className="space-y-0.5">
                                                <div className="flex justify-between text-[10px]">
                                                  <span className="text-slate-400">{sectorName(s.name)}</span>
                                                  <span className="text-white font-bold">%{s.pct}</span>
                                                </div>
                                                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                                  <motion.div initial={{ width:0 }} animate={{ width:`${s.pct}%` }} transition={{ duration:0.8 }} className="h-full rounded-full" style={{ background:s.color }} />
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* KVKK */}
          <div className="mt-8 bg-amber-500/5 border border-amber-500/10 rounded-2xl p-4 flex flex-col gap-3 backdrop-blur-sm">
            <div className="flex gap-3 items-start">
              <ShieldAlert size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-[11px] text-amber-200/70 leading-relaxed font-medium">
                {m.kvkk1}
              </p>
            </div>
            <div className="flex gap-3 items-start border-t border-amber-500/10 pt-3">
              <ShieldAlert size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-[11px] text-amber-200/70 leading-relaxed font-medium">
                {m.kvkk2}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
