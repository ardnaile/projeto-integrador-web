import React, { useState } from 'react';
import BackgroundLayout from '../../background/VariosLayouts';
import { Link } from 'react-router-dom';
import { Perguntas } from "../../rotas/usuario/Perguntas";

export default function RespostaErrada({ location }) {
  const [mostrarRespostaCorreta, setMostrarRespostaCorreta] = useState(false);
  const perguntaAtual = location && location.state ? location.state.indexDaPerguntaAtual : 0;
  const respostaCorretaAtual = Perguntas[perguntaAtual].respostaCorreta;

  const handleVerRespostaCorreta = () => {
    setMostrarRespostaCorreta(true);
  };

  const proximaPergunta = () => {
    // Implemente a lógica para ir para a próxima pergunta ou para a página de pontuação final
  };

  return (
    <div className="w-screen h-screen relative">
      <BackgroundLayout backgroundImage={`url('./src/assets/img_fundo/fundo5.png\')`}>
        <Link to="/Home" className="absolute top-0 left-0 mt-4 ml-4 flex items-center">
          <img className="w-8" src="src/assets/icones/Voltar.png" alt="Ícone de Voltar"/>
          <span className="text-black ml-2 font-text_ale">VOLTAR</span>
        </Link>
        <div className="flex flex-col justify-center items-center h-full">
          <p className="text-black text-5xl mb-8 font-bold">OPS...RESPOSTA ERRADA!</p>
          <div className="flex">
            <button
              onClick={handleVerRespostaCorreta}
              className="bg-orange-500 hover:bg-orange-700 text-black font-bold py-6 px-12 rounded-full mr-6 text-3xl"
            >
              VER RESPOSTA CORRETA
            </button>
            <Link to="/Quiz">
              <button
                onClick={proximaPergunta}
                className="bg-orange-500 hover:bg-orange-700 text-black font-bold py-6 px-12 rounded-full text-3xl"
              >
                PRÓXIMA PERGUNTA
              </button>
            </Link>
          </div>
        </div>
      </BackgroundLayout>
      {mostrarRespostaCorreta && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md w-96 text-center">
            <p className="mb-4">Resposta Correta: {respostaCorretaAtual}</p>
            <button onClick={() => setMostrarRespostaCorreta(false)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl">Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}
