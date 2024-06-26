import React, { useState } from 'react';
import dicaIcon from '../botoes/botao-dica.svg';

const Dica = ({ dica }) => {
  const [mostrarDica, setMostrarDica] = useState(false);

  const handleMostrarDica = () => {
    setMostrarDica(true);
  };

  return (
    <>
      <div className="absolute top-0 right-0 mt-4 mr-4 text-white">
        <div className="dica">
          <button onClick={handleMostrarDica} className="flex flex-col items-center">
            <img src={dicaIcon} alt="Ícone de dica" className="w-22 h-20 cursor-pointer" />
          </button>
        </div>
      </div>
      {mostrarDica && (
        <div className="fixed inset-0 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md w-96 text-center">
            <p className="mb-4">{dica}</p>
            <button onClick={() => setMostrarDica(false)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl">
              Entendi!
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Dica;
