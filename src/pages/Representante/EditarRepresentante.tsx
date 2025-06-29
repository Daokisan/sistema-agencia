
import EditorRepresentante from "../../components/form/representante/EditorRepresentante";
import ComponentCard from "../../components/common/ComponentCard";
export default function EditarRepresentante() {
  return (
    <div className="p-2 max-w-1xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Editar Representante</h1>
     
      <ComponentCard title="Edite as informações do representante">
      <EditorRepresentante />
        </ComponentCard>
      
    </div>
  );
}
