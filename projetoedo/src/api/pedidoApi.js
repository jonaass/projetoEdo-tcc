import axios from "axios";
const api = axios.create({
    baseURL:'http://localhost:5000'
})


export async function cadastrarPedido(cliente, endereco, atendimento,telefone, carro, anoCarro, placa, problema, pecas, orcamento) {
    const resposta =  await api.post('/pedido' ,{
        cliente: cliente ,
        endereco:endereco,
        atendimento:atendimento ,
        telefone: telefone,
        carro:carro,
        anoCarro:anoCarro,
        placa:placa,
        problema:problema,
        pecas:pecas,
        orcamento:orcamento
    

    })
    return resposta.data;

    
}



export async function alterarPedido(id , cliente, endereco, atendimento,telefone, carro, anoCarro, placa, problema, pecas, orcamento) {
    const resposta =  await api.put(`/pedidos/${id}` ,{
        cliente: cliente ,
        endereco:endereco,
        atendimento:atendimento ,
        telefone: telefone,
        carro:carro,
        anoCarro:anoCarro,
        placa:placa,
        problema:problema,
        pecas:pecas,
        orcamento:orcamento
    

    })
    return resposta.data;

    
}