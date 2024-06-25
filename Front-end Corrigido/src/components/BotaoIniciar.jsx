// BotaoIniciar.js

import React from 'react';
import { Link } from 'react-router-dom';
import botaoIniciar from '../botoes/botao-iniciar.svg';

const BotaoIniciar = ({ onClick, disabled }) => {
  const handleIniciarQuiz = (event) => {
    event.preventDefault(); // Evita a navegação padrão

    if (!disabled) {
      onClick(); // Chama a função onClick recebida como propriedade
    }
  };

  return (
    <Link to="#" className="cursor-pointer" onClick={handleIniciarQuiz}>
      <img src={botaoIniciar} alt="Iniciar" />
    </Link>
  );
};

export default BotaoIniciar;
