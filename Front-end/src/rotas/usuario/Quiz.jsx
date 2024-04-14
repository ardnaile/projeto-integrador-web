import React, { useState, useEffect } from 'react';
import { Perguntas } from '../usuario/Perguntas';
import { FiClock } from 'react-icons/fi'; // Importa o ícone de relógio
import BackgroundLayout from '../../background/VariosLayouts';
import dicaIcon from '../../assets/icones/dica.png'; // Importa a imagem do ícone de dica

export default function Quiz() {
  const questions = Perguntas ?? [];
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [showPontuacao, setShowPontuacao] = useState(false);
  const [pontos, setPontos] = useState(0);
  const [seconds, setSeconds] = useState(30);
  const [rotateSeconds, setRotateSeconds] = useState(0); // Estado para controlar a rotação do ponteiro dos segundos
  const [mostrarDica, setMostrarDica] = useState(false); // Estado para controlar a exibição do modal de dica
  const [dicaAtual, setDicaAtual] = useState(''); // Estado para armazenar a dica atual
  const [respostaSelecionada, setRespostaSelecionada] = useState(null); // Estado para armazenar o índice da resposta selecionada

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        setRotateSeconds((360 - ((seconds / 30) * 360)) % 360); // Ajuste para girar no sentido anti-horário
      } else {
        clearInterval(timer);
        console.log("Tempo esgotado!");
        proximaPergunta(false); // Avança para a próxima pergunta, considerando como erro
      }
    }, 1000);
    
    return () => clearInterval(timer); // Limpa o intervalo quando o componente for desmontado
  }, [seconds, perguntaAtual]); // Execute o efeito sempre que 'seconds' ou 'perguntaAtual' mudar

  function proximaPergunta(correta) {
    const proximaPergunta = perguntaAtual + 1;

    if (correta) {
      setPontos(pontos + 1);
    }

    if (proximaPergunta < questions.length) {
      setPerguntaAtual(proximaPergunta);
      setSeconds(30); // Reinicia o cronômetro
      setRespostaSelecionada(null); // Limpa a resposta selecionada ao passar para a próxima pergunta
    } else {
      setShowPontuacao(true);
    }
  }

  // Função para lidar com o clique na imagem de dica
  function handleMostrarDica() {
    // Define a dica atual baseada na pergunta atual (substitua 'perguntaAtual' pelo índice real do array de dicas)
    setDicaAtual(questions[perguntaAtual].dica);
    // Exibe o modal de dica
    setMostrarDica(true);
  }

  // Função para lidar com a seleção de uma resposta
  function handleSelecionarResposta(index) {
    if (respostaSelecionada === index) {
      setRespostaSelecionada(null); // Se a resposta já estiver selecionada, desselecione
    } else {
      setRespostaSelecionada(index);
    }
  }

  // Define classes de estilo para diferentes cores do relógio com base no tempo restante
  const getColorClass = (seconds) => {
    if (seconds <= 10) {
      return 'text-red-500';
    } else if (seconds <= 20) {
      return 'text-yellow-500';
    } else {
      return 'text-black';
    }
  };

  return (
    <div className="w-screen h-screen relative">
      <BackgroundLayout className="w-full h-full" backgroundImage={`url('./src/assets/img_fundo/fundo0.png')`}>
        {showPontuacao ? 
          (
            <div className="pontuacao">
              <span>Sua pontuação é {pontos} de {questions.length}!</span>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center h-full relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 text-black text-center">
                {/* Adicionamos a classe de cor dinâmica com base no tempo restante */}
                <div className={`flex items-center rounded-lg px-4 py-2 ${getColorClass(seconds)}`}>
                  <FiClock className="w-24 h-24 mr-2 " style={{ transform: `rotate(${rotateSeconds}deg)` }} />
                  <span className="block font-bold">Tempo restante: {seconds} segundos</span>
                </div>
              </div>
              <div className="absolute top-0 right-0 mt-4 mr-4 text-white">
                <div className="dica">
                  {/* Adiciona a imagem como src do elemento img e o texto "Dica" abaixo */}
                  <button onClick={handleMostrarDica} className="flex flex-col items-center">
                    <img src={dicaIcon} alt="Ícone de dica" className="w-14 h-12 cursor-pointer" />
                    <span className="text-black text-lg font-bold ">Dica</span>
                  </button>
                </div>
              </div>
              <div className='ContagemPerguntas text-lg font-bold text-center items-center flex flex-col justify-center mt-3'>
                <span>Pergunta {perguntaAtual + 1}/{questions.length}</span>
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
                        } hover:bg-green-400 text-black font-bold px-20 py-4 border-b-2 hover:border-white-500 rounded-xl w-64`}
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
            </div>
          )}
      </BackgroundLayout>
      {/* Modal de dica */}
      {mostrarDica && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md w-96 text-center">
            <p className="mb-4">{dicaAtual}</p>
           <button onClick={() => setMostrarDica(false)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl">Entendi!</button>
          </div>
        </div>
      )}
    </div>
  );
}
