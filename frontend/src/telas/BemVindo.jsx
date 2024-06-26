import React from "react";
import { Link } from "react-router-dom";

import background from '../fundos/fundo-seja-bem-vindo.svg';
import botao1 from '../botoes/botao-professor.svg'
import botao2 from '../botoes/botao-estudante.svg'

const BemVindo = () => {
    return(
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <img src={background} alt="Background" className="object-cover w-full h-full" />
            </div>
            <div className="absolute inset-x-0 bottom-[200px] flex flex-col justify-center items-center">
                <Link to="/Login">
                    <button>
                        <img src={botao1} alt="Botão 1" className="w-144 h-48" />
                    </button>
                </Link>
                <Link to='PrimeiraVez'> 
                    <button>
                        <img src={botao2} alt="Botão 2" className="w-144 h-48" />
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default BemVindo;