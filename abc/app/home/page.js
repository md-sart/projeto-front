"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { useEffect, useState } from "react";

export default function HomeLogada() {
  const [mensagem, setMensagem] = useState("");
  const mensagens = [
    "🎯 Aprender é um superpoder!",
    "🚀 Continue evoluindo!",
    "📚 Cada desafio conta!",
    "💡 Seu cérebro está em treino!",
  ];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setMensagem((prev) => {
        const index = mensagens.indexOf(prev);
        return mensagens[(index + 1) % mensagens.length];
      });
    }, 4000); // Troca a cada 4 segundos
    setMensagem(mensagens[0]);
    return () => clearInterval(intervalo);
  }, []);

  const saudacao = () => {
    const hora = new Date().getHours();
    if (hora < 12) return "Bom dia";
    if (hora < 18) return "Boa tarde";
    return "Boa noite";
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f2dc] font-sans">
      {/* Header logado */}
      <Header />

      {/* Conteúdo Principal */}
      <main className="flex flex-col gap-10 items-center text-center p-6 sm:p-10 relative overflow-hidden">
        {/* Emoji flutuante decorativo */}
        <div className="absolute top-4 left-4 animate-bounce text-3xl sm:text-5xl">🧠</div>

        {/* Logo */}
        <Image
          src="/lampada.svg"
          alt="Logo da Plataforma"
          width={120}
          height={120}
          priority
          className="rounded-full"
        />

        {/* Boas-vindas com saudação */}
        <div>
          <h1 className="text-4xl font-bold text-[#703596] mb-2">{saudacao()}, jogador!</h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-md">
            Essa é a sua área logada. Explore desafios, pratique leitura e suba no pódio!
          </p>
        </div>

        {/* Frase de motivação rotativa */}
        <div className="text-[#0095d2] font-semibold text-md italic">{mensagem}</div>

        {/* Ações principais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
          <Link
            className="rounded-xl bg-[#703596] hover:bg-purple-800 text-white text-md py-3 px-6 font-semibold transition"
            href="/desafios/jogo-matematica"
          >
            🎯 Jogo de Matemática
          </Link>
          <Link
            className="rounded-xl bg-[#0095d2] hover:bg-blue-700 text-white text-md py-3 px-6 font-semibold transition"
            href="/desafios/jogo-palavras"
          >
            🔤 Jogo de Palavras
          </Link>
          <Link
            className="rounded-xl bg-[#f3c916] hover:bg-yellow-400 text-[#703596] text-md py-3 px-6 font-semibold transition"
            href="/leitura"
          >
            📖 Leitura
          </Link>
          <Link
            className="rounded-xl bg-green-500 hover:bg-green-600 text-white text-md py-3 px-6 font-semibold transition"
            href="/ranking"
          >
            🏆 Pódio
          </Link>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="text-xs text-gray-600 text-center mt-6 py-2">
        © 2025 Sua Plataforma Educacional e Inclusiva
      </footer>
    </div>
  );
}
