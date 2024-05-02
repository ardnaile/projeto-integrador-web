import React,{useState} from "react";

import botao from "../botoes/botao-verdadeiro.svg";
import botaoClicado from '../botoes/botao-verdadeiro-hover.svg'

const BotaoVerdadeiro = ({selecionado, onClick}) => {
    return(
        <button className={"${selecionado ? 'selecionado' : ''}"} onClick={onClick}>
            <img src={selecionado ? botaoClicado : botao} className="max-w-full max-h-full" alt="Botão Verdadeiro" />
        </button>
    )
}
export default BotaoVerdadeiro;