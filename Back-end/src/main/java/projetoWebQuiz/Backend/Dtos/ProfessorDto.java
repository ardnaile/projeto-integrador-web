package projetoWebQuiz.Backend.Dtos;

// info que o cliente envia pro login e também cadastro
public record ProfessorDto(
        String usuario_professor,
        String chave_professor) {

}
