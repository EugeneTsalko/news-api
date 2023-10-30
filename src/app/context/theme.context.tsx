'use client';

import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useMemo, useState } from 'react';

type TTheme = 'light' | 'dark';

type TThemeContext = {
  theme: TTheme;
  setTheme: Dispatch<SetStateAction<TTheme>>;
};

const ThemeContext = createContext<TThemeContext>({ theme: 'light', setTheme: () => {} });

export const useThemeContext = () => useContext(ThemeContext);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<TTheme>('light');

  const themeContextValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {/* <body className={cn({ dark: theme === 'dark' })}>{children}</body> */}
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
