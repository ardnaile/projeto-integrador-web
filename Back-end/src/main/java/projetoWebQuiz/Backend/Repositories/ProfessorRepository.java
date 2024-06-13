package projetoWebQuiz.Backend.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import projetoWebQuiz.Backend.Models.Professor;

public interface ProfessorRepository extends MongoRepository<Professor, String> {
    // aqui podemos adicionar os métodos de consulta (query)
}
