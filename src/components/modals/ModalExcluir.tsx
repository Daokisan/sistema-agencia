interface ModalExcluirProps {
  funcionarioId: number;
  onClose: () => void;
}

export default function ModalExcluir({
  funcionarioId,
  onClose,
}: ModalExcluirProps) {
  return (
    <div className="fixed inset-0 z-100000 flex items-center justify-center bg-black/10 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-3xl shadow-md max-w-md w-full">
        <h2 className="text-lg font-bold mb-4">Excluir teste</h2>
        <p>
          Tem certeza que deseja excluir o teste com ID {funcionarioId}?
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs transition-colors hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 sm:w-auto"
          >
            Cancelar
          </button>
          <button className="flex justify-center w-full px-4 py-3 text-sm font-medium text-white rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600 sm:w-auto">
            Confirmar Exclusão
          </button>
        </div>
      </div>
    </div>
  );
}
