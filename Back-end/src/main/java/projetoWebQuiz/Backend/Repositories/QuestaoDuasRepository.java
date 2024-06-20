package projetoWebQuiz.Backend.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import projetoWebQuiz.Backend.Models.QuestaoDuas;
import projetoWebQuiz.Backend.Models.QuestaoQuatro;

import java.util.List;

public interface QuestaoDuasRepository extends MongoRepository<QuestaoDuas, String> {

    @Query("{ 'id_categoria': ?0 }")
    List<QuestaoDuas> findByIdCategoria(String id_categoria);

}
