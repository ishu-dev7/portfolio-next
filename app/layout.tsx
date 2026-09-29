import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/constants/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_URL = "https://portfolio-harendra.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE.name} — ${SITE.title}`,
  description:
    "Software Developer with 3 years building enterprise .NET applications, optimizing SQL Server, and integrating AI into production systems. Based in Indore, India.",
  keywords: [
    ".NET Developer",
    "ASP.NET Core",
    "C# Developer",
    "Angular Developer",
    "Full Stack Developer",
    "SQL Server Performance",
    "Azure OpenAI",
    "AI Integration",
    "Backend Specialist",
    "Enterprise SaaS",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: `${SITE.name} — ${SITE.title}`,
    description:
      "Software Developer with 3 years building enterprise .NET applications, optimizing SQL Server, and integrating AI into production systems. Based in Indore, India.",
    url: SITE_URL,
    siteName: `${SITE.name} Portfolio`,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.title}`,
    description:
      "Software Developer with 3 years building enterprise .NET applications, optimizing SQL Server, and integrating AI into production systems. Based in Indore, India.",
    images: ["/og-image.png"],
  },
};

const THEME_INIT_SCRIPT = `
(function() {
  try {
    var theme = localStorage.getItem('portfolio-theme');
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    }
  } catch (e) {}
})();
`;

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: SITE.title,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  url: SITE_URL,
  sameAs: [SITE.github, SITE.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}
