
import ComponentCard from "../../components/common/ComponentCard";
import EditorUsuario from "../../components/form/usuarios/EditorUsuario";
export default function EditarUsuario() {
  return (
    <div className="p-2 max-w-1xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Editar Usuário</h1>
     
      <ComponentCard title="Edite as informações do usuário">
      <EditorUsuario />
        </ComponentCard>
      
    </div>
  );
}
