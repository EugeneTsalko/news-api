import React, { ReactNode } from 'react';
import NewsProvider from '@/context/news.context';
import '@/styles/common.scss';
import ThemeProvider from './context/theme.context';

export const metadata = {
  title: 'News by EugeneTsalko',
  description: 'News application',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <NewsProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </NewsProvider>
    </html>
  );
}
