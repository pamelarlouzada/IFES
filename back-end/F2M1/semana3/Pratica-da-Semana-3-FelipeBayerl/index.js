const fs = require('fs'); 
const automovelFile = require("./automovel.json");

async function listarAutomovel() {
  // Lendo arquivo automovel.json
  fs.readFile("./automovel.json", function(err, data) {
  
      // Check for errors
      if (err) throw err;
  
      // Convertendo para JSON
      const automovelFile = JSON.parse(data);
  
      console.table(automovelFile); // Imprime Automóveis 
  });
}

async function cadastrarAutomovel(placa, nome, montadora) {
  let auto = {placa: placa, nome: nome, montadora: montadora};
  automovelFile.push(auto);
  
  fs.writeFile("./automovel.json", JSON.stringify(automovelFile), err => {

    // Checa se houve erros
    if (err) throw err; 

    console.log("Dados gravado com sucesso!");
  });
   
}
  

async function exibirOpcoes() {
  console.log('Sistema de cadastro de Automóveis\n');
  console.log('   1 - Listar Automóveis');
  console.log('   2 - Cadastrar novo automóvel');
  console.log('   0 - Sair');
  
  const opcao = Number(await new Promise(resolve => {
    const stdin = process.stdin;
    stdin.resume();
    stdin.once('data', data => {
      resolve(data.toString().trim());
    });
  }));
  return opcao;
}

async function main() {
  let opcao = 0;
  while (opcao !== 3) {
    opcao = await exibirOpcoes(); 
    switch (opcao) {
      case 1:
        await listarAutomovel(); 
        break;
        
      case 2:
        console.log('Digite a placa do Automóvel:');
        const placa = await new Promise(resolve => {
          const stdin = process.stdin;
          stdin.resume();
          stdin.once('data', data => {
            resolve(data.toString().trim());
          });
        });
        console.log('Digite o nome do Automóvel:');
        const nome = await new Promise(resolve => {
          const stdin = process.stdin;
          stdin.resume();
          stdin.once('data', data => {
            resolve(data.toString().trim());
          });
        });
        console.log('Montadora do Automóvel:');
        const montadora = await new Promise(resolve => {
          const stdin = process.stdin;
          stdin.resume();
          stdin.once('data', data => {
            resolve(data.toString().trim());
          });
        });
        await cadastrarAutomovel(placa, nome, montadora); 
        break;
      
      case 0:
        //console.clear();
        console.log('Saindo do sistema...');
        //setTimeout(() => {sair()}, 5000);
        break;
      default:
        console.log('Opção inválida!');
    }
    console.log("Pressione uma tecla para continuar!");
    debugger;
    console.clear();
    
  }
}

/*function sair() { 
  
  process.exit;}*/

main();