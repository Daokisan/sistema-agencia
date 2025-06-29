
import PermissoesForm from "../../components/form/usuarios/PermissoesUsuarioForm";
import ComponentCard from "../../components/common/ComponentCard";
export default function PermissoesUsuario() {
  return (
    <div className="p-2 max-w-1xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Permissões Usuário</h1>
     
      <ComponentCard title="Selecione as permissões desse usuário">
      <PermissoesForm />
        </ComponentCard>
      
    </div>
  );
}
