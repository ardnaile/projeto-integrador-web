import React from "react";
import { Link } from "react-router-dom";

import background from '../fundos/fundo-primeira-vez.svg';
import botao1 from '../botoes/botao-sim.svg'
import botao2 from '../botoes/botao-nao.svg'
import BotaoVoltar from "../components/BotaoVoltar";

const PrimeiraVez = () => {
    return(
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <img src={background} alt="Background" className="object-cover w-full h-full" />
            </div>
            <div className="absolute inset-x-0 bottom-[350px] space-x-20 flex flex-row justify-center items-center">
                <Link to="/NomeTurma">
                    <button>
                        <img src={botao1} alt="Botão 1" className="w-[350px]" />
                    </button>
                </Link>
                <Link to="/DigiteCodigo">
                    <button>
                        <img src={botao2} alt="Botão 2" className="w-[350px]"  />
                    </button>
                </Link>
                <Link to='/'>
                    <BotaoVoltar/>
                </Link>
            </div>
        </div>
    )
}
export default PrimeiraVez;