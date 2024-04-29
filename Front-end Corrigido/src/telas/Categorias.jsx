import React, { useState } from "react";
import { Link } from "react-router-dom";

import background from '../fundos/fundo-quiz.svg';
import BotaoMatematica from '../components/BotaoMatematica';
import BotaoTecnologia from '../components/BotaoTecnologia';
import BotaoIdiomas from '../components/BotaoIdiomas';
import BotaoAnimais from '../components/BotaoAnimais';
import BotaoComida from '../components/BotaoComida';
import BotaoNatureza from '../components/BotaoNatureza';
import BotaoArtes from '../components/BotaoArtes';
import BotaoEsportes from '../components/BotaoEsportes';
import botaoIniciar from '../botoes/botao-iniciar.svg'
import botaoIniciarDesabilitado from '../botoes/botao-iniciar-desabilitado.svg'

const Categorias = () => {
    const [peloMenosUmClicado, setPeloMenosUmClicado] = useState(false);
        
    const atualizarEstadoPai = (clicado) => {
        setPeloMenosUmClicado(clicado);
    };
    
    return(
        <div className="relative w-full h-screen">
            <img src={background} alt="Background" className="absolute inset-0 object-cover w-full h-full" />
        
            <div className="absolute inset-0 mt-[220px] flex flex-col justify-center items-center">
                <div className="grid grid-cols-4 grid-rows-2 gap-4 mb-10">
                    <BotaoMatematica atualizarEstadoPai={atualizarEstadoPai}/>
                    <BotaoTecnologia atualizarEstadoPai={atualizarEstadoPai}/>
                    <BotaoIdiomas atualizarEstadoPai={atualizarEstadoPai}/>
                    <BotaoAnimais atualizarEstadoPai={atualizarEstadoPai}/>
                    <BotaoComida atualizarEstadoPai={atualizarEstadoPai}/>
                    <BotaoNatureza atualizarEstadoPai={atualizarEstadoPai}/>
                    <BotaoArtes atualizarEstadoPai={atualizarEstadoPai}/>
                    <BotaoEsportes atualizarEstadoPai={atualizarEstadoPai}/>
                </div>
                <button disabled={!peloMenosUmClicado}>
                <img src={peloMenosUmClicado ? botaoIniciar : botaoIniciarDesabilitado} alt="Iniciar" />
                </button>
            </div>
        </div>

    )
}
export default Categorias;