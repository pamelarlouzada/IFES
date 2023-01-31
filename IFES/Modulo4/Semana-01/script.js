// Selecionar todos elementos da classe 'produto_preco'
var array_produtos_preco = document.getElementsByClassName("produto_preco");

// Implementar um comando de repetição para analisar o valor 'innerText' de cada um dos elementos e somá-los (lembre-se de converter o valor para float)
var todosElementos = 0;

for (let e of array_produtos_preco) {
  e = parseFloat(e.innerText)
  todosElementos = todosElementos + e;
}



// Escrever no conteúdo da página o valor da soma
document.write("Total: R$ " + todosElementos);
