import React, {useState} from 'react'
import { Perguntas } from '../usuario/Perguntas'
import BackgroundLayout from '../../background/VariosLayouts'

export default function Quiz() {
  const questions = Perguntas ?? [];
  const [perguntaAtual, setPerguntaAtual ] = useState(0);
  const [showPontuacao, setShowPontuacao] = useState(false);
  const[pontos, setPontos] = useState(0);

  function proximaPergunta(correta) {
    const proximaPergunta = perguntaAtual + 1;

    if (correta){
      setPontos(pontos + 1);
    }

    if (proximaPergunta < questions.length) {
      setPerguntaAtual(proximaPergunta);
    }else{
      setShowPontuacao(true);
    }

  }
  return (
    <div className="w-screen mx-auto">
      <BackgroundLayout backgroundImage={`url('./src/assets/img_fundo/fundo0.png')`}>
        {showPontuacao ? 
          (<div className = 'pontuacao'><span>Sua pontuação é {pontos} de {questions.length}!</span>
            </div>) : (
              <div className = "bg-white-900 text-black font-bold h-screen flex flex-col items-center justify-center shadow-lg"> 
                  <div className = 'ContagemPerguntas text-lg font-bold text-center items-center flex flex-col justify-center '>  
                    <span className = " ">Pergunta {perguntaAtual + 1}/2{questions.lenght}
                      <span className = "text-lg font-bold text-center items-center flex flex-col justify-center mt-3">{questions[perguntaAtual].pergunta}</span>
                        <div className = "p-8 m-0 gap-4 box-sizing grid grid-cols-2">
                          {questions[perguntaAtual].opcoesResposta.map((opcoesResposta)=>
                            <div>
                              <span>{opcoesResposta.alternativa}</span>
                                <button className = "bg-white hover:bg-green-400 text-black font-bold px-20 py-4 border-b-2 hover:border-white-500 rounded-xl" onClick ={() => proximaPergunta(opcoesResposta.correta)}>{opcoesResposta.resposta} </button>
                            </div>
                          )}
                        </div>
                    </span>
                  </div> 
              </div>
      )}
      </BackgroundLayout>  
    </div>
    
  )
}

