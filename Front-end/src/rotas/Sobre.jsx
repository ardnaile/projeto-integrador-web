import { Link,Outlet } from "react-router-dom";
import BackgroundLayout from "../background/VariosLayouts";
import Footer from "../Componentes/Footer";

export default function Sobre() {
  return (
    <div className="bg-cover bg-center h-screen sm:w-full md:w-full lg:w-full xl:w-full" style={{backgroundImage: 'url(\'./src/assets/img_fundo/fundo00.png\')'}}>
        <div className="w-screen h-screen">
            <div className="p-4 mb-64 sm:mb-64 md:mb-64 lg:mb-64 xl:mb-64">
                <div className="flex items-center">
                    <div>
                        <img className='w-16 sm:w-12 md:w-16 lg:w-20  xl:w-24 cursor-pointer ' src="src\assets\icones\voltar1.svg" alt=""/>
                    </div>
                    <div>
                        <button className="items-center justify-center mt-4 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-text_ale3"> Voltar </button>
                    </div>
                </div>

                <div className="flex items-center justify-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mt-16">
                    <h1 className="font-bold">
                        SOBRE O PROJETO
                    </h1>
                </div>

                <div className="flex items-center justify-center text-center mt-12 text-wrap">
                    <div className="w-1/2 h-48">
                        <p className="sm:text-1xl md:text-1xl lg:text-2xl xl:text-4xl 2xl:text-3xl font-text_ale3">
                        Este site é um projeto de extensão do curso de Engenharia de Software realizado pelos acadêmicos
                        Eliandra Cardoso, Rafael Rodrigues  e Wallace Mendes.
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-center text-center mt-8 text-wrap">
                    <div className="w-1/2 h-48">
                        <p className="sm:text-1xl md:text-1xl lg:text-2xl xl:text-4xl 2xl:text-3xl font-text_ale3">
                        Este site é um projeto de extensão do curso de Engenharia de Software realizado pelos acadêmicos
                        Eliandra Cardoso, Rafael Rodrigues e Wallace Mendes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}
