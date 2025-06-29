
import CadastroEquipamento from "../../components/form/equipamentos/CadastroEquipamento";
import ComponentCard from "../../components/common/ComponentCard";
export default function CadastrarEquipamentos() {
  return (
    <div className="p-2 max-w-1xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Cadastrar equipamento</h1>
     
      <ComponentCard title="Coloque as informações do equipamento">
      <CadastroEquipamento />
        </ComponentCard>
      
    </div>
  );
}
