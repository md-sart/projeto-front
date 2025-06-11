"use client";

import { useEffect, useState } from "react";

export default function JogoMatematica() {
  const [pergunta, setPergunta] = useState(gerarPergunta());
  const [resposta, setResposta] = useState("");
  const [feedback, setFeedback] = useState("");
  const [pontos, setPontos] = useState(0);

  useEffect(() => {
    const score = localStorage.getItem("score_matematica") || "0";
    setPontos(parseInt(score));
  }, []);

  useEffect(() => {
    localStorage.setItem("score_matematica", pontos);
  }, [pontos]);

  function gerarPergunta() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    const operacoes = ["+", "-", "*"];
    const op = operacoes[Math.floor(Math.random() * operacoes.length)];
    return { a, b, op, resultado: eval(`${a} ${op} ${b}`) };
  }

  function verificarResposta() {
    if (parseInt(resposta) === pergunta.resultado) {
      setFeedback("✔️ Correto!");
      setPontos(pontos + 1);
    } else {
      setFeedback(`❌ Errado. A resposta era ${pergunta.resultado}`);
    }
    setResposta("");
    setPergunta(gerarPergunta());
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f6f2dc] font-sans p-6">
      <h1 className="text-3xl font-bold text-[#703596] mb-4">🎯 Jogo de Matemática</h1>
      <p className="mb-6 text-gray-700 max-w-md text-center">
        Resolva as operações abaixo. Você ganha 1 ponto para cada resposta correta!
      </p>
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <div className="text-xl font-semibold mb-4">
          Quanto é {pergunta.a} {pergunta.op} {pergunta.b}?
        </div>
        <input
          type="number"
          value={resposta}
          onChange={(e) => setResposta(e.target.value)}
          className="border border-gray-400 rounded px-4 py-2 mb-2 text-center"
        />
        <br />
        <button
          onClick={verificarResposta}
          className="bg-[#703596] text-white px-4 py-2 rounded hover:bg-purple-800 transition"
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