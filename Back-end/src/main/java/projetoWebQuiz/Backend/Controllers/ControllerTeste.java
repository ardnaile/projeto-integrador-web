package projetoWebQuiz.Backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import projetoWebQuiz.Backend.Models.LoginRequest;
import projetoWebQuiz.Backend.Models.Professor;
import projetoWebQuiz.Backend.Repositories.RepositorioTeste;

@RestController
public class ControllerTeste {

    @Autowired
    private RepositorioTeste repositorioTeste;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest){
        String palavraPasse = loginRequest.getPalavraPasse();

        if (palavra passe digitada = palavra passe do banco){
            return ResponseEntity.ok("Autenticação bem sucedida")
        } else {
            return ResponseEntity.status(404).body("Palavra passe não registrada no banco");
        }
    }

    @PostMapping("/cadastroProfessor")
    public ResponseEntity<String> cadastrar(@RequestBody Professor professor){
        String nomeProfessor = professor.get
    }
}
