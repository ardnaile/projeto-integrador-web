import React from "react";

import setaesquerda from "../fotos-perfil/setaesquerda.svg";
import setadireita from "../fotos-perfil/setadireita.svg";


const SetasFotoPerfil = ({ direction, onClick }) => {
  return (
    <button
      className="py-2 px-4 rounded-full"
      onClick={() => onClick(direction)}
    >
      {direction === "left" ? (
        <img src={setaesquerda} alt="Seta para a esquerda" />
      ) : (
        <img src={setadireita} alt="Seta para a direita" />
      )}
    </button>
  );
};

export default SetasFotoPerfil;
