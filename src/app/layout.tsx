import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ViewTransitionProvider from "../components/ViewTransitionProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      
      <body className={inter.className}>
        <Header />

        <ViewTransitionProvider>
          {children}
        </ViewTransitionProvider>

        <Footer />
      </body>
    </html>
  );
}
