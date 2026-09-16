'use client';

import Link from 'next/link';
import { LANGS } from '@/i18n';
import { useLang } from '@/i18n/useLang';

export default function LangSwitch({ className = '' }: { className?: string }) {
  const { lang, t, switchTo } = useLang();

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={`inline-flex items-center rounded-full border border-gray-200 bg-gray-50 p-0.5 text-xs font-bold tracking-wide ${className}`}
    >
      {LANGS.map((code) => {
        const active = code === lang;
        return (
          <Link
            key={code}
            href={switchTo(code)}
            hrefLang={code}
            lang={code}
            aria-current={active ? 'page' : undefined}
            className={`px-2.5 py-1 rounded-full transition-colors ${
              active ? 'bg-[#0f2342] text-white' : 'text-gray-500 hover:text-[#0f2342]'
            }`}
          >
            {code.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
