export default function InfoPedido({ pedido }: { pedido: any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white border rounded-lg shadow-sm dark:bg-white/[0.03] dark:border-white/[0.05]">
      <InfoItem label="Número do Pedido" value={pedido.numero} />
      <InfoItem label="Nome do Cliente" value={pedido.nome} />
      <InfoItem label="Status" value={pedido.status} />
      <InfoItem label="Peso Total" value={`${pedido.pesoTotal} kg`} />
      <InfoItem label="Adultos" value={pedido.adultos} />
      <InfoItem label="Crianças" value={pedido.criancas} />
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="text-theme-sm text-gray-700 dark:text-gray-300">
      <strong className="block text-gray-500 dark:text-gray-400">{label}:</strong>
      <span>{value}</span>
    </div>
  );
}
