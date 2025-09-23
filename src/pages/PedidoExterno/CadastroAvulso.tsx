import CadastroCliente from "../../components/form/clientes/CadastroCliente";
import CadastroPedido from "../../components/form/pedidos/CadastroPedido";

export default function CadastroAvulso() {
  return (
    <>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/IMG_logo_%282017%29.svg/1200px-IMG_logo_%282017%29.svg.png"
        alt="logo"
        className="mx-auto w-40 my-5"
      />

      <div className="max-w-3xl mx-auto mb-10 space-y-8 p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold">Cadastro de Pedido Avulso</h1>

        <section>
          <h2 className="text-xl font-semibold mb-2">Informações do Cliente</h2>
          <CadastroCliente mostrarAcoes={false} />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Pedido</h2>
          <CadastroPedido mostrarAcoes={false} />
        </section>

        <div className="flex justify-end gap-4 mt-8">
          <button
            type="button"
            className="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs transition-colors hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 sm:w-auto"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="flex justify-center w-full px-4 py-3 text-sm font-medium text-white rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600 sm:w-auto"
          >
            Concluir Pedido
          </button>
        </div>
      </div>
    </>
  );
}
