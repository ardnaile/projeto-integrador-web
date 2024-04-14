import React, { useState } from "react";
import { Link } from "react-router-dom";


const Modal = ({ isOpen, isOpenErro, onClose, children }) => {
  const styleBotao  = 'top-0 right-0 m-3 font-text_ale rounded-md px-2 py-1 text-white text-2xl';
  const styleP      = 'text-2xl font-text_ale text-wrap text-center';
  const styleDivPri = 'fixed inset-0 z-100 overflow-auto bg-black bg-opacity-50 flex items-center justify-center';
  const styleDivIt  = 'grid bg-white w-80 p-6 rounded shadow-2xl justify-center items-center';
  
  if (isOpen) {
    return (
      <>
        {isOpen && (
          <div className={styleDivPri}>
            <div className={styleDivIt}>
              <p className={styleP}>Legal você lembrou do seu código secreto</p>
              <Link className="justify-center items-center flex" to='/Home'>
                <button className={styleBotao.concat(' bg-green-500')} onClick={onClose}>Continuar</button> 
              </Link>
              {children}
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
    {isOpenErro && (
      <div className={styleDivPri}>
        <div className={styleDivIt}>
          <p className={styleP}>Ops algo deu errado tente novamente</p>
          <button className={styleBotao.concat(' bg-red-500')} onClick={onClose}>Tentar novamente</button>
          {children}
        </div>
      </div>
    )}
  </>
  )
}

export default Modal;