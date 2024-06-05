import React, { useState, useEffect } from 'react';
import { Perguntas } from '../telas/Perguntas';
import { FiClock } from 'react-icons/fi';
import background from '../fundos/fundo-principal.svg';
import { useNavigate } from 'react-router-dom';
import BotaoVoltar from "../components/BotaoVoltar";
import BotaoDica from '../components/BotaoDica';

const QuizQuatroOpcoes = () => {
  const navigate = useNavigate();
  const questions = Perguntas ?? [];
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [showPontuacao, setShowPontuacao] = useState(false);
  const [pontos, setPontos] = useState(0);
  const [seconds, setSeconds] = useState(30);
  const [rotateSeconds, setRotateSeconds] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        setRotateSeconds((360 - ((seconds / 30) * 360)) % 360);
      } else {
        clearInterval(timer);
        console.log("Tempo esgotado!");
        proximaPergunta(false);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, perguntaAtual]);

  function proximaPergunta(correta) {
    if (!correta) {
      const respostaCorreta = questions[perguntaAtual].opcoesResposta.find(opcao => opcao.correta).resposta;
      navigate(`/RespostaIncorreta?respostaIncorreta=${encodeURIComponent(respostaCorreta)}`);
      return;
    }

    const proximaPergunta = perguntaAtual + 1;
    if (proximaPergunta < questions.length) {
      setPerguntaAtual(proximaPergunta);
      setSeconds(30);
      setRespostaSelecionada(null);
    } else {
      setShowPontuacao(true);
    }
  }

  function handleSelecionarResposta(index) {
    if (respostaSelecionada === index) {
      setRespostaSelecionada(null);
    } else {
      setRespostaSelecionada(index);
      if (questions[perguntaAtual].opcoesResposta[index].correta) {
        setPontos(pontos + 1);
      }
    }
  }

  const getColorClass = (seconds) => {
    if (seconds <= 10) {
      return 'text-red-500';
    } else if (seconds <= 20) {
      return 'text-yellow-500';
    } else {
      return 'text-black';
    }
  };

  const PontuacaoModal = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-md w-96 text-center">
          <p className="text-2xl font-bold mb-4">Pontuação</p>
          <p className="text-lg mb-4">Sua pontuação é {pontos} de {questions.length}!</p>
          <button
            onClick={() => navigate("/Home")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl"
          >
            Voltar
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <BotaoVoltar />
      {showPontuacao ? (
        <PontuacaoModal />
      ) : (
        <>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 text-black text-center">
            <div className={`flex items-center rounded-lg px-4 py-2 ${getColorClass(seconds)}`}>
              <FiClock className="w-24 h-24 mr-2" style={{ transform: `rotate(${rotateSeconds}deg)` }} />
              <span className="block font-bold">Tempo restante: {seconds} segundos</span>
            </div>
          </div>
          <BotaoDica dica={questions[perguntaAtual]?.dica} />
          <div className="text-lg font-bold text-center items-center flex flex-col justify-center mt-3">
            <span className="text-lg font-bold text-center mt-3">
              {questions[perguntaAtual].pergunta}
            </span>
            <div className="p-8 m-0 gap-4 box-sizing grid grid-cols-2">
              {questions[perguntaAtual].opcoesResposta.map((opcaoResposta, index) => (
                <div key={index}>
                  <span>{opcaoResposta.alternativa}</span>
                  <button
                    className={`${
                      respostaSelecionada === index ? 'bg-gray-400' : 'bg-white'
                    } hover:bg-green-400 text-black font-bold px-4 py-4 border-b-2 hover:border-white-500 rounded-xl w-64`}
                    onClick={() => handleSelecionarResposta(index)}
                  >
                    {opcaoResposta.resposta}
                  </button>
                </div>
              ))}
            </div>
          </div>
          {respostaSelecionada !== null && (
            <button
              onClick={() => proximaPergunta(questions[perguntaAtual].opcoesResposta[respostaSelecionada].correta)}
              className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl"
            >
              Confirmar Resposta
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default QuizQuatroOpcoes;
