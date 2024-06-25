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
import projetoWebQuiz.Backend.Services.QuestaoService;

@RestController
@RequestMapping("/api/questoes")
public class QuestaoController {

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
}
