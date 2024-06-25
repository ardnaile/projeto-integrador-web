import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import BotaoVoltar from "../components/BotaoVoltar";
import background from "../fundos/fundo-código-secreto.svg";
import BotaoOk from "../components/BotaoOk";

function gerarTextoAleatorio(numeroPalavras, tamanhoMinimoPalavra, tamanhoMaximoPalavra) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    let texto = '';
    for (let i = 0; i < numeroPalavras; i++) {
        const tamanhoPalavra = Math.floor(Math.random() * (tamanhoMaximoPalavra - tamanhoMinimoPalavra + 1)) + tamanhoMinimoPalavra; // Garante que o tamanho esteja entre tamanhoMinimoPalavra e tamanhoMaximoPalavra
        let palavra = '';
        for (let j = 0; j < tamanhoPalavra; j++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            palavra += caracteres.charAt(indiceAleatorio);
        }
        texto += palavra + ' ';
    }
    return texto.trim(); // Remove o espaço extra no final
}


const CodigoSecreto = () => {
    const navigate = useNavigate();
    const [dados, setDados] = useState('');
    const[inputValue, setInputValue] = useState('')

    const textoGerado = gerarTextoAleatorio(1, 5, 10); // Gera um texto com 1 palavra, cada palavra tendo entre 5 e 10 caracteres

    const handleInputChange = (value) => {
        setInputValue(value.target.valu);
      };

    const requestBody = {
        usuario_estudante: 'Rafael',
        chave_estuandae: inputValue,
        qtd_acerto: 0,
        turma: 'turma1'
    }

    const handleFetchRequest = () => {
        fetch(`http://localhost:8080/cadastroEstudante`, {
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
                navigate('/Categorias');
            } else {
                alert('Falha ao gravar os dados');
                navigate('/Categorias');
            }
        })
        .catch((error) => console.log(error))
    };

    const styleInput = 'text-3xl font-text_ale font-extrabold text-center ease-in-out focus:outline-none w-full bg-gray-50 border-none rounded-full px-6 py-4 mb-4 text-gray-800';

    return (
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <img src={background} alt="Background" className="object-cover w-full h-full" /> 
            </div>

            <div className="absolute inset-0 flex flex-col items-center">
                <div className="mt-[110px] flex flex-col items-center space-y-80 justify-center h-screen">
                    <input onChange={handleInputChange} className={styleInput} value={textoGerado} type="text" id='chave_estudante' readOnly />
                    <button className="w-60" onClick={handleFetchRequest}>
                        <BotaoOk />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CodigoSecreto;
