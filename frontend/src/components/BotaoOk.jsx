import React from "react";

import botao from '../botoes/botao-ok.svg'

const BotaoOk = ({onButtonClick}) => {
    return(
        <button onClick={onButtonClick} className="cursor-pointer">
            <img src={botao} alt={botao} className="w-48 h-16"/>
        </button>
    )
}
export default BotaoOk;