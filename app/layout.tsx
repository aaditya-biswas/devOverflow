import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/context/Theme";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navigation/navbar";
import {Toaster } from '@/components/ui/sonner';
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

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

const  RootLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await auth();
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={cn("}", "h-full", "antialiased", inter.variable, spaceGrotesk.variable, "font-sans", geist.variable)}
    >
      <SessionProvider session={session}>
      <body className="flex min-h-full flex-col">

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                  <Toaster/>

          {children}
        </ThemeProvider>
      </body>
      </SessionProvider>
    </html>
  );
}
export default RootLayout;