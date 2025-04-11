import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

// Optimize font loading
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  title: "Redwan Ahmed Ratul | E-sports Caster | RDH JUNIOR",
  description: "Dynamic e-sports caster with a proven track record at Liquid Esports, delivering rapid analytical commentary and electrifying play-by-play action.",
  keywords: ["Redwan Ahmed Ratul", "RDH JUNIOR", "E-sports Caster", "Gaming Commentary", "Esports", "Play-by-play", "EA FC Mobile", "Free Fire", "Efootball"],
  authors: [{ name: "Redwan Ahmed Ratul", url: "https://www.youtube.com/@RDHJUNIOR926" }],
  creator: "Redwan Ahmed Ratul",
  metadataBase: new URL("https://mehedims.com"),
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mehedims.com",
    title: "Redwan Ahmed Ratul | E-sports Caster | RDH JUNIOR",
    description: "Dynamic e-sports caster with a proven track record at Liquid Esports, delivering rapid analytical commentary and electrifying play-by-play action.",
    siteName: "Redwan Ahmed Ratul | E-sports Caster | RDH JUNIOR",
    images: [
      {
        url: "/images/socialshare.png",
        width: 1200,
        height: 630,
        alt: "Redwan Ahmed Ratul - E-sports Caster",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Redwan Ahmed Ratul | E-sports Caster | RDH JUNIOR",
    description: "Dynamic e-sports caster with a proven track record at Liquid Esports, delivering rapid analytical commentary and electrifying play-by-play action.",
    images: ["/images/socialshare.png"],
    creator: "@RDHJUNIOR926",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://mehedims.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="theme-color" content="#1E40AF" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#111827" media="(prefers-color-scheme: dark)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${inter.className} safe-bottom`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
