import React from "react";
import { Link } from "react-router-dom";

const CentralizedDiv = ({ children }) => {
    return (
      <div className="mt-8 fixed w-1/3 container mx-auto -translate-x-1/2 -translate-y-1/2 bg-transparent p-4 rounded overflow-auto h-1/2">
        {children}
      </div>
    );
  };
  

const ButtonList = ({ items }) => {
    return (
      <div className="grid gap-6">
        {items.map((item, index) => (  
          <Link to={`/turma/${index}/${item}`} key={index}>
            <div>
                <p
                className="bg-transparent w-full text-black px-6 py-4 rounded-3xl font-bold text-3xl text-wrap text-center"
                >
                {item}
                </p>
            </div>
          </Link>
        ))}
      </div>
    );  
};


const ListaAlunos = () => {
    const turmas = ['Alguma coisa vai aqui', 'Alguma coisa vai aqui', 'Alguma coisa vai aqui','Alguma coisa vai aqui','Alguma coisa vai aqui','Alguma coisa vai aqui'];

    return(
        <CentralizedDiv>
            <ButtonList items={turmas} />
        </CentralizedDiv>  
    )
}

export default ListaAlunos;
