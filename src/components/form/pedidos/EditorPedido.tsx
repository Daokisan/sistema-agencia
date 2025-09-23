"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditorPedido() {
  const navigate = useNavigate();

  // Dados existentes do pedido
  const dadosPedido = {
    cliente: "cliente02",
    codigo: "PED123",
    data: "2025-07-10",
    hora: "14:30",
    status: "P",
    total: 1200.5,
    saldo: 300,
    desconto: 50,
  };

  const [form, setForm] = useState(dadosPedido);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados atualizados do pedido:", form);
    // Aqui vai o fetch/axios para salvar no backend
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Cliente */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Cliente</label>
        <select
          name="cliente"
          value={form.cliente}
          onChange={handleChange}
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
        >
          <option value="">Selecione</option>
          <option value="cliente01">Cliente 01</option>
          <option value="cliente02">Cliente 02</option>
          <option value="cliente03">Cliente 03</option>
        </select>
      </div>

      {/* Código */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Código</label>
        <input
          name="codigo"
          type="text"
          value={form.codigo}
          onChange={handleChange}
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
        />
      </div>

      {/* Data */}
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

      {/* Hora */}
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

      {/* Status */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Status</label>
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
        >
          <option value="">Selecione</option>
          <option value="A">Aguardando</option>
          <option value="P">Pago</option>
          <option value="C">Cancelado</option>
        </select>
      </div>

      {/* Total */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Total</label>
        <input
          type="number"
          step="0.01"
          name="total"
          value={form.total}
          onChange={handleChange}
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
        />
      </div>

      {/* Saldo */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Saldo</label>
        <input
          type="number"
          step="0.01"
          name="saldo"
          value={form.saldo}
          onChange={handleChange}
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
        />
      </div>

      {/* Desconto */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Desconto</label>
        <input
          type="number"
          step="0.01"
          name="desconto"
          value={form.desconto}
          onChange={handleChange}
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
        />
      </div>

      {/* Botões */}
      <div className="md:col-span-2 flex justify-end space-x-2 pt-4">
        <button
          type="button"
          onClick={() => navigate("/pedidos")}
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
