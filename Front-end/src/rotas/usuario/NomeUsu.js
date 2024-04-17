const fs = require('fs');
const path = require('path');

export function escreverArquivoTexto(texto, nomeArquivo) {
    // Obtenha o diretório do seu projeto React
    const diretorioProjeto = __dirname;

    // Crie o caminho completo para o arquivo dentro do diretório do projeto
    const caminhoArquivo = path.join(diretorioProjeto, nomeArquivo);

    // Escreva o texto no arquivo
    fs.writeFile(caminhoArquivo, texto, (err) => {
        if (err) {
            console.error('Erro ao escrever no arquivo:', err);
            return;
        }
        console.log('Texto escrito com sucesso no arquivo:', caminhoArquivo);
    });
}