'use client';

import React, { ReactNode, createContext, useContext, useMemo, useState } from 'react';

type TLoadingContext = {
  loading: boolean;
  setLoading(value: boolean): void;
};

export const LoadingContext = createContext<TLoadingContext>({ loading: false, setLoading: () => {} });

export const useLoadingContext = () => useContext(LoadingContext);

function LoadingProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const loadingContextValue = useMemo(() => ({ loading, setLoading }), [loading]);

  return <LoadingContext.Provider value={loadingContextValue}>{children}</LoadingContext.Provider>;
}

export default LoadingProvider;
