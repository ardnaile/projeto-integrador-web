package projetoWebQuiz.Backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetoWebQuiz.Backend.Models.Professor;
import projetoWebQuiz.Backend.Repositories.ProfessorRepository;

import java.util.List;

@Service
public class ProfessorService {
    @Autowired
    private ProfessorRepository professorRepository;

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

    // Update
    public Professor atualizarProfessor(String id, Professor professor) {
        if (!professorRepository.existsById(id)) {
            throw new RuntimeException("Professor não encontrado");
        }
        return professorRepository.save(professor);
    }

    // Delete
    public void deletarProfessor(String id) {
        if (!professorRepository.existsById(id)) {
            throw new RuntimeException("Professor não encontrado");
        }
        professorRepository.deleteById(id);
    }

}
