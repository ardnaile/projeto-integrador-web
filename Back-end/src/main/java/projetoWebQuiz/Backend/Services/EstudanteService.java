package projetoWebQuiz.Backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import projetoWebQuiz.Backend.Models.Estudante;
import projetoWebQuiz.Backend.Models.Professor;
import projetoWebQuiz.Backend.Models.Turma;
import projetoWebQuiz.Backend.Repositories.EstudanteRepository;
import projetoWebQuiz.Backend.Repositories.TurmaRepository;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class EstudanteService {
    @Autowired
    EstudanteRepository estudanteRepository;

    // Create
    public Estudante salvarEstudante(Estudante estudante) {
        return estudanteRepository.save(estudante);
    }

    // Read
    public List<Estudante> verTodosEstudantes() {
        return estudanteRepository.findAll();
    }

    public Optional<Estudante> buscarEstudantePorId(String id) {
        return estudanteRepository.findById(id);
    }

    public String validarEstudante(String chave) {
        Optional<Estudante> estudante = estudanteRepository.findByChaveEstudante(chave);
        if (estudante.isPresent()) {
            return String.valueOf(estudante.get().getId_estudante());
        } else {
            throw new NoSuchElementException("Estudante não encontrado com a chave fornecida.");
        }
    }

}
