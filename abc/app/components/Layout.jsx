"use client";

import { useRouter, usePathname } from "next/navigation";
import Header from "./Header";
import HeaderLP from "./HeaderLP";

export default function Layout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const publicPages = ["/", "/login", "/cadastro"];
  const isPublicPage = publicPages.includes(pathname);

  return (
    <>
      {isPublicPage ? <HeaderLP /> : <Header />}
      <main className="flex-1 flex flex-col items-center justify-start p-6 sm:p-10">
        {children}
      </main>
      <footer className="text-xs text-gray-600 text-center py-4">
        © 2025 Plataforma Educacional e Inclusiva
      </footer>
    </>
  );
}
