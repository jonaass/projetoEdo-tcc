import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer} from 'react-toastify';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { BrowserRouter , Routes ,Route } from 'react-router-dom';

import App from './App';
import Consultarpedidos from'./pages/consultarpedido';
import Landingpage from'./pages/landingpage/index';
import Login from'./pages/login';
import Menu from './pages/menu';
import Agendar from './pages/agendarpedido';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastContainer />
    <Routes>
      
      <Route path='/' element={<Landingpage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/consultarpedido' element={<Consultarpedidos />} />
      <Route path='/agendarpedido' element={<Agendar />} />
      <Route path='/agendarpedido/alterar/:idParam' element={<Agendar />} />
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);