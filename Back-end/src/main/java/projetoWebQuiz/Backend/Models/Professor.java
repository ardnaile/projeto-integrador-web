package projetoWebQuiz.Backend.Models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "professores")
public class Professor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id_professor;

    private String usuario_professor;
    private String chave_professor;

    public Professor(String usuario_professor, String chave_professor) {
        this.usuario_professor = usuario_professor;
        this.chave_professor = chave_professor;
    }

    public String getId_professor() {
        return id_professor;
    }

    public void setId_professor(String id_professor) {
        this.id_professor = id_professor;
    }

    public String getUsuario_professor() {
        return usuario_professor;
    }

    public void setUsuario_professor(String usuario_professor) {
        this.usuario_professor = usuario_professor;
    }

    public String getChave_professor() {
        return chave_professor;
    }

    public void setChave_professor(String chave_professor) {
        this.chave_professor = chave_professor;
    }
}
