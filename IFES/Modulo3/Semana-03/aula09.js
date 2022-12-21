// Demonstração do laço for

// for (i=1; i<=10; i++){
//     console.log(i*3)
// }

// Demonstração do laço while

// i=1

// while (i<=10){
//     console.log(i*3)
//     i++
// }

// // Demonstração do laço do while
// i=1

// do {
//     console.log(i*3)
//     i++
// } while (i<=10)

// cont = 1
// while (cont <=10){
//     if (cont == 5){
//         break
//     }
//     console.log(cont)
//     cont++
// }

// cont = 0
// while (cont <= 10){
//     cont++
    
//     if (cont % 2 == 0){
//         continue
//     }
//     console.log(cont)  
// }

const prompt = require("prompt-sync")();
terminou = false;
p = i = 0;
while (!terminou) {
  n = parseInt(prompt("Digite um número, ou zero para terminar: "));
  if (n == 0) {
    terminou = true;
  } else {
    if (n % 2 == 0) {
      p = p + 1;
    } else {
      i = i + 1;
    }
  }
}
console.log("P = ", p);
console.log("I = ", i);