import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lucas Glave',
  description: 'Portfolio Full Stack Developer - UX/UI - MOBILE',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
