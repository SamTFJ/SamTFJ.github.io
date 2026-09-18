import "./globals.css";
import type { Metadata } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const headingFont = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  metadataBase: new URL("https://samtfj.github.io"),
  alternates: { canonical: "/" },
};

export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable, headingFont.variable)}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try { const saved = localStorage.getItem('portfolio-theme') ?? document.cookie.split('; ').find(c => c.startsWith('portfolio-theme='))?.split('=')[1]; document.documentElement.classList.toggle('dark', saved === 'dark'); } catch {}` }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
