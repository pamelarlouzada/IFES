document.write("Olá Mundo" + "<br>")
document.write(Date() + "<br>")
document.write(document.title + "<br>")
document.write(document.characterSet + "<br>")

var corpo = document.body
corpo.style.background = "Gray"
document.title = "Novo título"

// getElementById
var h1_brasil = document.getElementById('pais_brasil')
h1_brasil.style.background = "Yellow"
document.write("<p> innerText: " +h1_brasil.innerText)
document.write("<p> innerHTML: " +h1_brasil.innerHTML + "<br>" + "<br>")

// getElementsTagName
var array_h2 = document.getElementsByTagName('h2')
var h2_es = array_h2[0]
var h2_mg = array_h2[1]

h2_es.style.color = 'Pink'
h2_mg.style.color = 'DarkRed'

// getElementsByName
var array_cidades = document.getElementsByName('cidade')
var cidade_0 = array_cidades[0]
cidade_0.style.borderLeftColor = 'Yellow'

// getElementsByClassName
var array_cidades_mg = document.getElementsByClassName("cidade-mg")
var cidade_mg_1 = array_cidades_mg[1]
cidade_mg_1.style.borderLeftColor = 'Yellow'

// querySelector
var pais = document.querySelector("#pais_brasil")
pais.style.border = "2px solid green"
pais.style.textAlign = "center"

// exercício 2
var elementos = document.getElementsByTagName('*');
document.write("Quantidade de elementos: " + elementos.length);

var todosElementos = "";

/*
for (let i = 0; i < elementos.length; i = i + 1) {
  todosElementos = todosElementos + "<br>" + elementos[i].tagName;
}
*/

for (e of elementos) {
  todosElementos = todosElementos + "<br>" + e.tagName;
}


document.write(todosElementos);
