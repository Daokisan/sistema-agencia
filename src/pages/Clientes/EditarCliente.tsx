
import EditorCliente from "../../components/form/clientes/EditorCliente";
import ComponentCard from "../../components/common/ComponentCard";
export default function EditarFuncionario() {
  return (
    <div className="p-2 max-w-1xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Editar Cliente</h1>
     
      <ComponentCard title="Edite as informações do cliente">
      <EditorCliente />
        </ComponentCard>
      
    </div>
  );
}
