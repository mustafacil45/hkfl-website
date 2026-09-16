'use client';

import { usePathname } from 'next/navigation';
import { dictionaries, getLangFromPath, localeOf, routes, switchLangHref, type Lang, type RouteKey } from './index';

/**
 * Aktif dil adresten türetilir (`/en/...` → en, aksi hâlde tr); ayrıca
 * bir sağlayıcıya gerek yoktur. `href('about')` sayfanın bu dildeki adresini verir.
 */
export function useLang() {
  const pathname = usePathname() ?? '/';
  const lang: Lang = getLangFromPath(pathname);
  const t = dictionaries[lang];
  const href = (key: RouteKey) => routes[key][lang];
  const switchTo = (target: Lang) => switchLangHref(pathname, target);
  return { lang, t, href, switchTo, locale: localeOf[lang], pathname };
}
