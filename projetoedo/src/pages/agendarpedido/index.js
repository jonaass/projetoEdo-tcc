import './index.scss';
import Rota from '../../components/rota'
import { cadastrarPedido, alterarPedido, BuscarPorId } from '../../api/pedidoApi'


import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'





export default function Index() {
    const [cliente, setCliente] = useState('');
    const [endereco, setEndereco] = useState('');
    const [atendimento, setAtendimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [carro, setCarro] = useState('');
    const [anoCarro, setAnoCarro] = useState('');
    const [placa, setPlaca] = useState('');
    const [problema, setProblema] = useState('');
    const [pecas, setPecas] = useState('');
    const [orcamento, setorcamento] = useState('');
    const [id, setId] = useState(0);

    const { idParam } = useParams();

    useEffect(() => {
        if (idParam) {
            CarregarPedido();
        }
    }, [])

    async function CarregarPedido() {
        const resposta = await BuscarPorId(idParam);
        setCliente(resposta.nome);
        setEndereco(resposta.endereco);
        setAtendimento(resposta.atendimento.substr(0, 10));
        setTelefone(resposta.telefone);
        setCarro(resposta.Carro);
        setAnoCarro(resposta.anoCarro.substr(0, 10));
        setPlaca(resposta.placa);
        setProblema(resposta.problema);
        setPecas(resposta.pecas);
        setorcamento(resposta.orcamento);
        setId(resposta.id);
    }

    async function salvarClick() {
        try {
 
            if (id === 0) {
                const novoPedido= await cadastrarPedido(cliente, endereco, atendimento, telefone, carro, anoCarro, placa, problema, pecas, orcamento,);
                
                setId(novoPedido.id);
                toast.dark('❤️Pedido cadastrado com sucesso');
            }
            else{
               await alterarPedido(id, cliente, endereco, atendimento, telefone, carro, anoCarro, placa, problema, pecas, orcamento,);
               toast.dark('❤️Pedido alterado com sucesso');
            }
            

           
        }
        catch (err) {
            toast.error(err.response.data.erro);

        }
    }

   function novoClick() {
    setId(0);
    setCliente('');
    setEndereco('');
    setAtendimento('');
    setTelefone('');
    setCarro('');
    setAnoCarro('');
    setPlaca('');
    setProblema('');
    setPecas('');
    setorcamento('');

   }


    return (

        <main className='pai'>

            <header className='cab'>

                <div className='posicionamento responsivo-3'>

                    <a href="/menu">
                        <img src='/images/66822.png' alt='seta' className='img-1' />
                    </a>

                    <div className='divagendarpedido'>
                        <h1 className='agendarpedido'>Agendar Pedido</h1>
                    </div>

                </div>
            </header>
            
                <main className='main'>
                    <Rota />


                    <section className='f1'>

                        <div className='p1'>
                            <div className='imp , pos1'>
                                <label className='fonte' for="">
                                    Nome:
                                </label>
                                <input className='imput' type="text" value={cliente} onChange={e => setCliente(e.target.value)} />
                            </div>

                            <div className='imp , pos2'>
                                <label className='fonte' for="">
                                    Telefone:
                                </label>
                                <input className='imput' type="number" value={telefone} onChange={e => setTelefone(e.target.value)} />
                            </div>


                        </div>

                        <div>

                            <div className='imp  pos_endereco'>
                                <label className='fonte' for="">
                                    Endereço:
                                </label>
                                <input className='imput' type="text" value={endereco} onChange={e => setEndereco(e.target.value)} />
                            </div>

                        </div>

                        <div className='p1'>

                            <div className='imp , pos3'>
                                <label className='fonte' for="">
                                    Veículo:
                                </label>
                                <input className='imput' type="text" value={carro} onChange={e => setCarro(e.target.value)} />
                            </div>

                            <div className='imp , pos3'>
                                <label className='fonte' for="">
                                    Ano Veiculo:
                                </label>
                                <input className='imput' type="date" value={anoCarro} onChange={e => setAnoCarro(e.target.value)} />
                            </div>

                            <div className='imp , pos3'>
                                <label className='fonte' for="">
                                    Placa:
                                </label>
                                <input  type="text"  className='placa imput' value={placa} onChange={e => setPlaca(e.target.value)} />
                            </div>

                            <div className='imp , pos3'>
                                <label className='fonte' for="">
                                    Data Orçamento:
                                </label>
                                <input className='imput' type="date" value={atendimento} onChange={e => setAtendimento(e.target.value)} />
                            </div>

                        </div>


                        <div className='p2'>

                            <div className='imp pos4'>
                                <label className='imp2' for="">
                                    Descrição do serviço:
                                </label>
                                <textarea className='txtarea responsivo2 ' value={problema} onChange={e => setProblema(e.target.value)} />
                            </div>

                            <div className='imp pos4'>
                                <label className='imp2' for="">
                                    Peças:
                                </label>
                                <textarea className='txtarea  responsivo 'value={pecas} onChange={e => setPecas(e.target.value)} />
                            </div>

                        </div>

                        <div >

                            <div className='p1'>
                                <h2 className='total'>
                                    Total R$:
                                </h2>
                                <input className='pos5' type="text" value={orcamento} onChange={e => setorcamento(e.target.value)} />
                            </div>

                        </div>

                        <div className='div-but'>
                            
                            <button className='but-1' onClick={salvarClick} > {id === 0 ? 'Salvar' : 'Alterar'}</button> &nbsp; &nbsp;  
                            <button className='but-2' onClick={novoClick}>Limpar</button>

                            

                        </div>

                    </section>
                </main>

            


        </main>



    );

}