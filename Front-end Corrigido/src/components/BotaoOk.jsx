import React from "react";

import botao from '../botoes/botao-ok.svg'

const BotaoOk = () => {
    return(
        <button className="cursor-pointer">
            <img src={botao} alt={botao}/>
        </button>
    )
}
export default BotaoOk;