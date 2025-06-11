// cadastro/page.js
import { useState } from "react";
import HeaderLP from "../components/HeaderLP";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    idade: "",
    progresso: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "progresso" || name === "idade" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você poderá integrar com Back4App futuramente
    console.log("Dados para cadastro:", formData);
    alert("Cadastro realizado! (Simulação)");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f2dc] font-sans">
      <HeaderLP />

      <main className="flex flex-col gap-10 items-center text-center p-6 sm:p-10 max-w-md mx-auto w-full">
        <h1 className="text-4xl font-bold text-[#703596] mb-6">Cadastro de Novo Jogador</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full text-left text-gray-700"
        >
          <label className="flex flex-col">
            Nome
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="mt-1 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#703596]"
              placeholder="Seu nome completo"
            />
          </label>

          <label className="flex flex-col">
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#703596]"
              placeholder="exemplo@dominio.com"
            />
          </label>

          <label className="flex flex-col">
            Senha
            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
              className="mt-1 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#703596]"
              placeholder="Senha segura"
              minLength={6}
            />
          </label>

          <label className="flex flex-col">
            Idade (opcional)
            <input
              type="number"
              name="idade"
              value={formData.idade}
              onChange={handleChange}
              min={1}
              max={120}
              className="mt-1 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#703596]"
              placeholder="Sua idade"
            />
          </label>

          <label className="flex flex-col">
            Progresso Inicial
            <input
              type="number"
              name="progresso"
              value={formData.progresso}
              onChange={handleChange}
              readOnly
              className="mt-1 rounded-md border border-gray-300 p-2 bg-gray-100 cursor-not-allowed"
            />
            <small className="text-xs text-gray-500 mt-1">
              O progresso inicia zerado.
            </small>
          </label>

          <button
            type="submit"
            className="rounded-xl bg-[#703596] hover:bg-purple-800 text-white text-md py-3 px-6 font-semibold transition"
          >
            Cadastrar
          </button>
        </form>
      </main>

      <footer className="text-xs text-gray-600 text-center mt-6 py-2">
        © 2025 Sua Plataforma Educacional e Inclusiva
      </footer>
    </div>
  );
}
