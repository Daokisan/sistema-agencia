"use client";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function EditorProduto() {
  const navigate = useNavigate();

  // Dados existentes do produto
  const dadosProduto = {
    nome: "Trilha na Serra",
    valor:  900,
    fornecedor: "fornecedor02",
    tipoData: "dataHora", // ou "data", ou "hora"
    dataHora: "2025-06-01T09:00",
    data: "",
    hora: "",
  };

  const [form, setForm] = useState(dadosProduto);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enviando dados atualizados:", form);
    // Aqui vai o fetch/axios para salvar no backend
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Nome</label>
          <input
            name="nome"
            value={form.nome}
            onChange={handleChange}
            className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Valor</label>
          <input
            type="number"
            name="valor"
            step="0.01"
            value={form.valor}
            onChange={handleChange}
            className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Fornecedor</label>
          <select
            name="fornecedor"
            value={form.fornecedor}
            onChange={handleChange}
            className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
          >
            <option value="">Selecione</option>
            <option value="fornecedor01">Fornecedor 01</option>
            <option value="fornecedor02">Fornecedor 02</option>
            <option value="fornecedor03">Fornecedor 03</option>
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Tipo de Data</label>
          <select
            name="tipoData"
            value={form.tipoData}
            onChange={handleChange}
            className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
          >
            <option value="">Selecione</option>
            <option value="dataHora">Data e Hora</option>
            <option value="data">Somente Data</option>
            <option value="hora">Somente Hora</option>
          </select>
        </div>

        {form.tipoData === "dataHora" && (
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Data e Hora</label>
            <input
              type="datetime-local"
              name="dataHora"
              value={form.dataHora}
              onChange={handleChange}
              className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
            />
          </div>
        )}

        {form.tipoData === "data" && (
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Data</label>
            <input
              type="date"
              name="data"
              value={form.data}
              onChange={handleChange}
              className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
            />
          </div>
        )}

        {form.tipoData === "hora" && (
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Hora</label>
            <input
              type="time"
              name="hora"
              value={form.hora}
              onChange={handleChange}
              className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
            />
          </div>
        )}
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <button
          type="button"
          onClick={() => navigate("/produtos")}
          className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="rounded-lg bg-brand-500 px-4 py-3 text-sm font-medium text-white hover:bg-brand-600"
        >
          Atualizar
        </button>
      </div>
    </form>
  );
}
