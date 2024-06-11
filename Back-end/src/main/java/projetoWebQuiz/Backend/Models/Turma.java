package projetoWebQuiz.Backend.Models;

//import jakarta.persistence.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.UUID;

//@Entity
//@Table(name="turmas")
@Document(collection = "turmas")
public class Turma {

    @Id
    private String id_turma;
    private String nome_turma;
    private Professor professor_turma;
}
