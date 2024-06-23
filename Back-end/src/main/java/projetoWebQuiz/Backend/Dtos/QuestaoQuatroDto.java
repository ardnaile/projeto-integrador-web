package projetoWebQuiz.Backend.Dtos;

public class QuestaoQuatroDto {
    private String enunciado;
    private String resposta;
    private String dica;
    private String opcao2;
    private String opcao3;
    private String opcao4;
    private String respostaCorreta; // Adicionando o atributo respostaCorreta

    public QuestaoQuatroDto(String enunciado, String resposta, String dica, String opcao2, String opcao3, String opcao4) {
        this.enunciado = enunciado;
        this.resposta = resposta;
        this.dica = dica;
        this.opcao2 = opcao2;
        this.opcao3 = opcao3;
        this.opcao4 = opcao4;
    }

    // Getters e setters
    public String getEnunciado() {
        return enunciado;
    }

    public void setEnunciado(String enunciado) {
        this.enunciado = enunciado;
    }

    public String getResposta() {
        return resposta;
    }

    public void setResposta(String resposta) {
        this.resposta = resposta;
    }

    public String getDica() {
        return dica;
    }

    public void setDica(String dica) {
        this.dica = dica;
    }

    public String getOpcao2() {
        return opcao2;
    }

    public void setOpcao2(String opcao2) {
        this.opcao2 = opcao2;
    }

    public String getOpcao3() {
        return opcao3;
    }

    public void setOpcao3(String opcao3) {
        this.opcao3 = opcao3;
    }

    public String getOpcao4() {
        return opcao4;
    }

    public void setOpcao4(String opcao4) {
        this.opcao4 = opcao4;
    }

    public String getRespostaCorreta() {
        return respostaCorreta;
    }

    public void setRespostaCorreta(String respostaCorreta) {
        this.respostaCorreta = respostaCorreta;
    }
}
