// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#703596] shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap items-center justify-center gap-4 sm:justify-between text-sm sm:text-base">
        <div className="font-bold text-white text-xl tracking-wide">ABC</div>
        <ul className="flex flex-wrap gap-4 sm:gap-6 text-white font-medium">
          <li>
            <Link href="/" className="hover:underline hover:text-yellow-300 transition-colors">
              Página Inicial
            </Link>
          </li>
          <li>
            <Link href="/cadastro" className="hover:underline hover:text-yellow-300 transition-colors">
              Cadastro
            </Link>
          </li>
          <li>
            <Link href="/jogo-matematica" className="hover:underline hover:text-yellow-300 transition-colors">
              Jogo de Matemática
            </Link>
          </li>
          <li>
            <Link href="/jogo-palavras" className="hover:underline hover:text-yellow-300 transition-colors">
              Jogo de Palavras
            </Link>
          </li>
          <li>
            <Link href="/ranking" className="hover:underline hover:text-yellow-300 transition-colors">
              Ranking
            </Link>
          </li>
          <li>
            <Link href="/admin" className="hover:underline hover:text-yellow-300 transition-colors">
              Admin
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
