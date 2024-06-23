import React, { useState,useEffect  } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

const CentralizedDiv = ({ children }) => {
    return (
      <div className="mt-8 fixed w-1/3 container mx-auto -translate-x-1/2 -translate-y-1/2 bg-transparent p-4 rounded overflow-auto h-1/2">
        {children}
      </div>
    );
  };
  

  const ButtonList = ({ alunos }) => {
    return (
    <div className="grid gap-6">
      {alunos.map((aluno, index) => (  
        <Link to={`/turma/${aluno.id_estudante}`} key={index}>
          <div>
              <button
              className="bg-gray-100 w-full text-black px-6 py-4 rounded-3xl font-bold text-3xl text-wrap"
              >
              {aluno.usuario_estudante}
              </button>
          </div>
        </Link>
      ))}
    </div>
  );  
};

const ListaAlunos = () => {
  const [alunosTurmas, setTurmas] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nome_turma = queryParams.get('nome_turma');

  useEffect(() => {
    const fetchTurmas = async () => {
      try {
        // Faz a requisição para obter os dados das turmas
        const response = await fetch(`http://localhost:8080/verAlunosDaTurma/${nome_turma}`); // Substitua pela sua URL de API
        if (!response.ok) {
          throw new Error('Falha ao obter os dados das turmas');
        }
        const data = await response.json();

        // Processa os dados para extrair apenas id_turma e nome_turma
        const alunosSimplificadas = data.map(aluno => ({
          id_estudante: aluno.id_estudante,
          usuario_estudante: aluno.usuario_estudante
        }));

        // Atualiza o estado com os dados simplificados
        setTurmas(alunosSimplificadas);
      } catch (error) {
        console.error('Erro ao carregar as turmas:', error);
      }
    };

    // Chama a função de fetch ao montar o componente
    fetchTurmas();
  }, []);

  const meusAlunos = alunosTurmas;

    return(
        <CentralizedDiv>
            <ButtonList alunos={meusAlunos} />
        </CentralizedDiv>  
    )
}

export default ListaAlunos;
