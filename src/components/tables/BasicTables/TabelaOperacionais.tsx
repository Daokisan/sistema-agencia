"use client";
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

interface Operacional {
  id: number;
  data: string;
  hora: string;
  departamento: string;
  balao: string;
  solicitante: string;
}

const operacionaisMock: Operacional[] = [
  { id: 1, data: "2025-07-10", hora: "14:00", departamento: "Balonismo", balao: "Balão A", solicitante: "João Admin" },
  { id: 2, data: "2025-07-11", hora: "08:00", departamento: "Aventura", balao: "Balão B", solicitante: "Maria User" },
];

export default function TabelaOperacionais() {
  const [openExcluir, setOpenExcluir] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Data
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Hora
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Departamento
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Balão
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Solicitante
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-end text-theme-xs dark:text-gray-400"
                >
                  Ações
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {operacionaisMock.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                      {item.data}
                    </span>
                  </TableCell>
                  <TableCell className="px-5 py-4 sm:px-6 text-start text-gray-700 dark:text-gray-300">
                    {item.hora}
                  </TableCell>
                  <TableCell className="px-5 py-4 sm:px-6 text-start text-gray-700 dark:text-gray-300">
                    {item.departamento}
                  </TableCell>
                  <TableCell className="px-5 py-4 sm:px-6 text-start text-gray-700 dark:text-gray-300">
                    {item.balao}
                  </TableCell>
                  <TableCell className="px-5 py-4 sm:px-6 text-start text-gray-700 dark:text-gray-300">
                    {item.solicitante}
                  </TableCell>
                  <TableCell className="px-5 py-4 sm:px-6 text-end text-gray-700 dark:text-gray-300">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => navigate(`/operacionais/editar/${item.id}`)}
                        className="flex gap-2 items-center justify-center p-3 font-medium text-white rounded-lg bg-amber-500 text-theme-sm transition hover:bg-amber-600"
                      >
                        {/* Ícone Editar (pode ajustar) */}
                        <svg
                          width="20"
                          height="20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 20h9" />
                          <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
                        </svg>
                        Editar
                      </button>
                      <button
                        onClick={() => setOpenExcluir(item.id)}
                        className="flex gap-2 items-center justify-center p-3 font-medium text-white rounded-lg bg-red-500 text-theme-sm transition hover:bg-red-600"
                      >
                        {/* Ícone Excluir */}
                        <svg
                          width="20"
                          height="20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M3 6h18" />
                          <path d="M8 6v12a2 2 0 002 2h4a2 2 0 002-2V6" />
                          <path d="M10 11v6" />
                          <path d="M14 11v6" />
                          <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
                        </svg>
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

      {openExcluir !== null && (
        <ModalExcluirFuncionario
          funcionarioId={openExcluir}
          onClose={() => setOpenExcluir(null)}
        />
      )}
    </>
  );
}
