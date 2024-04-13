import React from 'react'
import BackgroundLayout from '../../background/VariosLayouts'

function ConfirmarEstudante() {''
    return (
        <div className = "">
        <BackgroundLayout backgroundImage={`url('./src/assets/img_fundo/fundo0.png')`}>
            <div className = " grid h-36 flex-col items-end justify-center mx-auto text-black font-bold text-4xl py-2 px-4">LEGAL, VOCÊ É ESTUDANTE! É A SUA PRIMEIRA VEZ AQUI?</div>
            <div className = 'grid grid-cols-2 h-screen flex-col items-center justify-center w-96 mx-auto gap-16'>
                <button className = "bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">SIM</button>
                <button className = "bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">NÃO</button>
            </div>
        </BackgroundLayout>
        </div>

    )
}

export default ConfirmarEstudante