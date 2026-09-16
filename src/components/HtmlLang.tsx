'use client';

import { useEffect } from 'react';
import { useLang } from '@/i18n/useLang';

/** Kök layout `<html lang="tr">` üretir; /en altındaki sayfalarda tarayıcı tarafında "en"e çevrilir. */
export default function HtmlLang() {
  const { lang } = useLang();
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
