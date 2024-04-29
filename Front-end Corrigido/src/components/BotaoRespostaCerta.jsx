import React from "react";

import botao from '../botoes/botao-resposta-certa.svg'

const BotaoRespostaCerta = () => {
    return(
        <button className="cursor-pointer">
            <img src={botao} alt={botao} className="w-[350px]"/>
        </button>
    )
}
export default BotaoRespostaCerta;