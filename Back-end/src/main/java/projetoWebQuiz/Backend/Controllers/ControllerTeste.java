package projetoWebQuiz.Backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import projetoWebQuiz.Backend.Dtos.ProfessorDto;
import projetoWebQuiz.Backend.Mappers.ProfessorMapper;
import projetoWebQuiz.Backend.Models.Professor;
import projetoWebQuiz.Backend.Repositories.ProfessorRepository;
import projetoWebQuiz.Backend.Services.ProfessorService;

@RestController
public class ControllerTeste {

    @Autowired
    private ProfessorRepository professorRepository;

    @Autowired
    private ProfessorMapper professorMapper;

    @Autowired
    private ProfessorService professorService;

    @PostMapping("/cadastroProfessor")
    public ResponseEntity<String> cadastrarProfessor(@RequestBody ProfessorDto professorDto){
        try {
            Professor professor = professorMapper.toEntity(professorDto);
            Professor novoProfessor = professorService.salvarProfessor(professor);

            return ResponseEntity.ok("Professor cadastrado com sucesso. ID: " + novoProfessor.getIdProfessor());
    } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao cadastrar professor: " + e.getMessage());
        }
    }
}
