const prompt = require('prompt-sync')(); 
const { rejects } = require('assert');
const { log } = require('console');
const fs = require('fs'); 
const { resolve } = require('path');
const bd = require("./bd.json");


async function main() {

    var opcao;

    do {
        console.log(`Sistema de cadastro de carros
    1 - Listar carros
    2 - Cadastrar carros
    0 - Sair`);
        
        opcao = prompt('Digite a opção desejada: ');

        switch (opcao) {
            case '1':
                var data = await listarCarros();
                const automovelFile = JSON.parse(data);
                console.table(automovelFile.carros); // Imprime Automóveis 
        
//                 prompt(`
// Enter para continuar...`);
                // console.clear();
                break;

            case '2':
                await cadastrarCarro();
//                 prompt(`
// Enter para continuar...`);
                // console.clear();
                break;

            case '0':
                console.log('Obrigada por usar o sistema. Até mais!');
                break;

            default:
                console.log('Entrada inválida...');
                break;
        }
    } while (opcao !== '0');
}

// lê o arquivo json
function obterCarros() {
    return new Promise((resolve, reject) => {
        fs.readFile('/bd.json', 'utf-8', (erro, data) => {
            if (erro) {
                reject(erro);
            }
            resolve(data);
        })
    })
}

async function cadastrarCarro() {
    var placa = prompt('Placa: ');
    var nome = prompt('Nome: ');
    var montadora = prompt('Montadora: ');
    
    var carro = {placa: placa, nome: nome, montadora: montadora};
    
    var data = await listarCarros();
    const automovelFile = JSON.parse(data);
    automovelFile.carros.push(carro);
    try {
    //    var carros = await obterCarros(); 
    //    var lista = JSON.parse(carros).carros;
    //    adicionarCarro(lista, carro);
    var json = JSON.stringify(automovelFile);

    fs.writeFile('./bd.json', json, (erro) => {  // 3 parâmentros writeFile(): local onde quer salvar o aruivo | Conteúdeo do json | nome que quer dar para o arquivo

        if (erro) {
            return console.log("Ocorreu um erro");
        }
    
        console.log('Arquivo criado/escrito com sucesso');
    });

    } catch(erro) {

    }
    
}

// inserir no json
function adicionarCarro(lista, carro){
    lista.push(carro);
    var json = JSON.stringify({carros: lista});

    fs.writeFile('./bd.json', json, (erro) => {  // 3 parâmentros writeFile(): local onde quer salvar o aruivo | Conteúdeo do json | nome que quer dar para o arquivo

        if (erro) {
            return console.log("Ocorreu um erro");
        }
    
        console.log('Arquivo criado/escrito com sucesso');
    });
}

async function listarCarros() {
    console.log("Aqui 1")
    // Lendo arquivo automovel.json
    return new Promise(function (resolve, reject) {
    fs.readFile("./bd.json", function(error, data) {
        console.log("Aqui 2")
        // Check for errors
        if (error) {
            reject(error);
          } else {
            resolve(data);
          }
    
        // Convertendo para JSON
        // const automovelFile = JSON.parse(data);
        // console.table(automovelFile); // Imprime Automóveis 
    });
});
}


  main();

