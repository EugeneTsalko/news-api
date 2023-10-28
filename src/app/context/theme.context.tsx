'use client';

import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useMemo, useState } from 'react';
import cn from 'classnames';

interface TTheme {
  theme: 'light' | 'dark';
}

interface TThemeContext extends TTheme {
  setTheme: Dispatch<SetStateAction<'light' | 'dark'>>;
}

const ThemeContext = createContext<TThemeContext>({ theme: 'light', setTheme: () => {} });

export const useThemeContext = () => useContext(ThemeContext);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const themeContextValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <body className={cn({ dark: theme === 'dark' })}>{children}</body>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
