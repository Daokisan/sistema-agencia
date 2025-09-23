import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";
import ModalExcluirFuncionario from "../../modals/ModalExcluir";

interface Pedido {
  id: number;
  cliente: string;
  codigo: string;
  data: string;
  hora: string;
  total: number;
  status: "A" | "P" | "C";
}

const dadosOriginais: Pedido[] = [
  { id: 1, cliente: "Cliente A", codigo: "PED001", data: "2025-07-10", hora: "14:00", total: 1200.5, status: "A" },
  { id: 2, cliente: "Cliente B", codigo: "PED002", data: "2025-07-11", hora: "09:30", total: 980, status: "P" },
  { id: 3, cliente: "Cliente C", codigo: "PED003", data: "2025-07-12", hora: "17:15", total: 550, status: "C" },
];

export default function TabelaPedido() {
  const [openExcluir, setOpenExcluir] = useState<number | null>(null);
  const [filtroStatus, setFiltroStatus] = useState("");
  const [filtroCliente, setFiltroCliente] = useState("");

  const navigate = useNavigate();

  const renderStatusTag = (status: "A" | "P" | "C") => {
    const base = "px-2 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case "A": return <span className={`${base} bg-yellow-200 text-yellow-800 dark:bg-yellow-700 dark:text-gray-100`}>Aguardando</span>;
      case "P": return <span className={`${base} bg-green-200 text-green-800 dark:bg-green-700 dark:text-green-100`}>Pago</span>;
      case "C": return <span className={`${base} bg-red-200 text-red-800 dark:bg-red-700 dark:text-red-100`}>Cancelado</span>;
    }
  };

  const pedidosFiltrados = dadosOriginais.filter((pedido) => {
    const statusOk = filtroStatus ? pedido.status === filtroStatus : true;
    const clienteOk = pedido.cliente.toLowerCase().includes(filtroCliente.toLowerCase());
    return statusOk && clienteOk;
  });

  return (
    <>
      {/* Filtros */}
      <div className="mb-4 flex flex-col sm:flex-row items-center gap-3 justify-between">
        <input
          type="text"
          placeholder="Buscar por cliente"
          value={filtroCliente}
          onChange={(e) => setFiltroCliente(e.target.value)}
          className="h-10 w-full sm:w-1/3 rounded-lg border border-gray-300 bg-transparent px-4 py-2 text-sm text-gray-800 shadow-sm placeholder:text-gray-400 focus:border-brand-300 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
        />
        <select
          value={filtroStatus}
          onChange={(e) => setFiltroStatus(e.target.value)}
          className="h-10 w-full sm:w-1/4 rounded-lg border border-gray-300 bg-transparent px-4 py-2 text-sm text-gray-800 shadow-sm focus:border-brand-300 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
        >
          <option value="">Todos os status</option>
          <option value="A">Aguardando</option>
          <option value="P">Pago</option>
          <option value="C">Cancelado</option>
        </select>
      </div>

      {/* Tabela */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 text-start text-gray-500 text-theme-xs dark:text-gray-400">Cliente</TableCell>
                <TableCell isHeader className="px-5 py-3 text-start text-gray-500 text-theme-xs dark:text-gray-400">Código</TableCell>
                <TableCell isHeader className="px-5 py-3 text-start text-gray-500 text-theme-xs dark:text-gray-400">Data</TableCell>
                <TableCell isHeader className="px-5 py-3 text-start text-gray-500 text-theme-xs dark:text-gray-400">Hora</TableCell>
                <TableCell isHeader className="px-5 py-3 text-start text-gray-500 text-theme-xs dark:text-gray-400">Total</TableCell>
                <TableCell isHeader className="px-5 py-3 text-start text-gray-500 text-theme-xs dark:text-gray-400">Status</TableCell>
                <TableCell isHeader className="px-5 py-3 text-end text-gray-500 text-theme-xs dark:text-gray-400">Ações</TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {pedidosFiltrados.length > 0 ? (
                pedidosFiltrados.map((pedido) => (
                  <TableRow key={pedido.id}>
                    <TableCell className="px-5 py-4 text-start">
                      <span className="font-medium text-gray-800 text-theme-sm dark:text-white/90">{pedido.cliente}</span>
                    </TableCell>
                    <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">{pedido.codigo}</TableCell>
                    <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">{pedido.data}</TableCell>
                    <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">{pedido.hora}</TableCell>
                    <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">R$ {pedido.total.toFixed(2)}</TableCell>
                    <TableCell className="px-5 py-4">{renderStatusTag(pedido.status)}</TableCell>
                    <TableCell className="px-5 py-4 text-end">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => navigate("/pedidos/editar-pedido")}
                          className="flex gap-2 items-center justify-center p-3 font-medium text-white border-none rounded-lg bg-amber-500 text-theme-sm transition hover:bg-amber-600"
                        >
                          {/* Ícone de editar (SVG) */}
                          <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 21.9948C6.58687 21.9658 4.70529 21.7764 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                              stroke="#ffffff"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M2.5 7.25C2.08579 7.25 1.75 7.58579 1.75 8C1.75 8.41421 2.08579 8.75 2.5 8.75V7.25ZM22 7.25H2.5V8.75H22V7.25Z"
                              fill="#ffffff"
                            />
                            <path
                              d="M10.5 2.5L7 8"
                              stroke="#ffffff"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M17 2.5L13.5 8"
                              stroke="#ffffff"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M18.562 13.9354L18.9791 13.5183C19.6702 12.8272 20.7906 12.8272 21.4817 13.5183C22.1728 14.2094 22.1728 15.3298 21.4817 16.0209L21.0646 16.438M18.562 13.9354C18.562 13.9354 18.6142 14.8217 19.3962 15.6038C20.1783 16.3858 21.0646 16.438 21.0646 16.438M18.562 13.9354L14.7275 17.77C14.4677 18.0297 14.3379 18.1595 14.2262 18.3027C14.0945 18.4716 13.9815 18.6544 13.8894 18.8478C13.8112 19.0117 13.7532 19.1859 13.637 19.5344L13.2651 20.65L13.1448 21.0109M21.0646 16.438L17.23 20.2725C16.9703 20.5323 16.8405 20.6621 16.6973 20.7738C16.5284 20.9055 16.3456 21.0185 16.1522 21.1106C15.9883 21.1888 15.8141 21.2468 15.4656 21.363L14.35 21.7349L13.9891 21.8552M13.9891 21.8552L13.6281 21.9755C13.4567 22.0327 13.2676 21.988 13.1398 21.8602C13.012 21.7324 12.9673 21.5433 13.0245 21.3719L13.1448 21.0109M13.9891 21.8552L13.1448 21.0109"
                              stroke="#ffffff"
                              strokeWidth="1.5"
                            />
                          </svg>
                          Editar
                        </button>
                        <button
                          onClick={() => setOpenExcluir(pedido.id)}
                          className="flex gap-2 items-center justify-center p-3 font-medium text-white border-none rounded-lg bg-red-500 text-theme-sm transition hover:bg-red-600"
                        >
                          {/* Ícone de excluir */}
                          <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.5 6H3.5"
                              stroke="#ffffff"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M9.5 11L10 16"
                              stroke="#ffffff"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M14.5 11L14 16"
                              stroke="#ffffff"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"
                              stroke="#ffffff"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5"
                              stroke="#ffffff"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                          Excluir
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                <td colSpan={7} className="px-5 py-6 text-center text-gray-400 dark:text-white/50">
                  Nenhum pedido encontrado.
                </td>
              </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Modal de exclusão */}
      {openExcluir !== null && (
        <ModalExcluirFuncionario
          funcionarioId={openExcluir}
          onClose={() => setOpenExcluir(null)}
        />
      )}
    </>
  );
}
