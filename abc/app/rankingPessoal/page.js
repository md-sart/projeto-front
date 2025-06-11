"use client";

import Header from "../components/Header";

export default function Ranking() {
  // Simulação de dados do usuário
  const usuario = {
    nome: "João Silva",
    matematica: 85,
    palavras: 72,
    total: 157,
  };

  // Simulação de ranking geral (top 10)
  const rankingGeral = [
    { nome: "Ana Maria", total: 250 },
    { nome: "Carlos Eduardo", total: 235 },
    { nome: "Julia Costa", total: 210 },
    { nome: "Lucas Lima", total: 198 },
    { nome: "Beatriz Souza", total: 185 },
    { nome: "Felipe Almeida", total: 175 },
    { nome: "Isabela Rocha", total: 168 },
    { nome: "Guilherme Ferreira", total: 160 },
    { nome: "Larissa Martins", total: 152 },
    { nome: "Matheus Oliveira", total: 145 },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f6f2dc] font-sans p-6">
      <Header />
      <div className="mb-8"></div>

      <h1 className="text-3xl font-bold text-[#ec2b2a] mb-4">🏆 Seu Desempenho</h1>

      {/* Informações do usuário */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mb-8">
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="font-semibold text-lg mb-2">Nome</h2>
          <p className="text-xl">{usuario.nome}</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="font-semibold text-lg mb-2">Matemática</h2>
          <p className="text-xl">{usuario.matematica} pontos</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="font-semibold text-lg mb-2">Palavras</h2>
          <p className="text-xl">{usuario.palavras} pontos</p>
        </div>
      </div>

      {/* Ranking Geral */}
      <h2 className="text-2xl font-bold text-[#ec2b2a] mb-4">Top 10 Geral</h2>
      <ul className="bg-white shadow rounded w-full max-w-md p-4">
        {rankingGeral.map((item, index) => (
          <li key={index} className={`py-2 ${index < 3 ? "font-bold" : ""}`}>
            {index + 1}. {item.nome} - {item.total} pontos
          </li>
        ))}
      </ul>

      <footer className="text-xs text-gray-600 text-center mt-10 py-2">
        © 2025 Sua Plataforma Educacional e Inclusiva
      </footer>
    </div>
  );
}