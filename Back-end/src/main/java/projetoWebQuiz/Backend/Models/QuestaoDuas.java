package projetoWebQuiz.Backend.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "questoes_duas")
public class QuestaoDuas {
    @Id
    private String id_questao_duas;

    private String enunciado;
    private int resposta;
    private String dica;
    private int id_categoria;

    public QuestaoDuas(String id_questao_duas, String enunciado, int resposta, String dica, int id_categoria) {
        this.id_questao_duas = id_questao_duas;
        this.enunciado = enunciado;
        this.resposta = resposta;
        this.dica = dica;
        this.id_categoria = id_categoria;
    }

    public String getId_questao_duas() {
        return id_questao_duas;
    }

    public void setId_questao_duas(String id_questao_duas) {
        this.id_questao_duas = id_questao_duas;
    }

    public String getEnunciado() {
        return enunciado;
    }

    public void setEnunciado(String enunciado) {
        this.enunciado = enunciado;
    }

    public int getResposta() {
        return resposta;
    }

    public void setResposta(int resposta) {
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
