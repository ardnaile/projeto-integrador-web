import React, {useState} from "react";

import botao from "../botoes/Botao-artes.svg"
import botaoClicado from '../botoes/Botao-artes-clicado.svg'


const BotaoArtes = () => {
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
        <button className="w-full h-full flex justify-center items-center" onClick={handleClick}>
            <img src={clicado ? botaoClicado : botao} className="max-w-full max-h-full" alt="Botão Artes" />
        </button>
    )
}
export default BotaoArtes;