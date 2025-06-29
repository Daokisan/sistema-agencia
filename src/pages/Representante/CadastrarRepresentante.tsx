
import CadastroRepresentante from "../../components/form/representante/CadastroRepresentante";
import ComponentCard from "../../components/common/ComponentCard";
export default function CadastrarRepresentante() {
  return (
    <div className="p-2 max-w-1xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Cadastrar Representante</h1>
     
      <ComponentCard title="Coloque as informações do Representante">
      <CadastroRepresentante />
        </ComponentCard>
      
    </div>
  );
}
