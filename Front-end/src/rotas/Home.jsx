import React from 'react'
import BackgroundLayout from '../background/VariosLayouts'

export default function Home() {
  return (
    <div className='w-screen mx-auto'>
      <BackgroundLayout backgroundImage={`url('./src/assets/img_fundo/fundo3.png')`}>
        <div className='grid justify-center items-center'>
            <div className='space-x-4 mb-16 mt-16 space-y-8'>
              <h1 className='text-center font-extrabold text-5xl'>OLÁ, FULANINHO</h1>
              <h2 className=' text-center font-extrabold text-5xl'>O QUE VAMOS APRENDER HOJE?</h2>
            </div>
                        
            <div className=' mx-auto  bg-transparent'>  
                <div className='grid grid-cols-4 '>
                
                  <div className='text-center w-60 h-80 font-text_ale text-2xl rounded-3xl bg-white border-r-4 border-r-gray-200 mr-16 mb-16'>
                    <img className='w-auto cursor-pointer  rounded-3xl mt-2 ' src="src\assets\icones\calculadora.png" alt=""/>MATEMÁTICA
                  </div>

                  <div className='text-center w-60 h-80 font-text_ale text-2xl rounded-3xl bg-white border-r-4 border-x-gray-200'>
                    <img className='w-auto cursor-pointer  rounded-3xl mt-5 mb-14' src="src\assets\icones\programacao.png" alt=""/>TECNOLOGIA    
                  </div>

                  <div className='text-center w-60 h-80 font-text_ale text-2xl rounded-3xl bg-white border-r-4 border-x-gray-200'>
                    <img className='w-auto cursor-pointer  rounded-3xl mt-12 mb-12' src="src\assets\icones\idiomas.png" alt=""/>IDIOMAS 
                    
                  </div>

                  <div className='text-center font-text_ale w-60 h-80 text-2xl rounded-3xl bg-white border-r-4 border-x-gray-200'>
                    <img className='w-auto cursor-pointer  rounded-3xl mt-14 mb-12' src="src\assets\icones\animais.png" alt=""/>ANIMAIS      
                  </div>

                  <div className='text-center w-60 h-80 font-text_ale text-2xl rounded-3xl bg-white border-r-4 border-x-gray-200'>
                    <img className='w-auto cursor-pointer  rounded-3xl mt-6 mb-10' src="src\assets\icones\comida.png" alt=""/>COMIDA
                            
                  </div>

                  <div className='text-center w-60 h-80 font-text_ale text-2xl rounded-3xl bg-white border-r-4 border-x-gray-200'>
                    <img className='w-auto cursor-pointer  rounded-3xl mt-5 mb-8' src="src\assets\icones\natureza.png" alt=""/>NATUREZA
                            
                  </div>

                  <div className='text-center w-60 h-80 font-text_ale text-2xl rounded-3xl bg-white border-r-4 border-x-gray-200'>
                    <img className='w-auto cursor-pointer  rounded-3xl mt-7 mb-8' src="src\assets\icones\artes.png" alt=""/>ARTES
                            
                  </div>

                  <div className='text-center w-60 h-80 font-text_ale text-2xl rounded-3xl bg-white border-r-4 border-x-gray-200'>
                    <img className='w-auto cursor-pointer  rounded-3xl mt-2' src="src\assets\icones\esporte.png" alt=""/>ESPORTES
                          
                  </div>
                  
                </div> 
              </div> 
          </div>
      </BackgroundLayout >
    </div>
  )
}

