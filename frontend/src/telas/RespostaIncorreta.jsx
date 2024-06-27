import React, { useEffect, useState } from "react";
import { Link, useLocation} from "react-router-dom"; // Importando hooks do React Router
import background from '../fundos/fundo-resposta-errada.svg'; 
import BotaoRespostaCerta from "../components/BotaoRespostaCerta"; 
import BotaoProximaPergunta from "../components/BotaoProximaPergunta"; 
import BotaoVoltar from "../components/BotaoVoltar"; 

const RespostaIncorreta = () => {
  const location = useLocation(); // Hook do React Router para obter a localização atual
  const [respostaCorreta, setRespostaCorreta] = useState(''); // Estado para armazenar a resposta correta

  // Efeito para atualizar a resposta correta com base nos parâmetros da URL
  useEffect(() => {
    const params = new URLSearchParams(location.search); 
    const respostaIncorreta = params.get('respostaIncorreta'); 
    setRespostaCorreta(respostaIncorreta); 
  }, [location]);

  return(
    <div className="relative w-full h-screen flex justify-center items-center">
      <div className="absolute inset-0 overflow-hidden">
        <img src={background} alt="Background" className="object-cover w-full h-full" />
      </div>
      <div className="absolute inset-x-0 bottom-[400px] space-x-20 flex flex-row justify-center items-center">
        <Link to="/QuizQuatroOpcoes">
          <BotaoVoltar />
        </Link>
        <BotaoRespostaCerta resposta={respostaCorreta} />
        <Link to="/QuizQuatroOpcoes">
          <BotaoProximaPergunta />
        </Link>
      </div>
    </div>
  );
}

export default RespostaIncorreta;
