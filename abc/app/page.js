import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#f3c916] to-[#703596] shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap items-center justify-center gap-4 sm:justify-between text-sm sm:text-base">
          <div className="font-bold text-black text-xl tracking-wide">Duda Games</div>
          <ul className="flex flex-wrap gap-4 sm:gap-6 text-black font-medium">
            <li>
              <Link href="/" className="hover:underline hover:text-white transition-colors">
                Página Inicial
              </Link>
            </li>
            <li>
              <Link href="/cadastro" className="hover:underline hover:text-white transition-colors">
                Cadastro
              </Link>
            </li>
            <li>
              <Link href="/jogo-matematica" className="hover:underline hover:text-white transition-colors">
                Jogo de Matemática
              </Link>
            </li>
            <li>
              <Link href="/jogo-palavras" className="hover:underline hover:text-white transition-colors">
                Jogo de Palavras
              </Link>
            </li>
            <li>
              <Link href="/ranking" className="hover:underline hover:text-white transition-colors">
                Ranking
              </Link>
            </li>
            <li>
              <Link href="/admin" className="hover:underline hover:text-white transition-colors">
                Admin
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex flex-col gap-10 items-center text-center p-6 sm:p-10">
        {/* Logo */}
        <Image
          src="/lampada.svg"
          alt="Logo da Plataforma"
          width={120}
          height={120}
          priority
          className="rounded-full"
        />

        {/* Título e Subtítulo */}
        <div>
          <h1 className="text-4xl font-bold text-purple-800 mb-2">Olá, Duda!</h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-md">
            Aprenda de forma divertida com desafios, jogos e atividades personalizadas.
          </p>
        </div>

        {/* Botões principais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
          <a
            className="rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-md py-3 px-6 font-semibold transition"
            href="/desafios"
          >
            🎯 Desafios
          </a>
          <a
            className="rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-md py-3 px-6 font-semibold transition"
            href="/praticar"
          >
            📖 Praticar
          </a>
          <a
            className="rounded-xl bg-red-500 hover:bg-red-600 text-white text-md py-3 px-6 font-semibold transition"
            href="/atividades"
          >
            📝 Atividades
          </a>
          <a
            className="rounded-xl bg-green-500 hover:bg-green-600 text-white text-md py-3 px-6 font-semibold transition"
            href="/podio"
          >
            🏆 Pódio
          </a>
        </div>

        {/* Botões de conta */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a
            className="rounded-full bg-yellow-400 hover:bg-yellow-500 text-purple-900 text-sm sm:text-base h-10 sm:h-12 px-6 font-bold transition"
            href="/cadastro"
          >
            Cadastre-se
          </a>
          <a
            className="rounded-full border border-purple-600 text-purple-700 hover:bg-purple-100 text-sm sm:text-base h-10 sm:h-12 px-6 font-bold transition"
            href="/login"
          >
            Já tenho conta
          </a>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="text-xs text-gray-500 text-center mt-6 py-2">
        © 2025 Sua Plataforma Educacional
      </footer>
    </div>
  );
}
