import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import { Metadata } from "next";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Производственная эффективность | Удаленный производственный директор",
  description: "Помогаем компаниям внедрять принципы бережливого производства, оптимизировать процессы и сокращать издержки. Услуги удаленного производственного директора.",
  keywords: "бережливое производство, оптимизация процессов, производственный директор, lean production, эффективность производства",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${font.className}`}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
        >
          <Aoscompo>
            <Header />
            {children}
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
