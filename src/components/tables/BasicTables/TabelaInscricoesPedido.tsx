import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

export default function TabelaInscricoesPedido({ inscricoes }: { inscricoes: any[] }) {
  return (
    <div title="Inscrições" className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] mt-4">
    <h3 className="py-3 px-3 text-base font-medium text-gray-800 dark:text-white/90">Inscrições vinculadas ao pedido</h3>
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell className="px-5 py-4 text-theme-sm text-gray-700 dark:text-gray-300 text-start"  isHeader>Nome</TableCell>
              <TableCell className="px-5 py-4 text-theme-sm text-gray-700 dark:text-gray-300 text-start" isHeader>CPF</TableCell>
              <TableCell className="px-5 py-4 text-theme-sm text-gray-700 dark:text-gray-300 text-start" isHeader>Data de Nascimento</TableCell>
              <TableCell className="px-5 py-4 text-theme-sm text-gray-700 dark:text-gray-300 text-start" isHeader>Peso</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inscricoes.map((i, idx) => (
              <TableRow key={idx}>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-700 dark:text-gray-300 text-start" >{i.nome}</TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-700 dark:text-gray-300 text-start" >{i.cpf}</TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-700 dark:text-gray-300 text-start" >{i.nascimento}</TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-700 dark:text-gray-300 text-start" >{i.peso} kg</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
