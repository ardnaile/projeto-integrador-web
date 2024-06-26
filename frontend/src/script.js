// Função para enviar as informações do professor para o back-end
function enviarFormularioProfessor() {
    var nomeProfessor = document.getElementById("nomeProfessor").value;
    var palavraPasseProfessor = document.getElementById("palavraPasseProfessor").value;

    var dados = {
        nomeProfessor: nomeProfessor,
        palavraPasseProfessor: palavraPasseProfessor
    };

    fetch('http://localhost:8080/cadastroProfessor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(dados)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao cadastrar professor');
        }
        return response.json();
    })
    .then(data => {
        // Manipular a resposta do servidor, se necessário
        console.log('Professor cadastrado com sucesso:', data);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

// Funções para guardar as infos das três páginas
let estudante = {
    turma: '',
    usuario_estudante: '',
    chave_estudante: ''
};

function coletarInfoNomeTurma(){
    aluno.turma = document.getElementById('turma').value;
}

function coletarInfoQualSeuNome(){
    aluno.usuario_estudante = document.getElementById('usuario_estudante').value;
}

function coletarInfoCodigoSecreto(){
    aluno.chave_estudante = document.getElementById('chave_estudante').value;
}

function enviarCadastroEstudante(){
    fetch('http://localhost:8080/cadastroEstudante', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(estudante)
    })
    .then(response => {
        if (response.ok) {
            console.log('Cadastro de aluno realizado com sucesso!');
            // Redirecionar para a próxima tela ou fazer outra ação necessária
        } else {
            console.error('Erro ao cadastrar aluno');
        }
    })
    .catch(error => console.error('Erro ao enviar requisição:', error));
}

