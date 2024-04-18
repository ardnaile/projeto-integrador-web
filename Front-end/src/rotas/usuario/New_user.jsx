import { Link,Outlet } from "react-router-dom";
import BackgroundLayout from '../../background/VariosLayouts'


function gerarPalavraAleatoria(tamanhoMaximo) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  const tamanhoPalavra = Math.floor(Math.random() * tamanhoMaximo) + 1;
  let palavra = '';
  for (let i = 0; i < tamanhoPalavra; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    palavra += caracteres.charAt(indiceAleatorio);
  }
  return palavra;
}

function gerarTextoAleatorio(numeroPalavras, tamanhoMaximoPalavra) {
  let texto = '';
  for (let i = 0; i < numeroPalavras; i++) {
    texto += gerarPalavraAleatoria(tamanhoMaximoPalavra) + ' ';
  }
  return texto.trim(); // Remove o espaço extra no final
}

// Chamada da função para gerar o texto aleatório
const textoGerado = gerarTextoAleatorio(1, 15);


export default function New_user() {
  const styleInput = 'text-3xl font-text_ale text-center ease-in-out focus:outline-none w-full bg-gray-50 border-none rounded-full px-6 py-4 mb-4 text-gray-800';
  return (
    <div className="w-screen mx-auto">
       <BackgroundLayout backgroundImage={`url('./src/assets/img_fundo/fundo1.png')`}>
        <div className='items-center justify-center  w-screen h-screen'>
          <form className="max-w-full mx-auto flex items-center h-screen w-screen justify-center bg-transparent" > 
            <div className='space-y-4'>
              <h1 className="font-text_ale text-5xl text-center mb-16">ESSE É SEU CODIGO SECRETO:</h1>
              <div className=''>
                <input className={styleInput} value={textoGerado} type="text" />
                <p className='mb-16 mt-16 text-center font-text_ale text-5xl'>ANOTE E GUARDE EM ALGUM LUGAR SEGURO.<br/> VOCÊ VAI PRECISAR DELE NA PRÓXIMA<br/> VEZ QUE FOR ENTRAR.</p>
              </div>
              <div className=' items-center flex justify-center'>
                <Link to="/Home">
                  <button className='font-text_ale text-4xl bg-green-400 py-2 px-16 rounded-full border-b-4 border-gray-400 hover:bg-green-600 hover:text-5xl'>OK!</button>
                </Link>
              </div>
            </div>
          </form>
        </div> 
      </BackgroundLayout> 
    </div>
  )
}
