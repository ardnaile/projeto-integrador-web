package projetoWebQuiz.Backend.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import projetoWebQuiz.Backend.Models.Turma;

public interface TurmaRepository extends MongoRepository<Turma, String> {
    Turma findByNome(String nome);
}
