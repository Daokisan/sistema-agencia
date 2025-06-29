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

interface Order {
  id: number;
  user: {
    name: string;
  };

}

const tableData: Order[] = [
  {
    id: 1,
    user: {
      name: "João",
    },
   
  },
  {
    id: 2,
    user: {
      name: "Rafa",
    },
   
  },
];

export default function TabelaUsuarios() {
  const [openExcluir, setOpenExcluir] = useState<number | null>(null);
  const navigate = useNavigate();
  return (
    <>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Nome do usuário
                </TableCell>
               
                {/* Títulos alinhados à direita */}
                <TableCell
                  isHeader
                  className="px-5 py-3  font-medium text-gray-500 text-end text-theme-xs dark:text-gray-400"
                >
                  Ações
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {order.user.name}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  

                  {/* Célula de Ações */}
                  <TableCell className="px-4 py-3 text-gray-500 text-end text-theme-sm dark:text-gray-400">
                    <div className="flex justify-end gap-2">
                      {" "}
                      {/* Flex com gap entre os botões */}
                      {/* Botão Permissoes */}
                      <button
                        onClick={() =>
                          navigate("/usuarios/permissoes-usuario")
                        }
                        className="flex gap-2 items-center justify-center p-3 font-medium text-white border-none rounded-lg bg-indigo-600 text-theme-sm transition hover:bg-indigo-700"
                      >
                      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 13.4L10.7143 15L15 11" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 16.0002C21 18.8286 21 20.2429 20.1213 21.1215C19.2426 22.0002 17.8284 22.0002 15 22.0002H9C6.17157 22.0002 4.75736 22.0002 3.87868 21.1215C3 20.2429 3 18.8286 3 16.0002V13.0002M16 4.00195C18.175 4.01406 19.3529 4.11051 20.1213 4.87889C21 5.75757 21 7.17179 21 10.0002V12.0002M8 4.00195C5.82497 4.01406 4.64706 4.11051 3.87868 4.87889C3.11032 5.64725 3.01385 6.82511 3.00174 9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M8 3.5C8 2.67157 8.67157 2 9.5 2H14.5C15.3284 2 16 2.67157 16 3.5V4.5C16 5.32843 15.3284 6 14.5 6H9.5C8.67157 6 8 5.32843 8 4.5V3.5Z" stroke="#ffffff" stroke-width="1.5"></path> </g></svg>
                        Permissões
                      </button>
                      {/* Botão Editar */}
                      <button
                        onClick={() =>
                          navigate("/usuarios/editar-usuario")
                        }
                        className="flex gap-2 items-center justify-center p-3 font-medium text-white border-none rounded-lg bg-amber-500 text-theme-sm transition hover:bg-amber-600"
                      >
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M10 21.9948C6.58687 21.9658 4.70529 21.7764 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            ></path>{" "}
                            <path
                              d="M2.5 7.25C2.08579 7.25 1.75 7.58579 1.75 8C1.75 8.41421 2.08579 8.75 2.5 8.75V7.25ZM22 7.25H2.5V8.75H22V7.25Z"
                              fill="#ffffff"
                            ></path>{" "}
                            <path
                              d="M10.5 2.5L7 8"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            ></path>{" "}
                            <path
                              d="M17 2.5L13.5 8"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            ></path>{" "}
                            <path
                              d="M18.562 13.9354L18.9791 13.5183C19.6702 12.8272 20.7906 12.8272 21.4817 13.5183C22.1728 14.2094 22.1728 15.3298 21.4817 16.0209L21.0646 16.438M18.562 13.9354C18.562 13.9354 18.6142 14.8217 19.3962 15.6038C20.1783 16.3858 21.0646 16.438 21.0646 16.438M18.562 13.9354L14.7275 17.77C14.4677 18.0297 14.3379 18.1595 14.2262 18.3027C14.0945 18.4716 13.9815 18.6544 13.8894 18.8478C13.8112 19.0117 13.7532 19.1859 13.637 19.5344L13.2651 20.65L13.1448 21.0109M21.0646 16.438L17.23 20.2725C16.9703 20.5323 16.8405 20.6621 16.6973 20.7738C16.5284 20.9055 16.3456 21.0185 16.1522 21.1106C15.9883 21.1888 15.8141 21.2468 15.4656 21.363L14.35 21.7349L13.9891 21.8552M13.9891 21.8552L13.6281 21.9755C13.4567 22.0327 13.2676 21.988 13.1398 21.8602C13.012 21.7324 12.9673 21.5433 13.0245 21.3719L13.1448 21.0109M13.9891 21.8552L13.1448 21.0109"
                              stroke="#ffffff"
                              stroke-width="1.5"
                            ></path>{" "}
                          </g>
                        </svg>
                        Editar
                      </button>
                      {/* Botão Excluir */}
                      <button
                        onClick={() => setOpenExcluir(order.id)}
                        className="flex gap-2 items-center justify-center p-3 font-medium text-white border-none rounded-lg bg-red-500 text-theme-sm transition hover:bg-red-600"
                      >
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.5001 6H3.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M9.5 11L10 16" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M14.5 11L14 16" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6" stroke="#ffffff" stroke-width="1.5"></path> <path d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                        Excluir
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Modal Excluir */}
      {openExcluir !== null && (
        <ModalExcluirFuncionario
          funcionarioId={openExcluir}
          onClose={() => setOpenExcluir(null)}
        />
      )}
    </>
  );
}
