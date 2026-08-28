import type { MetadataRoute } from 'next';
import { guidePages, siteUrl } from './_data/guide-content';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-08-28T00:00:00+09:00');
  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    ...guidePages.map((page) => ({
      url: `${siteUrl}/${page.slug}/`,
      lastModified,
      changeFrequency: page.slug === 'notices' ? 'weekly' as const : 'monthly' as const,
      priority: ['cards', 'calculator', 'cultureland'].includes(page.slug) ? 0.8 : 0.7,
    })),
  ];
}
