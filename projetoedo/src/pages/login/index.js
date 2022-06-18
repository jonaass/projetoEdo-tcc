import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import storage from 'local-storage'
import LoadingBar from 'react-top-loading-bar'
import { login } from '../../api/usuarioApi'
import {useEffect } from 'react'

import'./index.scss';

export default function Index() {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando,setCarregando] = useState(false);

    const navigate = useNavigate();
    const ref =useRef();

         useEffect(() =>{
            if (storage('usuario-logado')) {
                navigate('/menu');
            }
         })

    async function entraClick() {
        ref.current.continuousStart();
        setCarregando(true);

        try {
         const r = await login(nome,senha);
         storage('usuario-logado', r);

            setTimeout(() => {
                navigate('/menu');
            }, 3000);

            
          
        }  catch (err) {
            ref.current.complete();
            setCarregando(false);

             if (err.response.status === 401) {
                setErro(err.response.data.erro);
            }

            }
    }
    
return(

    <main className='  sombra'>
        <LoadingBar color='#f11946' ref={ref} /> 

        <section className='principal'>

            <section className='sec'>
    
                <div className="container-esquerda">
                    <img className='logo responsivo-2' src="./images/carro.png" alt=''/>

                    <h3 className="titulo"> Estufa de Ouro </h3>
                </div>


                <div className="container-direita responsivo-1">

                    <h3 className="area-restrita kkk"> Área Restrita <br/> Login </h3>

                    <input type="text" id="imputUsuario" placeholder="Usuário" required="required"  autofocus="autofocus" className="input responsivo-3" value={nome} onChange={e => setNome(e.target.value) }/>

                    <p className="esqueceu"> Esqueceu seu nome de usuário? </p>

                    <input type="password" id="imputSenha" placeholder="Senha" required="required" className="input responsivo-3" value={senha} onChange={e => setSenha(e.target.value) }/>

                    <p className="esqueceu"> Esqueceu sua senha? </p>

                    
                        <div href="../menu" className="button"> 
                            <button className='botao'onClick={entraClick} disabled={carregando} >
                                Entrar 
                            </button>  
                        </div>
                        <div className='invalido'>
                                  {erro}
                            </div>          
                    
                    
                </div>  

            </section>

        </section>

    </main>
);
}