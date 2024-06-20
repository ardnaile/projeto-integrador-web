package projetoWebQuiz.Backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import projetoWebQuiz.Backend.Models.Professor;
import projetoWebQuiz.Backend.Models.Turma;
import projetoWebQuiz.Backend.Repositories.ProfessorRepository;
import projetoWebQuiz.Backend.Repositories.TurmaRepository;

import java.util.List;

@Service
public class ProfessorService {
    @Autowired
    private ProfessorRepository professorRepository;
    @Autowired
    private TurmaRepository turmaRepository;

    // Create
    public Professor salvarProfessor(Professor professor){
        return professorRepository.save(professor);
    }

    // Read
    public List<Professor> verTodosProfessores() {
        return professorRepository.findAll();
    }

    public Professor buscarProfessorPorId(String id) {
        return professorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Professor não encontrado"));
    }

    // Buscar turmas relacionadas a esse professor

    public List<Turma> buscarTurmasPorProfessor(String idProfessor){
        return turmaRepository.findByProfessor(idProfessor);
    }

}
