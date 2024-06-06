package projetoWebQuiz.Backend.Models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Professor")
public class Professor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String idProfessor;

    private String nomeProfessor;
    private String palavraPasseProfessor;

    public Professor(String nomeProfessor, String palavraPasseProfessor) {
        this.nomeProfessor = nomeProfessor;
        this.palavraPasseProfessor = palavraPasseProfessor;
    }

    public String getIdProfessor() {
        return idProfessor;
    }

    public void setIdProfessor(String idProfessor) {
        this.idProfessor = idProfessor;
    }

    public String getNomeProfessor() {
        return nomeProfessor;
    }

    public void setNomeProfessor(String nomeProfessor) {
        this.nomeProfessor = nomeProfessor;
    }

    public String getPalavraPasseProfessor() {
        return palavraPasseProfessor;
    }

    public void setPalavraPasseProfessor(String palavraPasseProfessor) {
        this.palavraPasseProfessor = palavraPasseProfessor;
    }
}
