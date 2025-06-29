
import EditorFuncionario from "../../components/form/funcionarios/EditorFuncionario";
import ComponentCard from "../../components/common/ComponentCard";
export default function EditarFuncionario() {
  return (
    <div className="p-2 max-w-1xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Editar Funcionário</h1>
     
      <ComponentCard title="Edite as informações do funcionário">
      <EditorFuncionario />
        </ComponentCard>
      
    </div>
  );
}
