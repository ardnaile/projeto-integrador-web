import React from "react";
import { Link } from "react-router-dom";

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

const textoGerado = gerarTextoAleatorio(1, 5, 10); // Gera um texto com 5 palavras, cada palavra tendo entre 3 e 8 caracteres


const CodigoSecreto = () => {
    <script src='script.js'></script>

    const styleInput = 'text-3xl font-text_ale font-extrabold text-center ease-in-out focus:outline-none w-full bg-gray-50 border-none rounded-full px-6 py-4 mb-4 text-gray-800';
    return(
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <img src={background} alt="Background" className="object-cover w-full h-full" /> 
            </div>

            <div className="absolute inset-0 flex flex-col items-center">
        
                <div className="mt-[110px] flex flex-col items-center space-y-80 justify-center h-screen">
                    <input className={styleInput} value={textoGerado} type="text" id='chave_estudante'/>
                    <Link className="w-60" >
                        <BotaoOk onClick="coletarInfoCodigoSecreto()"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default CodigoSecreto;