import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'; // Importação do Axios

import BotaoVoltar from "../components/BotaoVoltar";
import background from "../fundos/fundo-criar-conta.svg";
import botao from '../botoes/botao-ok.svg';

const CriarConta = () => {
    const [nomeProfessor, setNomeProfessor] = useState('');
    const [palavraPasseProfessor, setPalavraPasseProfessor] = useState('');

    const styleInput = 'text-3xl font-text_ale text-center ease-in-out focus:outline-none w-[500px] bg-gray-50 border-none rounded-full px-4 py-4 text-gray-800';

    const enviarFormularioProfessor = async () => {
        try {
            const response = await axios.post('http://localhost:8080/cadastroProfessor', {
                usuario_professor: nomeProfessor,
                chave_professor: palavraPasseProfessor,
            });
            console.log('Resposta do servidor:', response.data);
            // Exemplo: redirecionar o usuário após o cadastro
            // history.push('/pagina-de-sucesso');
        } catch (error) {
            console.error('Erro ao cadastrar professor', error);
            // Tratar o erro conforme necessário
        }
    };

    return (
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <img src={background} alt="Background" className="object-cover w-full h-full" /> 
            </div>

            <div className="absolute inset-0 flex flex-col items-center">
                <Link to="/Login">
                    <BotaoVoltar />
                </Link>

                <form id="cadastroProfessorForm" className="flex flex-col items-center space-y-10 justify-center h-screen">
                    <input
                        id="nomeProfessor"
                        type="text"
                        className={styleInput}
                        value={nomeProfessor}
                        onChange={(e) => setNomeProfessor(e.target.value)}
                        title="Sugestão: Use números, letras maiúsculas, letras minúsculas e símbolos!"
                        placeholder="Digite um nome de usuário"
                    />
                    <input
                        id="palavraPasseProfessor"
                        type="password"
                        className={styleInput}
                        value={palavraPasseProfessor}
                        onChange={(e) => setPalavraPasseProfessor(e.target.value)}
                        title="Sugestão: Use números, letras maiúsculas, letras minúsculas e símbolos!"
                        placeholder="Digite uma senha"
                    />
                </form> 
                
                <Link to ="/Login">
                    <button className="cursor-pointer" onClick={enviarFormularioProfessor}>
                        <img src={botao} alt="botao Ok" className="w-48 h-16"/>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CriarConta;
