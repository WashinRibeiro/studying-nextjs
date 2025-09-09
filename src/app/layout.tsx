import { Header } from "@/components/header";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aula NextJS do Zero!",
  description: "Aprendendo Next JS do zero com Sujeito Programador!",
  openGraph: {
    title: "Aprendendo Next JS!",
    description: "Aprendendo Next JS do zero com Sujeito Programador!",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
