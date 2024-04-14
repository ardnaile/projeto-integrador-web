import React from 'react';
import { Link } from 'react-router-dom'; // Importe o componente Link
import BackgroundLayout from '../../background/VariosLayouts';
import simIcon from '../../assets/icones/sim.png';
import naoIcon from '../../assets/icones/nao.png';

function ConfirmarEstudante() {
  return (
    <div>
      <BackgroundLayout backgroundImage={`url('./src/assets/img_fundo/fundo6.png')`}>
        <div className="flex flex-col justify-center items-center h-screen text-black font-bold text-5xl px-4">
          <div className="text-center mb-20">LEGAL, VOCÊ É ESTUDANTE!<br></br> É A SUA PRIMEIRA VEZ AQUI?</div>
          <div className="flex justify-center">
            <div className="flex items-center mr-8">
              <img className="h-48 w-48 " src={simIcon} alt="Ícone Sim" />
              <Link to="/Old_user">
                <button className="bg-blue-500 hover:bg-green-700 text-white font-bold text-4xl py-4 px-12 rounded-full">SIM</button>
              </Link>
            </div>
            <div className="flex items-center ml-12">
              <img className="h-44 w-44 " src={naoIcon} alt="Ícone Não" />
              <Link to="/New_user">
                <button className="bg-blue-500 hover:bg-red-700 text-white font-bold text-4xl py-4 px-12 rounded-full">NÃO</button>
              </Link>
            </div>
          </div>
        </div>
      </BackgroundLayout>
    </div>
  );
}

export default ConfirmarEstudante;
