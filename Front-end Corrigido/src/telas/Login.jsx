import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import BotaoVoltar from "../components/BotaoVoltar";
import background from "../fundos/fundo-login.svg";
import Input from "../components/Input";
import BotaoConfirma from "../components/BotaoConfirma";
import botaocadastro from "../botoes/botao-nao-possuo-conta.svg"

const Login = () => {
    const [inputValue, setInputValue] = useState('');
    const [dados,setDados] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (value) => {
      setInputValue(value);
    };
    
    const handleFetchRequest = () => {
      fetch(`http://192.168.100.40:8080/buscaNomeProfessor/6674b7cbdee3d1539a9548eb`,{
          method: 'GET',
        })
          .then((response) => response.json())
          .then((data) => {
            setDados(data[0])

            if (inputValue === dados) {
              alert("Logado com sucesso!");
              navigate('/PainelProfessor');
            } else {
              alert('Falha na autenticação');
            }
          })
          .catch((error) => console.log(error))
      };
    
    return(
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <img src={background} alt="Background" className="object-cover w-full h-full" /> 
            </div>

            <div className="absolute inset-0 flex flex-col items-center">
                <Link to="/">
                    <BotaoVoltar />
                </Link>
                <div className="flex flex-col items-center space-y-10 justify-center h-screen mt-20">
                    <Input onInputChange={handleInputChange}/>
                    {/* <Link to='/PainelProfessor'> */}
                        <BotaoConfirma onButtonClick={handleFetchRequest}/>
                    {/* </Link> */}
                </div>
                <div>
                    <Link to="/CriarConta">
                        <button >
                            <img src={botaocadastro} alt={botaocadastro} className="h-12 mb-11" />
                        </button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default Login;