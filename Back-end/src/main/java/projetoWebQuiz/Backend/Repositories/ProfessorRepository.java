package projetoWebQuiz.Backend.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import projetoWebQuiz.Backend.Models.Professor;

import java.util.Optional;

public interface ProfessorRepository extends MongoRepository<Professor, String> {
    // aqui podemos adicionar os métodos de consulta (query)

    @Query("{ 'usuario_professor': ?0 }")
    Optional<Professor> findByUsuario(String usuario_professor);

    @Query("{ 'chave_professor': ?0 }")
    Optional<Professor> findByChave(String chave_professor);
}
