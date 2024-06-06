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