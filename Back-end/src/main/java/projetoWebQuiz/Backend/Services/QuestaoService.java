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

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class QuestaoService {
    @Autowired
    private QuestaoDuasRepository questaoDuasRepository;

    @Autowired
    private QuestaoQuatroRepository questaoQuatroRepository;

    @Autowired
    private QuestaoDuasMapper questaoDuasMapper;

    @Autowired
    private QuestaoQuatroMapper questaoQuatroMapper;

    // pegar uma questão de verdadeiro ou falso aleatória
    // retorna um json com enunciado, resposta e dica
    public QuestaoDuasDto pegarQuestaoDuas(){
        List<QuestaoDuasDto> todasQuestoesDuas = new ArrayList<>();

        // Adicionar questões de verdadeiro ou falso à lista
        List<QuestaoDuas> questoesDuas = questaoDuasRepository.findAll();


        for (QuestaoDuas question : questoesDuas) {
            QuestaoDuasDto questaoDto = questaoDuasMapper.toDTO(question);
            todasQuestoesDuas.add(questaoDto);
        }
        // Embaralhando a lista
        Collections.shuffle(todasQuestoesDuas);
        return todasQuestoesDuas.get(0);
    }
    // mudar para selecionar as questoes antes de passar pra dto
    public QuestaoQuatroDto pegarQuestaoQuatro(){
        List<QuestaoQuatroDto> todasQuestoesQuatro = new ArrayList<>();

        // Adicionar questões de verdadeiro ou falso à lista
        List<QuestaoQuatro> questoesQuatro = questaoQuatroRepository.findAll();
        for (QuestaoQuatro question : questoesQuatro) {
            QuestaoQuatroDto questaoDto = questaoQuatroMapper.toDTO(question);
            todasQuestoesQuatro.add(questaoDto);
        }
        // Embaralhando a lista
        Collections.shuffle(todasQuestoesQuatro);

        // selecionando as questoes
        QuestaoQuatroDto selecionada = todasQuestoesQuatro.get(0);
        // get(1), get(2), etc...

        // Adicionar a lógica para adicionar os valores nas opções
        return null;
    }

}
