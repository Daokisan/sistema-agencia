
import { useNavigate } from 'react-router-dom';

export default function CadastroCliente() {
  const navigate = useNavigate(); 
  return (
    <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Nome */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Nome</label>
        <input
          placeholder="João"
          type="text"
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>

      {/* Tipo */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Tipo</label>
        <select className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800">
          <option value="">Selecione</option>
          <option value="F">Pessoa Física</option>
          <option value="J">Pessoa Jurídica</option>
        </select>
      </div>

      {/* Documento */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Documento (CPF/CNPJ)</label>
        <input
          placeholder="000.000.000-00"
          type="text"
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>

      {/* peso */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Peso (Kg)</label>
        <input
          placeholder="80"
          type="number"
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>

       {/* Altura */}
       <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Altura (cm)</label>
        <input
          placeholder="180"
          type="number"
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>

        {/* WhatsApp */}
        <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">WhatsApp</label>
        <input
          placeholder="(99) 99999-9999"
          type="text"
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>
   

      {/* Email */}
      <div className="md:col-span-2">
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Email</label>
        <input
          placeholder="exemplo@gmail.com"
          type="email"
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>

      

      {/* Botões (linha inteira, alinhados à direita) */}
      <div className="md:col-span-2 flex justify-end space-x-2 pt-4">
        <button
          onClick={() => navigate("/clientes")}
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
