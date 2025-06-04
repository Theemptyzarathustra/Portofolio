import type { Metadata } from 'next';
import './globals.css';
import ThemeToggle from './components/ThemeToggle';

export const metadata: Metadata = {
  title: 'Cloud Engineer Portfolio',
  description: 'Portfolio website showcasing cloud engineering expertise and projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
} 