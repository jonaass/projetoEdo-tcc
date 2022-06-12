import './index.scss'


export default function index() {

return(
<main className='pai pagina'>


        <header className="header">
            <h1 className="titulo">Pedidos</h1>
        </header>

        <div>
            <input className="barra-pesquisa" type="text" placeholder="Buscar"></input>
        </div>

        <div className="tabela">
            <table>
                <tr>
                    <th>data</th>
                    <th>nome</th>
                    <th>Horário</th>
                    <th>veiculo</th>
                    <th>ações</th>
                </tr>

                <tr>
                    <td>20/04</td>
                    <td>Jonas</td>
                    <td>16h</td>
                    <td>fiat uno</td>
                    <td>
                        <img>"</img>
                    </td>
                </tr>

                <tr>
                    <td>21/04</td>
                    <td>João</td>
                    <td>13h</td>
                    <td>celta rebaixado</td>
                    <td></td>
                </tr>

                <tr>
                    <td>19/03</td>
                    <td>Maria</td>
                    <td>16h</td>
                    <td>celta</td>
                    <td></td>
                </tr>

                <tr>
                    <td>10/03</td>
                    <td>Nicolas</td>
                    <td>16h</td>
                    <td>um caminhão fodasse</td>
                    <td></td>
                </tr>

                <tr>
                    <td>20/04</td>
                    <td>Jonas</td>
                    <td>16h</td>
                    <td>fiat uno</td>
                    <td></td>
                </tr>

                <tr>
                    <td>20/04</td>
                    <td>Jonas</td>
                    <td>16h</td>
                    <td>fiat uno</td>
                    <td></td>
                </tr>


            </table>
        </div>

</main>
   

)
}