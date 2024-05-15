import React from "react";
import { Link } from "react-router-dom";

import BotaoVoltar from "../components/BotaoVoltar";
import background from "../fundos/fundo-nova-turma.svg";
import Input from "../components/Input";
import BotaoConfirma from "../components/BotaoConfirma";

const NovaTurma = () => {
    return(
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <img src={background} alt="Background" className="object-cover w-full h-full" /> 
            </div>
            <div className="absolute inset-0 flex flex-col items-center">
                <Link to="/Login">
                    <BotaoVoltar />
                </Link>
            <div className="flex flex-col items-center space-y-10 mt-[500px]">
                <Input/>
                <Link to='/MinhasTurmas'>
                    <BotaoConfirma/>
                </Link>
            </div>
            </div>
        </div>
    )
}
export default NovaTurma;