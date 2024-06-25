import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import BotaoVoltar from "../components/BotaoVoltar";
import background from "../fundos/fundo-qual-nome-da-turma.svg";
import Input from "../components/Input";
import BotaoConfirma from "../components/BotaoConfirma";

const NomeTurma = () => {
  <script src='script.js'></script>
  const [inputValue, setInputValue] = useState('');
  const [turma, setTurmas] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  
  const handleFetchRequest = async () => {
        const response = await fetch(`http://localhost:8080/verAlunosDaTurma/${inputValue}`,{
          method:'GET'})
        if (!response.ok) {
          alert('Erro ao requisitar dados')
        }
        const data = await response.json();
        const turmaSimples = data.map(turma => ({
          turma: turma.turma
        }))  

        setTurmas(turmaSimples)

        const turmaEncontrada = turmaSimples.some(turmaObj => turmaObj.turma === inputValue);

        if (turmaEncontrada) {
          // alert("Logado com sucesso!");
          navigate('/QualSeuNOme');
        } else {
          alert('Nome da turma não existe');
        }
    };
   
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
                <Input onInputChange={handleInputChange}/>
                {/* <Link to='/Categorias' className="w-60" > */}
                       <BotaoConfirma onButtonClick={handleFetchRequest}/>
                {/* </Link> */}
            </div>
            </div>
        </div>
    )
}
export default NomeTurma;