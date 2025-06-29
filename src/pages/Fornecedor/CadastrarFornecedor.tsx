
import CadastroFornecedor from "../../components/form/fornecedor/CadastroFornecedor";
import ComponentCard from "../../components/common/ComponentCard";
export default function CadastrarFornecedor() {
  return (
    <div className="p-2 max-w-1xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Cadastrar fornecedor</h1>
     
      <ComponentCard title="Coloque as informações do fornecedor">
      <CadastroFornecedor />
        </ComponentCard>
      
    </div>
  );
}
