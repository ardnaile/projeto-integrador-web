package projetoWebQuiz.Backend.Mappers;

import org.springframework.stereotype.Component;
import projetoWebQuiz.Backend.Dtos.QuestaoDuasDto;
import projetoWebQuiz.Backend.Models.QuestaoDuas;

@Component
public class QuestaoDuasMapper {

    public QuestaoDuasDto toDTO(QuestaoDuas questaoDuas){
        return new QuestaoDuasDto(
                questaoDuas.getEnunciado(),
                questaoDuas.getResposta(),
                questaoDuas.getDica()
        );
    }
}
