package projetoWebQuiz.Backend.Dtos;

public record QuestaoDuasDto(
        String enunciado,
        Boolean resposta,
        String dica
) {
}
