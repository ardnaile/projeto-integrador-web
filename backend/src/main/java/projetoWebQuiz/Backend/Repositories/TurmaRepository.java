package projetoWebQuiz.Backend.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import projetoWebQuiz.Backend.Models.Turma;

import java.util.List;

public interface TurmaRepository extends MongoRepository<Turma, String> {
    @Query("{ 'nome_turma': ?0 }")
    Turma findByNomeTurma(String nome_turma);

    @Query("{ 'id_professor': ?0 }")
    List<Turma> findByProfessor(String id_professor);
}
