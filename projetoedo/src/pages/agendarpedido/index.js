import'./index.scss';

import { Link } from 'react-router-dom';

export default function Agendar() {

    return(
   
        <main className='pai'>

<body>
    <main className='main'>

        <header className='cab'>
         
         <a href="../menu"> <img src="./images/66822.png" width="20" height="20" className='img-1' /></a>
            <h1>Agendar Pedido</h1>

        </header>

        <section className='f1'>

            <div className='p1'>
                <div className='imp , pos1'>
                    <label for="">
                        Nome : 
                    </label>
                    <input type="text"/>
                </div>

                <div className='imp , pos2'>
                    <label for="">
                        Telefone :
                    </label>
                    <input type="text"/>
                </div>


            </div>

            <div>

                <div className='imp'>
                    <label for="">
                        Endereço :
                    </label>
                    <input type="text"/>
                </div>                

            </div>

            <div className='p1'>

                <div className='imp , pos3'>
                    <label for="">
                        Veículo : 
                    </label>
                    <input type="text"/>
                </div>

                <div className='imp , pos3'>
                    <label for="">
                        Ano :
                    </label>
                    <input type="text"/>
                </div>

                <div className='imp , pos3'>
                    <label for="">
                        Placa :
                    </label>
                    <input type="text"/>
                </div>

                <div className='imp , pos3'>
                    <label for="">
                        Data :
                    </label>
                    <input type="text"/>
                </div>

            </div>

            <div>

                <div className='p1'>
                    <h2>
                        Horário : 
                    </h2>
                    <input type="text"/>
                </div>

            </div>

            <div className='p1'>

                <div className='imp'>
                    <label className='imp2' for="">
                        Descrição do serviço :
                    </label>
                    <textarea className='txtarea , pos4'></textarea>
                </div>

                <div className='imp'>
                    <label className='imp2' for="">
                        Peças :
                    </label>
                    <textarea className='txtarea'></textarea>
                </div>

            </div>

            <div >

                <div className='p1'>
                    <h2>
                        Total :
                    </h2>
                    <input className='pos5' type="text"/>
                </div>

            </div>

            <div className='but'>

                <a href="../../../pagina da consulta/src/pages/home/index.html">
                    <button >salvar</button>
                </a>
            </div>

        </section>
    </main>
    
</body>


        </main>



    );
    
}