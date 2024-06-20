package projetoWebQuiz.Backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetoWebQuiz.Backend.Repositories.QuestaoDuasRepository;
import projetoWebQuiz.Backend.Repositories.QuestaoQuatroRepository;

@Service
public class QuestaoService {
    @Autowired
    private QuestaoDuasRepository questaoDuasRepository;

    @Autowired
    private QuestaoQuatroRepository questaoQuatroRepository;

    //
}
