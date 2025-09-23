"use client";
import { useEffect, useState } from "react";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import FormBuscaOperacional from "../../components/form/operacionais/FormBuscaOperacional";
import InfoPedido from "../../components/pedido_operacional/PedidoInfo";
import AccordionInscricoes from "../../components/pedido_operacional/AcordionInscricoes";
import TabelaInscricoesPedido from "../../components/tables/BasicTables/TabelaInscricoesPedido";
import ResumoOperacional from "../../components/resumo/ResumoOperacional";

export default function CadastrarOperacional() {
  const [pedido, setPedido] = useState<any | null>(null);
  const [modoTabela, setModoTabela] = useState(true); // <- estado para alternar visualização

  useEffect(() => {
    const pedidoMock = {
      numero: "001",
      nome: "João da Silva",
      status: "Pago",
      pesoTotal: 120,
      adultos: 2,
      criancas: 1,
      inscricoes: [
        { nome: "João Filho", cpf: "000.000.000-00", nascimento: "2010-05-12", peso: 35 },
        { nome: "Maria Silva", cpf: "111.111.111-11", nascimento: "1985-09-10", peso: 60 },
        { nome: "Carlos Souza", cpf: "222.222.222-22", nascimento: "1990-03-22", peso: 25 }
      ]
    };
    setPedido(pedidoMock);
  }, []);

  return (
    <>
      <PageMeta title="Cadastrar Operacional" description="Cadastro de novo operacional" />
      <PageBreadcrumb pageTitle="Cadastrar Operacional" />

      <div className="space-y-6">
        <ComponentCard title="Informações do Operacional">
          <FormBuscaOperacional />
        </ComponentCard>

        {pedido && (
          <ComponentCard
            title="Pedido Encontrado"
            action={
              <button
                onClick={() => setModoTabela(!modoTabela)}
                className="flex items-center justify-center px-4 py-2 font-medium text-white transition rounded-lg bg-brand-500 hover:bg-brand-600 text-theme-sm"
              >
                {modoTabela ? "Ver como Accordion" : "Ver como Tabela"}
              </button>
            }
          >
            <InfoPedido pedido={pedido} />
            {modoTabela ? (
              <TabelaInscricoesPedido inscricoes={pedido.inscricoes} />
            ) : (
              <AccordionInscricoes inscricoes={pedido.inscricoes} />
            )}
          </ComponentCard>
        )}

        <ComponentCard title="Resumo Operacional">
          <ResumoOperacional pedido={pedido} />
        </ComponentCard>
      </div>
    </>
  );
}