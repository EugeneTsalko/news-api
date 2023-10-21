'use client';

import React, { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import { NewsWithId } from '@/models/types';

type TNewsContext = {
  news: NewsWithId[];
  setNews(news: NewsWithId[]): void;
};

export const NewsContext = createContext<TNewsContext>({
  news: [],
  setNews: () => {},
});

export const useNewsContext = () => useContext(NewsContext);

function NewsProvider({ children }: { children: ReactNode }) {
  const [news, setNews] = useState<NewsWithId[]>([]);
  const newsContextValue = useMemo(() => ({ news, setNews }), [news]);

  return <NewsContext.Provider value={newsContextValue}>{children}</NewsContext.Provider>;
}

export default NewsProvider;
