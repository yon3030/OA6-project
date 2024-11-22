import Head from 'next/head';
import { ThemeProvider } from '@/lib/context';
import { ThemeProvider as MaterialThemeProvider } from "@material-tailwind/react";
import './global.css';

export const metadata = {
  title: 'OASIX',
  description: '...',
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <ThemeProvider>
          {/* <MaterialThemeProvider> */}
            {children}
          {/* </MaterialThemeProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
