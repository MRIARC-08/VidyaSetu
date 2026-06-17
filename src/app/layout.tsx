import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import MainLayout from './mainLayout';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

const themeScript = `
  try {
    const storageKey = 'vidyasetu-theme';
    const storedTheme = localStorage.getItem(storageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = storedTheme === 'dark' || storedTheme === 'light'
      ? storedTheme
      : prefersDark
        ? 'dark'
        : 'light';

    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
  } catch {}
`;

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${manrope.variable}  antialiased `}>
        <ScrollReveal />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
