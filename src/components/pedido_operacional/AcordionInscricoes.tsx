import { useState } from "react";

interface Inscricao {
  nome: string;
  cpf: string;
  nascimento: string;
  peso: number;
}

export default function AccordionInscricoes({ inscricoes }: { inscricoes: Inscricao[] }) {
  return (
    <div className="space-y-3 mt-4">
      {inscricoes.map((inscricao, index) => (
        <AccordionItem key={index} index={index + 1} inscricao={inscricao} />
      ))}
    </div>
  );
}

function AccordionItem({ index, inscricao }: { index: number; inscricao: Inscricao }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg bg-white shadow-sm dark:bg-white/[0.03] dark:border-white/[0.05]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-5 py-4 flex justify-between items-center text-theme-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/[0.05]"
      >
        <span>Inscrição {index}</span>
        <span className="text-gray-400">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="px-5 py-4 border-t border-gray-100 dark:border-white/[0.05]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-theme-sm text-gray-700 dark:text-gray-300">
            <Info label="Nome" value={inscricao.nome} />
            <Info label="CPF" value={inscricao.cpf} />
            <Info label="Data de Nascimento" value={inscricao.nascimento} />
            <Info label="Peso" value={`${inscricao.peso} kg`} />
          </div>
        </div>
      )}
    </div>
  );
}

function Info({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex flex-col">
      <span className="text-gray-500 dark:text-gray-400">{label}:</span>
      <span>{value}</span>
    </div>
  );
}
