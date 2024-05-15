import React from "react";
import { Link } from "react-router-dom";

import background from '../fundos/fundo-minhas-turmas.svg';
import BotaoVoltar from "../components/BotaoVoltar";
import ListaTurma from "../components/ListaTurmas";


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
            <div className="">
                <ListaTurma/>
            </div>
        </div>
    )
}
export default BemVindo;

