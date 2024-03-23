import { Link,Outlet } from "react-router-dom";
import BackgroundLayout from "../background/VariosLayouts";
import Footer from "../Componentes/Footer";

export default function Sobre() {
  return (
    <div className="w-screenh">
       <BackgroundLayout backgroundImage={`url('./src/assets/img_fundo/fundo00.svg')`}>
        <div className="p-4">
            <div className="flex items-center space-x-0 ">
                <img className='sm:w-12 md:w-24 lg:w-28 xl:w-32
                                cursor-pointer' src="src\assets\icones\voltar1.svg" alt=""/>
                <div>
                    <button className="items-center justify-center mt-4 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
                            font-text_ale3">
                    Voltar
                    </button>
                </div>
                
            </div>
            <div className="flex items-center justify-center
                            sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl
                            font-bold mt-16">
                <h1 className="font-bold">
                    SOBRE O PROJETO
                </h1>
            </div>
            <div className="flex items-center justify-center text-center mt-12">
                <div className="w-1/2">
                    <p className="sm:text-1xl md:text-1xl lg:text-2xl xl:text-4xl 2xl:text-3xl font-text_ale3">
                    Este site é um projeto de extensão do curso de Engenharia de Software realizado pelos acadêmicos
                    Eliandra Cardoso, Rafael Rodrigues <br /> e Wallace Mendes.
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center text-center mt-8">
                <div className="w-1/2">
                    <p className="sm:text-1xl md:text-1xl lg:text-2xl xl:text-4xl 2xl:text-3xl font-text_ale3">
                    Este site é um projeto de extensão do curso de Engenharia de Software realizado pelos acadêmicos
                    Eliandra Cardoso, Rafael Rodrigues <br />e Wallace Mendes.
                    </p>
                </div>
            </div>
        </div>

        <div className="justify-center items-center mt-80">
            <Footer/>
        </div>
        </BackgroundLayout> 
    </div>
  )
}
