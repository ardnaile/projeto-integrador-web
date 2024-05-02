import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'



import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'; 

// novas
import BemVindo from './telas/BemVindo';
import Login from './telas/Login';
import CriarConta from './telas/CriarConta';
import PalavraPasse from './telas/PalavraPasse';
import Atencao from './telas/Atencao'
import NomeTurma from './telas/NomeTurma';
import QualSeuNome from './telas/QualSeuNome';
import PrimeiraVez from './telas/PrimeiraVez';
import DigiteCodigo from './telas/DigiteCodigo';
import RespostaIncorreta from './telas/RespostaIncorreta';
import AcabouTempo from './telas/AcabouTempo';
import CodigoSecreto from './telas/CodigoSecreto';
import Categorias from './telas/Categorias';
import SaibaMais from './telas/SaibaMais';
import NovaTurma from './telas/NovaTurma';
import TestandoTelas from './telas/TestandoTelas'; 
import PainelProfessor from './telas/PainelProfessor';
import PainelAluno from './telas/PainelAluno';
import MinhasTurmas from './telas/MinhasTurmas';
import QuizVerdadeiroFalso from './telas/QuizVerdadeiroFalso';
import QuizQuatroOpcoes from './telas/QuizQuatroOpcoes';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"/Login",
    element:<Login/>,
  },
  {
    path:"/CriarConta",
    element:<CriarConta/>,
  },
  {
    path:"/PalavraPasse",
    element:<PalavraPasse/>,
  },
  {
    path:"/Atencao",
    element:<Atencao/>,
  },
  {
    path:"/NomeTurma",
    element:<NomeTurma/>,
  },
  {
    path:"/QualSeuNome",
    element:<QualSeuNome/>,
  },
  {
    path:"/PrimeiraVez",
    element:<PrimeiraVez/>,
  },
  {
    path:"/DigiteCodigo",
    element:<DigiteCodigo/>,
  },
  {
    path:"/RespostaIncorreta",
    element:<RespostaIncorreta/>,
  },
  {
    path:"/AcabouTempo",
    element:<AcabouTempo/>,
  },
  {
    path:"/CodigoSecreto",
    element:<CodigoSecreto/>,
  },
  {
    path:"/Categorias",
    element:<Categorias/>,
  },
  {
    path:"/SaibaMais",
    element:<SaibaMais/>,
  },
  {
    path:"/NovaTurma",
    element:<NovaTurma/>,
  },
  {
    path:"/TestandoTelas",
    element:<TestandoTelas/>,
  },
  {
    path:"/PainelProfessor",
    element:<PainelProfessor/>,
  },
  {
    path:"/PainelAluno",
    element:<PainelAluno/>,
  },
  {
    path:"/MinhasTurmas",
    element:<MinhasTurmas/>,
  },
  {
    path:"/QuizVerdadeiroFalso",
    element:<QuizVerdadeiroFalso/>,
  },
  {
    path:"/QuizQuatroOpcoes",
    element:<QuizQuatroOpcoes/>,
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
  
)