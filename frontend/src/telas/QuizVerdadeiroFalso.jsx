import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FiClock } from 'react-icons/fi';
import background from '../fundos/fundo-principal.svg';
import BotaoVoltar from '../components/BotaoVoltar';
import BotaoVerdadeiro from '../components/BotaoVerdadeiro';
import BotaoFalso from '../components/BotaoFalso';
import BotaoConfirma from '../components/BotaoConfirma';
import BotaoDica from '../components/BotaoDica';
import RespostaIncorretaVF from './RespostaIncorretaVF';

const QuizVerdadeiroFalso = () => {
  const location = useLocation();
  const [questao, setQuestao] = useState(null);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
  const [showConfirmButton, setShowConfirmButton] = useState(false);
  const [seconds, setSeconds] = useState(30);
  const [rotateSeconds, setRotateSeconds] = useState(0);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [acertos, setAcertos] = useState(0);
  const [totalPerguntas, setTotalPerguntas] = useState(5);
  const [respostaIncorreta, setRespostaIncorreta] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const shuffleOptions = (options) => {
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  };

  useEffect(() => {
    fetchQuestao();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds(prevSeconds => {
        const newSeconds = prevSeconds - 1;
        const newRotateSeconds = 360 - ((newSeconds / 30) * 360);
        setRotateSeconds(newRotateSeconds);
        return newSeconds >= 0 ? newSeconds : 0;
      });
    }, 1000);

    setIntervalId(id);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(intervalId);
      handleRespostaIncorreta();
    }
  }, [seconds, intervalId]);

  const fetchQuestao = async () => {
    try {
      const urls = [
        'http://localhost:8080/questaoDuas/7',
      ];

      const randomUrl = urls[Math.floor(Math.random() * urls.length)];
      const response = await fetch(randomUrl);

      if (!response.ok) {
        throw new Error('Erro ao buscar questão');
      }

      const questao = await response.json();
      const opcoesEmbaralhadas = shuffleOptions([
        { texto: 'Verdadeiro', valor: '1' },
        { texto: 'Falso', valor: '0' },
      ]);
      questao.opcoesEmbaralhadas = opcoesEmbaralhadas;
      setQuestao(questao);
      setOpcaoSelecionada(null);
      setShowConfirmButton(false);
      setSeconds(30);

      const params = new URLSearchParams(location.search);
      if (params.has('respostaIncorreta')) {
        setTotalPerguntas(total => total - 1);
        setRespostaIncorreta(true);
      }
    } catch (error) {
      console.error('Erro ao buscar questão:', error);
    }
  };

  const handleSelecionarOpcao = opcao => {
    if (opcaoSelecionada === opcao) {
      setOpcaoSelecionada(null);
      setShowConfirmButton(false);
    } else {
      setOpcaoSelecionada(opcao);
      setShowConfirmButton(true);
    }
  };

  const handleRespostaIncorreta = () => {
    setRespostaIncorreta(true);
  };

  const handleConfirmarResposta = () => {
    if (opcaoSelecionada === null) {
      return;
    }

    const respostaCorreta = questao?.resposta.toString();
    const respostaSelecionadaTexto = opcaoSelecionada === 'verdadeiro' ? '1' : '0';

    if (respostaCorreta === respostaSelecionadaTexto) {
      setAcertos(acertos => acertos + 1);
      setSeconds(30);
      if (acertos + 1 === totalPerguntas) {
        exibirModalResultado();
      } else {
        fetchQuestao();
      }
    } else {
      handleRespostaIncorreta();
    }
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

  const exibirModalResultado = () => {
    setMostrarModal(true);
  };

  const handleConfirmarResultado = () => {
    setMostrarModal(false);
    // Utilize o Link para navegar para a página de categorias
  };

  if (respostaIncorreta) {
    return <RespostaIncorretaVF respostaIncorreta={questao?.resposta} />;
  }

  if (!questao) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover relative" style={{ backgroundImage: `url(${background})` }}>
      <div className="fixed top-0 left-0 m-4 z-10">
        <Link to="/Categorias">
          <BotaoVoltar />
        </Link>
      </div>

      <div className="mt-4 text-black text-center">
        <div className={`flex items-center rounded-lg px-4 py-2 ${getColorClass(seconds)}`}>
          <FiClock className="w-24 h-24 mr-2" style={{ transform: `rotate(${rotateSeconds}deg)` }} />
          <span className="block font-bold text-xl ">Tempo restante: {seconds} segundos</span>
        </div>
      </div>

      {mostrarModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-md w-96 text-center">
              <p className="text-xl mb-4">Parabéns! Você acertou todas as perguntas.</p>
              <p className="text-xl mb-4">Você acertou {acertos} perguntas.</p>
              <button
                onClick={handleConfirmarResultado}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-12 rounded-xl text-2xl" 
              >
                Ver categorias
              </button>
          </div>
        </div>
      )}

      <div className="flex-1 flex items-center justify-center flex-col">
        <h2 className="text-3xl font-bold text-center mb-4">{questao.enunciado}</h2>

        <div className="flex items-center justify-center space-x-8">
          <BotaoVerdadeiro
            selecionado={opcaoSelecionada === 'verdadeiro'}
            onClick={() => handleSelecionarOpcao('verdadeiro')}
          />
          <BotaoFalso
            selecionado={opcaoSelecionada === 'falso'}
            onClick={() => handleSelecionarOpcao('falso')}
          />
        </div>

        {showConfirmButton && (
          <div className="mt-4">
            <BotaoConfirma onClick={handleConfirmarResposta} />
          </div>
        )}

        <div className="mt-4">
          <BotaoDica dica={questao.dica} />
        </div>
      </div>
    </div>
  );
};

export default QuizVerdadeiroFalso;
