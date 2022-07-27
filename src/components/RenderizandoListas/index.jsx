import ComponenteCustomizavel from "../ComponenteCustomizavel";

// const saudacoes = [
//     { saudacao: "Oi", nome: "William", titulo: "Saudação 01" },
//     { saudacao: "Olá, meu nome é", nome: "João", titulo: "Saudação 02" },
//     { saudacao: "Opa, e aí tudo bem?", nome: "Pedro", titulo: "Saudação 03" },
// ];

const saudacoes = [
    { id: 1, saudacao: "Oi", nome: "William" },
    { id: 2, saudacao: "Olá, meu nome é", nome: "João" },
    { id: 3, saudacao: "Opa, e aí tudo bem?", nome: "Pedro" },
];

// const saudacao01 = { saudacao: "Oi", nome: "William", titulo: "Saudação 01" };
// const { saudacao, nome, titulo } = saudacao01;
// console.log(saudacao, nome, titulo);

export default function RenderizandoListas() {
    return (
        <div>
            {
                saudacoes.map((saudacao, indice, vetor) => (
                    <ComponenteCustomizavel
                        key={saudacao.id}
                        saudacao={saudacao.saudacao}
                        nome={saudacao.nome}
                        titulo={`Saudação ${indice + 1}`}
                    />
                ))

                // saudacoes.map(({ saudacao, nome, titulo }) => (
                //     <ComponenteCustomizavel
                //         saudacao={saudacao}
                //         nome={nome}
                //         titulo={titulo}
                //     />
                // ))
                
                // saudacoes.map((saudacao) => <ComponenteCustomizavel key={saudacao.id} {...saudacao} />)
            }
        </div>
    );
}