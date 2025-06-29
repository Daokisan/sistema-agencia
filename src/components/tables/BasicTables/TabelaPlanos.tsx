// import { useState } from "react";


export default function PlanoSistema() {
 

  return (
    <>
     
<div className="gird-cols-1 grid gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
  
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
      <span className="mb-3 block text-theme-xl font-semibold text-gray-800 dark:text-white/90">
        Básico
      </span>

      <div className="mb-1 flex items-center justify-between">
        <div className="flex items-end">
          <h2 className="text-title-md font-bold text-gray-800 dark:text-white/90" x-text="monthly === true ? 'R$99,00' : 'R$150,00'">R$99,00</h2>

          <span className="mb-1 inline-block text-sm text-gray-500 dark:text-gray-400">
            /mês
          </span>
        </div>
        <span className="text-theme-xl font-semibold text-gray-400 line-through" x-text="monthly === true ? 'R$99,00' : 'R$150,00'">R$150,00</span>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        Para pequenas empresas &amp; startup's
      </p>

      <div className="my-6 h-px w-full bg-gray-200 dark:bg-gray-800"></div>

      <div className="mb-8 space-y-3">
        <p className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4017 4.35986L6.12166 11.6399L2.59833 8.11657" stroke="#12B76A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
         exemplo
        </p>

       
      </div>

      <button className="flex w-full items-center justify-center rounded-lg bg-gray-800 p-3.5 text-sm font-medium text-white shadow-theme-xs transition-colors hover:bg-brand-500 dark:bg-white/10">
      Escolher este plano
      </button>
    </div>

   
    <div className="rounded-2xl border border-gray-800 bg-gray-800 p-6 dark:border-white/10 dark:bg-white/10">
      <span className="mb-3 block text-theme-xl font-semibold text-white">
        Avançado
      </span>

      <div className="mb-1 flex items-center justify-between">
        <div className="flex items-end">
          <h2 className="text-title-md font-bold text-white" x-text="monthly === true ? 'R$99,00' : 'R$150,00'">R$99,00</h2>

          <span className="mb-1 inline-block text-sm text-white/70"> /mês </span>
        </div>

        <span className="text-theme-xl font-semibold text-gray-300 line-through" x-text="monthly === true ? 'R$99,00' : 'R$150,00'">R$150,00</span>
      </div>

      <p className="text-sm text-white/70">Para Empresas de médio grande porte</p>

      <div className="my-6 h-px w-full bg-white/20"></div>

      <div className="mb-8 space-y-3">
        <p className="flex items-center gap-3 text-sm text-white/80">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4017 4.35986L6.12166 11.6399L2.59833 8.11657" stroke="#12B76A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          exemplo
        </p>

        <p className="flex items-center gap-3 text-sm text-white/80">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4017 4.35986L6.12166 11.6399L2.59833 8.11657" stroke="#12B76A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          exemplo
        </p>
        <p className="flex items-center gap-3 text-sm text-white/80">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4017 4.35986L6.12166 11.6399L2.59833 8.11657" stroke="#12B76A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          exemplo
        </p>
        <p className="flex items-center gap-3 text-sm text-white/80">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4017 4.35986L6.12166 11.6399L2.59833 8.11657" stroke="#12B76A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          exemplo
        </p>
        <p className="flex items-center gap-3 text-sm text-white/80">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4017 4.35986L6.12166 11.6399L2.59833 8.11657" stroke="#12B76A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          exemplo
        </p>

        


        
       
      </div>

      <button className="flex gap-3 w-full items-center justify-center rounded-lg bg-brand-500 p-3.5 text-sm font-medium text-white shadow-theme-xs transition-colors hover:bg-brand-600">
        Plano Atual  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4017 4.35986L6.12166 11.6399L2.59833 8.11657" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
      </button>
    </div>

  
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
      <span className="mb-3 block text-theme-xl font-semibold text-gray-800 dark:text-white/90">
        Premium
      </span>

      <div className="mb-1 flex items-center justify-between">
        <div className="flex items-end">
          <h2 className="text-title-md font-bold text-gray-800 dark:text-white/90" x-text="monthly === true ? 'R$99,00' : 'R$150,00'">R$99,00</h2>

          <span className="mb-1 inline-block text-sm text-gray-500 dark:text-gray-400">
            /mês
          </span>
        </div>

        <span className="text-theme-xl font-semibold text-gray-400 line-through" x-text="monthly === true ? 'R$99,00' : 'R$150,00'">R$150,00</span>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        Para multinacionais
      </p>

      <div className="my-6 h-px w-full bg-gray-200 dark:bg-gray-800"></div>

      <div className="mb-8 space-y-3">
        <p className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4017 4.35986L6.12166 11.6399L2.59833 8.11657" stroke="#12B76A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          exemplo
        </p>
        <p className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4017 4.35986L6.12166 11.6399L2.59833 8.11657" stroke="#12B76A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          exemplo
        </p>
        <p className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4017 4.35986L6.12166 11.6399L2.59833 8.11657" stroke="#12B76A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          exemplo
        </p>
        <p className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4017 4.35986L6.12166 11.6399L2.59833 8.11657" stroke="#12B76A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          exemplo
        </p>
        <p className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4017 4.35986L6.12166 11.6399L2.59833 8.11657" stroke="#12B76A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          exemplo
        </p>
        <p className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4017 4.35986L6.12166 11.6399L2.59833 8.11657" stroke="#12B76A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          exemplo
        </p>
        <p className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4017 4.35986L6.12166 11.6399L2.59833 8.11657" stroke="#12B76A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          exemplo
        </p>

       
      </div>

      <button className="flex w-full items-center justify-center rounded-lg bg-gray-800 p-3.5 text-sm font-medium text-white shadow-theme-xs transition-colors hover:bg-brand-500 dark:bg-white/10">
      Escolher este plano
      </button>
    </div>
  </div>
   
    </>
  );
}
