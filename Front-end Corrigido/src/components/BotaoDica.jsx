import React from "react";

import botao from '../botoes/botao-dica.svg'

const BotaoDica = () => {
    
    return(
        <button className="fixed top-0 right-0 m-4 z-10 flex items-center justify-center bg-transparent border-none outline-none cursor-pointer">
            <img src={botao} alt={botao} className="w-20"/>
        </button>
    )
}
export default BotaoDica;