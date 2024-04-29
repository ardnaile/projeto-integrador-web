import React from "react";

import botao from '../botoes/botao-voltar.svg'

const BotaoVoltar = () => {
    return(
        <button className="fixed top-0 left-0 m-4 z-10 flex items-center justify-center bg-transparent border-none outline-none cursor-pointer">
            <img src={botao} alt={botao} className="w-48 h-16" />
        </button>
    )
}
export default BotaoVoltar;