import'./index.scss';


export default function index() {
    
return(

<body>
    <header className="cabeçalho">

       <div className='tituloico-alinhamento  celular-1'> 
        <div className="div-carro">
                <img className="carro" src="./images/carro.png" alt=""/>
            </div>

        <div className="texto-cabeçalho">
            <div>
                <h1>Estufa de ouro</h1> 
            </div>
        </div>
       </div>

        <div className="AR-alinhamento">
            <a className="AR" href="../login">Área Restrita</a>
        </div>

    </header>

    <main className="faixa1">
        <div className="faixa1-imagem">
            <div className="faixa1-texto texto-2">
                <h3 className="faixa1-texto1">
                    Um carro bem cuidado,
                </h3>

                <h3 className='faixa1-texto2'>
                  faz você ir longe!
                </h3>

                <h3 className="faixa1-texto3">
                    Entre em contato conosco!
                </h3>
                <h3 className="faixa1-texto4">
                    (11) 97014-9422
                </h3>
            </div>
        </div>

    </main>

    <section className="faixa2 responsivo-1">
        <div className='f2-textos'>
            <h3 className="faixa2-texto1">
                Deixe o seu volante em 
                boas mãos! 
            </h3>
        
            <p className="faixa2-texto2"> 
            Sempre prezando pelo melhor 
            atendimento do cliente 
            </p>
        </div>

        <div className="bloco2">
            
        </div>
    </section>

    <section className="faixa3 respon-1">
        <div className="bloco3  respon-2">

        </div>

        <div className="bloco4">
            <div className="bloco4-titulo">
                <h1 className='bloco4-titulo-linha1'>Prezamos pelo  </h1>
                <h1 className='bloco4-titulo-linha2e3'> cuidado do seu </h1>
                <h1 className='bloco4-titulo-linha2e3'> veículo! </h1>
            </div>

            <div className="bloco4-texto">
                <h5 className='bloco4-texto-linha1'>Seu automóvel em boas mãos.</h5>
                <h5 className='bloco4-texto-linha2e3' >Temos como objetivo a excelência </h5>
                <h5 className='bloco4-texto-linha2e3'>na qualidade dos nossos serviços </h5>
            </div>
        </div>
    </section>

    <section className="faixa4 fundocelular">
        <div className="div1 celular-2">
            <div className='circulo-icone'>
                <img className="img-div2" src="./images/icone-celular.png" alt=""/>
            </div>

            <div className = "text-div1">
                <p>Atendimento rapido e seguro</p>
            </div>
        </div>

        <div className="div2 celular-3">
            <div className='circulo-icone'>
                <img className="img-div2" src="./images/icone-relogio.png" alt=""/>
            </div>

            <div className="text-div2">
                <p>Entrega rápida e dentro do prazo</p>
            </div>
        </div>

        <div className="div3 celular-4">
            <div className='circulo-icone'>
                <img className="img-div3" alt='pincel' src="./images/icone-pincel.png"/>
            </div>

            <div className="text-div3">
                <p>Pintura, polimento, cristalização e muito mais</p>
            </div>
        </div>
    </section>

    <section className="faixa5 respon-3">
        <div className="texto-faixa5">
            <h1 className="titulo5">Funilaria</h1>
            <p className="'texto5">O melhor cuidado com os veiculos e com os nossos clientes</p>
        </div>

        <div className="img-faixa5">
            <img className="imagem-5 cara" src="./images/img1.jpg" alt=""/>
        </div>
    </section>

    <section className="faixa6 respon-3">
        <div className="texto-faixa5">
            <h1 className="titulo5">Cristalização</h1>
            <p className="texto5">Procedimento com intuito de aumentar a longevidade da tinta do automóvel</p>
        </div>

        <div className="img-f5">
            <img className="img-5 cara2" src="./images/img4.png" alt=""/>
        </div>
    </section>

    <section className="faixa7 respon-3">
        <div className="texto-faixa5">
            <h1 className="titulo5">Pintura</h1>
            <p className="texto5">Tintas de alta qualidade e cuidado e atenção total com o seu veículo</p>
        </div>

        <div className="img-faixa5">
            <img className="imagem-5 cara2" src="./images/img5.jpg" alt=""/>
        </div>
    </section>

    <section className="faixa8 respon-3">
        <div className="texto-faixa5">
            <h1 className="titulo5">Polimento</h1>
            <p className="texto5"> Um procedimento que ajuda na estética do veículo, e fará ele voltar brilhando como nunca para casa</p>
        </div>

        <div className="img-faixa5">
            <img className="imagem-6 cara2" src="./images/img6.jpg" alt=""/>
        </div>
    </section>




    <section className="rodape">
        <div className="bloco1-rodape roda">
            <div>
                <img className="carro1" src="../images/carro.png" alt=""/>
                <h1 className="titulo-rodapé">Estufa de ouro </h1>
            </div>

            <div>
                <h1 className="contato-rodapé , pos">Contatos:</h1>
            </div>

         <div className='coluna-contatos'>
            <div className="contatos">
                <img  className="icone-contato"src="./images/icone-zap.png" alt=""/>
                <h5 className="midia-rodapé">tel: (11) 97014-9422</h5>
            </div>
            
            <div className="contatos">
                <img className="icone-contato" src="./images/icone-email.png" alt=""/>
                <h5 className="midia-rodapé">estuf.ouro@gmail.com</h5>
            </div>

            <div className="contatos">
                <img className="icone-contato" src="./images/icone-insta.png" alt=""/>
                <a href="https://www.instagram.com/funilariaedooficial/?igshid=YmMyMTA2M2Y=" className="midia-rodapé">funilariaedooficial   </a>
            </div>

         </div>
        </div>

        <div className="bloco2-rodape">
            <h1 className="titulo-mapa">Onde nos encontrar:</h1>

            <img  className="bloco2-img mapa"src="./images/mapa.png" alt=""/>
        </div>
    </section>
</body>

);

}