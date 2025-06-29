import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import { useNavigate } from "react-router-dom";
import TabelaFornecedor from "../../components/tables/BasicTables/TabelaFornecedor";

export default function Fornecedor() {
  const navigate = useNavigate();
  return (
    <>
      <PageMeta title="Fornecedor" description="Listagem de Fornecedor" />
      <PageBreadcrumb pageTitle="Fornecedor" />

      <div className="space-y-6">
        <ComponentCard
          title="Lista de Fornecedor"
          action={
            <button
              onClick={() => navigate("/fornecedor/cadastrar-fornecedor")}
              className="flex items-center justify-center p-3 font-medium text-white transition rounded-lg bg-brand-500 text-theme-sm hover:bg-brand-600"
            >
             <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
              <span className="ml-2">Novo Fornecedor</span>
            </button>
          }
        >
          {/* Tabela */}
          <TabelaFornecedor />
        </ComponentCard>
      </div>

   
    </>
  );
}
