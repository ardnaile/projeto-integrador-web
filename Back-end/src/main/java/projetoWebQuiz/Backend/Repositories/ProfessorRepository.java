package projetoWebQuiz.Backend.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import projetoWebQuiz.Backend.Models.Professor;

import java.util.Optional;

public interface ProfessorRepository extends MongoRepository<Professor, String> {
    // aqui podemos adicionar os métodos de consulta (query)
    Optional<Professor> findByUsuario(String usuario_professor);
    Optional<Professor> findByChave(String chave_professor);
}
