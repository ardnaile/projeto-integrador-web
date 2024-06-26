import React from "react";
import { Link, useParams } from "react-router-dom";

import background from '../fundos/fundo-minhas-turmas.svg';
import BotaoVoltar from "../components/BotaoVoltar";
import ListaTurma from "../components/ListaTurmas";


const MinhasTurmas = () => {
    const {id} = useParams();
    return(
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <img src={background} alt="Background" className="object-cover w-full h-full" />
            </div>
            <div>
                <Link to={`/PainelProfessor/${id}`}>
                    <BotaoVoltar/>
                </Link>
            </div>
            <div className="">
                <ListaTurma id={id}/>
            </div>
        </div>
    )
}
export default MinhasTurmas;

