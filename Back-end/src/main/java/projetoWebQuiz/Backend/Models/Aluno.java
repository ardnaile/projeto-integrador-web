package projetoWebQuiz.Backend.Models;

public class Aluno {
    private String nomeAluno;
    private Turma turmaAluno;
    private String codigoAluno;

    public Aluno(String nomeAluno, Turma turmaAluno, String codigoAluno) {
        this.nomeAluno = nomeAluno;
        this.turmaAluno = turmaAluno;
        this.codigoAluno = codigoAluno;
    }

    public String getNomeAluno() {
        return nomeAluno;
    }

    public void setNomeAluno(String nomeAluno) {
        this.nomeAluno = nomeAluno;
    }

    public Turma getTurmaAluno() {
        return turmaAluno;
    }

    public String getCodigoAluno() {
        return codigoAluno;
    }

    public void setCodigoAluno(String codigoAluno) {
        this.codigoAluno = codigoAluno;
    }

    public void setTurmaAluno(Turma turmaAluno) {
        this.turmaAluno = turmaAluno;
    }
}
