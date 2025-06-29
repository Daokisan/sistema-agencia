
import CadastroCliente from "../../components/form/clientes/CadastroCliente";
import ComponentCard from "../../components/common/ComponentCard";
export default function CadastrarCliente() {
  return (
    <div className="p-2 max-w-1xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Cadastrar Cliente</h1>
     
      <ComponentCard title="Coloque as informações do cliente">
      <CadastroCliente />
        </ComponentCard>
      
    </div>
  );
}
