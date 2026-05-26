import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CrackBoy Umar | Official Artist Page | Music, Art & More",
  description:
    "CrackBoy Umar is a Nigerian artist, songwriter, and painter from Lagos. Explore his music, original paintings, social links, and latest updates all in one place.",
  keywords: [
    "CrackBoy Umar",
    "CrackboyUmar",
    "Nigerian artist",
    "Lagos musician",
    "Afrobeats",
    "songwriter",
    "painter",
    "CrackBoy Umar music",
    "CrackBoy Umar art",
    "CrackBoy Umar Spotify",
    "PLAY Forly P",
  ],
  authors: [{ name: "CrackBoy Umar" }],
  creator: "CrackBoy Umar",
  metadataBase: new URL("https://crackboyumar.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CrackBoy Umar | Official Artist Page",
    description:
      "Explore CrackBoy Umar's music, original artwork, and creative journey. A Nigerian artist and songwriter from Lagos making waves across borders.",
    type: "website",
    siteName: "CrackBoy Umar",
    locale: "en_US",
    url: "https://crackboyumar.vercel.app",
    images: [
      {
        url: "/hero.jpg",
        width: 800,
        height: 1000,
        alt: "CrackBoy Umar portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CrackBoy Umar | Official Artist Page",
    description:
      "Nigerian artist, songwriter, and painter from Lagos. Explore his music, art, and story.",
    images: ["/hero.jpg"],
    creator: "@crackboyumar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              name: "CrackBoy Umar",
              alternateName: "CrackboyUmar",
              description:
                "Nigerian artist, songwriter, and painter from Lagos. His music sits at the intersection of reality and abstraction.",
              url: "https://crackboyumar.vercel.app",
              image: "https://crackboyumar.vercel.app/hero.jpg",
              genre: ["Afrobeats", "Alternative"],
              location: {
                "@type": "Place",
                name: "Lagos, Nigeria",
              },
              sameAs: [
                "https://open.spotify.com/artist/0G4vop6K0cReBDwUDP9yjK",
                "https://instagram.com/crackboyumar",
                "https://twitter.com/crackboyumar",
                "https://tiktok.com/@crackboyumar",
                "https://youtube.com/@crackboyumar",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
