package projetoWebQuiz.Backend.Mappers;


import org.springframework.stereotype.Component;
import projetoWebQuiz.Backend.Dtos.EstudanteDto;
import projetoWebQuiz.Backend.Models.Estudante;

@Component
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
