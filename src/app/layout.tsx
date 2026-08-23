import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Yayasan Saladin Peradaban Berilmu",
  description:
    "Membangun kembali peradaban Islam yang berlandaskan ilmu pengetahuan, karakter mulia, dan aksi nyata di tengah masyarakat.",
  applicationName: "GenSa — Generasi Shalahuddin",
};

export const viewport: Viewport = {
  themeColor: "#751e26",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-beige font-sans text-ink antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
