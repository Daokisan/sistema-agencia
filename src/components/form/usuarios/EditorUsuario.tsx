"use client";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Label from "../../form/Label";
import Input from "../../form/input/InputField";
import { EyeCloseIcon, EyeIcon } from "../../../icons";
export default function EditorUsuario() {
    const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const dadosUsuario = {
    nome: "João da Silva",
    funcionario: "funcionario1",
    email: "joao@email.com",
    senha: "cademeupix"
  };

  
  const [form, setForm] = useState(dadosUsuario);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Simulando envio de:", form);
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
         {/* nome */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Nome</label>
          <input
            name="nome"
            value={form.nome}
            onChange={handleChange}
            className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Funcionário</label>
          <select
            name="funcionario"
            value={form.funcionario}
            onChange={handleChange}
            className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
          >
            <option value="">Selecione</option>
            <option value="funcionario1">João</option>
          
          </select>
        </div>

         {/* Email */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
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
            name="senha"
            value={form.senha}
            onChange={handleChange}
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
    


      

       
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <button 
        onClick={() => navigate("/usuarios")}
        type="button" className="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs transition-colors hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 sm:w-auto">
          Cancelar
        </button>
        <button
          type="submit"
          className="flex justify-center w-full px-4 py-3 text-sm font-medium text-white rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600 sm:w-auto"
        >
          Atualizar
        </button>
      </div>
    </form>
  );
}
