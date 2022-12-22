// ternário
// idade = 17
// idade >= 18 ? console.log("Pemitido beber") : console.log("Proibído beber")

// switch

var nota1 = 8.0;
var nota2 = 8.0;

var media = (nota1 + nota2)/2
var conceito = ""

if (media>=8) {
    conceito = "Ótimo"
} else if (media>=6){
    conceito = "Bom"
} else {
    conceito = "Regular"
}

console.log(media)
console.log(conceito)

switch(conceito){
    case "Ótimo":
        console.log("Parabéns, vc é um ótimo aluno")
        break;
    case "Bom":
        console.log("Vc está quase perfeito")
        break;
    case "Regular":
        console.log("Estude mais um pouco!")
        break;
    default:
        console.log("Houve algum erro")  
        break;
}