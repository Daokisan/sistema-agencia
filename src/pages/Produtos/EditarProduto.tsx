
import EditorProduto from "../../components/form/produtos/EditorProduto";
import ComponentCard from "../../components/common/ComponentCard";
export default function EditarProduto() {
  return (
    <div className="p-2 max-w-1xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Editar produto</h1>
     
      <ComponentCard title="Edite as informações do produto">
      <EditorProduto />
        </ComponentCard>
      
    </div>
  );
}
