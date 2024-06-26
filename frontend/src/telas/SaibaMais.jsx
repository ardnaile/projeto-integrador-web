import React from "react";
import { Link } from "react-router-dom";

import background from '../fundos/fundo-saiba-mais.svg';
import botao1 from '../botoes/botao-github.svg';
import BotaoVoltar from "../components/BotaoVoltar";

const SaibaMais = () => {
    return(
        <div className="relative w-full h-screen flex flex-col justify-end items-center">
    <div className="absolute inset-0 overflow-hidden">
        <img src={background} alt="Background" className="object-cover w-full h-full" />
    </div>

    <Link to='/PainelProfessor'>
        <BotaoVoltar />
    </Link>

    <div className="fixed bottom-0 mb-4">
        <a href="https://github.com/ardnaile/projeto-integrador-web.git">
            <img src={botao1} alt="Botão 1" className="w-100" />
        </a>
    </div>
</div>

    )
}
export default SaibaMais;