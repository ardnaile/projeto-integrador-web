import React from "react";
import { Link } from "react-router-dom";

import BotaoVoltar from "../components/BotaoVoltar";
import background from "../fundos/fundo-bem-vindo-de-volta.svg";
import Input from "../components/Input";
import BotaoConfirma from "../components/BotaoConfirma";

const DigiteCodigo = () => {
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
                <Input/>
                <Link className="w-60" >
                    <BotaoConfirma />
                </Link>
            </div>
            </div>
        </div>
    )
}
export default DigiteCodigo;