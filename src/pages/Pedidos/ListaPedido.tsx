import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import { useNavigate } from "react-router-dom";
import TabelaPedido from "../../components/tables/BasicTables/TabelaPedido";

export default function Pedidos () {
  const navigate = useNavigate();
  return (
    <>
      <PageMeta title="Pedidos" description="Listagem de Pedidos" />
      <PageBreadcrumb pageTitle="Pedidos" />

      <div className="space-y-6">
        <ComponentCard
          title="Lista de Pedidos"
          action={
            <div className="flex gap-2">
              {/* Botão Novo Pedido */}
            
             <button
                onClick={() => navigate("/pedidos/cadastrar-pedido")}
                className="flex items-center justify-center p-3 font-medium text-white transition rounded-lg bg-brand-500 text-theme-sm hover:bg-brand-600"
              >
               <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                <span className="ml-2">Novo Pedido</span>
              </button>
          
              {/* Botão Gerar Link Avulso */}
              <button
                onClick={() => navigate("/cadastro-avulso")}
                className="flex items-center justify-center p-3 font-medium text-white transition rounded-lg bg-brand-500 text-theme-sm hover:bg-brand-600"
              >
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>                <span className="ml-2">Link Avulso</span>
              </button>
            
            </div>
          }
          
        >
          {/* Tabela */}
          <TabelaPedido />
        </ComponentCard>
      </div>

   
    </>
  );
}
