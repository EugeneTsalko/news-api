'use client';

import React, { ReactNode, createContext, useContext, useMemo, useState } from 'react';

export type Selects = {
  sortBy?: string;
  pageSize?: string;
  language?: string;
};

type TParametersContext = {
  selects: Selects;
  setSelects(selects: Selects): void;
};

export const ParametersContext = createContext<TParametersContext>({
  selects: {},
  setSelects: () => {},
});

export const useParametersContext = () => useContext(ParametersContext);

function ParametersProvider({ children }: { children: ReactNode }) {
  const [selects, setSelects] = useState<Selects>({});
  const parametersContextValue = useMemo(() => ({ selects, setSelects }), [selects]);

  return <ParametersContext.Provider value={parametersContextValue}>{children}</ParametersContext.Provider>;
}

export default ParametersProvider;
