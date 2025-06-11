"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function JogoPalavras() {
  const [palavra, setPalavra] = useState(gerarPalavra());
  const [resposta, setResposta] = useState("");
  const [feedback, setFeedback] = useState("");
  const [pontos, setPontos] = useState(0);

  useEffect(() => {
    const score = localStorage.getItem("score_palavras") || "0";
    setPontos(parseInt(score));
  }, []);

  useEffect(() => {
    localStorage.setItem("score_palavras", pontos);
  }, [pontos]);

  function gerarPalavra() {
    const palavras = ["casa", "livro", "mesa", "caneta", "sol", "carro", "gato", "janela"];
    const palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)];
    return {
      palavra: palavraSorteada,
      dica: `Dica: começa com "${palavraSorteada[0]}" e tem ${palavraSorteada.length} letras`,
    };
  }

  function verificarResposta() {
    if (resposta.toLowerCase().trim() === palavra.palavra) {
      setFeedback("✔️ Correto!");
      setPontos(pontos + 1);
    } else {
      setFeedback(`❌ Errado. A resposta era "${palavra.palavra}"`);
    }
    setResposta("");
    setPalavra(gerarPalavra());
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f6f2dc] font-sans p-6">
      <Header />
      <div className="mb-8"></div> {/* Espaço vertical */}

      <h1 className="text-3xl font-bold text-[#0095d2] mb-4">🔤 Jogo de Palavras</h1>

      <p className="mb-6 text-gray-700 max-w-md text-center">
        Adivinhe a palavra com base na dica. Você ganha 1 ponto por acerto!
      </p>

      <div className="bg-white rounded-lg shadow-md p-6 text-center w-full max-w-md">
        <div className="text-xl font-semibold mb-4 text-[#0095d2]">
          {palavra.dica}
        </div>

        <input
          type="text"
          value={resposta}
          onChange={(e) => setResposta(e.target.value)}
          placeholder="Digite sua resposta"
          className="border border-[#0095d2] rounded px-4 py-2 mb-2 w-full text-center focus:outline-none focus:border-blue-700"
          style={{ color: "#0095d2" }} // Cor do texto
        />

        <button
          onClick={verificarResposta}
          className="bg-[#0095d2] text-white px-4 py-2 mt-2 rounded hover:bg-blue-700 transition w-full"
        >
          Verificar
        </button>

        <div className="mt-4 text-lg font-medium">{feedback}</div>
      </div>

      <p className="mt-6 text-sm text-gray-600">Pontuação: {pontos}</p>

      <footer className="text-xs text-gray-600 text-center mt-10 py-2">
        © 2025 Sua Plataforma Educacional e Inclusiva
      </footer>
    </div>
  );
}