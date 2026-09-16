import { tr, type Dict, type FaqItem } from './tr';
import { en } from './en';
import type { Lang } from './routes';

export type { Dict, FaqItem };
export * from './routes';

export const dictionaries: Record<Lang, Dict> = { tr, en };

/** Sayı biçimlendirme için dilin BCP 47 karşılığı (1.500 / 1,500). */
export const localeOf: Record<Lang, string> = { tr: 'tr-TR', en: 'en-US' };
