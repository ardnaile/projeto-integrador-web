import React, { useState } from "react";
import SetasFotoPerfil from "./SetasFotoPerfil";

import img1 from '../fotos-perfil/1.svg'
import img2 from '../fotos-perfil/2.svg'
import img3 from '../fotos-perfil/3.svg'
import img4 from '../fotos-perfil/4.svg'
import img5 from '../fotos-perfil/5.svg'
import img6 from '../fotos-perfil/6.svg'
import img7 from '../fotos-perfil/7.svg'
import img8 from '../fotos-perfil/8.svg'
import img9 from '../fotos-perfil/9.svg'
import img10 from '../fotos-perfil/10.svg'



const FotosPerfil = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div className="fixed top-20 left-0 w-full flex justify-center items-center">
      <SetasFotoPerfil direction="left" onClick={handleArrowClick} />
      <img src={images[currentIndex]} alt="Imagem" />
      <SetasFotoPerfil direction="right" onClick={handleArrowClick} />
    </div>
  );
};

export default FotosPerfil;
