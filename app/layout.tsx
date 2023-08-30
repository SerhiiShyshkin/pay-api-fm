import './globals.scss';
import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';

const publicSans = Public_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pay Api | Frontend Mentor',
  description: 'Project from Frontend Mentor',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={publicSans.className}>{children}</body>
    </html>
  );
}
