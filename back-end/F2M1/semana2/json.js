const fs = require('fs');

fs.readFile('./estados.json','utf-8',(err, data) => { // o json vai para variável data

    const json = JSON.parse(data);
    console.log(json.estados);
    console.log(json.estados[1]);
    console.log(json.estados[1].nome);
    console.log(json.pais);
})

// JSON: JavaScript Object Notation
// API Application Programming Interface

// VANTAGENS_____
// Leitura simples
// Maior agilidade
// Ocupa pouco espaço
