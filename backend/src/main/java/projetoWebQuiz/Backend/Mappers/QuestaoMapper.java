package projetoWebQuiz.Backend.Mappers;

import org.springframework.stereotype.Component;
import projetoWebQuiz.Backend.Dtos.QuestaoDuasDto;
import projetoWebQuiz.Backend.Dtos.QuestaoQuatroDto;
import projetoWebQuiz.Backend.Models.QuestaoDuas;
import projetoWebQuiz.Backend.Models.QuestaoQuatro;

@Component
public class QuestaoMapper {
    public QuestaoDuasDto toDTO(QuestaoDuas questaoDuas){
        return new QuestaoDuasDto(
                questaoDuas.getEnunciado(),
                questaoDuas.getResposta(),
                questaoDuas.getDica()
        );
    }
    public QuestaoQuatroDto toDTO(QuestaoQuatro questaoQuatro){
        return new QuestaoQuatroDto(
                questaoQuatro.getEnunciado(),
                questaoQuatro.getResposta(),
                questaoQuatro.getDica(),
                null,
                null,
                null
        );
    }
}
