import React, { ReactNode } from 'react';
import NewsProvider from '@/context/news.context';
import '@/styles/common.scss';
import { Toaster } from 'react-hot-toast';
import NextThemesProvider from './providers/theme.provider';
import Header from './components/Header/Header';

export const metadata = {
  title: 'News by EugeneTsalko',
  description: 'News application',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <NextThemesProvider>
        <NewsProvider>
          <body>
            <Header />
            {children}
            <Toaster />
          </body>
        </NewsProvider>
      </NextThemesProvider>
    </html>
  );
}
