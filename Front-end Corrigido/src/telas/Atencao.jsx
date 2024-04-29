import React from "react";
import { Link } from "react-router-dom";

import BotaoVoltar from "../components/BotaoVoltar";
import background from "../fundos/fundo-atenção.svg";
import BotaoEntendi from "../components/BotaoEntendi";

const Login = () => {
    return(
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <img src={background} alt="Background" className="object-cover w-full h-full" /> 
            </div>

            <div className="absolute inset-0 flex flex-col items-center">
                <Link to="/PalavraPasse">
                    <BotaoVoltar />
                </Link>
                <Link className="mt-[650px] w-72">
                    <BotaoEntendi/>
                </Link> 
            </div>
        </div>
    )
}
export default Login;