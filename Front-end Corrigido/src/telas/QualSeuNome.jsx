import React, {useEffect} from "react";
import { Link } from "react-router-dom";

import BotaoVoltar from "../components/BotaoVoltar";
import background from "../fundos/fundo-qual-seu-nome.svg";
import Input from "../components/Input";
import BotaoConfirma from "../components/BotaoConfirma";
import NomeTurma from "./NomeTurma";

const QualSeuNome = ({turma}) => {
    <script src='script.js'></script>
   
    return(
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <img src={background} alt="Background" className="object-cover w-full h-full" /> 
            </div>
            <div className="absolute inset-0 flex flex-col items-center">
                <Link to="/NomeTurma">
                    <BotaoVoltar />
                </Link>
            <div className="mt-30 flex flex-col items-center space-y-10 justify-center h-screen">
                <Input id='usuario_estudante'/>
                <Link>
                    <BotaoConfirma onClick="coletarInfoQualSeuNome()"/>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default QualSeuNome;