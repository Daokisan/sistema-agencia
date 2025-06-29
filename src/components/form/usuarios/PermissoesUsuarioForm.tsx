import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Module = {
  id: number;
  nome: string;
  permissoes: string[];
  ativo: boolean;
  permissoesSelecionados: string[];
};

const modulesData: Omit<Module, "ativo" | "permissoesSelecionados">[] = [
  {
    id: 1,
    nome: "Usuários",
    permissoes: ["Editar Usuário", "Excluir Usuário", "Criar Usuário"],
  },
  {
    id: 2,
    nome: "Relatórios",
    permissoes: ["Visualizar Relatório", "Exportar PDF"],
  },
  {
    id: 3,
    nome: "Configurações",
    permissoes: ["Editar Configurações", "Gerenciar Planos"],
  },
];

const PermissoesForm: React.FC = () => {
  const [modules, setModules] = useState<Module[]>(
    modulesData.map((mod) => ({
      ...mod,
      ativo: false,
      permissoesSelecionados: [],
    }))
  );

  const navigate = useNavigate();

  const handleModuleToggle = (moduleId: number) => {
    setModules((prevModules) =>
      prevModules.map((mod) =>
        mod.id === moduleId ? { ...mod, ativo: !mod.ativo } : mod
      )
    );
  };

  const handlePermissionToggle = (moduleId: number, permission: string) => {
    setModules((prevModules) =>
      prevModules.map((mod) => {
        if (mod.id === moduleId) {
          const selected = mod.permissoesSelecionados.includes(permission)
            ? mod.permissoesSelecionados.filter((perm) => perm !== permission)
            : [...mod.permissoesSelecionados, permission];
          return { ...mod, permissoesSelecionados: selected };
        }
        return mod;
      })
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Permissões salvas:", modules);
    navigate("/usuarios");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {modules.map((mod) => (
        <div
          key={mod.id}
          className="border border-gray-300 dark:border-gray-700 rounded-lg p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              {mod.nome}
            </span>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={mod.ativo}
                onChange={() => handleModuleToggle(mod.id)}
                className="h-5 w-5 accent-brand-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-400">
                Ativar módulo
              </span>
            </label>
          </div>
          {mod.ativo && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
              {mod.permissoes.map((permission) => (
                <label key={permission} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={mod.permissoesSelecionados.includes(permission)}
                    onChange={() =>
                      handlePermissionToggle(mod.id, permission)
                    }
                    className="h-5 w-5 accent-brand-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-400">
                    {permission}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}

      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={() => navigate("/usuarios")}
          className="flex justify-center rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/[0.03]"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="flex justify-center rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600"
        >
          Salvar
        </button>
      </div>
    </form>
  );
};

export default PermissoesForm;
