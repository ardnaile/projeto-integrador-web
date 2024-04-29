import React from "react";
import { Link } from "react-router-dom";

import BotaoVoltar from "../components/BotaoVoltar";
import background from "../fundos/fundo-palavra-passe.svg";
import Input from "../components/Input";
import BotaoProxima from "../components/BotaoProxima";

const PalavraPasse = () => {
    return(
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <img src={background} alt="Background" className="object-cover w-full h-full" /> 
            </div>
            <div className="absolute inset-0 flex flex-col items-center">
                <Link to="/CriarConta">
                    <BotaoVoltar />
                </Link>
            <div className="flex flex-col items-center space-y-10 justify-center h-screen">
                <Input/>
                <Link>
                    <BotaoProxima/>
                </Link>
            </div>
            </div>
        </div>
    )
}
export default PalavraPasse;