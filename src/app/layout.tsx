import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://fatahillah-muhammad.vercel.app";

const description = `${site.tagline}. Portfolio of ${site.name}: RobloxOps, Construction Change Intelligence, Sate Taichan SSJ, and facial expression classification with DeiT.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.contact.githubUrl }],
  creator: site.name,
  keywords: [
    "Fatahillah Muhammad",
    "AI automation",
    "full-stack developer",
    "Next.js",
    "FastAPI",
    "computer vision",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#10141a" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

const themeScript = `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":true;var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";}catch(e){document.documentElement.classList.add("dark");}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      className={`${geistSans.variable} ${jetbrainsMono.variable} dark`}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-canvas text-ink antialiased">{children}</body>
    </html>
  );
}
