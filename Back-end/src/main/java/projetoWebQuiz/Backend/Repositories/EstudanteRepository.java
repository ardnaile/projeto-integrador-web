package projetoWebQuiz.Backend.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import projetoWebQuiz.Backend.Models.Estudante;

public interface EstudanteRepository extends MongoRepository<Estudante, String> {
}
