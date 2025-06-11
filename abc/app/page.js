import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Conteúdo Principal */}
      <main className="flex flex-col gap-10 items-center text-center p-6 sm:p-10">
        {/* Logo */}
        <Image
          src="/lampada.svg"
          alt=" "
          width={120}
          height={120}
          priority
          className="rounded-full"
        />

        {/* Título e Subtítulo */}
        <div>
          <h1 className="text-4xl font-bold text-[#703596] mb-2">Olá, jogador</h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-md">
            Aprenda de forma divertida com desafios, jogos e atividades personalizadas.
          </p>
        </div>

        {/* Botões principais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
          <Link href="/login" className="rounded-xl bg-[#703596] hover:bg-purple-800 text-white text-md py-3 px-6 font-semibold transition flex items-center gap-2">
            🎯 Desafios
          </Link>
          <Link href="/login" className="rounded-xl bg-[#0095d2] hover:bg-blue-700 text-white text-md py-3 px-6 font-semibold transition flex items-center gap-2">
            📖 Praticar
          </Link>
          <Link href="/login" className="rounded-xl bg-[#ec2b2a] hover:bg-red-700 text-white text-md py-3 px-6 font-semibold transition flex items-center gap-2">
            📝 Atividades
          </Link>
          <Link href="/login" className="rounded-xl bg-green-500 hover:bg-green-600 text-white text-md py-3 px-6 font-semibold transition flex items-center gap-2">
            🏆 Ranking
          </Link>
        </div>

        {/* Botões de conta */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/cadastro">
            <a className="rounded-full bg-[#f3c916] hover:bg-yellow-400 text-[#703596] text-sm sm:text-base h-10 sm:h-12 px-6 font-bold transition">
              Cadastre-se
            </a>
          </Link>
          <Link href="/login">
            <a className="rounded-full border border-[#703596] text-[#703596] hover:bg-[#f6f2dc] text-sm sm:text-base h-10 sm:h-12 px-6 font-bold transition">
              Já tenho conta
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}