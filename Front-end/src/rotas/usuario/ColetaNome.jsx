import React, { useState } from "react";
import { Link } from 'react-router-dom';
import BackgroundLayout from '../../background/VariosLayouts';



export default function ColetaNome() {
  const styleBtn = 'font-text_ale text-4xl bg-green-400 py-2 px-16 rounded-full border-b-4 border-gray-400 hover:bg-green-600 hover:text-5xl';
  const styleInput = 'text-3xl font-text_ale text-center ease-in-out focus:outline-none w-full bg-gray-50 border-none rounded-full px-6 py-4 mb-4 text-gray-800';


  return (
    <div className="w-screen h-screen " >
      <BackgroundLayout backgroundImage={`url('./src/assets/img_fundo/fundo4.svg\')`}>
      <div className='items-center justify-center'>
          <div className="mx-auto flex items-center h-screen w-screen justify-center bg-transparent" > 
            <div className='space-y-4'>
              <p className="font-text_ale text-5xl text-center mb-16">Ok! Agora que você já anotou seu <br />código secreto, digite aqui o seu nome:</p>
              <div className=''>
                <input className={styleInput} type="text" name="" id="" />
              </div>
              <div className=' items-center flex justify-center'>
                <Link  to="/Home">
                  <button  className={styleBtn}>OK!</button>
                </Link>
              </div>
            </div>
          </div>
        </div> 
        </BackgroundLayout>
    </div>
  )
}
