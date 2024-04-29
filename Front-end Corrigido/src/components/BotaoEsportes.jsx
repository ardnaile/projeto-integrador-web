import React, {useState} from "react";

import botao from "../botoes/Botao-esporte.svg";
import botaoClicado from '../botoes/Botao-esporte-clicado.svg'


const BotaoEsportes = ({atualizarEstadoPai}) => {
    const [clicado, setClicado] = useState(false);

    const handleClick = () => {
        setClicado(!clicado);
        atualizarEstadoPai(!clicado);
    };


    return(
        <button className="w-full h-full flex justify-center items-center" onClick={handleClick}>
            <img src={clicado ? botaoClicado : botao} className="max-w-full max-h-full" alt="Botão Esportes" />
        </button>
    )
}
export default BotaoEsportes;