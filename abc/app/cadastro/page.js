"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import HeaderLP from "./components/HeaderLP";
import Footer from "./components/Footer";

export default function Cadastro() {
  const router = useRouter();
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
    localStorage.setItem("usuario", JSON.stringify(formData));
    alert("Conta criada com sucesso! Você está logado.");
    router.push("/home");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f2dc] font-sans">
      <HeaderLP />

      <main className="flex-grow flex flex-col gap-10 items-center text-center p-6 sm:p-10 max-w-md mx-auto w-full">
        <h1 className="text-4xl font-bold text-[#703596] mb-6">Cadastro de Novo Jogador</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full text-left text-gray-700">
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

          <button
            type="submit"
            className="rounded-xl bg-[#703596] hover:bg-purple-800 text-white text-md py-3 px-6 font-semibold transition"
          >
            Cadastrar
          </button>
        </form>

        <p className="text-sm text-gray-700">
          Já tem conta?{" "}
          <Link href="/login" className="text-[#703596] hover:underline">
            Faça login
          </Link>
        </p>
      </main>

      <Footer />
    </div>
  );
}
