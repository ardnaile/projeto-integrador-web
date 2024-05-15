import React from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

import background from '../fundos/fundo-lista-turma.svg';
import BotaoVoltar from "../components/BotaoVoltar";
import ListaAlunos from "../components/ListaAlunos";


const Turma = () => {
    const { nomeTurma  } = useParams();

    return(
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <img src={background} alt="Background" className="object-cover w-full h-full" />
            </div>
            <div>
                <Link to='/MinhasTurmas'>
                    <BotaoVoltar/>
                </Link>
            </div>
            <div className="">
                {/* aqui vão ser renderizados os botões conforme forem criados no back */}
                <div className="container items-center justify-center">
                  <ListaAlunos/>
                </div>
            </div>
        </div>
    )
}
export default Turma;