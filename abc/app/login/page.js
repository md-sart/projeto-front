// login/page.js
import { useState } from "react";
import HeaderLP from "../components/HeaderLP";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você poderá integrar o login e carregamento de dados
    console.log("Tentativa de login:", formData);
    alert("Login efetuado! (Simulação)");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f2dc] font-sans">
      <HeaderLP />

      <main className="flex flex-col gap-10 items-center text-center p-6 sm:p-10 max-w-md mx-auto w-full">
        <h1 className="text-4xl font-bold text-[#703596] mb-6">Login do Jogador</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full text-left text-gray-700"
        >
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
              placeholder="Senha"
            />
          </label>

          <button
            type="submit"
            className="rounded-xl bg-[#703596] hover:bg-purple-800 text-white text-md py-3 px-6 font-semibold transition"
          >
            Entrar
          </button>
        </form>
      </main>

      <footer className="text-xs text-gray-600 text-center mt-6 py-2">
        © 2025 Sua Plataforma Educacional e Inclusiva
      </footer>
    </div>
  );
}
