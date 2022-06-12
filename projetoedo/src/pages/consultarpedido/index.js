import './index.scss'

import { ListarPedidos, BuscaPorCliente, deletarPedido } from '../../api/pedidoApi'

import { confirmAlert } from 'react-confirm-alert'
import { toast } from 'react-toastify' 

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Index() {
  const [pedidos , setPedidos] = useState([]);
  const [filtro , setFiltro] = useState('');

  const navigate = useNavigate();

   async function EditarPedido(id) {
        navigate(`/agendarpedido/alterar/${id}`);
   }


 async function RemoverPedido(id, cliente) {
     
    confirmAlert({
        title: 'Remover pedido',
        message: `Desejar Remover o pedido ${cliente}?`,
        buttons: [
            {
                 label:'Sim',
                 onClick: async () => {
                    const resposta = await deletarPedido(id, cliente);
                    if (filtro === '') {
                       CarregarPedidos();
                    }
                    else{
                       filtrar();
                    }
                    toast.dark('❤️ pedido removido');
                 }
            },
            {
                label:'Não'
            }
        ]
    })

  
 }
  
   async function filtrar() {
    const resp = await BuscaPorCliente(filtro);
    setPedidos(resp);
   }


    async function CarregarPedidos() {
        const resp = await ListarPedidos();
       setPedidos(resp);
    }

    useEffect(() =>{
       CarregarPedidos();
    }, [])

return(
    
<main className='pai pagina'>


        <header className="header">
            <div className="set-1">
        <a href="../menu">
            <img src='./images/66822.png' className='img-t'/>
            </a>
            </div> 
            <h1 className="titulo">Pedidos</h1>
        </header>
       

       

        <div>
            <input className="barra-pesquisa" type="text" placeholder="Buscar por Nome" value={filtro} onChange={e => setFiltro(e.target.value)}/>
            <img src='./images/search-free-icon-font.png' className='lupa' alt='buscar' onClick={filtrar}/>

        </div>

        <div className="tabela">
            <table>
                <thead>
                <tr>
                    <th>endereço</th>
                    <th>nome</th>
                    <th>data</th>
                    <th>veiculo</th>
                    <th>ações</th>
                </tr>
                </thead>

                    <tbody> 
                     {pedidos.map(item =>
                        <tr>
                      <td>{item.endereco}</td>
                      <td>{item.nome}</td>
                      <td>{item.atendimento.substr(0, 10)}</td>
                      <td>{item.Carro}</td>
                      <td>
                          <img src='./images/edit-free-icon-font (1).png' className='x' alt='editar' onClick={() => EditarPedido(item.id)} />
                          &nbsp; &nbsp; &nbsp;
                          <img src='./images/cross-free-icon-font (1).png' className='x'alt='remover' onClick={() => RemoverPedido(item.id, item.nome)}  />
                      </td>
                        </tr>
  
                    
                 )}

                </tbody> 

            </table>
        </div>

</main>
   

);
}