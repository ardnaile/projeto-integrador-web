import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import botao from '../botoes/botao-voltar.svg';

const BotaoVoltar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = () => {
        // Verifica se a rota atual é QuizQuatroOpcoes
        if (location.pathname.includes('/QuizQuatroOpcoes')) {
            navigate('/Categorias');
        } 
        // Verifica se a rota atual é QuizVerdadeiroFalso
        else if (location.pathname.includes('/QuizVerdadeiroFalso')) {
            navigate('/QuizVerdadeiroFalso');
        } 
        // Lida com outras rotas
    };

    return (
        <button
            className="fixed top-0 left-0 m-4 z-10 flex items-center justify-center bg-transparent border-none outline-none cursor-pointer"
            onClick={handleClick}
        >
            <img src={botao} alt="Botão Voltar" className="w-48 h-16" />
        </button>
    );
};

export default BotaoVoltar;
