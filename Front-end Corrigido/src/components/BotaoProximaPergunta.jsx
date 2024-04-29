import React from "react";

import botao from '../botoes/botao-proxima-pergunta.svg'

const BotaoProximaPergunta = () => {
    return(
        <button className="cursor-pointer">
            <img src={botao} alt={botao} className="w-[350px]"/>
        </button>
    )
}
export default BotaoProximaPergunta;