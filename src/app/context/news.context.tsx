'use client';

import React, { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import { NewsWithId } from '@/models/types';

type State = {
  loading: boolean;
  news: NewsWithId[];
};

type TNewsContext = {
  state: State;
  setState(state: State): void;
};

export const NewsContext = createContext<TNewsContext>({
  state: {
    loading: false,
    news: [],
  },
  setState: () => {},
});

export const useNewsContext = () => useContext(NewsContext);

function NewsProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>({ loading: false, news: [] });
  const newsContextValue = useMemo(() => ({ state, setState }), [state]);

  return <NewsContext.Provider value={newsContextValue}>{children}</NewsContext.Provider>;
}

export default NewsProvider;
