try {

    var cpfValido = true;

    if (!cpfValido){
        throw new Error('O CPF digitado não é válido')
    }

    console.log('CPF válido');

}catch(ocorrencia){
    console.log(ocorrencia.message);

}finally {
    console.log("Obrigada");
}

