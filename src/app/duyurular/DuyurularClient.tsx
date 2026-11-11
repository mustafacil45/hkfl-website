'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Clock, MapPin, ExternalLink, ListOrdered } from 'lucide-react';
import { useLang } from '@/i18n/useLang';
import type { Announcement } from '@/i18n';

/** "2026-11-11" → "11 Kasım 2026" / "November 11, 2026" (saat dilimi kaymasın diye UTC). */
function formatPublished(iso: string, locale: string) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(Date.UTC(y, m - 1, d)),
  );
}

export default function DuyurularClient() {
  const { t, locale } = useLang();
  const a = t.announcements;
  // En yeni duyuru en üstte: önce yayın tarihi, aynı tarihte listeye en son eklenen.
  const items = [...a.items].reverse().sort((x, y) => y.published.localeCompare(x.published));

  return (
    <>
      {/* ── Page Hero ── */}
      <section
        className="relative pt-36 sm:pt-44 lg:pt-60 pb-20 sm:pb-28 lg:pb-32 overflow-hidden flex items-center min-h-[460px]"
        style={{ background: 'url("/images/okul-cephe.jpeg") center/cover no-repeat' }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(255, 255, 255, 0.92)' }} />
        <div className="container-custom relative z-10 text-center w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">{a.hero.title}</h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">{a.hero.text}</p>
          </motion.div>
        </div>
      </section>

      {/* ── Liste ── */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          {items.length === 0 ? (
            <p className="text-center text-gray-500">{a.empty}</p>
          ) : (
            <div className="space-y-10">
              {items.map((item, i) => (
                <AnnouncementCard
                  key={item.id}
                  item={item}
                  index={i}
                  labels={a.labels}
                  published={formatPublished(item.published, locale)}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function AnnouncementCard({
  item,
  index,
  labels,
  published,
}: {
  item: Announcement;
  index: number;
  labels: { date: string; time: string; address: string; agenda: string; published: string; directions: string; posterOpen: string };
  published: string;
}) {
  const { details, poster } = item;
  const mapHref = details
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(details.mapQuery ?? details.address)}`
    : null;

  return (
    <motion.article
      id={item.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 + index * 0.08 }}
      className="scroll-mt-28 bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-sm"
      aria-labelledby={`${item.id}-title`}
    >
      <div className={poster ? 'grid gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1fr)_300px]' : ''}>
        <div className="min-w-0">
          {/* Etiket + yayın tarihi */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
            <span className="inline-flex items-center rounded-md bg-[#0f2342] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              {item.tag}
            </span>
            <span className="text-sm text-gray-500">
              {labels.published}: <time dateTime={item.published}>{published}</time>
            </span>
          </div>

          <h2 id={`${item.id}-title`} className="font-display text-2xl sm:text-3xl font-bold text-gray-950 mb-6">
            {item.title}
          </h2>

          {/* Tarih / saat / adres */}
          {details && (
            <dl className="grid gap-3 sm:grid-cols-2 mb-6">
              <InfoTile icon={<CalendarDays size={18} />} label={labels.date} value={details.date} />
              <InfoTile icon={<Clock size={18} />} label={labels.time} value={details.time} />
              <div className="sm:col-span-2">
                <InfoTile
                  icon={<MapPin size={18} />}
                  label={labels.address}
                  value={details.venue ?? details.address}
                  extra={
                    <>
                      {details.venue && <p className="text-sm text-gray-600 break-words">{details.address}</p>}
                      {mapHref && (
                      <a
                        href={mapHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-[#0f2342] underline underline-offset-2 hover:text-[#1d3557]"
                      >
                        {labels.directions} <ExternalLink size={13} />
                      </a>
                      )}
                    </>
                  }
                />
              </div>
            </dl>
          )}

          {item.note && (
            <p className="mb-6 rounded-xl border-l-4 border-[#0f2342] bg-white px-4 py-3 text-sm sm:text-base italic text-gray-700 leading-relaxed">
              {item.note}
            </p>
          )}

          {item.agenda && (
            <div className="mb-6">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#0f2342] mb-3">
                <ListOrdered size={16} /> {labels.agenda}
              </h3>
              <ol className="space-y-2">
                {item.agenda.map((entry, n) => (
                  <li key={entry} className="flex items-start gap-3 text-gray-700">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0f2342]/10 text-xs font-bold text-[#0f2342]">
                      {n + 1}
                    </span>
                    <span className="pt-0.5">{entry}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {item.paragraphs?.map((p) => (
            <p key={p} className="mb-4 text-gray-700 leading-relaxed">
              {p}
            </p>
          ))}

          {item.closing && (
            <div className="mt-6 space-y-1 text-gray-700">
              {item.closing.map((line, n) => (
                <p key={line} className={n === item.closing!.length - 1 ? 'font-semibold text-gray-900' : ''}>
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>

        {poster && (
          <a
            href={poster.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={labels.posterOpen}
            title={labels.posterOpen}
            className="group block self-start max-w-sm mx-auto w-full lg:max-w-none"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={poster.src}
              alt={poster.alt}
              width={poster.width}
              height={poster.height}
              loading="lazy"
              className="w-full h-auto rounded-2xl border border-slate-200 shadow-md transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </a>
        )}
      </div>
    </motion.article>
  );
}

function InfoTile({
  icon,
  label,
  value,
  extra,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  extra?: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-white border border-slate-100 p-4 h-full">
      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#0f2342]/10 text-[#0f2342]">
        {icon}
      </span>
      <div className="min-w-0">
        <dt className="text-xs font-bold uppercase tracking-wider text-gray-500">{label}</dt>
        <dd className="text-gray-900 font-semibold break-words">{value}</dd>
        {extra}
      </div>
    </div>
  );
}
