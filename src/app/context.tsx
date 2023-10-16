'use client';

import React, { ReactNode, createContext, useContext, useState } from 'react';
import { NewsWithId } from './models/types';

type NewsState = {
  context: NewsWithId[] | null;
  setContext(news: NewsWithId[]): void;
};

const initialNewsState = {
  context: null,
  setContext: () => {},
};

export const NewsContext = createContext<NewsState>(initialNewsState);

export const useNewsContext = () => useContext(NewsContext);

function Provider({ children }: { children: ReactNode }) {
  const [context, setContext] = useState<NewsWithId[] | null>(null);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <NewsContext.Provider value={{ context, setContext }}>{children}</NewsContext.Provider>;
}

export default Provider;
