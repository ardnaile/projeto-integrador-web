import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import BotaoVoltar from "../components/BotaoVoltar";
import background from "../fundos/fundo-login.svg";
import Input from "../components/Input";
import BotaoConfirma from "../components/BotaoConfirma";
import botaocadastro from "../botoes/botao-nao-possuo-conta.svg"
import InputSenha from '../components/InputSenha';

const Login = () => {
    const [inputValueUsu, setInputValueUsu] = useState('');
    const [inputValuePass, setInputValuePass] = useState('');
    const [dados,setDados] = useState('');
    const navigate = useNavigate();

    const handleInputChangeUsu = (value) => {
      setInputValueUsu(value);
    };
    
    const handleInputChangePass = (value) => {
      setInputValuePass(value);
    };

    const requestBody = {
      usuario_professor: inputValueUsu,
      chave_professor: inputValuePass,
    };


    const handleFetchRequest = () => {
      fetch(`http://localhost:8080/validarProfessor`,{
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(requestBody)
        })
          
          .then((response) => response.text())
          .then((data) => {
            console.log(data)
            setDados(data)
            if (data != 'Professor não encontrado.' ) {
              alert("Logado com sucesso!");
              navigate(`/PainelProfessor/${data}`);
            }else {
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
                    <Input onInputChange={handleInputChangeUsu}/>
                    <InputSenha onInputChange={handleInputChangePass}/>
                    <BotaoConfirma onButtonClick={handleFetchRequest}/>
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