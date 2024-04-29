import React from "react";

import botao from '../botoes/botao-confirmar.svg'

const BotaoConfirma = () => {
    return(
        <button className="cursor-pointer">
            <img src={botao} alt={botao} className="w-48 h-16"/>
        </button>
    )
}
export default BotaoConfirma;