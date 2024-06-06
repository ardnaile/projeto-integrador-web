package projetoWebQuiz.Backend.Mappers;


import projetoWebQuiz.Backend.Dtos.EstudanteDto;
import projetoWebQuiz.Backend.Models.Estudante;

public class EstudanteMapper {

    public Estudante toEntity(EstudanteDto estudanteDto) {
        Estudante objeto = new Estudante(
                estudanteDto.turma(),
                estudanteDto.usuario_estudante(),
                estudanteDto.chave_estudante()
        );
        return objeto;
    }
}
