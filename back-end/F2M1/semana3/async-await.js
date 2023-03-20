function cadastrarUsuario(){
    return new Promise((resolve, reject) =>{

        setTimeout(() => {
            // lógica de cadastro
            var erro = false;

            if (!erro){
                resolve('Sucesso');
            } else {
                reject('Erro');
            }
        }, 2000);
    } );
}


async function main () {
    try {
       var dados = await cadastrarUsuario(); // async await  espera o resultado da promise
        console.log(dados); 
    } catch (erro) {
        console.log("Ocorreu um erro")
    }
    
}

main()


