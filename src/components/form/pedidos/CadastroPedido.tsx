import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Inscricao {
  nome: string;
  cpf: string;
  nascimento: string;
  peso: string;
}

function InscricaoForm({ index, inscricao, onChange }: {
  index: number;
  inscricao: Inscricao;
  onChange: (index: number, field: keyof Inscricao, value: string) => void;
}) {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-dark-800 mb-4">
      <h3 className="text-sm font-semibold mb-3">Inscrição #{index + 1}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Nome"
          value={inscricao.nome}
          onChange={(e) => onChange(index, 'nome', e.target.value)}
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
        <input
          type="text"
          placeholder="CPF"
          value={inscricao.cpf}
          onChange={(e) => onChange(index, 'cpf', e.target.value)}
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
        <input
          type="date"
          value={inscricao.nascimento}
          onChange={(e) => onChange(index, 'nascimento', e.target.value)}
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800"
        />
        <input
          type="number"
          placeholder="Peso"
          value={inscricao.peso}
          onChange={(e) => onChange(index, 'peso', e.target.value)}
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>
    </div>
  );
}

interface CadastroPedidoProps {
  mostrarAcoes?: boolean;
}

export default function CadastroPedido({ mostrarAcoes = true }: CadastroPedidoProps) {
  const navigate = useNavigate();
  const [quantidade, setQuantidade] = useState(0);
  const [inscricoes, setInscricoes] = useState<Inscricao[]>([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState('');
  const [status, setStatus] = useState('');
  const [saldo, setSaldo] = useState('');
  const [desconto, setDesconto] = useState('');
  const [total, setTotal] = useState('');

  const handleQuantidadeChange = (value: number) => {
    setQuantidade(value);

    const novasInscricoes = [...inscricoes];
    while (novasInscricoes.length < value) {
      novasInscricoes.push({ nome: '', cpf: '', nascimento: '', peso: '' });
    }
    while (novasInscricoes.length > value) {
      novasInscricoes.pop();
    }

    setInscricoes(novasInscricoes);
  };

  const handleInscricaoChange = (index: number, field: keyof Inscricao, value: string) => {
    const atualizadas = [...inscricoes];
    atualizadas[index][field] = value;
    setInscricoes(atualizadas);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Cliente */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Cliente</label>
        <select className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800">
          <option value="">Selecione</option>
          <option value="1">Cliente A</option>
          <option value="2">Cliente B</option>
        </select>
      </div>

      {/* Código */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Código</label>
        <input
          placeholder="Ex: 12345"
          type="text"
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>

      {/* Produto */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Produto</label>
        <select
          value={produtoSelecionado}
          onChange={(e) => setProdutoSelecionado(e.target.value)}
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800"
        >
          <option value="">Selecione um produto</option>
          <option value="p1">Produto 1</option>
          <option value="p2">Produto 2</option>
        </select>
      </div>

      {/* Quantidade */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Quantidade</label>
        <input
          type="number"
          min={0}
          value={quantidade}
          onChange={(e) => handleQuantidadeChange(Number(e.target.value))}
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>

      {/* Status */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800"
        >
          <option value="">Selecione</option>
          <option value="pendente">Pendente</option>
          <option value="aprovado">Aprovado</option>
          <option value="cancelado">Cancelado</option>
        </select>
      </div>

      {/* Saldo */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Saldo</label>
        <input
          type="text"
          value={saldo}
          onChange={(e) => setSaldo(e.target.value)}
          placeholder="R$ 0,00"
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>

      {/* Desconto */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Desconto</label>
        <input
          type="text"
          value={desconto}
          onChange={(e) => setDesconto(e.target.value)}
          placeholder="R$ 0,00"
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>

      {/* Total */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Total</label>
        <input
          type="text"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          placeholder="R$ 0,00"
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>

      {/* Inscrições */}
      {quantidade > 0 && (
        <div className="col-span-1 md:col-span-2 mt-4">
          <h2 className="text-base font-semibold mb-2 text-gray-800 dark:text-white">Inscrições</h2>
          {inscricoes.map((inscricao, index) => (
            <InscricaoForm
              key={index}
              index={index}
              inscricao={inscricao}
              onChange={handleInscricaoChange}
            />
          ))}
        </div>
      )}

      {/* Ações */}
      {mostrarAcoes && (
        <div className="col-span-1 md:col-span-2 flex justify-end gap-4 mt-6">
          <button
            type="button"
            onClick={() => navigate(-1)} 
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
      )}
    </form>
  );
}
