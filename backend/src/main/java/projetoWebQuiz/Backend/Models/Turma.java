package projetoWebQuiz.Backend.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.List;
import java.util.UUID;

@Document(collection = "turmas")
public class Turma {

    @Id
    private String id_turma;
    private String nome_turma;
    private String id_professor;

    public Turma(String nome_turma, String id_professor) {
        this.nome_turma = nome_turma;
        this.id_professor = id_professor;
    }

    public String getId_turma() {
        return id_turma;
    }

    public void setId_turma(String id_turma) {
        this.id_turma = id_turma;
    }

    public String getNome_turma() {
        return nome_turma;
    }

    public void setNome_turma(String nome_turma) {
        this.nome_turma = nome_turma;
    }

    public String getId_professor() {
        return id_professor;
    }

    public void setId_professor(String id_professor) {
        this.id_professor = id_professor;
    }
}
