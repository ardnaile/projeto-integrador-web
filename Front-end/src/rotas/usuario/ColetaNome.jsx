import React from 'react'
import { Link } from 'react-router-dom'

export default function ColetaNome() {
  return (
    <div className="bg-cover bg-center sm:w-full md:w-full lg:w-full xl:w-full p-4 w-screen h-screen" style={{backgroundImage: 'url(\'./src/assets/img_fundo/fundo4.svg\')'}}>
      <div className='items-center justify-center'>
          <form className="mx-auto flex items-center h-screen w-screen justify-center bg-transparent" > 
            <div className='space-y-4'>
              <p className="font-text_ale text-5xl text-center mb-16">Ok! Agora que você já anotou seu <br />código secreto, digite aqui o seu nome:</p>
              <div className=''>
                <input className='text-3xl font-text_ale text-center ease-in-out focus:outline-none w-full bg-gray-50 border-none rounded-full px-6 py-4 mb-4 text-gray-800' type="text" />
                
              </div>
              <div className=' items-center flex justify-center'>
                <Link to="/Home">
                  <button className='font-text_ale text-4xl bg-green-400 py-2 px-16 rounded-full border-b-4 border-gray-400 hover:bg-green-600 hover:text-5xl'>OK!</button>
                </Link>
              </div>
            </div>
          </form>
        </div> 
    </div>
  )
}
