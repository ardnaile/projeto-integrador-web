package projetoWebQuiz.Backend.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import projetoWebQuiz.Backend.Models.Turma;

public interface TurmaRepository extends MongoRepository<Turma, String> {
    Turma findBy(String nome_turma);
    Turma findByProfessor(String professor_turma);
}
