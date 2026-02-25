import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-arabic",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VENZA | م. لينا ناصر اليازجي — مصممة معمارية",
  description:
    "مساحات بأسلوب وظيفي وجمالي — تصميم داخلي وخارجي للمقاهي والمكاتب والحدائق",
  keywords: [
    "تصميم داخلي",
    "تصميم خارجي",
    "مصممة معمارية",
    "VENZA",
    "لينا اليازجي",
    "مقاهي",
    "مكاتب",
    "حدائق",
  ],
  openGraph: {
    title: "VENZA | م. لينا ناصر اليازجي",
    description: "مساحات بأسلوب وظيفي وجمالي",
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${ibmPlexArabic.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1 pt-20 pb-12 w-full max-w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
