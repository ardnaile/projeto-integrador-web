import React, { useState } from 'react';

const TelaTeste = () => {
    const [selecionados, setSelecionados] = useState([]);
  
    const handleClick = (id) => {
      if (selecionados.includes(id)) {
        setSelecionados(selecionados.filter(item => item !== id));
      } else {
        setSelecionados([...selecionados, id]);
      }
    };
    // Verifica se há algum item selecionado para definir a opacidade da div
    const opacidade = selecionados.length == 8 ? 'opacity-35' : 'opacity-100';

  return (
    <>
    <nav className='grid grid-cols-2 bg-transparent'>
      {/*Coluna 1*/}
      <div className='bg-transparent w-full h-full'>
        <div className='p-2'>
          <div className='flex justify-start items-center'>
            <img className='w-8 cursor-pointer bg-transparent ml-2' src="src\assets\icones\Voltar.png" alt=""/> 
            <ul className='font-text_ale ml-2 text-2xl'>Voltar</ul> 
          </div>
          <div className=''>
            <img className='w-48 cursor-pointer bg-transparent ml-2' src="src\assets\icones\menina.png" alt=""/> 
          </div>
        </div>
      </div>

      {/*Coluna 1*/}
      <div className='bg-transparent '>
        <div className='flex justify-end items-center p-2'>
          <ul className='font-text_ale mr-2'>Minha conta</ul>
          <img className='w-16 cursor-pointer rounded-full bg-transparent' src="src\assets\icones\Conta.png" alt=""/> 
        </div>
      </div>
    </nav>
    
    </>

  )
}

export default TelaTeste;
