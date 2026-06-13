import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Portfolio | Creative Developer",
  description: "Personal portfolio website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${outfit.variable}`}>
      <body style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
