
import PlanoSistema from "../../components/tables/BasicTables/TabelaPlanos";
import ComponentCard from "../../components/common/ComponentCard";
export default function Planos() {
  return (
    <div className="p-2 max-w-1xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Planos Dísponiveis</h1>
     
      <ComponentCard title="Selecione outro plano caso queira trocar">
      <PlanoSistema />
        </ComponentCard>
      
    </div>
  );
}
