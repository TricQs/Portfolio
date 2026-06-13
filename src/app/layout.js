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
  title: "Ferdinand Arya Wijaya | Front-End Developer & AI Prompt Engineer",
  description:
    "Personal portfolio of Ferdinand Arya Wijaya — Informatics Student at Universitas Bunda Mulia Serpong specializing in Front-End Development, UI/UX, and AI Prompt Engineering.",
  keywords: [
    "Ferdinand Arya Wijaya",
    "Front-End Developer",
    "AI Prompt Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Ferdinand Arya Wijaya" }],
  openGraph: {
    title: "Ferdinand Arya Wijaya | Front-End Developer & AI Prompt Engineer",
    description:
      "Personal portfolio showcasing modern web development and AI-powered workflows.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
