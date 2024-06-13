package projetoWebQuiz.Backend.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

// @Entity
// @Table(name="estudantes")
@Document(collection = "estudantes")
public class Estudante {
    @Id
    private String id_estudante;
    private String usuario_estudante;
    private String chave_estudante;
    private int qtd_acertos;
    private Turma turma;

    // builder pro dto!!
    public Estudante(Turma turma, String usuario_estudante, String chave_estudante) {
        this.usuario_estudante = usuario_estudante;
        this.chave_estudante = chave_estudante;
        this.turma = turma;
    }

    public String getId_estudante() {
        return id_estudante;
    }

    public void setId_estudante(String id_estudante) {
        this.id_estudante = id_estudante;
    }

    public String getUsuario_estudante() {
        return usuario_estudante;
    }

    public void setUsuario_estudante(String usuario_estudante) {
        this.usuario_estudante = usuario_estudante;
    }

    public String getChave_estudante() {
        return chave_estudante;
    }

    public Turma getTurma() {
        return turma;
    }

    public void setTurma(Turma turma) {
        this.turma = turma;
    }

    public void setChave_estudante(String chave_estudante) {
        this.chave_estudante = chave_estudante;
    }

    public int getQtd_acertos() {
        return qtd_acertos;
    }

    public void setQtd_acertos(int qtd_acertos) {
        this.qtd_acertos = qtd_acertos;
    }
}
