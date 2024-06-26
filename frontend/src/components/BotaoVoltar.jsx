import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import botao from '../botoes/botao-voltar.svg';

const BotaoVoltar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = () => {
        if (location.pathname.includes('/QuizQuatroOpcoes')) { // Verifica se está na tela de quiz
            navigate('/Categorias'); // Redireciona para a tela de categorias
        } else {
            // Lógica caso queira lidar com outra ação ou não fazer nada
        }
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
