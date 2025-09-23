export default function ResumoOperacional({ pedido }: { pedido: any }) {
  const pesoMax = 500;
  const capacidadeMax = 2;

  const pesoUsado = pedido?.pesoTotal || 0;
  const adultos = pedido?.adultos || 0;
  const criancas = pedido?.criancas || 0;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-theme-sm">
      <CardInfo titulo="Peso Restante" valor={`${pesoMax - pesoUsado}kg / ${pesoMax}kg`} />
      <CardInfo titulo="Capacidade Restante" valor={`${capacidadeMax - adultos} / ${capacidadeMax}`} />
      <CardInfo titulo="Adultos Adicionados" valor={adultos} />
      <CardInfo titulo="Crianças Adicionadas" valor={criancas} />
    </div>
  );
}

function CardInfo({ titulo, valor }: { titulo: string; valor: string | number }) {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <div className="text-xs text-gray-500">{titulo}</div>
      <div className="text-lg font-bold">{valor}</div>
    </div>
  );
}
