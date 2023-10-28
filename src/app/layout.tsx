import React, { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import NewsProvider from '@/context/news.context';
import Header from './components/Header/Header';
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
        <ThemeProvider>
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
      </NewsProvider>
    </html>
  );
}
