import React from "react";
import { Link, useLocation } from "react-router-dom";
import background from '../fundos/fundo-resposta-errada.svg';
import BotaoRespostaCerta from "../components/BotaoRespostaCerta";
import BotaoVoltar from "../components/BotaoVoltar";
import BotaoProximaPergunta from "../components/BotaoProximaPergunta";

const RespostaIncorretaVF = ({ respostaIncorreta }) => {
  const location = useLocation();

  const handleNavigateBack = () => {
    window.location.href = "/Categorias"; // Navega de volta para a tela do QuizVerdadeiroFalso
  };

  const handleNavigateNext = () => {
    window.location.href = "/QuizVerdadeiroFalso"; // Navega para a próxima pergunta da tela do QuizVerdadeiroFalso)
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <div className="absolute inset-0 overflow-hidden">
        <img src={background} alt="Background" className="object-cover w-full h-full" />
      </div>
      <div className="absolute inset-x-0 bottom-[400px] space-x-20 flex flex-row justify-center items-center">
        <Link to="/QuizVerdadeiroFalso" onClick={handleNavigateBack}>
          <BotaoVoltar />
        </Link>
        <BotaoRespostaCerta resposta={respostaIncorreta} />
        <Link to="/QuizVerdadeiroFalso" onClick={handleNavigateNext}>
          <BotaoProximaPergunta />
        </Link>
      </div>
    </div>
  );
};

export default RespostaIncorretaVF;
