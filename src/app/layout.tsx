import React, { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header/Header';
import '@/styles/common.scss';
import Provider from './context';

export const metadata = {
  title: 'News by EugeneTsalko',
  description: 'News application',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Provider>
        <body>
          <Header />
          {children}
          <Toaster />
        </body>
      </Provider>
    </html>
  );
}
