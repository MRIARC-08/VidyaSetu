import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import BackToTop from '@/components/BackToTop';
import MainLayout from './mainLayout';
import ThemeToggle from '@/components/ThemeToggle';

const manrope = Manrope({
  variable: '--font-manrope-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'VidyaSetu',
  description:
    'VidyaSetu is an AI-powered learning platform for NCERT study, quizzes, notes, and progress tracking.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable}  antialiased `}>
        <MainLayout>{children}</MainLayout>
        <BackToTop />
        <ThemeToggle />
      </body>
    </html>
  );
}
