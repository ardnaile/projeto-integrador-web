import React, {useState} from "react";
import background from "../fundos/fundo-principal.svg"
import BotaoVerdadeiro from "../components/BotaoVerdadeiro";
import BotaoFalso from "../components/BotaoFalso";
import BotaoConfirma from "../components/BotaoConfirma";

const TestandoTelas = () => {
    const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
    
    const handleSelecionarOpcao = (opcao) => {
      setOpcaoSelecionada(opcao);
    }

    return (
      <div className="relative w-full h-screen flex justify-center items-center">
          <div className="absolute inset-0 overflow-hidden">
              <img src={background} alt="Background" className="object-cover w-full h-full" />
          </div>

          <div className="flex flex-col items-center justify-center">
            <BotaoVerdadeiro selecionado={opcaoSelecionada === 'verdadeiro'} onClick={() => handleSelecionarOpcao('verdadeiro')}/>
            <BotaoFalso selecionado={opcaoSelecionada === 'falso'} onClick={() => handleSelecionarOpcao('falso')}/>
            {opcaoSelecionada && <BotaoConfirma/>}

          </div>
      </div>
      );
}

export default TestandoTelas;