import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiClock } from 'react-icons/fi';
import background from '../fundos/fundo-principal.svg';
import BotaoVoltar from '../components/BotaoVoltar';
import BotaoDica from '../components/BotaoDica';

const QuizQuatroOpcoes = () => {
  const navigate = useNavigate();
  const [questaoAtual, setQuestaoAtual] = useState(null); // Estado para armazenar a questão atual
  const [respostaSelecionada, setRespostaSelecionada] = useState(null); // Estado para armazenar a resposta selecionada
  const [acertos, setAcertos] = useState(0); // Estado para contar o número de acertos
  const [perguntaSelecionada, setPerguntaSelecionada] = useState(null); // Estado para armazenar a pergunta selecionada
  const [tempoRestante, setTempoRestante] = useState(30); // Estado para o tempo restante
  const [intervalId, setIntervalId] = useState(null); // Estado para armazenar o ID do intervalo
  const [seconds, setSeconds] = useState(30); // Estado para contar os segundos
  const [rotateSeconds, setRotateSeconds] = useState(0); // Estado para controlar a rotação do ícone do relógio
  const [mostrarModal, setMostrarModal] = useState(false); // Estado para controlar a exibição do modal
  const [resultadoModal, setResultadoModal] = useState(false); // Estado para controlar a exibição do modal de resultado
  const [totalPerguntas, setTotalPerguntas] = useState(5); // Estado para armazenar o número total de perguntas

  useEffect(() => {
    fetchQuestao();
    iniciarRelogio();

    return () => {
      clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
    };
  }, []); // Executa apenas uma vez ao montar o componente

  //Quando o tempo chegar a 0 direciona para a tela de Resposta Incorreta
  useEffect(() => {
    if (tempoRestante === 0) {
      clearInterval(intervalId);
      handleRespostaIncorreta();
    }
  }, [tempoRestante]); 

  // Efeito para mudar a rotaçãop do relogio conforme o tempo passa
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
    }, 3800); 
    setIntervalId(id);
  };

  // A função fetchQuestao busca aleatoriamente uma questão de uma lista de URLs e a exibe na interface. 
  // Embaralha as opções de resposta
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
      ];
  
      const randomUrl = urls[Math.floor(Math.random() * urls.length)]; // Escolhe uma URL aleatória
      const response = await fetch(randomUrl); // Faz a requisição para a URL aleatória escolhida
  
      if (!response.ok) {
        throw new Error('Erro ao buscar questão'); // Lança um erro se a resposta não for ok (status 200-299)
      }
  
      const questao = await response.json(); // Converte a resposta para JSON
      const opcoesEmbaralhadas = shuffleOptions([ // Embaralha as opções de resposta
        questao.resposta,
        questao.opcao2,
        questao.opcao3,
        questao.opcao4,
      ]);
      questao.opcoesEmbaralhadas = opcoesEmbaralhadas; // Adiciona as opções embaralhadas ao objeto questao
      setQuestaoAtual(questao); 
      setRespostaSelecionada(null); 
      setPerguntaSelecionada(null); 
      setTempoRestante(30); // Reinicia o tempo restante para 30 segundos ao carregar uma nova questão
      iniciarRelogio(); // Reinicia o relógio para a nova questão
  
      const params = new URLSearchParams(window.location.search); // Obtém parâmetros da URL atual
      if (params.has('respostaIncorreta')) { // Verifica se há parâmetro indicando resposta incorreta
        setTotalPerguntas(totalPerguntas => totalPerguntas - 1); // Decrementa o número total de perguntas se houver resposta incorreta
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
          <span className="block font-bold text-xl">Tempo restante: {seconds} segundos</span>
        </div>
      </div>


      {mostrarModal && ( // Modal de dica que recebe sempre a dica para a questão atual do Quiz
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
            <div className="text-center mb-6 relative">
              <h2 className="text-3xl font-bold mb-4">{questaoAtual.enunciado}</h2>
              <div className="grid grid-cols-2 gap-4">
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
                      } hover:bg-green-400 text-black font-bold px-8 py-6 border-b-2 hover:border-white-500 rounded-xl w-full text-left cursor-pointer block text-2xl`}
                      onClick={() => handleSelecionarResposta(index)}
                    >
                      <span className="ml-2">{opcao}</span>
                    </label>
                  </div>
                ))}
              </div>
              {perguntaSelecionada !== null && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={handleConfirmarResposta}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-2xl"
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
      </div>
    </div>
  );
};

export default QuizQuatroOpcoes;
