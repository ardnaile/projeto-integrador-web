import React from 'react'

function Quiz() {
  return (
    <div>
        <div>
                <span className = "bg-blue-400">Pergunta vai ficar aqui</span>
                <div className="h-screen w-1/2 gap-4 p-4 grid grid-cols-2 grid-rows-2 div-grid bg-green-700 justify-center" >
                    <button className = "mb-16 mt-16 text-center font-text_ale text-5xl">Resposta 1</button>
                    <button className = "mb-16 mt-16 text-center font-text_ale text-5xl">Resposta 2</button>
                    <button className = "mb-16 mt-16 text-center font-text_ale text-5xl">Resposta 3</button>
                    <button className = "mb-16 mt-16 text-center font-text_ale text-5xl">Resposta 4</button>
                </div>
                <button className = "bg-blue-400">Próxima Pergunta</button>    
            
        </div>
    </div>
  )
}

export default Quiz