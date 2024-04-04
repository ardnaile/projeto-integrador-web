import React from 'react'
import BackgroundLayout from '../background/VariosLayouts'

export default function Home() {
  return (
    <div className='w-screen  h-screen'>
      <BackgroundLayout backgroundImage={`url('./src/assets/img_fundo/fundo3.png')`}>
      <div className='grid justify-center items-center'>
          <div className='space-x-4 mb-16 mt-16 space-y-8'>
            <h1 className='text-center font-extrabold text-5xl'>OLÁ, FULANINHO</h1>
            <p className=' text-center font-extrabold text-5xl'>O QUE VAMOS APRENDER HOJE?</p>
          </div>
          <div className='space-x-4 mb-16 mt-16 space-y-8'>
            <h1 className='text-center font-extrabold text-5xl'>OLÁ, FULANINHO</h1>
            <p className=' text-center font-extrabold text-5xl'>O QUE VAMOS APRENDER HOJE?</p>
          </div>

            {/* 1 */}           
            <div className=''>  
                <div className='bg-transparent  grid grid-cols-4 justify-center items-center space-x-8'>
                    <div className='sm:text-1xl text-center w-52 h-72  font-text_ale text-2xl rounded-3xl bg-white border-r-4 border-x-gray-400'>
                      <img className='w-full cursor-pointer  rounded-3xl mt-16 mb-16' src="src\assets\icones\8.svg" alt=""/>MATEMÁTICA
                    </div>
                    <div className='sm:text-1xl text-center w-52 h-72  font-text_ale text-2xl rounded-3xl bg-white border-r-4 border-x-gray-400'>
                      <img className='w-full cursor-pointer  rounded-3xl mt-16 mb-16' src="src\assets\icones\1.svg" alt=""/>TECNOLOGIA    
                    </div>
                    <div className='sm:text-1xl text-center w-52 h-72  font-text_ale text-2xl rounded-3xl bg-white border-r-4 border-x-gray-400'>
                      <img className='w-full cursor-pointer  rounded-3xl mt-16 mb-16' src="src\assets\icones\2.svg" alt=""/>IDIOMAS 
                    </div>
                    <div className='sm:text-1xl text-center font-text_ale w-52 h-72  text-2xl rounded-3xl bg-white border-r-4 border-x-gray-400'>
                      <img className='w-full cursor-pointer  rounded-3xl mt-16 mb-16 ' src="src\assets\icones\3.svg" alt=""/>ANIMAIS      
                    </div>
                </div>
            </div>

            {/* 2 */}
            <div className=''>
              <div className='bg-transparent  grid grid-cols-4 justify-center items-center mt-10 space-x-8'>
                  <div className='sm:text-1xl text-center w-52 h-72  font-text_ale text-2xl rounded-3xl bg-white border-r-4 border-x-gray-400'>
                    <img className='w-full cursor-pointer  rounded-3xl mt-16 mb-16' src="src\assets\icones\4.svg" alt=""/>COMIDA                            
                  </div>

                  <div className='sm:text-1xl text-center w-52 h-72  font-text_ale text-2xl rounded-3xl bg-white border-r-4 border-x-gray-400'>
                    <img className='w-full cursor-pointer  rounded-3xl mt-16 mb-16' src="src\assets\icones\5.svg" alt=""/>NATUREZA                       
                  </div>

                  <div className='sm:text-1xl text-center w-52 h-72  font-text_ale text-2xl rounded-3xl bg-white border-r-4 border-x-gray-400'>
                    <img className='w-full cursor-pointer  rounded-3xl mt-16 mb-16' src="src\assets\icones\6.svg" alt=""/>ARTES                         
                  </div>

                  <div className='sm:text-1xl text-center w-52 h-72 font-text_ale text-2xl rounded-3xl bg-white border-r-4 border-x-gray-400'>
                    <img className='w-full cursor-pointer  rounded-3xl mt-16 mb-16' src="src\assets\icones\7.svg" alt=""/>ESPORTES
                  </div>
              </div>
            </div> 
        </div>
      </BackgroundLayout >
    </div>
  )
}

