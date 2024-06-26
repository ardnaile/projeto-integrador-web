import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import BotaoVoltar from "../components/BotaoVoltar";
import background from "../fundos/fundo-criar-conta.svg";
import botao from '../botoes/botao-ok.svg';

const CriarConta = () => {
    const [nomeProfessor, setNomeProfessor] = useState('');
    const [palavraPasseProfessor, setPalavraPasseProfessor] = useState('');
    const [dados, setDados] = useState('');
    const navigate = useNavigate();
   

    const styleInput = 'text-3xl font-text_ale font-extrabold text-center ease-in-out focus:outline-none w-[500px] bg-gray-50 border-none rounded-full px-4 py-4 text-gray-800';

    const handleInputChangeUsu = (value) => {
        setNomeProfessor(value.target.value);
    };

    const handleInputChangeSenha = (value) => {
        setPalavraPasseProfessor(value.target.value);
    };
    
    const requestBody = { 
        usuario_professor:nomeProfessor, 
        chave_professor:palavraPasseProfessor
    }
    const handleFetchRequest = () => {
        fetch(`http://localhost:8080/cadastroProfessor`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(requestBody)
        })
        .then((response) => response.status)
        .then((data) => {
            setDados(data)
            console.log(data)

            if (data === 200) {
                alert("Cadastrado com sucesso!");
                navigate('/Login');
            } else {
                alert('Falha ao gravar os dados');
                // navigate('/');
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
                <Link to="/Login">
                    <BotaoVoltar />
                </Link>

                <form id="cadastroProfessorForm" className="flex flex-col items-center space-y-10 justify-center h-screen">
                    <input
                        id="nomeProfessor"
                        type="text"
                        className={styleInput}
                        onChange={handleInputChangeUsu}
                        title="Sugestão: Use números, letras maiúsculas, letras minúsculas e símbolos!"
                        placeholder="Digite um nome de usuário"
                    />
                    <input
                        id="palavraPasseProfessor"
                        type="password"
                        className={styleInput}
                        onChange={handleInputChangeSenha}
                        title="Sugestão: Use números, letras maiúsculas, letras minúsculas e símbolos!"
                        placeholder="Digite uma senha"
                    />
                </form> 
                    <button className="cursor-pointer" onClick={handleFetchRequest}>
                        <img src={botao} alt="botao Ok" className="w-48 h-16"/>
                    </button>
            </div>
        </div>
    );
};

export default CriarConta;
