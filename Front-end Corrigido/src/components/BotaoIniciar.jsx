// BotaoIniciar.js

import React from 'react';
import { Link } from 'react-router-dom';
import botaoIniciar from '../botoes/botao-iniciar.svg';

const BotaoIniciar = ({ onClick, disabled }) => {
  const handleIniciarQuiz = () => {
    onClick(); // Chama a função onClick recebida como propriedade
  };

  return (
    <Link to="/QuizQuatroOpcoes" className="cursor-pointer" onClick={handleIniciarQuiz} disabled={disabled}>
      <img src={botaoIniciar} alt="Iniciar" />
    </Link>
  );
};

export default BotaoIniciar;
