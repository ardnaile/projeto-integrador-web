import { Link,Outlet } from "react-router-dom";
import BackgroundLayout from "../background/VariosLayouts";


export default function Sobre() {
  return (
    <div className="w-full h-full">
        <BackgroundLayout backgroundImage={`url('./src/assets/img_fundo/fundo00.png')`}>
            <div className="flex ">
                <Link to="/Home">
                    <div className="p-2 flex items-center justify-start">
                        <img className='w-12 sm:w-12 md:w-14 lg:w-16  xl:w-20 cursor-pointer' src="src\assets\icones\voltar1.svg" alt=""/>
                        <p className="cursor-pointer text-2xl font-bold sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">Voltar</p>
                    </div>
                </Link> 
            </div>
               
            <div className="container mx-auto mt-16">
                <div className="grid justify-center items-center mb-16">
                    <h1 className="sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold ">SOBRE O PROJETO</h1>
                </div>
                <div className="grid justify-center items-center mb-16">
                    <p className="mb-16 text-center sm:text-2xl md:text-2xl lg:text-2xl xl:text-4xl 2xl:text-4xl font-text_ale3">
                            Este site é um projeto de extensão do curso de <br /> Engenharia de Software realizado pelos<br /> acadêmicosbr Eliandra Cardoso, 
                            Rafael<br /> Rodrigues e Wallace Mendes.
                    </p>  
                    <p className="text-center sm:text-2xl md:text-2xl lg:text-2xl xl:text-4xl 2xl:text-4xl font-text_ale3">
                        Nosso objetivo é colaborar com o aprendizado <br />das crianças de maneira divertida e simples,<br /> esenvolvendo autonomia, 
                        lógica e outras<br /> habilidades importantes!
                    </p>   
                </div>
            </div>
            <div className="flex justify-center items-center sm:mt-20 md:mt-14 lg:mt-14 xl:mt-16 2xl:mt-64 ">
                            <img className='w-16 sm:w-12 md:w-16 lg:w-20  xl:w-24 ' src="src\assets\icones\Git.svg" alt=""/>
                            <p className="font-extrabold sm:text-sm md:text-2xl lg:text-2xl">PROJETO NO <u>GITHUB</u></p>
            </div>
        </BackgroundLayout >  
    </div>





 
  )
}
