package projetoWebQuiz.Backend.Models;

public class Estudante {
    private String nomeEstudante;
    private Turma turmaEstudante;
    private String codigoEstudante;

    public Estudante(String nomeEstudante, Turma turmaEstudante, String codigoEstudante) {
        this.nomeEstudante = nomeEstudante;
        this.turmaEstudante = turmaEstudante;
        this.codigoEstudante = codigoEstudante;
    }

    public String getNomeEstudante() {
        return nomeEstudante;
    }

    public void setNomeEstudante(String nomeAluno) {
        this.nomeEstudante = nomeEstudante;
    }

    public Turma getTurmaEstudante() {
        return turmaEstudante;
    }

    public String getCodigoEstudante() {
        return codigoEstudante;
    }

    public void setCodigoEstudante(String codigoEstudante) {
        this.codigoEstudante = codigoEstudante;
    }

    public void setTurmaEstudante(Turma turmaEstudante) {
        this.turmaEstudante = turmaEstudante;
    }
}
