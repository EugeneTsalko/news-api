import { z } from 'zod';

export const schemaNews = z.object({
  source: z.object({ id: z.union([z.string(), z.null()]), name: z.string() }),
  author: z.union([z.string(), z.null()]),
  title: z.string(),
  description: z.string(),
  url: z.string(),
  urlToImage: z.union([z.string(), z.null()]),
  publishedAt: z.string(),
  content: z.string(),
});

export const schemaNewsResponse = z.object({
  status: z.string(),
  totalResults: z.number(),
  articles: schemaNews.array(),
});
