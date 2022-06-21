import { AlterarPedido, inserirPedido, TodosPedidos ,RemoverPedido, BuscaPorCliente, PedidosPorId} from '../Repository/funilariaRepository.js'

import { Router } from 'express'



const server =Router();

server.post('/pedido' , async (req, resp) =>{
    try {
         const pedido= req.body

         if (!pedido.cliente.trim()) {
            throw new Error('Nome do cliente é obrigatorio!');
        }

        if (!pedido.endereco.trim()) {
            throw new Error('endereço do pedido é obrigatorio!');
        }

        if(!pedido.atendimento.trim()){
          throw new Error ('atendimento do pedido é obrigatorio!')
        }

        if (!pedido.telefone) {
            throw new Error('telefone do cliente é obrigatorio!');
        }

        if (!pedido.carro.trim()) {
            throw new Error('Nome do Carro é obrigatorio!');
        }

        if (!pedido.anoCarro) {
            throw new Error('Ano do Carro é obrigatorio!');
        }

        if (!pedido.placa.trim()) {
            throw new Error('Placa do Carro é obrigatorio!');
        }

        if (!pedido.problema.trim()) {
            throw new Error('problema do Carro é obrigatorio!');
        }

        if (!pedido.pecas.trim()) {
            throw new Error('peças do Carro é obrigatorio!');
        }

        if (!pedido.orcamento) {
            throw new Error('orçamento do Carro é obrigatorio!');
        }

        const PedidoInserido = await inserirPedido(pedido)

        resp.send(PedidoInserido)

    } 
    catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


server.get('/pedidos/busca' , async (req ,resp) =>{
    try {
     const { cliente } = req.query;
     
     const resposta = await BuscaPorCliente(cliente)

     if (!resposta) {
        resp.status(404).send([])
     }
     else{
        resp.send(resposta);
     }
    } 
    catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


server.get('/pedidos/:id' ,async (req, resp) =>{
    try {
        const id  = Number( req.params.id );
        const resposta = await PedidosPorId(id);
        if (!resposta) 
            throw new Error('pedido não encrontrado.');
        

        resp.send(resposta);
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
} )


server.get('/pedidos' ,async (req, resp) =>{
    try {
        const resposta = await TodosPedidos();
        resp.send(resposta);
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
} )

server.delete('/pedidos/:id', async (req,resp) =>{
    try {
        const { id } = req.params;
        const resposta = await RemoverPedido(id);
       if (resposta != 1) 
        throw new Error('pedido não pode ser removido')
       
        resp.status(206).send({
            resposta:"Pedido removido"
        });
       
    } 
    catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


server.put('/pedidos/:id', async (req,resp) => {
    try {
    const { id } = req.params;
    const pedidos =req.body;

    if (!pedido.cliente.trim()) {
        throw new Error('Nome do cliente é obrigatorio!');
    }

    if (!pedido.endereco.trim()) {
        throw new Error('endereço do pedido é obrigatorio!');
    }

    if(!pedido.atendimento.trim()){
      throw new Error ('atendimento do pedido é obrigatorio!')
    }

    if (!pedido.telefone.trim()) {
        throw new Error('telefone do cliente é obrigatorio!');
    }

    if (!pedido.carro.trim()) {
        throw new Error('Nome do Carro é obrigatorio!');
    }

    if (!pedido.anoCarro.trim()) {
        throw new Error('Ano do Carro é obrigatorio!');
    }

    if (!pedido.placa.trim()) {
        throw new Error('Placa do Carro é obrigatorio!');
    }

    if (!pedido.problema.trim()) {
        throw new Error('problema do Carro é obrigatorio!');
    }

    if (!pedido.pecas.trim()) {
        throw new Error('peças do Carro é obrigatorio!');
    }

    if (!pedido.orcamento.trim()) {
        throw new Error('orçamento do Carro é obrigatorio!');
    }

const resposta= await AlterarPedido(pedidos, id)
if (resposta != 1) {
    throw new Error ('Burro kkk');

}

else{
    resp.status(205).send();
}
    } 
    catch (err) {
 resp.status(400).send({
     erro: err.message
 })       
    }
})







export default server;