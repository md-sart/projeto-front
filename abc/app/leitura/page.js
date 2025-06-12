"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
      const selection = document.getSelection();
      let textoParaLer;

      if (selection && selection.toString().trim() !== "") {
        textoParaLer = selection.toString();
      } else {
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
    <div className="min-h-screen flex flex-col bg-[#f5f5f5] font-sans">
      <Header />

      <main className="flex-grow flex flex-col items-center p-6 sm:p-10">
        {/* Título */}
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

        {/* Campo de texto */}
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
      </main>

      <Footer />
    </div>
  );
}

// Base de textos
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
