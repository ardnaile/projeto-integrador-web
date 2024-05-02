import React, { useState } from "react";
import background from "../fundos/fundo-principal.svg";
import BotaoVerdadeiro from "../components/BotaoVerdadeiro";
import BotaoFalso from "../components/BotaoFalso";
import BotaoConfirma from "../components/BotaoConfirma";
import BotaoVoltar from "../components/BotaoVoltar";
import { Link } from "react-router-dom";
import BotaoDica from "../components/BotaoDica";
import Timer from "../components/Timer";

const QuizVerdadeiroFalso = () => {
    const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

    const handleSelecionarOpcao = (opcao) => {
        setOpcaoSelecionada(opcao);
    };


  return (
    <div className="relative w-full h-screen flex justify-center items-center">
        <div className="absolute inset-0 overflow-hidden z-0">
            <img src={background} alt="Background" className="object-cover w-full h-full" />
        </div>
        <div> <Link to='Categorias'> <BotaoVoltar/> </Link> </div>
        <div> <BotaoDica/> </div>  
        {/* <Timer/>   */}


        <h1 className="absolute items-center justify-center z-10 top-60">AQUI VAI O TEXTO DA QUESTÃO LAALALALA</h1>

        <div className="absolute inset-0 flex flex-row space-x-20 items-center justify-center z-10">
            <BotaoVerdadeiro selecionado={opcaoSelecionada === 'verdadeiro'} onClick={() => handleSelecionarOpcao('verdadeiro')} />
            <BotaoFalso selecionado={opcaoSelecionada === 'falso'} onClick={() => handleSelecionarOpcao('falso')} />
        </div>

        <div className="absolute items-center justify-center z-10 bottom-60">
            {opcaoSelecionada && <BotaoConfirma />}
        </div>
        
    </div>
  );
};

export default QuizVerdadeiroFalso;

