const axios = require('./api.js');

function carregarEstados(){
    axios.api.get('/estados')
    .then((response) => {
        console.log(response.data);
    });
}

carregarEstados();

