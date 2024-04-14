import React, { useState } from 'react';
import BackgroundLayout from '../background/VariosLayouts'

const styleBloco  = 'bg-transparent grid grid-cols-4 justify-center items-center gap-4 mb-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4';
const styleDivImg = 'sm:text-1xl text-center w-48 h-64 font-text_ale text-2xl rounded-3xl bg-white border-r-4 border-x-gray-400 cursor-pointer';
const Text        = 'text-center font-extrabold text-5xl';
const Img1        = 'w-full cursor-pointer rounded-3xl mt-10 mb-16';
const Img2        = 'w-full cursor-pointer rounded-3xl mt-16 mb-10';
const DivbtnQuiz  = 'bg-green-500 rounded-full px-4 py-2 flex items-center cursor-pointer text-center font-text_ale text-2xl';
const CaminhoIcone = 'src\\assets\\icones\\';


const Home = () => {
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
    <BackgroundLayout backgroundImage={`url('./src/assets/img_fundo/fundohome.png')`}>
    <div className='grid grid-cols-1 w-full h-full'>
      <div>
        <nav className='grid grid-cols-2 bg-transparent w-full h-8'>
          {/*Coluna 1*/}
          <div className='bg-transparent '>
              <div className='p-2'>
                <div className='flex justify-start items-center'>
                  <img className='w-8 cursor-pointer bg-transparent ml-2' src={CaminhoIcone.concat("Voltar.png")} alt=""/> 
                  <ul className='font-text_ale ml-2 text-3xl cursor-pointer'>Voltar</ul> 
                </div>
              </div>
          </div>
          {/*Coluna 1*/}
          <div className='bg-transparent '>
            <div className='flex justify-end items-center p-2'>
              <ul className='font-text_ale mr-2 text-2xl cursor-pointer'>Minha conta</ul>
              <img className='w-16 cursor-pointer rounded-full bg-transparent' src={CaminhoIcone.concat("Conta.png")} alt=""/> 
            </div>
          </div>=
        </nav>
      </div>

      <div className='grid justify-center items-center'>
        <h1 className={Text}>OLÁ, FULANINHO</h1>
        <p className={Text}>O QUE VAMOS APRENDER HOJE?</p>
        {/* BLOCO 1*/}           
          <div className={styleBloco}>
            <div className={`${styleDivImg} ${selecionados.includes(1) ? '' : 'bg-gray-300'}`} onClick={() => handleClick(1)}> 
              <img className={Img1}src={CaminhoIcone.concat("8.svg")} alt=""/>MATEMÁTICA
            </div>
            <div className={`${styleDivImg} ${selecionados.includes(2) ? '' : 'bg-gray-300'}`} onClick={() => handleClick(2)}>
              <img className={Img1}src={CaminhoIcone.concat("1.svg")} alt=""/>TECNOLOGIA    
            </div>
            <div className={`${styleDivImg} ${selecionados.includes(3) ? '' : 'bg-gray-300'}`} onClick={() => handleClick(3)}>
              <img className={Img1}src={CaminhoIcone.concat("2.svg")} alt=""/>IDIOMAS 
            </div>
            <div className={`${styleDivImg} ${selecionados.includes(4) ? '' : 'bg-gray-300'}`} onClick={() => handleClick(4)}>
              <img className={Img1}src={CaminhoIcone.concat("3.svg")}  alt=""/>ANIMAIS      
            </div>
          </div>
        {/* BLOCO 2 */} 
          <div className={styleBloco}>
            <div className={`${styleDivImg} ${selecionados.includes(5) ? '' : 'bg-gray-300'}`} onClick={() => handleClick(5)}>
              <img className={Img2} src={CaminhoIcone.concat("4.svg")} alt=""/>COMIDA                            
            </div>
            <div className={`${styleDivImg} ${selecionados.includes(6) ? '' : 'bg-gray-300'}`} onClick={() => handleClick(6)}>
              <img className={Img2} src={CaminhoIcone.concat("5.svg")} alt=""/>NATUREZA                       
            </div>
            <div className={`${styleDivImg} ${selecionados.includes(7) ? '' : 'bg-gray-300'}`} onClick={() => handleClick(7)}>
              <img className={Img2} src={CaminhoIcone.concat("6.svg")}  alt=""/>ARTES                         
            </div>
            <div className={`${styleDivImg} ${selecionados.includes(8) ? '' : 'bg-gray-300'}`} onClick={() => handleClick(8)}>
              <img className={Img2} src={CaminhoIcone.concat("7.svg")} alt=""/>ESPORTES
            </div>
          </div>
         
      </div>
       {/* BLOCO 3 */}
       <footer className='container mx-auto justify-center items-center w-64 mt-10'>
        <div className={`${opacidade}`}>
          <div className={DivbtnQuiz}> INICIAR O QUIZ
            <img className='w-10 cursor-pointer ml-4' src={CaminhoIcone.concat("play.png")} alt=""/>
          </div>
        </div>
       </footer>
    </div>
    
    </BackgroundLayout>
    </>
  )
}
export default Home;

