
var nipes = ['♥', '♦', '♠', '♣']
var numeros = ['A', '7', 'K', 'J', 'Q', '6', '5', '4', '3', '2' ]
var pontos = [11, 10, 4, 3, 2, 0, 0, 0, 0, 0]

var num = '';
var nipe = '';
var ponto = 0;

const carta = {
    num: num,
    nipe: nipe,
    ponto: ponto
}

var baralho = [];

for (var j in nipes) {
    var cartas = []
    carta.nipe = nipes[j];

    for (var i in numeros) {
        carta.num = numeros[i];
        carta.ponto = pontos[i];

        cartas.push(carta)
        console.log(cartas)
    } 
    
    console.log(cartas)
    // for (var i in pontos) {
    //     carta.ponto = pontos[i];
    // } 
    
    
    
  
}


// console.log(cartas)
// console.log(baralho)
