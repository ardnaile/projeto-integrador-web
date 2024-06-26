package projetoWebQuiz.Backend.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import projetoWebQuiz.Backend.Models.QuestaoQuatro;

import java.util.List;

public interface QuestaoQuatroRepository extends MongoRepository<QuestaoQuatro, String> {

    @Query("{ 'id_categoria': ?0 }")
    List<QuestaoQuatro> findByIdCategoria(int id_categoria);

}
