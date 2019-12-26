//Quando uma funcao demora para responder porem o resultado e certo de chegar, uma promessa feita

const teste = () => {
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Ok');
        }, 2000);
        
        // reject('Error');
    });
    return promise;
}

teste().then((resposta)=>{
    console.log(resposta);
});