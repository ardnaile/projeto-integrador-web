// src/Componentes/DicaButton.jsx
import React, { useState } from 'react';
import dicaIcon from '../botoes/botao-dica.svg';

export default function BotaoDica({ dica }) {
  const [mostrarDica, setMostrarDica] = useState(false);

  const handleMostrarDica = () => {
    setMostrarDica(true);
  };

  return (
    <>
      <div className="fixed top-0 right-0 mt-4 mr-4 text-white z-50">
        <div className="dica">
          <button onClick={handleMostrarDica} className="flex flex-col items-center">
            <img src={dicaIcon} alt="Ícone de dica" className="w-14 h-12 cursor-pointer" />
          </button>
        </div>
      </div>
      {mostrarDica && (
        <div className="fixed inset-0 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-md w-96 text-center">
            <p className="mb-4">{dica}</p>
            <button onClick={() => setMostrarDica(false)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl">Entendi!</button>
          </div>
        </div>
      )}
    </>
  );
}
