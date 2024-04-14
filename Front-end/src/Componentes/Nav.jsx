import React from 'react'

function Nav() {
  return (
        <>
            <nav className='grid grid-cols-2 bg-transparent w-full h-8'>
                {/*Coluna 1*/}
                <div className='bg-transparent '>
                    <div className='p-2'>
                    <div className='flex justify-start items-center'>
                        <img className='w-8 cursor-pointer bg-transparent ml-2' src="src\assets\icones\Voltar.png" alt=""/> 
                        <ul className='font-text_ale ml-2 text-2xl'>Voltar</ul> 
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

export default Nav
