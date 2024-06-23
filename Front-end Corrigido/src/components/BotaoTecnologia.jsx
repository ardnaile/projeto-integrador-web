import React, {useState} from "react";

import botao from "../botoes/Botao-tecnologia.svg";
import botaoClicado from '../botoes/Botao-tecnologia-clicado.svg'


const BotaoTecnologia = (click) => {
    const [clicado, setClicado] = useState(false);
    const [contagem, setContagem] = useState(0);

    const handleClick = () => {
        setClicado(!clicado);

        if (contagem == 0) {
            setContagem(1)
        }else{
            setContagem(0) 
        }
    };


    return(
        <button className="w-full h-full flex justify-center items-center" click={click} onClick={handleClick}>
            <img src={clicado ? botaoClicado : botao} className="max-w-full max-h-full" alt="Botão Tecnologia" />
        </button>
    )
}
export default BotaoTecnologia;