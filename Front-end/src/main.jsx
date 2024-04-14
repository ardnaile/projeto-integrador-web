import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'



import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import New_user from './rotas/usuario/New_user';
import Home from './rotas/Home';
import Old_user from './rotas/usuario/Old_user';
import Prof_aluno from './rotas/usuario/Prof_aluno';
import Estudante from './rotas/usuario/Estudante';
import Quiz from './rotas/usuario/Quiz';
import Sobre from './rotas/Sobre';
import ColetaNome from './rotas/usuario/ColetaNome';
import ConfirmarEstudante from './rotas/usuario/ConfirmarEstudante';
import TelaTeste from './rotas/usuario/TelaTeste';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
  },
  {
    path:"/Home",
    element:<Home/>,
  },   
  {
    path:"/New_user",
    element:<New_user/>,
  },
  {
    path:"/Old_user",
    element:<Old_user/>,
  },
  {
    path:"/Prof_aluno",
    element:<Prof_aluno/>,
  },
  {

    path:"/Estudante",
    element:<Estudante/>,
  },
  {
    path:"/Quiz",
    element:<Quiz/>,

  },
  {
    path:"/Sobre",
    element:<Sobre/>,
  },
  {
    path:"/ColetaNome",
    element:<ColetaNome/>,
  },
  {
    path:"/ConfirmarEstudante",
    element:<ConfirmarEstudante/>,
  },
  {
    path:"/TelaTeste",
    element:<TelaTeste/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
  
)