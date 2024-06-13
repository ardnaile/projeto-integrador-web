package projetoWebQuiz.Backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetoWebQuiz.Backend.Models.Estudante;
import projetoWebQuiz.Backend.Repositories.EstudanteRepository;

import java.util.List;
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

    // Update
    public Estudante atualizarEstudante(String id, Estudante novoEstudante) {
        Optional<Estudante> estudanteOptional = estudanteRepository.findById(id);
        if (estudanteOptional.isPresent()) {
            Estudante estudante = estudanteOptional.get();
            estudante.setUsuario_estudante(novoEstudante.getUsuario_estudante());
            estudante.setChave_estudante(novoEstudante.getChave_estudante());
            estudante.setQtd_acertos(novoEstudante.getQtd_acertos());
            estudante.setTurma(novoEstudante.getTurma());
            return estudanteRepository.save(estudante);
        } else {
            throw new IllegalArgumentException("Estudante não encontrado para atualização");
        }
    }

    // Delete
    public void deletarEstudante(String id) {
        estudanteRepository.deleteById(id);
    }

    }
