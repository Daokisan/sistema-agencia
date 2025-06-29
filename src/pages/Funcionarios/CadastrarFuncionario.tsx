
import CadastroFuncionario from "../../components/form/funcionarios/CadastroFuncionario";
import ComponentCard from "../../components/common/ComponentCard";
export default function CadastrarFuncionario() {
  return (
    <div className="p-2 max-w-1xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Cadastrar Funcionário</h1>
     
      <ComponentCard title="Coloque as informações do funcionário">
      <CadastroFuncionario />
        </ComponentCard>
      
    </div>
  );
}
