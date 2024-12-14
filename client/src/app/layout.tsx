import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wise Wallet",
  description:
    "Wise Wallet: Simplifique sua organização financeira com uma aplicação web intuitiva. Gerencie despesas, planeje orçamentos e monitore investimentos com facilidade. Comece hoje mesmo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrat.className} ${openSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
