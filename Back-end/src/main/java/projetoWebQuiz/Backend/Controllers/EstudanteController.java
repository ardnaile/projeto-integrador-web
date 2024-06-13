package projetoWebQuiz.Backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import projetoWebQuiz.Backend.Dtos.EstudanteDto;
import projetoWebQuiz.Backend.Mappers.EstudanteMapper;
import projetoWebQuiz.Backend.Models.Estudante;
import projetoWebQuiz.Backend.Services.EstudanteService;

public class EstudanteController {
    @Autowired
    EstudanteService estudanteService;

    @Autowired
    EstudanteMapper estudanteMapper;

    @PostMapping("/cadastroEstudante")
    public ResponseEntity<String> cadastrarEstudante(@RequestBody EstudanteDto estudanteDto){
        try {
            Estudante estudante = estudanteMapper.toEntity(estudanteDto);
            Estudante novoEstudante = estudanteService.salvarEstudante(estudante);

            return ResponseEntity.ok("Estudante cadastrado com sucesso. ID: " + novoEstudante.getId_estudante());
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao cadastrar estudante: " + e.getMessage());
        }
    }
}
