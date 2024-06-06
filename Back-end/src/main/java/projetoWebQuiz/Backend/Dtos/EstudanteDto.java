package projetoWebQuiz.Backend.Dtos;

import projetoWebQuiz.Backend.Models.Turma;

public record EstudanteDto(Turma turma, String usuario_estudante, String chave_estudante) {
}
