import React,{useState} from "react";

import botao from "../botoes/botao-falso.svg";
import botaoClicado from '../botoes/botao-falso-hover.svg'

const BotaoFalso = ({selecionado, onClick}) => {

    return(
        <button className={"${selecionado ? 'selecionado' : ''}"} onClick={onClick}>
            <img src={selecionado ? botaoClicado : botao} className="max-w-full max-h-full" alt="Botão Falso" />
        </button>
    )
}
export default BotaoFalso;