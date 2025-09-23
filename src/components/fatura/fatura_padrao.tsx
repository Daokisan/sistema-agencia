

interface ItemFatura {
  id: number;
  nome: string;
  quantidade: number;
  custoUnitario: number;
}

interface FaturaProps {
  idFatura: string;
  de: {
    nome: string;
    endereco: string;
    dataEmissao: string;
  };
  para: {
    nome: string;
    endereco: string;
    dataVencimento: string;
  };
  itens: ItemFatura[];
  percentualImposto?: number;
}

export default function Fatura({
  idFatura,
  de,
  para,
  itens,
  percentualImposto = 10,
}: FaturaProps) {
  const subtotal = itens.reduce((acc, item) => acc + item.quantidade * item.custoUnitario, 0);
  const valorImposto = (percentualImposto / 100) * subtotal;
  const total = subtotal + valorImposto;

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md max-w-4xl mx-auto">
      {/* Cabeçalho */}
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Fatura</h1>
        <span className="text-sm text-gray-500 dark:text-gray-400">ID: <strong>#{idFatura}</strong></span>
      </div>

      {/* De & Para */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b pb-6 mb-6">
        <div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">De</h3>
          <p className="text-base font-semibold text-gray-800 dark:text-white">{de.nome}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">{de.endereco}</p>
          <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">Emitida em: <strong>{de.dataEmissao}</strong></p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Para</h3>
          <p className="text-base font-semibold text-gray-800 dark:text-white">{para.nome}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">{para.endereco}</p>
          <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">Vencimento: <strong>{para.dataVencimento}</strong></p>
        </div>
      </div>

      {/* Tabela de Itens */}
     <div className='overflow-hidden rounded-2xl border border-gray-100 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]'>
     <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border rounded-lg">
          <thead className="border-b border-gray-100 dark:border-white/[0.05] ">
            <tr>
              <th className=" px-5 py-3 text-sm font-medium text-left text-gray-700 dark:text-gray-400">#</th>
              <th className=" px-5 py-3 text-sm font-medium text-left text-gray-700 dark:text-gray-400">Produto</th>
              <th className=" px-5 py-3 text-sm font-medium text-left text-gray-700 dark:text-gray-400">Quantidade</th>
              <th className=" px-5 py-3 text-sm font-medium text-left text-gray-700 dark:text-gray-400">Custo Unitário</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
            {itens.map((item, index) => (
              <tr key={item.id}>
                <td className=" px-5 py-3.5 text-left dark:border-white/[0.05] text-gray-500 text-theme-sm dark:text-gray-400">{index + 1}</td>
                <td className=" px-5 py-3.5 text-left dark:border-white/[0.05] text-gray-500 text-theme-sm dark:text-gray-400">{item.nome}</td>
                <td className=" px-5 py-3.5 text-left dark:border-white/[0.05] text-gray-500 text-theme-sm dark:text-gray-400">{item.quantidade}</td>
                <td className=" px-5 py-3.5 text-left dark:border-white/[0.05] text-gray-500 text-theme-sm dark:text-gray-400">R${item.custoUnitario.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     </div>

      {/* Totais */}
      <div className="mt-6 text-right space-y-1 text-sm text-gray-700 dark:text-gray-300">
        <div>Subtotal: <span className="font-semibold">R${subtotal.toFixed(2)}</span></div>
        <div>Taxa ({percentualImposto}%): <span className="font-semibold">R${valorImposto.toFixed(2)}</span></div>
        <div className="text-base font-bold text-black dark:text-white">
          Total: <span className="text-lg">R${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Botões */}
      <div className="mt-6 flex justify-end gap-4">
        <button
          className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
        >
          Prosseguir para pagamento
        </button>
        <button
          onClick={() => window.print()}
          className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600"
        >
          Imprimir
        </button>
      </div>
    </div>
  );
}
