import Fatura from '../../components/fatura/fatura_padrao';

export default function ExibirFatura() {
  return (
    <Fatura
      idFatura="348"
      de={{
        nome: "Sistema-Agência",
        endereco: "Endereço Exemplo, 123 - Cidade/Estado",
        dataEmissao: "27 de junho de 2025"
      }}
      para={{
        nome: "João",
        endereco: "Av Sete de setembro 130",
        dataVencimento: "16 de março de 2027"
      }}
      itens={[
        { id: 1, nome: "Básico", quantidade: 1, custoUnitario: 48 },
        { id: 2, nome: "Avançado", quantidade: 2, custoUnitario: 35 },
        { id: 3, nome: "Premium", quantidade: 1, custoUnitario: 70 },
    
      ]}
      percentualImposto={10}
    />
  );
}
