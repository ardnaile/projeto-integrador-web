package projetoWebQuiz.Backend.Mappers;

import org.springframework.stereotype.Component;
import projetoWebQuiz.Backend.Dtos.TurmaDto;
import projetoWebQuiz.Backend.Models.Turma;

@Component
public class TurmaMapper {

    public Turma toEntity(TurmaDto turmaDto){
        Turma objeto = new Turma(
                turmaDto.nome_turma(),
                turmaDto.id_professor()
        );
        return objeto;
    }
}
