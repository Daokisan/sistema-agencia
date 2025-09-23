
import CadastroPedido from "../../components/form/pedidos/CadastroPedido";
import ComponentCard from "../../components/common/ComponentCard";
export default function CadastrarPedido() {
  return (
    <div className="p-2 max-w-1xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Cadastrar pedido</h1>
     
      <ComponentCard title="Coloque as informações do pedido">
      <CadastroPedido />
        </ComponentCard>
      
    </div>
  );
}
