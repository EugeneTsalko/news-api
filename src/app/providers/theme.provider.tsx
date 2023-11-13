'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';

function NextThemesProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider>{children}</ThemeProvider>;
}

export default NextThemesProvider;
