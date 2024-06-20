package projetoWebQuiz.Backend.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import projetoWebQuiz.Backend.Models.Estudante;

import java.util.List;

public interface EstudanteRepository extends MongoRepository<Estudante, String> {

    @Query("{ 'turma': ?0 }")
    List<Estudante> findByNomeTurma(String turma);

}
