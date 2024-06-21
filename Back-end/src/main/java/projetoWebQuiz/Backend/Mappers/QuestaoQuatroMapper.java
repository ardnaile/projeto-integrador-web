package projetoWebQuiz.Backend.Mappers;

import projetoWebQuiz.Backend.Dtos.QuestaoQuatroDto;
import projetoWebQuiz.Backend.Models.QuestaoQuatro;

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
