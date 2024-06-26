import React, { useState, useEffect } from "react";
import background from "../fundos/fundo-principal.svg";
import BotaoVerdadeiro from "../components/BotaoVerdadeiro";
import BotaoFalso from "../components/BotaoFalso";
import BotaoConfirma from "../components/BotaoConfirma";
import BotaoVoltar from "../components/BotaoVoltar";
import { Link } from "react-router-dom";
import BotaoDica from "../components/BotaoDica";
import { FiClock } from 'react-icons/fi';

const QuizVerdadeiroFalso = () => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
  const [showConfirmButton, setShowConfirmButton] = useState(false);
  const [seconds, setSeconds] = useState(4);
  const [rotateSeconds, setRotateSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        setRotateSeconds((360 - ((seconds / 30) * 360)) % 360);
      } else {
        clearInterval(timer);
        console.log("Tempo esgotado!");
        // Aqui adicionamos a lógica de redirecionamento
        window.location.href = `/RespostaIncorreta`; // Você pode adicionar parâmetros à URL se necessário
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const handleSelecionarOpcao = (opcao) => {
    if (opcaoSelecionada === opcao) {
      setOpcaoSelecionada(null);
      setShowConfirmButton(false); // Oculta o botão de confirmar quando a opção é desselecionada
    } else {
      setOpcaoSelecionada(opcao);
      setShowConfirmButton(true); // Mostra o botão de confirmar quando uma opção é selecionada
    }
  };

  const handleResetOpcao = () => {
    setOpcaoSelecionada(null);
    setShowConfirmButton(false);
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <div className="absolute inset-0 overflow-hidden z-0">
        <img src={background} alt="Background" className="object-cover w-full h-full" />
      </div>
      <div> <Link to='Categorias'> <BotaoVoltar/> </Link> </div>
      <div> <BotaoDica/> </div>  

      <h1 className="absolute items-center justify-center z-10 top-60">AQUI VAI O TEXTO DA QUESTÃO LAALALALA</h1>

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 text-black text-center">
        <div className={`flex items-center rounded-lg px-4 py-2`}>
          <FiClock className="w-24 h-24 mr-2" style={{ transform: `rotate(${rotateSeconds}deg)` }} />
          <span className="block font-bold">Tempo restante: {seconds} segundos</span>
        </div>
      </div>

      <div className="absolute inset-0 flex flex-row space-x-20 items-center justify-center z-10">
        <BotaoVerdadeiro selecionado={opcaoSelecionada === 'verdadeiro'} onClick={() => handleSelecionarOpcao('verdadeiro')} />
        <BotaoFalso selecionado={opcaoSelecionada === 'falso'} onClick={() => handleSelecionarOpcao('falso')} />
      </div>

      <div className="absolute items-center justify-center z-10 bottom-60">
        {opcaoSelecionada && (
          <BotaoConfirma onClick={handleResetOpcao} />
        )}
      </div>
    </div>
  );
};

export default QuizVerdadeiroFalso;
