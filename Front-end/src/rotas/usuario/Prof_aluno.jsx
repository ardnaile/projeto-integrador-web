import { Link,Outlet } from "react-router-dom";
import BackgroundLayout from '../../background/VariosLayouts'

export default function Prof_aluno() {
  return (
    <div>
        <BackgroundLayout backgroundImage={`url('./src/assets/img_fundo/fundo0.png')`}>
        <div className='grid justify-center items-center'>
            <div className='space-x-4 mb-16 mt-16 space-y-16'>
              <h1 className='text-center font-extrabold text-5xl'>OLÁ, SEJA BEM VINDO!</h1>
              <h2 className=' text-center font-extrabold text-5xl'>POR FAVOR, NOS DIGA SE VOCÊ É <br/> PROFESSOR, RESPONSÁVEL OU ALUNO:</h2>
            </div>
            <div className='space-y-36 justify-center p-36 container relative'>
              <div className=' flex items-center space-x-40 '>
                <img className='w-52 absolute cursor-pointer mb-14 ml-4' src="src\assets\icones\professor2.png" alt=""/>
                <Link>
                  <p className=' bg-red-500 rounded-full font-bold text-4xl text-start px-16 py-6 cursor-pointer hover:text-5xl'>SOU PROFESSOR/<br/>RESPONSÁVEL</p>
                </Link>
              </div>
              <div className='container relative flex items-center space-x-40'>
                <img className='w-52 absolute cursor-pointer mb-14 ml-4 ' src="src\assets\icones\aluno2.png" alt=""/>
                <Link to="/New_user">
                  <p className=' bg-red-500 rounded-full font-bold text-4xl text-start px-16 py-10 cursor-pointer hover:text-5xl  '>SOU ESTUDANDE</p>
                </Link>
              </div>
            </div>
          
        </div>
        </BackgroundLayout >
    </div>
  )
}

