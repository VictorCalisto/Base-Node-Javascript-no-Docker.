const fs = require('fs');
const faker = require('faker');

// Define o número de linhas que você deseja gerar (um milhão no seu caso)
const numeroDeLinhas = 1000000;

// Cria um array para armazenar as linhas do CSV
const csvData = [];

// Cabeçalho do CSV
const header = 'Nome Completo,Data de Nascimento,Idade,Gênero,Número de Telefone,Altura,Peso,Grupo Sanguíneo,Número de Filhos\n';

csvData.push(header);

// Gera dados falsos e adiciona ao array
for (let i = 0; i < numeroDeLinhas; i++) {
    const nomeCompleto = faker.name.findName();
    const dataNascimento = faker.date.past(50, new Date(2000, 0, 1));
    const dataAtual = new Date();
    const diferencaAnos = dataAtual.getFullYear() - dataNascimento.getFullYear();
    const idade = Math.floor(diferencaAnos);
    const genero = faker.random.arrayElement(['Masculino', 'Feminino']);
    const numeroTelefone = faker.phone.phoneNumber(`!#!########`);
    const altura = faker.random.number({ min: 150, max: 200 });
    const peso = faker.random.number({ min: 50, max: 150 });
    const grupoSanguineo = faker.random.arrayElement(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']);
    const numeroFilhos = faker.random.number({ min: 0, max: 5 }); // Adiciona o número de filhos (0 a 5)

    const linha = `${nomeCompleto},${dataNascimento.toISOString().split('T')[0]},${idade},${genero},${numeroTelefone},${altura},${peso},${grupoSanguineo},${numeroFilhos}\n`;

    csvData.push(linha);
}

// Escreve os dados no arquivo CSV
fs.writeFileSync('dados_falsos.csv', csvData.join(''), 'utf-8');

console.log('Arquivo CSV gerado com sucesso.');
