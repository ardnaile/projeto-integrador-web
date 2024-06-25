// Categorias.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../fundos/fundo-quiz.svg';
import BotaoMatematica from '../components/BotaoMatematica';
import BotaoTecnologia from '../components/BotaoTecnologia';
import BotaoIdiomas from '../components/BotaoIdiomas';
import BotaoAnimais from '../components/BotaoAnimais';
import BotaoComida from '../components/BotaoComida';
import BotaoNatureza from '../components/BotaoNatureza';
import BotaoArtes from '../components/BotaoArtes';
import BotaoEsportes from '../components/BotaoEsportes';
import BotaoIniciar from '../components/BotaoIniciar';

const Categorias = () => {
  const navigate = useNavigate();
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState([]);

  // Função para alternar a seleção de uma categoria
  const toggleCategoria = (categoria) => {
    if (categoriasSelecionadas.includes(categoria)) {
      setCategoriasSelecionadas(categoriasSelecionadas.filter(cat => cat !== categoria));
    } else {
      setCategoriasSelecionadas([...categoriasSelecionadas, categoria]);
    }
  };

  // Função para iniciar o quiz com as categorias selecionadas
  const handleIniciarQuiz = () => {
    if (categoriasSelecionadas.length > 0) {
      navigate(`/quiz-quatro-opcoes?categorias=${categoriasSelecionadas.join(',')}`);
    }
  };

  // Verifica se o botão de iniciar deve estar desabilitado
  const isBotaoIniciarDisabled = categoriasSelecionadas.length === 0;

  return (
    <div className="relative w-full h-screen">
      <img src={background} alt="Background" className="absolute inset-0 object-cover w-full h-full" />
      
      <div className="absolute inset-0 mt-[220px] flex flex-col justify-center items-center">
        <div className="grid grid-cols-4 grid-rows-2 gap-4 mb-10">
          <BotaoMatematica onClick={() => toggleCategoria('Matemática')} />
          <BotaoTecnologia onClick={() => toggleCategoria('Tecnologia')} />
          <BotaoIdiomas onClick={() => toggleCategoria('Idiomas')} />
          <BotaoAnimais onClick={() => toggleCategoria('Animais')} />
          <BotaoComida onClick={() => toggleCategoria('Comida')} />
          <BotaoNatureza onClick={() => toggleCategoria('Natureza')} />
          <BotaoArtes onClick={() => toggleCategoria('Artes')} />
          <BotaoEsportes onClick={() => toggleCategoria('Esportes')} />
        </div>
        
        {/* Componente BotaoIniciar */}
        <BotaoIniciar onClick={handleIniciarQuiz} disabled={isBotaoIniciarDisabled} />
      </div>
    </div>
  );
};

export default Categorias;
