import {
  Allura,
  Cormorant_Garamond,
  Inter,
  Lora,
  Montserrat,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "greek"],
});

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin", "greek"],
  weight: ["500", "600", "700"],
});

const lora = Lora({
  variable: "--font-accent",
  subsets: ["latin", "greek"],
  weight: ["500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "greek"],
  weight: ["500", "600", "700"],
});

const allura = Allura({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Derma Medicare | Advanced Dermatology & Aesthetic Skin Care",
  description:
    "Premium dermatology and aesthetic skin care with a calm, modern, patient-centered approach.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="el"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${montserrat.variable} ${lora.variable} ${cormorantGaramond.variable} ${allura.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
