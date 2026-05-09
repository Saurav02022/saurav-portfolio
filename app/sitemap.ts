import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';

/**
 * Single canonical URL for this SPA-style portfolio.
 * Do not list hash-only URLs — crawlers treat them as the same resource and sitemaps should use real URLs only.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
}
