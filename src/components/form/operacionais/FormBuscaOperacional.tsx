export default function FormBuscaOperacional() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <input type="date" className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" />
      <input  type="time" className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white/90" />
      <select className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white/90">
        <option>Selecione o departamento</option>
        <option>Balonismo</option>
        <option>Aventura</option>
      </select>
      <div className="col-span-3 text-sm text-gray-500 mt-2">
        Solicitante: <strong>Usuário Logado</strong>
      </div>
    </div>
  );
}
