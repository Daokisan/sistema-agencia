import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CadastroProduto() {
  const navigate = useNavigate(); 

  const [tipoProduto, setTipoProduto] = useState('');

  return (
    <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      
      {/* Nome */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Nome do Produto</label>
        <input
          placeholder="Ex: Passeio de balão"
          type="text"
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>

      {/* Valor */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Valor</label>
        <input
          placeholder="R$ 0,00"
          type="number"
          step="0.01"
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>

      {/* Fornecedor */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Fornecedor</label>
        <select className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800">
          <option value="">Selecione</option>
          <option value="1">Fornecedor A</option>
          <option value="2">Fornecedor B</option>
        </select>
      </div>

      {/* Tipo do Produto */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Tipo do Produto</label>
        <select
          value={tipoProduto}
          onChange={(e) => setTipoProduto(e.target.value)}
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800"
        >
          <option value="">Selecione</option>
          <option value="P">Produto</option>
          <option value="PD">Produto com Data</option>
          <option value="PDH">Produto com Data e Hora</option>
        </select>
      </div>

      {/* Formulário adicional se tipo for PD ou PDH */}
      {tipoProduto === 'PD' && (
        <div className="md:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Data</label>
          <input
            type="date"
            className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
          />
        </div>
      )}

      {tipoProduto === 'PDH' && (
        <>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Data</label>
            <input
              type="date"
              className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Hora</label>
            <input
              type="time"
              className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
            />
          </div>
        </>
      )}

      {/* Botões */}
      <div className="md:col-span-2 flex justify-end space-x-2 pt-4">
        <button
          onClick={() => navigate("/produtos")}
          type="button"
          className="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs transition-colors hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 sm:w-auto"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="flex justify-center w-full px-4 py-3 text-sm font-medium text-white rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600 sm:w-auto"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}
