var string = "\nIsso é uma string";
var string2 = 'Isso é uma "string" com aspas duplas';
var string3 = "Isso é uma 'string' com aspas simples";

console.log(string);
console.log(string2);
console.log(string3);
console.log("Isso é uma concatenação de strings: ",string3 + string);


console.log("\nTemplate literals");
var nome = 'Pamela';
var sobrenome = 'Louzada';
console.log(`O meu nome é ${nome} e o
meu sobrenome é ${sobrenome}`);

console.log("\nManipulação de strings");
var exp1 = "Exemplo de uma string"
console.log("String: ", exp1);
console.log("NomeVariavel.length: ",exp1.length);
console.log("NomeVariavel[nºposicao]: ",exp1[0]);
console.log("Último string: NomeVariavel[NomeVariavel.length -1]: ", exp1[exp1.length - 1]);
console.log("NomeVariavel.toUpperCase(): ", exp1.toUpperCase());
console.log("NomeVariavel.toLowerCase(): ", exp1.toLowerCase());
console.log("NomeVariavel.replace(): ", exp1.replace('uma','minha'));

console.log('\n');
console.log("NomeVariavel.endsWith('g'): ", exp1.endsWith('g'));
if (exp1.endsWith('ing')) { console.log("Frase termina com a letra g");}
console.log("NomeVariavel.startsWith('E'): ", exp1.startsWith('E'));
if (exp1.startsWith('Ex')) { console.log("Frase começa com a letra E");}

console.log("NomeVariavel.split(' '): ", exp1.split(' '));

console.log('\n');
var exp1 = "   Exemplo de uma string  "
console.log(exp1);
console.log("NomeVariavel.trim(): ", exp1.trim());
console.log("NomeVariavel.trimEnd(): ", exp1.trimEnd());
console.log("NomeVariavel.trimEnd(): ", exp1.trimEnd());

console.log('\n');
if (exp1.includes('uma')) { console.log('tem');}