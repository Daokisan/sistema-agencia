
import CadastroUsuario from "../../components/form/usuarios/CadastroUsuario";
import ComponentCard from "../../components/common/ComponentCard";
export default function CadastrarUsuario() {
  return (
    <div className="p-2 max-w-1xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Cadastrar Usuário</h1>
     
      <ComponentCard title="Coloque as informações do usuário">
      <CadastroUsuario />
        </ComponentCard>
      
    </div>
  );
}
