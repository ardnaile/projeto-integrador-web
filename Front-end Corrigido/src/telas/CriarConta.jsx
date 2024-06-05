import React from "react";
import { Link } from "react-router-dom";

import BotaoVoltar from "../components/BotaoVoltar";
import background from "../fundos/fundo-criar-conta.svg";
import Input from "../components/Input";
import BotaoOk from "../components/BotaoOk";

const CriarConta = () => {
    const styleInput = 'text-3xl font-text_ale text-center ease-in-out focus:outline-none w-[500px] bg-gray-50 border-none rounded-full px-4 py-4 text-gray-800';


    return(
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <img src={background} alt="Background" className="object-cover w-full h-full" /> 
            </div>

            <div className="absolute inset-0 flex flex-col items-center">
                <Link to="/Login">
                    <BotaoVoltar />
                </Link>

                <div className="flex flex-col items-center space-y-10 justify-center h-screen">
                    <input id="inputNomeProfessor" type="text" className={styleInput} title="Sugestão: Use números, letras maiúsculas, letras minúsculas e símbolos!" placeholder="Digite um nome de usuário"/>
                    <input id="inputSenhaProfessor" type="text" className={styleInput} title="Sugestão: Use números, letras maiúsculas, letras minúsculas e símbolos!" placeholder="Digite uma senha"/>

                    <Link>
                        <BotaoOk/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default CriarConta;