import axios from 'axios';
const api = axios.create({
    baseURL:'http://localhost:5000'
})


export async function cadastrarPedido(cliente, endereco, atendimento,telefone, carro, anoCarro, placa, problema, pecas, orcamento) {
    const resposta =  await api.post('/pedido' ,{
        cliente: cliente,
        endereco:endereco,
        atendimento:atendimento,
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

export async function ListarPedidos() {
    const resposta = await api.get('/pedidos');
    return resposta.data;
}


export async function BuscaPorCliente(cliente) {
    const resposta = await api.get(`/pedidos/busca?cliente=${cliente}`);
    return resposta.data;
}

export async function deletarPedido(id) {
    const resposta = await api.delete(`/pedidos/${id}`);
    return resposta.status;
}

export async function BuscarPorId(id) {
    const resposta = await api.get(`/pedidos/${id}`);
    return resposta.data;
}

