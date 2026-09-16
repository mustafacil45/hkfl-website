import { SITE_URL } from '@/lib/site';

/**
 * Google, arama sonuçlarındaki site adını ana sayfadaki WebSite yapısal verisinden
 * alır; bu yüzden yalnızca ana sayfalarda (/, /en) render edilir.
 */
export default function WebSiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: 'HKMED',
    alternateName: ['Halil Kale Fen Lisesi Mezunlar Derneği', 'HKFL Mezunlar Derneği'],
    inLanguage: ['tr', 'en'],
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
    />
  );
}
