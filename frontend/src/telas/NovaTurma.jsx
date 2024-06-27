import React, { useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

import BotaoVoltar from "../components/BotaoVoltar";
import background from "../fundos/fundo-nova-turma.svg";
import Input from "../components/Input";
import BotaoConfirma from "../components/BotaoConfirma";
import InputTurma from "../components/InputTurma";

const NovaTurma = () => {
    let {id} = useParams();
    const [dados, setDados] = useState('');
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const styleInput = 'text-3xl font-text_ale text-center ease-in-out focus:outline-none w-[500px] bg-gray-50 border-none rounded-full px-4 py-4 text-gray-800';

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    const requestBody = {
        nome_turma:inputValue, 
        id_professor: id 
    }
  
    const handleFetchRequest = () => {
        fetch(`http://localhost:8080/novaTurma`,{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(requestBody)
          })
            .then((response) => response.status.valueOf())
            .then((data) => {
              setDados(data)
              console.log(data)
  
              if (data == 200) {
                alert("Cadastrado com sucesso!");
                navigate(`/PainelProfessor/${id}`);
              } else {
                alert('Falha ao gravar os dados');
              }
            })
            .catch((error) => console.log(error))
    };

    return (
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <img src={background} alt="Background" className="object-cover w-full h-full" /> 
            </div>
            <div className="absolute inset-0 flex flex-col items-center">
                <Link to={`/PainelProfessor/${id}`}>
                    <BotaoVoltar />
                </Link>
                <div className="flex flex-col items-center space-y-10 mt-[500px]">
                    <InputTurma
                        onInputChange={handleInputChange}
                        className={styleInput}
                        placeholder="Nome da Turma"
                    />
                    <BotaoConfirma onClick={handleFetchRequest} />
                </div>
            </div>
        </div>
    );
};

export default NovaTurma;
