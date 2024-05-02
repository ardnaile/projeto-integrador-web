import React from "react";
import { Link } from "react-router-dom";

import background from '../fundos/fundo-minhas-turmas.svg';
import BotaoBranco from '../components/BotaoBranco';
import BotaoVoltar from "../components/BotaoVoltar";

const BemVindo = () => {
    return(
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <img src={background} alt="Background" className="object-cover w-full h-full" />
            </div>
            <div>
                <Link to='/PainelProfessor'>
                    <BotaoVoltar/>
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {/* aqui vão ser renderizados os botões conforme forem criados no back */}
            </div>
        </div>
    )
}
export default BemVindo;