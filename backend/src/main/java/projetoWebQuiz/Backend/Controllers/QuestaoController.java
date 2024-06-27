package projetoWebQuiz.Backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import projetoWebQuiz.Backend.Dtos.QuestaoDuasDto;
import projetoWebQuiz.Backend.Dtos.QuestaoQuatroDto;
import projetoWebQuiz.Backend.Models.QuestaoDuas;
import projetoWebQuiz.Backend.Repositories.QuestaoDuasRepository;
import projetoWebQuiz.Backend.Services.QuestaoService;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping
public class QuestaoController {
    @Autowired
    private QuestaoDuasRepository questaoDuasRepository;

    @Autowired
    private QuestaoService questaoService;

    @GetMapping("/questaoQuatro/{idCategoria}")
    public ResponseEntity<QuestaoQuatroDto> pegarQuestaoQuatro(@PathVariable int idCategoria) {
        try {
            QuestaoQuatroDto questaoQuatroDto = questaoService.pegarQuestaoQuatro(idCategoria);
            if (questaoQuatroDto != null) {
                return ResponseEntity.ok(questaoQuatroDto);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }

    @GetMapping("/questaoDuas/{idCategoria}")
    public ResponseEntity<QuestaoDuasDto> pegarQuestaoDuas(@PathVariable int idCategoria) {
        try {
            QuestaoDuasDto questaoDuasDto = questaoService.pegarQuestaoDuas(idCategoria);
            if (questaoDuasDto != null) {
                return ResponseEntity.ok(questaoDuasDto);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }

    @GetMapping("/verTodasQuestoesDuas")
    public ResponseEntity<List<QuestaoDuas>> questoesDuas(){
        List<QuestaoDuas> lista = questaoDuasRepository.findAll();
        return ResponseEntity.ok(lista);
    }

    @GetMapping("/questaoAleatoria/{idCategoria}")
    public ResponseEntity<Object> pegarQuestaoAleatoria(@PathVariable int idCategoria){
        try {
            Object questao = questaoService.pegarQuestaoAleatoria(idCategoria);
            return ResponseEntity.ok(questao);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Ocorreu um erro ao buscar a questão.");
        }
    }
}
