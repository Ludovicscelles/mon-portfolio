import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Ludovic Scelles - Portfolio',
  description: 'Portfolio de Ludovic Scelles, développeur web',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}