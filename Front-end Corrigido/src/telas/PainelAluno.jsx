import React from "react";
import { Link } from "react-router-dom";

import background from '../fundos/fundo-principal.svg';
import botao1 from '../botoes/botao-minhas-turmas.svg'
import botao2 from '../botoes/botao-nova-turma.svg'
import botao3 from '../botoes/botao-saiba-mais.svg'
import FotosPerfil from "../components/FotosPerfil";
import BotaoVoltar from "../components/BotaoVoltar";

const PainelProfessor = () => {
    return(
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <img src={background} alt="Background" className="object-cover w-full h-full" />
            </div>
            <div>
                <Link to='/Categorias'>
                    <BotaoVoltar />
                </Link>
            </div>

            <div className="flex flex-col justify-center items-center space-y-20">
                <FotosPerfil/>
                
                {/* transformar essa h2 em um componente que vai puxar do back, que vai puxar do banco */}
                <h2 className="absolute top-64 text-4xl font-bold">Fulaninho</h2>

                {/* puxar do back também */}
                <h2 className="absolute top-80 text-3xl">Turma da Bagunça</h2>

                {/* o número tem que ser um contador no back-end, criar componente */}
                <h2 className="absolute bottom-50 text-3xl font-bold">Você já acertou 20 questões!</h2>

            
            </div>

        </div>
    )
}
export default PainelProfessor;