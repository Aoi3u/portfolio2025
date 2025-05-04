import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import AosInitializer from "@/components/AosInitializer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Aoi Miura | Web Developer",
  description: "Web developer portfolio for Aoi Miura",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${poppins.variable} bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 text-gray-800`}
      >
        <Header />
        <AosInitializer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
