/**
 * Dil ve rota tanımları. Türkçe site kök dizinde, İngilizce site `/en` altında yaşar.
 * Her sayfa bir anahtarla (`RouteKey`) anılır; bağlantılar dil değişince
 * bu tablo üzerinden çevrilir.
 */

export const LANGS = ['tr', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'tr';

export const routes = {
  home: { tr: '/', en: '/en' },
  about: { tr: '/hakkimizda', en: '/en/about' },
  map: { tr: '/harita', en: '/en/alumni-map' },
  contact: { tr: '/iletisim', en: '/en/contact' },
  privacy: { tr: '/gizlilik-politikasi', en: '/en/privacy-policy' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;

/** Sondaki eğik çizgiyi atar: "/en/" -> "/en", "/" olduğu gibi kalır. */
const normalize = (pathname: string) =>
  pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

export function getLangFromPath(pathname: string): Lang {
  const p = normalize(pathname);
  return p === '/en' || p.startsWith('/en/') ? 'en' : 'tr';
}

export function getRouteKey(pathname: string): RouteKey | null {
  const p = normalize(pathname);
  for (const key of Object.keys(routes) as RouteKey[]) {
    if (routes[key].tr === p || routes[key].en === p) return key;
  }
  return null;
}

/** Aynı sayfanın hedef dildeki adresi; eşleşme yoksa o dilin ana sayfası. */
export function switchLangHref(pathname: string, target: Lang): string {
  return routes[getRouteKey(pathname) ?? 'home'][target];
}
