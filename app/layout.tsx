import React from 'react';
import Header from './components/Header/Header';
import '@/styles/common.scss';

export const metadata = {
  title: 'News by EugeneTsalko',
  description: 'News application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
