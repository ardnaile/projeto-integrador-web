import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Importando hooks do React Router
import background from '../fundos/fundo-quiz.svg'; // Importando imagem de fundo
import BotaoMatematica from '../components/BotaoMatematica'; // Componente botão para categoria Matemática
import BotaoTecnologia from '../components/BotaoTecnologia'; // Componente botão para categoria Tecnologia
import BotaoIdiomas from '../components/BotaoIdiomas'; // Componente botão para categoria Idiomas
import BotaoAnimais from '../components/BotaoAnimais'; // Componente botão para categoria Animais
import BotaoComida from '../components/BotaoComida'; // Componente botão para categoria Comida
import BotaoNatureza from '../components/BotaoNatureza'; // Componente botão para categoria Natureza
import BotaoArtes from '../components/BotaoArtes'; // Componente botão para categoria Artes
import BotaoEsportes from '../components/BotaoEsportes'; // Componente botão para categoria Esportes
import BotaoIniciar from '../components/BotaoIniciar'; // Componente botão Iniciar
import BotaoVoltar from '../components/BotaoVoltar'; // Componente botão Voltar

const Categorias = () => {
  const navigate = useNavigate(); // Hook do React Router para navegação programática
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState([]); // Estado para armazenar categorias selecionadas

  // Função para adicionar ou remover categoria da lista de selecionadas
  const toggleCategoria = (idCategoria) => {
    if (categoriasSelecionadas.includes(idCategoria)) {
      setCategoriasSelecionadas(categoriasSelecionadas.filter(cat => cat !== idCategoria)); // Remove a categoria se já estiver selecionada
    } else {
      setCategoriasSelecionadas([...categoriasSelecionadas, idCategoria]); // Adiciona a categoria se não estiver selecionada
    }
  };

  // Função para iniciar o quiz com as categorias selecionadas
  const handleIniciarQuiz = () => {
    if (categoriasSelecionadas.length > 0) {
      // Verifica se a única categoria selecionada é Tecnologia (ID 7)
      if (categoriasSelecionadas.length === 1 && categoriasSelecionadas.includes(7)) {
        navigate('/QuizVerdadeiroFalso'); // Redireciona para QuizVerdadeiroFalso se for só Tecnologia
      } else {
        // Verifica se Tecnologia (ID 7) está presente junto com outras categorias selecionadas
        if (categoriasSelecionadas.includes(7)) {
          console.log('Selecione apenas a categoria Tecnologia para iniciar o quiz.'); // Avisa para selecionar apenas Tecnologia se estiver combinada com outras
        } else {
          navigate(`/QuizQuatroOpcoes?categorias=${categoriasSelecionadas.join(',')}`); // Redireciona para QuizQuatroOpcoes com as categorias selecionadas
        }
      }
    }
  };

  // Verifica se o botão de iniciar deve estar desabilitado
  const isBotaoIniciarDisabled = categoriasSelecionadas.length === 0;

  // A função toggleCategoria neste código é responsável por adicionar ou remover 
  // uma categoria da lista de categorias selecionadas no componente Categorias.
  return (
    <div className="relative w-full h-screen">
      <img src={background} alt="Background" className="absolute inset-0 object-cover w-full h-full" />
      
      <div className="absolute inset-0 mt-[220px] flex flex-col justify-center items-center">
        <div className="grid grid-cols-4 grid-rows-2 gap-4 mb-10">
          <BotaoMatematica onClick={() => toggleCategoria(1)} /> {/* Botão para selecionar Matemática */}
          <BotaoTecnologia onClick={() => toggleCategoria(7)} /> {/* Botão para selecionar Tecnologia */}
          <BotaoIdiomas onClick={() => toggleCategoria(3)} /> {/* Botão para selecionar Idiomas */}
          <BotaoAnimais onClick={() => toggleCategoria(2)} /> {/* Botão para selecionar Animais */}
          <BotaoComida onClick={() => toggleCategoria(4)} /> {/* Botão para selecionar Comida */}
          <BotaoNatureza onClick={() => toggleCategoria(9)} /> {/* Botão para selecionar Natureza */}
          <BotaoArtes onClick={() => toggleCategoria(10)} /> {/* Botão para selecionar Artes */}
          <BotaoEsportes onClick={() => toggleCategoria(11)} /> {/* Botão para selecionar Esportes */}
        </div>
        
        {/* Botão para iniciar o quiz */}
        <BotaoIniciar onClick={handleIniciarQuiz} disabled={isBotaoIniciarDisabled} />
        
        {/* Botão Voltar que redireciona para a página anterior */}
        <div className="mt-4">
          <Link to="/categorias">
            <BotaoVoltar />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categorias;
