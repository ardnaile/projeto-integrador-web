import React from "react";
import { Link } from "react-router-dom";

import BotaoVoltar from "../components/BotaoVoltar";
import background from "../fundos/fundo-login.svg";
import Input from "../components/Input";
import BotaoConfirma from "../components/BotaoConfirma";
import botaocadastro from "../botoes/botao-nao-possuo-conta.svg"

const Login = () => {
    return(
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <img src={background} alt="Background" className="object-cover w-full h-full" /> 
            </div>

            <div className="absolute inset-0 flex flex-col items-center">
                <Link to="/">
                    <BotaoVoltar />
                </Link>
                <div className="flex flex-col items-center space-y-10 justify-center h-screen mt-20">
                    <Input/>
                    <Link>
                        <BotaoConfirma/>
                    </Link>
                </div>
                <div>
                    <Link to="/CriarConta">
                        <button>
                            <img src={botaocadastro} alt={botaocadastro} className="h-12 mb-11" />
                        </button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}
export default Login;