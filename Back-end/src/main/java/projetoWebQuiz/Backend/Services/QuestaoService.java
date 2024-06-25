package projetoWebQuiz.Backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetoWebQuiz.Backend.Dtos.QuestaoDuasDto;
import projetoWebQuiz.Backend.Dtos.QuestaoQuatroDto;
import projetoWebQuiz.Backend.Mappers.QuestaoDuasMapper;
import projetoWebQuiz.Backend.Mappers.QuestaoQuatroMapper;
import projetoWebQuiz.Backend.Models.QuestaoDuas;
import projetoWebQuiz.Backend.Models.QuestaoQuatro;
import projetoWebQuiz.Backend.Repositories.QuestaoDuasRepository;
import projetoWebQuiz.Backend.Repositories.QuestaoQuatroRepository;

import java.util.Collections;
import java.util.List;

@Service
public class QuestaoService {

    @Autowired
    private QuestaoQuatroRepository questaoQuatroRepository;

    @Autowired
    private QuestaoQuatroMapper questaoQuatroMapper;

    @Autowired
    private QuestaoDuasRepository questaoDuasRepository;

    @Autowired
    private QuestaoDuasMapper questaoDuasMapper;

    public QuestaoQuatroDto pegarQuestaoQuatro(int id_categoria){
        // Pegando uma lista com todas as questões do banco e embaralhando
        List<QuestaoQuatro> questoesQuatro = questaoQuatroRepository.findByIdCategoria(id_categoria);
        Collections.shuffle(questoesQuatro);

        // Pegando a primeira da lista e transformando em dto
        QuestaoQuatroDto questaoQuatroDto = questaoQuatroMapper.toDTO(questoesQuatro.get(0));

        // Setando os valores das outras opções (opções erradas)
        questaoQuatroDto.setOpcao2(questoesQuatro.get(1).getResposta());
        questaoQuatroDto.setOpcao3(questoesQuatro.get(2).getResposta());
        questaoQuatroDto.setOpcao4(questoesQuatro.get(3).getResposta());

        // retornando o json com todas as infos necessárias
        return questaoQuatroDto;
    }

    public QuestaoDuasDto pegarQuestaoDuas(int id_categoria){
        List<QuestaoDuas> questoesDuas = questaoDuasRepository.findByIdCategoria(id_categoria);
        Collections.shuffle(questoesDuas);

        QuestaoDuasDto questaoDuasDto = questaoDuasMapper.toDTO(questoesDuas.get(0));
        return questaoDuasDto;
    }

}
