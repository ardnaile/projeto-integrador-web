import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import New_user from './rotas/usuario/New_user';
import Home from './rotas/Home';
import Old_user from './rotas/usuario/Old_user';
import Prof_aluno from './rotas/usuario/Prof_aluno';
<<<<<<< HEAD
import Estudandte from './rotas/usuario/Estudandte';
=======
import Quiz from 'Front-end\src\Quiz.jsx';
>>>>>>> 517b4244243d6eebac48c9c49576c9aeece2a1f6

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
<<<<<<< HEAD
    path:"/Estudante",
    element:<Estudandte/>,
=======
    path:"/Quiz",
    element:<Quiz/>,
>>>>>>> 517b4244243d6eebac48c9c49576c9aeece2a1f6
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)