package projetoWebQuiz.Backend.Mappers;

import org.springframework.stereotype.Component;
import projetoWebQuiz.Backend.Dtos.QuestaoQuatroDto;
import projetoWebQuiz.Backend.Models.QuestaoQuatro;

@Component
public class QuestaoQuatroMapper {

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
