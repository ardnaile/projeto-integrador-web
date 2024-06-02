import React, { useState } from "react";
import background from "../fundos/fundo-principal.svg"; // Importar o fundo
import BotaoVoltar from "../components/BotaoVoltar"; // Importar o componente do botão de voltar
import Timer from "../components/Timer"; // Importar o componente do timer
import BotaoDica from "../components/BotaoDica"; // Importar o componente do botão de dica

const QuizQuatroOpcoes = () => {
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);

  const handleSelecionarResposta = (opcao) => {
    setRespostaSelecionada(opcao);
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen"
      style={{ backgroundImage: `url(${background})` }} // Adicionar o fundo
    >

      // Adicionar outros componentes
      <BotaoVoltar /> 
      <Timer /> 
      <BotaoDica /> 

      <h1 className="text-center text-xl text-white font-bold mb-8">
        AQUI VAI O TEXTO DA QUESTÃO LAALALALA
      </h1>

      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((opcao) => (
          <button
            key={opcao}
            className={`${
              respostaSelecionada === opcao ? 'bg-gray-400' : 'bg-white'
            } hover:bg-green-400 text-black font-bold px-4 py-4 border-b-2 hover:border-white-500 rounded-xl w-64`}
            onClick={() => handleSelecionarResposta(opcao)}
          >
            Resposta {opcao}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuatroOpcoes;
