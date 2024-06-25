import React, { useState } from "react";
import botao from "../botoes/Botao-matematica.svg";
import botaoClicado from '../botoes/Botao-matematica-clicado.svg';

const BotaoMatematica = () => {
    const [clicado, setClicado] = useState(false);
    const [contagem, setContagem] = useState(0);

    const handleClick = () => {
        setClicado(!clicado);
        setContagem(contagem === 0 ? 1 : 0);
    };

    return (
        <button className="w-full h-full flex justify-center items-center" onClick={handleClick}>
            <img src={clicado ? botaoClicado : botao} className="max-w-full max-h-full" alt="Botão Matemática" />
        </button>
    );
};

export default BotaoMatematica;
