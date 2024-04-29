import React from "react";
import { Link } from "react-router-dom";

import background from '../fundos/fundo-principal.svg';
import botao1 from '../botoes/botao-minhas-turmas.svg'
import botao2 from '../botoes/botao-nova-turma.svg'
import botao3 from '../botoes/botao-saiba-mais.svg'
import FotosPerfil from "../components/FotosPerfil";
import BotaoVoltar from "../components/BotaoVoltar";

const PainelProfessor = () => {
    return(
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <img src={background} alt="Background" className="object-cover w-full h-full" />
            </div>
            <div>
                <Link to='/Categorias'>
                    <BotaoVoltar />
                </Link>
            </div>

            <div className="flex flex-col justify-center items-center space-y-20">
                <FotosPerfil/>
                <h2 className="absolute top-64 text-3xl font-bold">Professor Exemplo</h2>
            
                <div className="absolute bottom-50 w-full flex flex-row justify-center items-center">
                    
                    <Link>
                        <button>
                            <img src={botao1}/>
                        </button>
                    </Link>

                    <Link to='/NovaTurma'>
                        <button>
                            <img src={botao2}/>
                        </button>
                    </Link>

                    <Link to='/SaibaMais'>
                        <button>
                            <img src={botao3}/>
                        </button>
                    </Link>
                
                </div>
            </div>

        </div>
    )
}
export default PainelProfessor;