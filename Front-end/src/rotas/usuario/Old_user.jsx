import React from 'react'

export default function Old_user() {
  return (
    <div className="w-screen mx-auto">
      <BackgroundLayout backgroundImage={`url('./src/assets/img_fundo/fundo1.png')`}>
        <div className='items-center justify-center  w-screen h-screen'>
          <form className="max-w-full mx-auto flex items-center h-screen w-screen justify-center bg-transparent" > 
            <div className='space-y-4'>
              <h1 className="font-text_ale text-5xl text-center mb-16">BEM VINDO DE VOLTA!</h1>
              <p className='mb-16 mt-16 text-center font-text_ale text-5xl'>ESCREVA AQUI SEU CÓDIGO SECRETO<br/> E DEPOIS CLIQUE EM CONFIRMA.</p>
              <div className=''>
                <input className='mt-16 text-3xl font-text_ale text-center ease-in-out focus:outline-none w-full bg-gray-50 border-none rounded-full px-6 py-4 mb-4 text-gray-800' type="text" />
              </div>
              <div className=' items-center flex justify-center'>
                <button className='font-text_ale text-4xl bg-green-400 py-5 px-16 rounded-full border-b-4 border-gray-400 hover:bg-green-600 hover:text-5xl'>CONFIRMA</button>
              </div>
            </div>´
          </form>
        </div> 
      </BackgroundLayout>
    </div>
  )
}


