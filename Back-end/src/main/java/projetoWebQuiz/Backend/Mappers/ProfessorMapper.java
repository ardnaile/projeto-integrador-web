package projetoWebQuiz.Backend.Mappers;

import projetoWebQuiz.Backend.Dtos.ProfessorDto;
import projetoWebQuiz.Backend.Models.Professor;

public class ProfessorMapper {

    public Professor toEntity(ProfessorDto professorDto){
        Professor objeto = new Professor(
                professorDto.nomeProfessor(),
                professorDto.palavraPasseProfessor()
        );
        return objeto;
    }
}
