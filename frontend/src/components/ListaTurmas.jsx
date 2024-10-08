import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import background from '../fundos/fundo-minhas-turmas.svg';

const CentralizedDiv = ({ children }) => {
    return (
      <div className="mt-8 fixed w-1/3 container mx-auto -translate-x-1/2 -translate-y-1/2 bg-transparent p-4 rounded overflow-auto h-1/2">
        {children}
      </div>
    );
};

const ButtonList = ({ turmas,idProfessores }) => {
      const professor = idProfessores;
      return (
      <div className="grid gap-6">
        {turmas.map((turma, index) => (  
          <Link to={`/turma/${turma.id_turma}?nome_turma=${encodeURIComponent(turma.nome_turma)}&professor=${encodeURIComponent(professor)}`}
            key={index}>
            <div>
                <button className="bg-gray-100 w-full text-black px-6 py-4 rounded-3xl font-bold text-3xl text-wrap">
                  {turma.nome_turma}
                </button>
            </div>
          </Link>
        ))}
      </div>
    );  
};

const ListaTurma = ({id}) => {
  const [turmas, setTurmas] = useState([]);
  const [idProfessor, setIdProfessor] = useState(id);

  useEffect(() => {
    const fetchTurmas = async () => {
      try {
        // Faz a requisição para obter os dados das turmas

        const response = await fetch(`http://localhost:8080/minhasTurmas/${idProfessor}`);
        
        if (!response.ok) {
          throw new Error('Falha ao obter os dados das turmas');
        }
        const data = await response.json();

        // Processa os dados para extrair apenas id_turma e nome_turma
        const turmasSimplificadas = data.map(turma => ({
          id_turma: turma.id_turma,
          nome_turma: turma.nome_turma
        }));
    
        // Atualiza o estado com os dados simplificados
        setTurmas(turmasSimplificadas);
      } catch (error) { 
        console.error('Erro ao carregar as turmas:', error);
      }
    };

    // Chama a função de fetch ao montar o componente
    fetchTurmas();
  }, []);

    const minhasturmas = turmas;
    return(
      <div >
        <CentralizedDiv>
          <ButtonList idProfessores={idProfessor} turmas={minhasturmas} />
        </CentralizedDiv>  
      </div>
    )
}

export default ListaTurma;
