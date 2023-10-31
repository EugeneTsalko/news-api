'use client';

import useThemeDetector from '@/hooks/useThemeDetector';
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type TTheme = 'light' | 'dark';

type TThemeContext = {
  theme: TTheme;
  setTheme: Dispatch<SetStateAction<TTheme>>;
};

const ThemeContext = createContext<TThemeContext>({ theme: 'light', setTheme: () => {} });

export const useThemeContext = () => useContext(ThemeContext);

function ThemeProvider({ children }: { children: ReactNode }) {
  const systemTheme = useThemeDetector();
  const [theme, setTheme] = useState<TTheme>(systemTheme);

  const themeContextValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  useEffect(() => {
    setTheme(systemTheme);
  }, [systemTheme]);

  return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
