import React, {useState} from "react";
import { Link,useNavigate } from "react-router-dom";

import BotaoVoltar from "../components/BotaoVoltar";
import background from "../fundos/fundo-bem-vindo-de-volta.svg";
import Input from "../components/Input";
import BotaoConfirma from "../components/BotaoConfirma";
import InputSenha from "../components/InputSenha";

const DigiteCodigo = () => {
    const [inputValueUsu, setInputValueUsu] = useState('');
    const [inputValuePass, setInputValuePass] = useState('');
    const [dados,setDados] = useState('');
    const navigate = useNavigate();

    const handleInputChangePass = (value) => {
      setInputValuePass(value);
    };

    const handleFetchRequest = () => {
      fetch(`http://localhost:8080/validarEstudante?chave=${inputValuePass}`,{
          method: 'POST'
        })
          
          .then((response) => response.text())
          .then((data) => {
            console.log(data)
            setDados(data)
            if (data == 'Estudante não encontrado com a chave fornecida.') {
              alert(data);
            }else {
              alert('Logado com sucesso!');
              navigate(`/Categorias`);
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
                <Link to="/PrimeiraVez">
                    <BotaoVoltar />
                </Link>
            <div className="mt-44 flex flex-col items-center space-y-10 justify-center h-screen">
                <InputSenha onInputChange={handleInputChangePass}/>
                {/* <Link to="/Categorias"> */}
                    <BotaoConfirma onClick={handleFetchRequest}/>
                {/* </Link> */}
            </div>
            </div>
        </div>
    )
}
export default DigiteCodigo;