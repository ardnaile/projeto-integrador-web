package projetoWebQuiz.Backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetoWebQuiz.Backend.Dtos.EstudanteDto;
import projetoWebQuiz.Backend.Dtos.LoginEstudanteDto;
import projetoWebQuiz.Backend.Dtos.ProfessorDto;
import projetoWebQuiz.Backend.Mappers.EstudanteMapper;
import projetoWebQuiz.Backend.Models.Estudante;
import projetoWebQuiz.Backend.Models.Professor;
import projetoWebQuiz.Backend.Models.Turma;
import projetoWebQuiz.Backend.Repositories.EstudanteRepository;
import projetoWebQuiz.Backend.Repositories.TurmaRepository;
import projetoWebQuiz.Backend.Services.EstudanteService;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@RestController
@RequestMapping
public class EstudanteController {
    @Autowired
    EstudanteService estudanteService;

    @Autowired
    EstudanteMapper estudanteMapper;

    @Autowired
    TurmaRepository turmaRepository;

    @PostMapping("/cadastroEstudante")
    public ResponseEntity<String> cadastroEstudante(@RequestBody EstudanteDto estudanteDto) {
        try{
            Estudante estudante = estudanteMapper.toEntity(estudanteDto);
            Turma turma = turmaRepository.findByNomeTurma(estudante.getTurma());

            if (turma != null){
                Estudante novoEstudante = estudanteService.salvarEstudante(estudante);
                return ResponseEntity.ok(novoEstudante.getId_estudante());//"Estudante cadastrado com sucesso. ID: " +
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("A turma informada não existe!");
            }
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao cadastrar estudante: " + e.getMessage());
        }
    }
    @GetMapping("/verTodosEstudantes")
    public ResponseEntity<List<Estudante>> verTodosEstudantes(){
        List<Estudante> lista = estudanteService.verTodosEstudantes();
        return ResponseEntity.ok(lista);
    }

    @PostMapping("/validarEstudante")
    public ResponseEntity<String> validarEstudante(@RequestParam String chave) {
        try {
            String estudanteId = estudanteService.validarEstudante(chave);
            return ResponseEntity.ok(estudanteId);
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro interno do servidor.");
        }
    }
}
