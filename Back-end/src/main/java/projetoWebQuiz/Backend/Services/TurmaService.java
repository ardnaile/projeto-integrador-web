package projetoWebQuiz.Backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetoWebQuiz.Backend.Models.Professor;
import projetoWebQuiz.Backend.Models.Turma;
import projetoWebQuiz.Backend.Repositories.TurmaRepository;

import java.util.List;

@Service
public class TurmaService {
    @Autowired
    private TurmaRepository turmaRepository;

    // Create
    public Turma salvarTurma(Turma turma){ return turmaRepository.save(turma); }

    // Read
    public List<Turma> verTodasTurmas() {
        return turmaRepository.findAll();
    }

}
