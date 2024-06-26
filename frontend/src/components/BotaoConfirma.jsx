import React from "react";
import botao from '../botoes/botao-confirmar.svg';

const BotaoConfirma = ({ onClick }) => {
    return(
        <button onClick={onClick} className="cursor-pointer">
            <img src={botao} alt="Botão Confirmar" className="w-48 h-16"/>
        </button>
    );
};

export default BotaoConfirma;
