import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "Ferdinand Arya Wijaya — Front-End Developer",
  description:
    "Portfolio of Ferdinand Arya Wijaya, Informatics Student at Universitas Bunda Mulia Serpong & Front-End Developer specializing in React, Next.js, and TypeScript.",
  keywords: [
    "Ferdinand Arya Wijaya",
    "Front-End Developer",
    "Junior Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Developer Indonesia",
    "Universitas Bunda Mulia",
  ],
  authors: [{ name: "Ferdinand Arya Wijaya" }],
  alternates: {
    canonical: "https://ferdinandarya.com",
  },
  openGraph: {
    title: "Ferdinand Arya Wijaya — Front-End Developer",
    description:
      "Informatics Student & Front-End Developer building clean, responsive web applications using React, Next.js, and TypeScript.",
    type: "website",
    url: "https://ferdinandarya.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferdinand Arya Wijaya — Front-End Developer",
    description: "Informatics Student & Front-End Developer building clean, responsive web applications.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ferdinand Arya Wijaya",
  "jobTitle": "Front-End Developer",
  "almaMater": "Universitas Bunda Mulia Serpong",
  "url": "https://ferdinandarya.com",
  "sameAs": [
    "https://github.com/TricQs",
    "https://www.linkedin.com/in/ferdinandaryaw/"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <meta name="color-scheme" content="dark" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#060606] text-[#f5f5f7] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md focus:font-semibold shadow-xl"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
