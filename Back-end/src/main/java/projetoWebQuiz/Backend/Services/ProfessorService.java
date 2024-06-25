package projetoWebQuiz.Backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import projetoWebQuiz.Backend.Models.Professor;
import projetoWebQuiz.Backend.Models.Turma;
import projetoWebQuiz.Backend.Repositories.ProfessorRepository;
import projetoWebQuiz.Backend.Repositories.TurmaRepository;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class ProfessorService {
    @Autowired
    private ProfessorRepository professorRepository;
    @Autowired
    private TurmaRepository turmaRepository;

    // Create
    public Professor salvarProfessor(Professor professor) throws Exception {
        Optional<Professor> existente = professorRepository.findByUsuario(professor.getUsuario_professor());
        if (existente.isPresent()) {
            throw new Exception("Usuário já existe.");
        }
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

    public List buscaNomeProfessor(String idProfessor){
        Professor professor = professorRepository.findById(idProfessor).orElseThrow(() -> new RuntimeException("Professor não encontrado"));
        if (professor != null){
            return Collections.singletonList(professor.getUsuario_professor());
        } else {
            return null;
        }
    }

    public boolean validarUsuario(String usuario, String chave) {
        Optional<Professor> professor = professorRepository.findByUsuarioAndChaveProfessor(usuario, chave);
        return professor.isPresent();
    }
}
