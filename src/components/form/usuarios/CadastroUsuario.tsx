import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Label from "../../form/Label";
import Input from "../../form/input/InputField";
import { EyeCloseIcon, EyeIcon } from "../../../icons";

export default function CadastroUsuario() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {/* Nome */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          Nome
        </label>
        <input
          placeholder="João"
          type="text"
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>

      {/* Funcionário */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          Funcionário
        </label>
        <select className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800">
          <option value="">Selecione</option>
          <option value="funcionario1">João</option>
        </select>
      </div>

      {/* Email */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          Email
        </label>
        <input
          placeholder="exemplo@gmail.com"
          type="email"
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>

      {/* Senha */}
      <div>
        <Label>
          Senha <span className="text-error-500">*</span>{" "}
        </Label>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Digite sua senha"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
          >
            {showPassword ? (
              <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
            ) : (
              <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
            )}
          </span>
        </div>
      </div>

      {/* Botões (linha inteira, alinhados à direita) */}
      <div className="md:col-span-2 flex justify-end space-x-2 pt-4">
        <button
          onClick={() => navigate("/usuarios")}
          type="button"
          className="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs transition-colors hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 sm:w-auto"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="flex justify-center w-full px-4 py-3 text-sm font-medium text-white rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600 sm:w-auto"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}
