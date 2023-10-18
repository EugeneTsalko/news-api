import React, { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import NewsProvider from '@/context/news.context';
import Header from './components/Header/Header';
import '@/styles/common.scss';

export const metadata = {
  title: 'News by EugeneTsalko',
  description: 'News application',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <NewsProvider>
        <body>
          <Header />
          {children}
          <Toaster />
        </body>
      </NewsProvider>
    </html>
  );
}
