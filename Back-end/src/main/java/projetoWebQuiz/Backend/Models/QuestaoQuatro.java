package projetoWebQuiz.Backend.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "questoes_quatro")
public class QuestaoQuatro {
    @Id
    private String id_questao_quatro;

    private String enunciado;
    private String resposta;
    private String dica;
    private int id_categoria;

    public String getId() {
        return id_questao_quatro;
    }

    public void setId(String id_questao_quatro) {
        this.id_questao_quatro = id_questao_quatro;
    }

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

    public int getId_categoria() {
        return id_categoria;
    }

    public void setId_categoria(int id_categoria) {
        this.id_categoria = id_categoria;
    }
}
