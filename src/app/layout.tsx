import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aniket Dhiman | Full Stack Web Developer",
  description: "Full Stack Developer with expertise in Node.js, React, Next.js and PostgreSQL. Building scalable, efficient web applications with modern architecture.",
  keywords: ["Aniket Dhiman", "Full Stack Developer", "Node.js", "React", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Web Development"],
  authors: [{ name: "Aniket Dhiman" }],
  openGraph: {
    title: "Aniket Dhiman | Full Stack Web Developer",
    description: "Full Stack Developer with expertise in Node.js, React, Next.js and PostgreSQL. Building scalable, efficient web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aniket Dhiman | Full Stack Web Developer",
    description: "Full Stack Developer with expertise in Node.js, React, Next.js and PostgreSQL.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
