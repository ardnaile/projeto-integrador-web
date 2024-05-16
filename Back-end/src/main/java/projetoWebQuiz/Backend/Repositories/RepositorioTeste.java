package projetoWebQuiz.Backend.Repositories;
import org.springframework.data.mongodb.repositoty.MongoRepository;
import projetoWebQuiz.Backend.Models.Professor;

public interface RepositorioTeste extends MongoRepository<Professor, String> {
    boolean existsById(int idProfessor);
}
