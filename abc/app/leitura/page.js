"use client";

import { useState } from "react";
import Header from "../components/Header";

export default function Leitura() {
  const [textoSelecionado, setTextoSelecionado] = useState(textos[0].conteudo);
  const [dificuldade, setDificuldade] = useState("todos");
  const [tema, setTema] = useState("todos");

  // Filtro de textos por dificuldade e tema
  const textosFiltrados = textos.filter((t) => {
    return (
      (dificuldade === "todos" || t.dificuldade === dificuldade) &&
      (tema === "todos" || t.tema === tema)
    );
  });

  const handleTextoChange = (e) => {
    setTextoSelecionado(e.target.value);
  };

  const speakText = () => {
    if ("speechSynthesis" in window) {
      // Verifica se há texto selecionado no campo
      const selection = document.getSelection();
      let textoParaLer;

      if (selection && selection.toString().trim() !== "") {
        // Usa a seleção do usuário
        textoParaLer = selection.toString();
      } else {
        // Se não houver seleção, lê o texto inteiro
        textoParaLer = textoSelecionado;
      }

      const utterance = new SpeechSynthesisUtterance(textoParaLer);
      utterance.lang = "pt-BR";
      speechSynthesis.speak(utterance);
    } else {
      alert("Seu navegador não suporta leitura automática.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f6f2dc] font-sans p-6">
      <Header />
      <div className="mb-8"></div>

      <h1 className="text-3xl font-bold text-[#703596] mb-4">📖 Leitura</h1>
      <p className="mb-6 text-gray-700 max-w-md text-center">
        Escolha o texto e tema desejado e ative a leitura automática.
      </p>

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 w-full max-w-lg">
        <div>
          <label htmlFor="dificuldade" className="block text-sm font-medium mb-1">
            Dificuldade
          </label>
          <select
            id="dificuldade"
            value={dificuldade}
            onChange={(e) => setDificuldade(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1"
          >
            <option value="todos">Todos</option>
            <option value="fácil">Fácil</option>
            <option value="médio">Médio</option>
            <option value="difícil">Difícil</option>
          </select>
        </div>
        <div>
          <label htmlFor="tema" className="block text-sm font-medium mb-1">
            Tema
          </label>
          <select
            id="tema"
            value={tema}
            onChange={(e) => setTema(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1"
          >
            <option value="todos">Todos</option>
            <option value="ciência">Ciência</option>
            <option value="história">História</option>
            <option value="literatura">Literatura</option>
          </select>
        </div>
      </div>

      {/* Lista de textos filtrados */}
      <div className="bg-white rounded shadow p-4 mb-4 w-full max-w-xl h-40 overflow-y-auto">
        <textarea
          value={textoSelecionado}
          onChange={handleTextoChange}
          className="w-full h-full resize-none focus:outline-none"
          placeholder="Selecione uma parte do texto para ler..."
        ></textarea>
      </div>

      {/* Botão de leitura */}
      <button
        onClick={speakText}
        className="bg-[#0095d2] hover:bg-blue-700 text-white px-6 py-2 rounded transition"
      >
        🔊 Ler em voz alta
      </button>

      <footer className="text-xs text-gray-600 text-center mt-10 py-2">
        © 2025 Sua Plataforma Educacional e Inclusiva
      </footer>
    </div>
  );
}

// Exemplo de base de textos
const textos = [
  {
    dificuldade: "fácil",
    tema: "ciência",
    conteudo: "A água é essencial para a vida. Ela cobre mais da metade do planeta.",
  },
  {
    dificuldade: "fácil",
    tema: "história",
    conteudo: "O Brasil foi descoberto em 1500 por Pedro Álvares Cabral.",
  },
  {
    dificuldade: "médio",
    tema: "literatura",
    conteudo: "Machado de Assis escreveu Dom Casmurro, um dos livros mais famosos da literatura brasileira.",
  },
  {
    dificuldade: "difícil",
    tema: "ciência",
    conteudo: "A teoria da relatividade foi desenvolvida por Albert Einstein e mudou nossa compreensão sobre tempo e espaço.",
  },
];