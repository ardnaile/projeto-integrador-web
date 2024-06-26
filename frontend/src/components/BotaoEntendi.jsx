import React from "react";

import botao from '../botoes/botao-entendi.svg'

const BotaoEntendi = () => {
    return(
        <button className="cursor-pointer">
            <img src={botao} alt={botao}/>
        </button>
    )
}
export default BotaoEntendi;