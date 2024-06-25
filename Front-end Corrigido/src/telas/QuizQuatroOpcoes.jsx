import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiClock } from 'react-icons/fi';
import background from '../fundos/fundo-principal.svg';
import BotaoVoltar from '../components/BotaoVoltar';
import BotaoDica from '../components/BotaoDica';

const QuizQuatroOpcoes = () => {
  const navigate = useNavigate();
  const [questaoAtual, setQuestaoAtual] = useState(null);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [acertos, setAcertos] = useState(0);
  const [perguntaSelecionada, setPerguntaSelecionada] = useState(null);
  const [tempoRestante, setTempoRestante] = useState(30);
  const [intervalId, setIntervalId] = useState(null);
  const [seconds, setSeconds] = useState(30);
  const [rotateSeconds, setRotateSeconds] = useState(0);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [resultadoModal, setResultadoModal] = useState(false);
  const [totalPerguntas, setTotalPerguntas] = useState(5);

  useEffect(() => {
    fetchQuestao();
    iniciarRelogio();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (tempoRestante === 0) {
      clearInterval(intervalId);
      handleRespostaIncorreta();
    }
  }, [tempoRestante]);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds(prevSeconds => {
        const newSeconds = prevSeconds - 1;
        const newRotateSeconds = 360 - ((newSeconds / 30) * 360);
        setRotateSeconds(newRotateSeconds);
        return newSeconds >= 0 ? newSeconds : 0;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const iniciarRelogio = () => {
    clearInterval(intervalId);
    const id = setInterval(() => {
      setTempoRestante(tempoRestante => tempoRestante - 1);
    }, 1000);
    setIntervalId(id);
  };

  const fetchQuestao = async () => {
    try {
      const urls = [
        'http://localhost:8080/questaoQuatro/1',
        'http://localhost:8080/questaoQuatro/2',
        'http://localhost:8080/questaoQuatro/3',
        'http://localhost:8080/questaoQuatro/7',
        'http://localhost:8080/questaoQuatro/9',
        'http://localhost:8080/questaoQuatro/10',
        'http://localhost:8080/questaoQuatro/11',
        'http://localhost:8080/questaoQuatro/12',
        'http://localhost:8080/questaoQuatro/5',
        'http://localhost:8080/questaoQuatro/8',
      ];

      const randomUrl = urls[Math.floor(Math.random() * urls.length)]; // Escolhe uma URL aleatória
      const response = await fetch(randomUrl);

      if (!response.ok) {
        throw new Error('Erro ao buscar questão');
      }

      const questao = await response.json();
      const opcoesEmbaralhadas = shuffleOptions([
        questao.resposta,
        questao.opcao2,
        questao.opcao3,
        questao.opcao4,
      ]);
      questao.opcoesEmbaralhadas = opcoesEmbaralhadas;
      setQuestaoAtual(questao);
      setRespostaSelecionada(null);
      setPerguntaSelecionada(null);
      setTempoRestante(30); // Reinicia o tempo para 30 segundos ao carregar uma nova questão
      iniciarRelogio();

      const params = new URLSearchParams(window.location.search);
      if (params.has('respostaIncorreta')) {
        setTotalPerguntas(totalPerguntas => totalPerguntas - 1);
      }
    } catch (error) {
      console.error('Erro ao buscar questão:', error);
    }
  };

  const handleSelecionarResposta = index => {
    if (perguntaSelecionada === index) {
      setPerguntaSelecionada(null);
    } else {
      setPerguntaSelecionada(index);
    }
    setRespostaSelecionada(null);
  };

  const handleConfirmarResposta = () => {
    if (respostaSelecionada === null) {
      return;
    }

    const respostaCorreta = questaoAtual.resposta;
    const respostaSelecionadaTexto =
      questaoAtual.opcoesEmbaralhadas[respostaSelecionada];

    if (respostaCorreta === respostaSelecionadaTexto) {
      setAcertos(acertos + 1);
      setSeconds(30); // Reinicia o tempo para 30 segundos após acertar
    } else {
      handleRespostaIncorreta();
    }

    fetchQuestao();
  };

  const handleRespostaIncorreta = () => {
    const respostaCorreta = questaoAtual.resposta;
    navigate(
      `/RespostaIncorreta?respostaIncorreta=${encodeURIComponent(
        respostaCorreta
      )}`
    );
  };

  const shuffleOptions = opcoes => {
    for (let i = opcoes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [opcoes[i], opcoes[j]] = [opcoes[j], opcoes[i]];
    }
    return opcoes;
  };

  const getColorClass = seconds => {
    if (seconds <= 10) {
      return 'text-red-500';
    } else if (seconds <= 20) {
      return 'text-yellow-500';
    } else {
      return 'text-black';
    }
  };

  const handleMostrarDica = () => {
    setMostrarModal(true);
  };

  const handleCloseModal = () => {
    setMostrarModal(false);
  };

  const handleConfirmarResultado = () => {
    setResultadoModal(false);
    navigate('/categorias');
  };

  const exibirModalResultado = () => {
    setResultadoModal(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover relative" style={{ backgroundImage: `url(${background})` }}>
      <div className="fixed top-0 left-0 m-4 z-10">
        <BotaoVoltar />
      </div>

      <div className="mt-4 text-black text-center">
        <div className={`flex items-center rounded-lg px-4 py-2 ${getColorClass(seconds)}`}>
          <FiClock className="w-24 h-24 mr-2" style={{ transform: `rotate(${rotateSeconds}deg)` }} />
          <span className="block font-bold">Tempo restante: {seconds} segundos</span>
        </div>
      </div>

      {mostrarModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-md w-96 text-center">
            <p className="text-lg mb-4">Modal de Dica:</p>
            <p className="text-lg mb-4">{questaoAtual.dica}</p>
            <button
              onClick={handleCloseModal}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl"
            >
              Fechar Modal
            </button>
          </div>
        </div>
      )}

      <div className="flex-1 flex items-center justify-center flex-col">
        {questaoAtual && (
          <div className="bg-opacity-80 p-8 rounded-lg max-w-md w-full">
            <div className="text-center mb-4 relative">
              <h2 className="text-xl font-bold">{questaoAtual.enunciado}</h2>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {questaoAtual.opcoesEmbaralhadas.map((opcao, index) => (
                  <div key={`opcao-${index}`}>
                    <input
                      type="radio"
                      id={`opcao-${index}`}
                      name="resposta"
                      value={opcao}
                      onChange={() => setRespostaSelecionada(index)}
                      checked={respostaSelecionada === index}
                      className="hidden"
                    />
                    <label
                      htmlFor={`opcao-${index}`}
                      className={`${
                        perguntaSelecionada === index ? 'bg-gray-400' : 'bg-white'
                      } hover:bg-green-400 text-black font-bold px-4 py-4 border-b-2 hover:border-white-500 rounded-xl w-full text-left cursor-pointer block`}
                      onClick={() => handleSelecionarResposta(index)}
                    >
                      <span className="ml-2">{opcao}</span>
                    </label>
                  </div>
                ))}
              </div>
              {perguntaSelecionada !== null && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={handleConfirmarResposta}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl"
                  >
                    Confirmar
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {questaoAtual && (
          <BotaoDica dica={questaoAtual.dica} onMostrarDica={handleMostrarDica} />
        )}

        {acertos === totalPerguntas && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-md w-96 text-center">
              <p className="text-lg mb-4">Parabéns! Você acertou todas as perguntas.</p>
              <p className="text-lg mb-4">Você acertou {acertos} perguntas.</p>
              <button
                onClick={handleConfirmarResultado}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl"
              >
                Ver categorias
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizQuatroOpcoes;
