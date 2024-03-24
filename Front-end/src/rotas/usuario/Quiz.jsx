import React from 'react'
import BackgroundLayout from '../../background/VariosLayouts'

function Quiz() {
  return (
    <BackgroundLayout backgroundImage={`url('./src/assets/img_fundo/fundo0.png')`}>
    <div className = " text-white h-screen flex flex-col items-center justify-center shadow-lg"> 
      
        <div className = "bg-black w-90 max-w-800 border border-white rounded-lg shadow-lg ">
          <span className = "text-lg font-bold text-center items-center flex flex-col justify-center">Qual é o Pokemon de Ash ?</span>
            <div className = "p-8 m-0 gap-4 box-sizing grid grid-cols-2 w-full">
              <button className ="bg-white text-black px-20 py-4 rounded-lg mb-2 hover:bg-gray-200">Pikachu</button>
              <button className ="bg-white text-black px-20 py-4 rounded-lg mb-2 hover:bg-gray-200">Grouthlite</button>
              <button className ="bg-white text-black px-20 py-4 rounded-lg mb-2 hover:bg-gray-200">Chalizard</button>
              <button className ="bg-white text-black px-20 py-4 rounded-lg mb-2 hover:bg-gray-200">Bulbassauro</button>
            </div>
            <div className ="flex justify-center mt-4 gap-2 p-2">
              <button className ="bg-white text-black px-20 py-4 rounded-lg mb-2 hover:bg-gray-200">Começar Quiz!</button>
              <button className ="bg-white text-black px-20 py-4 rounded-lg mb-2 hover:bg-gray-200">Próxima Pergunta</button>
          </div>
        </div>
    </div>
    </BackgroundLayout>
    
  )
}

export default Quiz