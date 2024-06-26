import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom';

import background from '../fundos/fundo-lista-turma.svg';
import BotaoVoltar from "../components/BotaoVoltar";
import ListaAlunos from "../components/ListaAlunos";


const Turma = () => {
    // const { id  } = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const professor = queryParams.get('professor');

    return(
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <img src={background} alt="Background" className="object-cover w-full h-full" />
            </div>
            <div>
                <Link to={`/MinhasTurmas/${professor}`}>
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