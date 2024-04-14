import BackgroundLayout from '../../background/VariosLayouts'
import React, { useState } from "react";
import Modal from '../../Componentes/Modal';



export default function Old_user() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenErro,setIsOpenErro] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const correctValue  = "correto";

  // Estilos separados para melhorar a leitura dos fontes
  const styleBotao    = 'font-text_ale text-4xl bg-green-500  py-5 px-16 rounded-full border-b-4 border-gray-400 hover:bg-green-600 hover:text-5xl';
  const styleInput    = 'mb-8 text-3xl font-text_ale text-center ease-in-out focus:outline-none w-full bg-gray-50 border-none rounded-full px-6 py-4 mb-4 text-gray-800';
  const styleP        = 'mt-8 mb-8 text-center font-text_ale text-5xl';
  const styleH1       = 'font-text_ale text-5xl text-center';
  const styleMain     = 'w-full h-full';
  const styleDivPri   = 'max-w-full mx-auto flex items-center h-full w-full justify-center bg-transparent';
  const styleDivBotao = 'items-center flex justify-center';
  
  const handleOpenModal = () => {
    if (inputValue === correctValue) {
      setIsOpen(true);
    } else {
      setIsOpenErro(true);
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setIsOpenErro(false);
  };

  return (
    <main className={styleMain}>
      <BackgroundLayout backgroundImage={`url('./src/assets/img_fundo/fundo1.png')`}>

        <div className={styleDivPri}> 
          <div className=''>
            <h1 className={styleH1}>BEM VINDO DE VOLTA!</h1>
            <p className={styleP}>ESCREVA AQUI SEU CÓDIGO SECRETO<br/> E DEPOIS CLIQUE EM CONFIRMA.</p>
            <div >
              <input className={styleInput} type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            </div>
            <div className={styleDivBotao}>
              <button className={styleBotao} onClick={handleOpenModal}>CONFIRMA</button>
            </div>
            <Modal isOpen={isOpen} isOpenErro={isOpenErro} onClose={handleCloseModal}/>
          </div>
        </div>
      </BackgroundLayout>
    </main>
  )

}
