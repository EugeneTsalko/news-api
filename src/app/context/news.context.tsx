'use client';

import React, { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import { NewsWithId } from '@/models/types';

type TNewsContext = {
  loading: boolean;
  setLoading(loading: boolean): void;
  news: NewsWithId[];
  setNews(news: NewsWithId[]): void;
};

export const NewsContext = createContext<TNewsContext>({
  loading: false,
  setLoading: () => {},
  news: [],
  setNews: () => {},
});

export const useNewsContext = () => useContext(NewsContext);

function NewsProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState<NewsWithId[]>([]);

  const newsContextValue = useMemo(
    () => ({ loading, setLoading, news, setNews }),
    [loading, setLoading, news, setNews],
  );

  return <NewsContext.Provider value={newsContextValue}>{children}</NewsContext.Provider>;
}

export default NewsProvider;
