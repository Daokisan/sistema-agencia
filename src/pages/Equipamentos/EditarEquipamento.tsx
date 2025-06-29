
import EditorEquipamento from "../../components/form/equipamentos/EditorEquipamento";
import ComponentCard from "../../components/common/ComponentCard";
export default function EditarEquipamento() {
  return (
    <div className="p-2 max-w-1xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Editar equipamento</h1>
     
      <ComponentCard title="Edite as informações do equipamento">
      <EditorEquipamento />
        </ComponentCard>
      
    </div>
  );
}
