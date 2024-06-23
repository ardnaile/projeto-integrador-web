package projetoWebQuiz.Backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetoWebQuiz.Backend.Dtos.QuestaoQuatroDto;
import projetoWebQuiz.Backend.Mappers.QuestaoQuatroMapper;
import projetoWebQuiz.Backend.Models.QuestaoQuatro;
import projetoWebQuiz.Backend.Repositories.QuestaoQuatroRepository;

import java.util.Collections;
import java.util.List;

@Service
public class QuestaoService {

    @Autowired
    private QuestaoQuatroRepository questaoQuatroRepository;

    @Autowired
    private QuestaoQuatroMapper questaoQuatroMapper;

    public QuestaoQuatroDto pegarQuestaoQuatro(){
        List<QuestaoQuatro> questoesQuatro = questaoQuatroRepository.findAll();
        Collections.shuffle(questoesQuatro);

        QuestaoQuatroDto questaoDto = questaoQuatroMapper.toDTO(questoesQuatro.get(0));

        // Exemplo de lógica para adicionar opções
        // Aqui você pode implementar a lógica para selecionar e adicionar as opções
        // List<String> opcoes = selecionarOpcoes(questoesQuatro.get(0));
        // questaoDto.setOpcao2(opcoes.get(0));
        // questaoDto.setOpcao3(opcoes.get(1));
        // questaoDto.setOpcao4(opcoes.get(2));

        return questaoDto;
    }
}
