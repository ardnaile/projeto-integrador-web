import React, { useState } from 'react';
import botao from '../botoes/botao-resposta-certa.svg';

const BotaoRespostaCerta = ({ resposta }) => {
  const [mostrarModal, setMostrarModal] = useState(false);

  const handleAbrirModal = () => {
    setMostrarModal(true);
  };

  const handleFecharModal = () => {
    setMostrarModal(false);
  };

  return (
    <div className="relative">
      <button className="cursor-pointer relative" onClick={handleAbrirModal}>
        <img src={botao} alt="Botão Resposta Correta" className="w-[350px]" />
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl">
          
        </span>
      </button>
      {mostrarModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-md w-96 text-center">
            <p className="text-lg mb-4"></p>
            <p className="text-lg font-bold mb-4">{resposta}</p>
            <button
              onClick={handleFecharModal}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl"
            >
              Entendi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BotaoRespostaCerta;
