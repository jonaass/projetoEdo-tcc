import'./index.scss';

import { Link } from 'react-router-dom';

export default function index() {
    
return(

<body>
    <header className="cabeçalho">

        <div className="text-cabeçalho">
            <a className='detalhes' href="../login">Área restrita</a>
        </div>

        <div className="texto-cabeçalho">
            <div>
                <h1>Estufa de ouro</h1> 
            </div>

            <div className="carro.css">
                <img className="carro" src="./images/carro.png" alt=""/>
            </div>
        </div>

    </header>

    <main className="faixa1">
        <div className="faixa1-imagem">
            <div className="faixa1-texto">
                <h3 className="faixa1-texto1">
                    Um carro bem cuidado, faz você ir longe!
                </h3>

                <h3 className="faixa1-texto2">
                    Entre em contato conosco
                </h3>
                <h3 className="faixa1-texto3">
                    (11)97014-9422
                </h3>
            </div>
        </div>

    </main>

    <section className="faixa2">
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

    <section className="faixa3">
        <div className="bloco3">

        </div>

        <div className="bloco4">
            <div className="bloco4-titulo">
                <h1>Prezamos pelo cuidado do veículo</h1>
            </div>

            <div className="bloco4-texto">
                <h5>Seu automóvel em boas mãos, temos como objetivo a excelência na qualidade dos nossos serviços</h5>
            </div>
        </div>
    </section>

    <section className="faixa4">
        <div className="div1">
            <div>
                <img className="img-div1" src="./images/icone2.png" alt=""/>
            </div>

            <div className = "text-div1">
                <p >Atendimento rapido e seguro</p>
            </div>
        </div>

        <div className="div2">
            <div >
                <img className="img-div1" src="./images/icone1.png" alt=""/>
            </div>

            <div className="text-div2">
                <p>Entrega rápida e dentro do prazo</p>
            </div>
        </div>

        <div className="div3">
            <div >
                <img className="img-div1" src="./images/icone3.png" />
            </div>

            <div className="text-div3">
                <p>Pintura, polimento, cristalização e muito mais</p>
            </div>
        </div>
    </section>

    <section className="faixa5">
        <div className="texto-faixa5">
            <h1 className="titulo5">Funilaria</h1>
            <p className="'texto5">O melhor cuidado com os veiculos e com os nosso clientes</p>
        </div>

        <div className="img-faixa5">
            <img className="imagem-5" src="./images/img1.jpg" alt=""/>
        </div>
    </section>

    <section className="faixa6">
        <div className="texto-faixa5">
            <h1 className="titulo5">Cristalização</h1>
            <p className="texto5">Procedimento com a missão de ampliar a durabilidade da tintar do automóvel</p>
        </div>

        <div className="img-f5">
            <img className="img-5" src="./images/img4.png" alt=""/>
        </div>
    </section>

    <section className="faixa7">
        <div className="texto-faixa5">
            <h1 className="titulo5">Pintura</h1>
            <p className="texto5">Tintas de alta qualidade e o cuidado total com a integridade do veiculo</p>
        </div>

        <div className="img-faixa5">
            <img className="imagem-5" src="./images/img5.jpg" alt=""/>
        </div>
    </section>

    <section className="faixa8">
        <div className="texto-faixa5">
            <h1 className="titulo5">Polimento</h1>
            <p className="texto5"> Um procedimento que ajuda na estética do veiculo, e fará ele voltar br/ilhando como nunca para  casa</p>
        </div>

        <div className="img-faixa5">
            <img className="imagem-6" src="./images/img6.jpg" alt=""/>
        </div>
    </section>




    <section className="rodape">
        <div className="bloco1-rodape">
            <div>
                <h1 className="titulo-rodapé">Estufa de ouro </h1>
                <img className="carro1" src="../images/carro.png" alt=""/>
            </div>

            <div>
                <h1 className="contato-rodapé , pos">Contatos:</h1>
            </div>

            <div className="contatos">
                <img  className="icone-contato"src="./images/zap-icone.png" alt=""/>
                <h5 className="midia-rodapé">tel: (11) 97014-9422</h5>
            </div>
            
            <div className="contatos">
                <img className="icone-contato" src="./images/email-icone.png" alt=""/>
                <h5 className="midia-rodapé">estuf.ouro@gmail.com</h5>
            </div>

            <div className="contatos">
                <img className="icone-contato" src="./images/insta-icone.png" alt=""/>
                <a href="https://www.instagram.com/funilariaedooficial/?igshid=YmMyMTA2M2Y=" className="midia-rodapé">funilariaedooficial   </a>
            </div>
        </div>

        <div className="bloco2-rodape">
            <h1 className="titulo-mapa">Onde nos encontrar:</h1>

            <img  className="bloco2-img"src="./images/mapa.png" alt=""/>
        </div>
    </section>
</body>

);

}