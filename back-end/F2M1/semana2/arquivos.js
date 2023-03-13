const fs = require('fs');

// fs.writeFile('./arquivo.json', '{"nome": "Pamela"}', (erro) => {  // 3 parâmentros writeFile(): local onde quer salvar o aruivo | Conteúdeo do json | nome que quer dar para o arquivo

//     if (erro) {
//         return console.log("Ocorreu um erro");
//     }

//     console.log('Arquivo criado/escrito com sucesso');
// });

var data = fs.readFileSync('./arquivo.json','utf-8');

var arquivo = JSON.parse(data);

console.log(data);
console.log(arquivo);

var addPessoas = arquivo.pessoas;

addPessoas.push({nome: 'Marcelo', idade: 41});

console.log(pessoas);

arquivo = JSON.stringify(pessoas);

fs.writeFile('./arquivo.json', arquivo, (erro) => {  // 3 parâmentros writeFile(): local onde quer salvar o aruivo | Conteúdeo do json | nome que quer dar para o arquivo

    if (erro) {
        return console.log("Ocorreu um erro");
    }

    console.log('Arquivo criado/escrito com sucesso');
});

