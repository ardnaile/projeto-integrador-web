import React from "react";
import { Link } from "react-router-dom";

import BotaoVoltar from "../components/BotaoVoltar";
import background from "../fundos/fundo-qual-nome-da-turma.svg";
import Input from "../components/Input";
import BotaoConfirma from "../components/BotaoConfirma";

const NomeTurma = () => {
    <script src='script.js'></script>
    return(
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <img src={background} alt="Background" className="object-cover w-full h-full" /> 
            </div>
            <div className="absolute inset-0 flex flex-col items-center">
                <Link to="/PrimeiraVez">
                    <BotaoVoltar />
                </Link>
            <div className="mt-44 flex flex-col items-center space-y-10 justify-center h-screen">
                <Input id='turma'/>
                <Link to='/Categorias' className="w-60" >
                       <BotaoConfirma onClick='coletarInfoNomeTurma()'/>
                </Link>
            </div>
            </div>
        </div>
    )
}
export default NomeTurma;