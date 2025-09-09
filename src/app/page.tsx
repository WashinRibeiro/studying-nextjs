import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Aula Next JS do zero!",
  description: "Aprendendo Next JS do zero com Sujeito Programador!",
  openGraph: {
    title: "Home - Aprendendo Next JS!",
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

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
