package projetoWebQuiz.Backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import projetoWebQuiz.Backend.Models.Estudante;
import projetoWebQuiz.Backend.Models.Professor;
import projetoWebQuiz.Backend.Models.Turma;
import projetoWebQuiz.Backend.Repositories.EstudanteRepository;
import projetoWebQuiz.Backend.Repositories.TurmaRepository;

import java.util.List;

@Service
public class TurmaService {
    @Autowired
    private TurmaRepository turmaRepository;
    @Autowired
    private EstudanteRepository estudanteRepository;

    // Create
    public Turma salvarTurma(Turma turma){ return turmaRepository.save(turma); }

    // Read
    public List<Turma> verTodasTurmas() {
        return turmaRepository.findAll();
    }

    // Ver alunos da turma

    public List<Estudante> verAlunosDaTurma(String nomeTurma){
        return estudanteRepository.findByNomeTurma(nomeTurma);
    }

}
