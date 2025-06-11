"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[#f6f2dc] font-sans`}>
        <Header />
        <main className="flex-1 flex flex-col items-center justify-start p-6 sm:p-10">
          {children}
        </main>
        <footer className="text-xs text-gray-600 text-center py-4">
          © 2025 Plataforma Educacional e Inclusiva
        </footer>
      </body>
    </html>
  );
}