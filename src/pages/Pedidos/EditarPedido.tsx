
import EditorPedido from "../../components/form/pedidos/EditorPedido";
import ComponentCard from "../../components/common/ComponentCard";
export default function EditarPedido() {
  return (
    <div className="p-2 max-w-1xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Editar pedido</h1>
     
      <ComponentCard title="Edite as informações do pedido">
      <EditorPedido />
        </ComponentCard>
      
    </div>
  );
}
