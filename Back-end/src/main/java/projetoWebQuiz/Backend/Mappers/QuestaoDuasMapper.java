package projetoWebQuiz.Backend.Mappers;

import projetoWebQuiz.Backend.Dtos.QuestaoDuasDto;
import projetoWebQuiz.Backend.Models.QuestaoDuas;

public class QuestaoDuasMapper {

    public QuestaoDuasDto toDTO(QuestaoDuas questaoDuas){
        return new QuestaoDuasDto(
                questaoDuas.getEnunciado(),
                questaoDuas.getResposta(),
                questaoDuas.getDica()
        );
    }
}
