
import CadastroProduto from "../../components/form/produtos/CadastroProduto";
import ComponentCard from "../../components/common/ComponentCard";
export default function CadastrarProduto() {
  return (
    <div className="p-2 max-w-1xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Cadastrar produto</h1>
     
      <ComponentCard title="Coloque as informações do produto">
      <CadastroProduto />
        </ComponentCard>
      
    </div>
  );
}
