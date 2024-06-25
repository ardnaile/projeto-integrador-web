import React, { useState } from 'react';
import botao from '../botoes/Botao-idiomas.svg';
import botaoClicado from '../botoes/Botao-idiomas-clicado.svg';

const BotaoIdiomas = ({ onClick }) => {
  const [clicado, setClicado] = useState(false);

  const handleClick = () => {
    setClicado(!clicado);
    onClick('Idiomas', !clicado); // Passa a categoria e o estado clicado para a função onClick
  };

  return (
    <button className="w-full h-full flex justify-center items-center" onClick={handleClick}>
      <img src={clicado ? botaoClicado : botao} className="max-w-full max-h-full" alt="Botão Idiomas" />
    </button>
  );
};

export default BotaoIdiomas;
