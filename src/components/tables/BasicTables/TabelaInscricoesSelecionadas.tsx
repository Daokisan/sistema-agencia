"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

const inscricoesMock = [
  {
    id: 1,
    nome: "João Silva",
    cpf: "123.456.789-00",
    dataNascimento: "10/05/1990",
    peso: "78kg",
  },
];

export default function TabelaInscricoesSelecionadas() {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-gray-800 dark:text-white">
        Inscrições Selecionadas
      </h3>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            {/* Cabeçalho */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Nome
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  CPF
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Data de Nascimento
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Peso
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Corpo da Tabela */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {inscricoesMock.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                      {item.nome}
                    </span>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-theme-sm text-gray-700 dark:text-gray-300 text-start">
                    {item.cpf}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-theme-sm text-gray-700 dark:text-gray-300 text-start">
                    {item.dataNascimento}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-theme-sm text-gray-700 dark:text-gray-300 text-start">
                    {item.peso}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
