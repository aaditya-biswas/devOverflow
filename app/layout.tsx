import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/context/Theme";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});
const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "100 200 300 400 500 600 700 800 900",
});
export const metadata: Metadata = {
  title: "DevFlow",
  description: `A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate
  with developers around the world. Explore topics in web development, mobile app development, algorithms, data structures and more.`,
  icons: {
    icon: "public/images/sight-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={cn("}", "h-full", "antialiased", inter.variable, spaceGrotesk.variable, "font-sans", geist.variable)}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {" "}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
