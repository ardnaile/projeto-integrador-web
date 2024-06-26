package projetoWebQuiz.Backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetoWebQuiz.Backend.Dtos.TurmaDto;
import projetoWebQuiz.Backend.Mappers.TurmaMapper;
import projetoWebQuiz.Backend.Models.Estudante;
import projetoWebQuiz.Backend.Models.Turma;
import projetoWebQuiz.Backend.Services.TurmaService;

import java.util.List;

@RestController
public class    TurmaController {
    @Autowired
    TurmaMapper turmaMapper;
    @Autowired
    TurmaService turmaService;

    @PostMapping("/novaTurma")
    public ResponseEntity<String> novaTurma(@RequestBody TurmaDto turmaDto){
        try {
            Turma turma = turmaMapper.toEntity(turmaDto);
            Turma novaTurma = turmaService.salvarTurma(turma);

            return ResponseEntity.ok("Turma cadastrada com sucesso. ID: " + novaTurma.getId_turma());
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao cadastrar turma: " + e.getMessage());
        }
    }

    @GetMapping("/verTodasTurmas")
    public ResponseEntity<List<Turma>> verTodasTurmas(){
        List<Turma> lista = turmaService.verTodasTurmas();
        return ResponseEntity.ok(lista);
    }

    @GetMapping("/verAlunosDaTurma/{nomeTurma}")
    public ResponseEntity<List<Estudante>> verAlunosDaTurma(@PathVariable String nomeTurma){
        List<Estudante> lista = turmaService.verAlunosDaTurma(nomeTurma);
        return ResponseEntity.ok(lista);
    }
}
