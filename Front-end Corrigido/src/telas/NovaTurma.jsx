import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import BotaoVoltar from "../components/BotaoVoltar";
import background from "../fundos/fundo-nova-turma.svg";
import Input from "../components/Input";
import BotaoConfirma from "../components/BotaoConfirma";

const NovaTurma = () => {
    const [nomeTurma, setNomeTurma] = useState('');
    const idProfessor = "1"; // Supondo que o ID do professor seja fixo ou capturado de algum estado global/contexto

    const styleInput = 'text-3xl font-text_ale text-center ease-in-out focus:outline-none w-[500px] bg-gray-50 border-none rounded-full px-4 py-4 text-gray-800';

    const enviarNovaTurma = async () => {
        try {
            const response = await axios.post('http://localhost:8080/novaTurma', {
                nome_turma: nomeTurma,
                id_professor: idProfessor
            });
            console.log('Resposta do servidor:', response.data);
            // Após a criação da turma, você pode redirecionar o usuário para a página de suas turmas
            // history.push('/MinhasTurmas');
        } catch (error) {
            console.error('Erro ao criar nova turma:', error);
            // Tratar o erro conforme necessário
        }
    };

    return (
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <img src={background} alt="Background" className="object-cover w-full h-full" /> 
            </div>
            <div className="absolute inset-0 flex flex-col items-center">
                <Link to='/PainelProfessor'>
                    <BotaoVoltar />
                </Link>
                <div className="flex flex-col items-center space-y-10 mt-[500px]">
                    <Input
                        value={nomeTurma}
                        onChange={(e) => setNomeTurma(e.target.value)}
                        className={styleInput}
                        placeholder="Nome da Turma"
                    />
                    <button className="cursor-pointer" onClick={enviarNovaTurma}>
                        <BotaoConfirma />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NovaTurma;
