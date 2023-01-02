console.log("Aprendendo Funções")

function media(n1, n2){
    // var n1 = n1;
    // var n2 = n2;
    // var media = (n1 + n2)/2;
    // return media;

    return (n1+n2)/2
}

// formas de chamar a função:

console.log(media) //imprime a função

var m1 = media (1,1);
console.log(m1) 

var m2 = media;
var m3 = m2(2,2)
console.log(m3) 


// função anônima
console.log("Função anônima") 
var media = function (n1,n2) { 
    return (n1+n2)/2;
}

console.log(media(3,3))

// Outra forma de criar função
console.log("Outra forma de criar função") 
var media = (n1,n2) => { 
    return (n1+n2)/2;
}

console.log(media(4,4))