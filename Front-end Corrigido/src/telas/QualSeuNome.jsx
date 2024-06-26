import React, {useEffect, useState} from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import BotaoVoltar from "../components/BotaoVoltar";
import background from "../fundos/fundo-qual-seu-nome.svg";
import Input from "../components/Input";
import BotaoConfirma from "../components/BotaoConfirma";

const QualSeuNome = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    // const {nome_turma} = useParams();
    const nome_turma = queryParams.get('nome_turma');
    // const professor = queryParams.get('professor');
    const [inputValue , setInputValue] = useState('');

    const handleInputChange = (value) => {
        setInputValue(value);
      };
   
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
                <Input onInputChange={handleInputChange} id='usuario_estudante'/>
                <Link to={`/CodigoSecreto?nome_turma=${nome_turma}&nome_aluno=${inputValue}`}>
                    <BotaoConfirma onClick="coletarInfoQualSeuNome()"/>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default QualSeuNome;