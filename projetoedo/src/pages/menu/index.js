import storage from 'local-storage'
import './index.scss';
import { useNavigate } from 'react-router-dom';
import Rota from '../../components/rota'



export default function Menu() {

    const navigate = useNavigate(); 

    function sairClick() {
        storage.remove('usuario-logado');
        navigate('/')
    }

    return(

        <main >
           <Rota />
            <div className='primeiro responsivel'>
                <div className='seta' onClick={sairClick}>
                    <a href="/" >
                        <img src="/images/66822.png" className='img-1'/> 
                    </a>
                </div>

                <h1 className='Serviço'> Qual serviço deseja?</h1>
                
                <div className='Agendar'>
                    <button className="b1">
                        <a href="../agendarpedido">Agendar Pedido</a>
                    </button>
                </div>

                <div className='Consulta'>
                    <button className="b2">
                        <a href="../consultarpedido">Consulta de Pedido</a>
                    </button>
                </div>

            </div>

    
        </main>

    );
    
}