import React from 'react'
import BackgroundLayout from '../../background/VariosLayouts'

function ConfirmarEstudante() {''
    return (
        <div className = "">
        <BackgroundLayout backgroundImage={`url('./src/assets/img_fundo/fundo0.png')`}>
            <div className = " grid h-36 flex-col items-end justify-center mx-auto text-black font-bold text-5xl py-30 px-4">LEGAL, VOCÊ É ESTUDANTE! É A SUA PRIMEIRA VEZ AQUI?</div>
            <div className = 'grid grid-cols-2 h-screen flex-col items-center justify-center w-96 mx-auto gap-16'> 
                <div className = "flex items-center mb-30">
                    <img className = "h-30 w-30 mr-16" src = "src\assets\icones\sim.png" alt = 'Icone Sim'></img>
                    <button className = "bg-blue-500 hover:bg-green-700 text-white font-bold text-2xl py-4 px-11 rounded-full">SIM</button>
                </div>
                <div className = "flex items-center ">
                    <img className = "h-30 w-30 ml-16" src = "src\assets\icones\nao.png" alt = 'Icone Não'></img>    
                    <button className = "bg-blue-500 hover:bg-red-700 text-white font-bold text-2xl py-4 px-11 rounded-full mr-16">NÃO</button>
                </div>
            </div>
        </BackgroundLayout>
        </div>
    
    )
}

export default ConfirmarEstudante