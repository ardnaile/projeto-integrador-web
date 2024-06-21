package projetoWebQuiz.Backend.Dtos;

public record QuestaoQuatroDto(
        String enunciado,
        String resposta,
        String dica,
        String opcao2,
        String opcao3,
        String opcao4) {
}
