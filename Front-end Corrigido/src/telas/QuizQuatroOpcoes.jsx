// nessa tela falta:
//     - fazer um grid com as quatro QuizQuatroOpcoes
//     - implementar uma funcao pra deixar só uma ser selecionada por vez
//     - arrumar o pop-up

import React, { useState } from "react";
import background from "../fundos/fundo-principal.svg";
import BotaoVoltar from "../components/BotaoVoltar";
import { Link } from "react-router-dom";
import BotaoDica from "../components/BotaoDica";

const QuizQuatroOpcoes = () => {

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
        <div className="absolute inset-0 overflow-hidden z-0">
            <img src={background} alt="Background" className="object-cover w-full h-full" />
        </div>
        <div> <Link to='Categorias'> <BotaoVoltar/> </Link> </div>
        <div> <BotaoDica/> </div>  
        {/* <Timer/>   */}


        <h1 className="absolute items-center justify-center z-10 top-60">AQUI VAI O TEXTO DA QUESTÃO LAALALALA</h1>

        
        
    </div>
  );
};

export default QuizQuatroOpcoes;

