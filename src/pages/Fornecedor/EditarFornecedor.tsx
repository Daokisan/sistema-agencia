
import EditorFornecedor from "../../components/form/fornecedor/EditorFornecedor";
import ComponentCard from "../../components/common/ComponentCard";
export default function EditarFornecedor() {
  return (
    <div className="p-2 max-w-1xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Editar fornecedor</h1>
     
      <ComponentCard title="Edite as informações do fornecedor">
      <EditorFornecedor />
        </ComponentCard>
      
    </div>
  );
}
