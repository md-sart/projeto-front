"use client";

import { useEffect, useState } from "react";

const palavras = ["computador", "educacao", "brasil", "banana", "javascript"];

export default function JogoPalavras() {
  const [indice, setIndice] = useState(0);
  const [letras, setLetras] = useState([]);
  const [tentativa, setTentativa] = useState("");
  const [feedback, setFeedback] = useState("");
  const [pontos, setPontos] = useState(0);

  useEffect(() => {
    const score = localStorage.getItem("score_palavras") || "0";
    setPontos(parseInt(score));
    embaralharPalavra();
  }, []);

  useEffect(() => {
    localStorage.setItem("score_palavras", pontos);
  }, [pontos]);

  function embaralharPalavra() {
    const palavra = palavras[indice % palavras.length];
    const embaralhada = palavra.split("").sort(() => 0.5 - Math.random());
    setLetras(embaralhada);
    setTentativa("");
    setFeedback("");
  }

  function verificarPalavra() {
    const palavraCorreta = palavras[indice % palavras.length];
    if (tentativa.toLowerCase() === palavraCorreta) {
      setFeedback("✔️ Muito bem!");
      setPontos(pontos + 1);
      setIndice(indice + 1);
      setTimeout(embaralharPalavra, 1000);
    } else {
      setFeedback("❌ Tente novamente.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f6f2dc] font-sans p-6">
      <h1 className="text-3xl font-bold text-[#0095d2] mb-4">🔤 Jogo de Palavras</h1>
      <p className="mb-6 text-gray-700 max-w-md text-center">
        Adivinhe qual é a palavra a partir das letras embaralhadas. Use sua memória e raciocínio!
      </p>
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <div className="text-2xl font-semibold mb-4">
          {letras.join(" ")}
        </div>
        <input
          type="text"
          value={tentativa}
          onChange={(e) => setTentativa(e.target.value)}
          className="border border-gray-400 rounded px-4 py-2 mb-2 text-center"
        />
        <br />
        <button
          onClick={verificarPalavra}
          className="bg-[#0095d2] text-white px-4 py-2 rounded hover:bg-blue-700 transition"
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
