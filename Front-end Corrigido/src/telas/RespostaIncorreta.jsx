import React from "react";
import { Link } from "react-router-dom";

import background from '../fundos/fundo-resposta-errada.svg';
import BotaoRespostaCerta from "../components/BotaoRespostaCerta";
import BotaoProximaPergunta from "../components/BotaoProximaPergunta";
import BotaoVoltar from "../components/BotaoVoltar";

const RespostaIncorreta = () => {
    return(
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <img src={background} alt="Background" className="object-cover w-full h-full" />
            </div>
            <div className="absolute inset-x-0 bottom-[400px] space-x-20 flex flex-row justify-center items-center">
                <Link>
                    <BotaoVoltar />
                </Link>
                <Link>
                    <BotaoRespostaCerta />
                </Link>
                <Link>
                    <BotaoProximaPergunta />
                </Link>
            </div>
        </div>
    )
}
export default RespostaIncorreta;