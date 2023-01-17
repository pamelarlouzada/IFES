const prompt = require("prompt-sync")();
var array_bebidas = [];

do {
    console.log("Sistema de Cadastro de Bebidas");
    console.log("1 - Inserir Bebida");
    console.log("2 - Excluir Bebida");
    console.log("3 - Listar Bebida");
    console.log("0 - Sair");

    var opcao = prompt("Digite sua opção: ");

    if (opcao == 1) {
        console.log("\n\nInserindo cliente...\n");
        let codigo = parseInt(prompt("Digite o código: "));
        let nome = prompt("Digite o nome: ");
        let quantidade = prompt("Digite o quantidade: ");
        let calorias = prompt("Digite o calorias: ");

        // Neste trecho estamos declarando um objeto
        const bebida = {
            codigo: codigo,
            nome: nome,
            quantidade: quantidade,
            calorias: calorias
        }

        //chamar a função inserir
        inserir_bebida(bebida)

    } else if (opcao == 2) {
        console.log("\n\nExcluindo bebida...\n");
        let codigo = parseInt(prompt("Digite o código da bebida: "));
        // chamar a função excluir 
        excluir_bebida(codigo)
    } else if (opcao == 3) {
        console.log("\n\nListando bebidas...\n")
        // chamar função listar
        listar_bebidas() 
    } else {
        console.log("\n\nSaindo do programa...\n");
    }

    prompt("\nEnter para continuar...");
    console.clear();
} while (opcao !=0)


function inserir_bebida(bebida) {
    array_bebidas.push(bebida)
}


function excluir_bebida(cod) {
    var novo_array = [];
    for (var i=0; i < array_bebidas.length; i++){
        var b = array_bebidas[i];
        
        if (cod != b.codigo){
            novo_array.push(b)
        } else {
            continue
        }
    }
    array_bebidas = novo_array

}
function listar_bebidas() {
    console.log(array_bebidas)
}