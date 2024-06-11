package projetoWebQuiz.Backend.Mappers;

import org.springframework.stereotype.Component;
import projetoWebQuiz.Backend.Dtos.ProfessorDto;
import projetoWebQuiz.Backend.Models.Professor;

@Component
public class ProfessorMapper {

    public Professor toEntity(ProfessorDto professorDto){
        Professor objeto = new Professor(
                professorDto.nomeProfessor(),
                professorDto.palavraPasseProfessor()
        );
        return objeto;
    }
}
