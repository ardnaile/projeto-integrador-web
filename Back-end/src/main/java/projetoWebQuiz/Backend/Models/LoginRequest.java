package projetoWebQuiz.Backend.Models;

public class LoginRequest {
    private String palavraPasse;

    public LoginRequest(String palavraPasse) {
        this.palavraPasse = palavraPasse;

    }

    public String getPalavraPasse() {
        return palavraPasse;
    }

    public void setPalavraPasse(String palavraPasse) {
        this.palavraPasse = palavraPasse;
    }
}
