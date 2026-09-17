import "./globals.css";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const headingFont = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-heading' });

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={cn("dark font-sans", geist.variable, headingFont.variable)}>
      <body>
        {children}
      </body>
    </html>
  );
}