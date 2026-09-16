import type { MetadataRoute } from 'next';
import { routes, type RouteKey } from '@/i18n/routes';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

const abs = (path: string) => `${SITE_URL}${path === '/' ? '' : path}`;

/** Her sayfa iki dilde de listelenir; hreflang alternatifleri rota tablosundan gelir. */
export default function sitemap(): MetadataRoute.Sitemap {
  const keys = Object.keys(routes) as RouteKey[];
  return keys.flatMap((key) => {
    const languages = { tr: abs(routes[key].tr), en: abs(routes[key].en) };
    return [
      { url: abs(routes[key].tr), alternates: { languages }, priority: key === 'home' ? 1 : 0.7 },
      { url: abs(routes[key].en), alternates: { languages }, priority: key === 'home' ? 0.9 : 0.6 },
    ];
  });
}
