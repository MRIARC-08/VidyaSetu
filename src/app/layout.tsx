import type { Metadata } from 'next';
import { Geist, Geist_Mono, Lexend, Manrope } from 'next/font/google';
import './globals.css';
import MainLayout from './mainLayout';

const manrope = Manrope({
  variable: '--font-manrope-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'VidyaSetu',
  description: 'Still in development',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable}  antialiased `}><MainLayout>{children}</MainLayout></body>
    </html>
  );
}
