import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Só aqui
import Layout from "./components/Layout"; // Corrigir o caminho se necessário

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Plataforma Educacional",
  description: "Plataforma educacional inclusiva",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[#f6f2dc] font-sans`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
