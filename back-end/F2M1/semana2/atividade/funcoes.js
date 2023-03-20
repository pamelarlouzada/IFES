
// ______ Atividade 1 ______
exports.podeCircular = function podeCircular(final, diaSemana){
  if (diaSemana == 1) {
    if (final == 1 || final == 2) {
      console.log("Seu carro NÃO pode circurar hoje")
    } else {
      console.log("Seu carro PODE circurar hoje")
    } 
  } else if (diaSemana == 2){
    if (final == 3 | final == 4) {
      console.log("Seu carro NÃO pode circurar hoje")
    } else {
      console.log("Seu carro PODE circurar hoje")
    }
  } else if (diaSemana == 3){
    if (final == 5 | final == 6) {
      console.log("Seu carro NÃO pode circurar hoje")
    } else {
      console.log("Seu carro PODE circurar hoje")
    }
  } else if (diaSemana == 4){
    if (final == 7 | final == 8) {
      console.log("Seu carro NÃO pode circurar hoje")
    } else {
      console.log("Seu carro PODE circurar hoje")
    }
  } else if (diaSemana == 5){
    if (final == 9 | final == 0) {
      console.log("Seu carro NÃO pode circurar hoje")
    } else {
      console.log("Seu carro PODE circurar hoje")
    }
  } else {
    console.log("Todos os carros podem circular hoje")
  }
}


// ______ Atividade 2 ______
exports.mesFormatado = function mesFormatado (mes) {
  if (mes == '01') {
    mes = 'janeiro'
  } else if (mes == '02') {
    mes = 'fevereiro'
  } else if (mes == '03') {
    mes = 'março'
  }else if (mes == '04') {
    mes = 'abril'
  } else if (mes == '05') {
    mes = 'maio'
  } else if (mes == '06') {
    mes = 'junho'
  } else if (mes == '07') {
    mes = 'julho'
  } else if (mes == '08') {
    mes = 'agosto'
  } else if (mes == '09') {
    mes = 'setembro'
  } else if (mes == '10') {
    mes = 'outubro'
  } else if (mes == '11') {
    mes = 'novembro'
  } else {
    mes = 'dezembro'
  }

  return mes;
}
