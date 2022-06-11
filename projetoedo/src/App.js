import './App.css'; 
import {Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>Páginas</h1>

     <Link to='/landingpage'>landingpage</Link>
     <br></br>
     <Link to='/login'> login</Link>
     <br></br>
     <Link to='/menu'>menu do login</Link>
     <br></br>
     <Link to='/consultarpedido'>consultar pedido</Link>
     <br></br>
     <Link to='/agendarpedido'>agendar pedido</Link>
     

     
    </div>
  )
}

export default App;
