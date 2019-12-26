let nome = "Matheus Antunes Vieira";

//Quantos caracteres tem na variavel na string
console.log(nome.length);

//Se existe determinado texto na string
console.log(nome.indexOf('Antunes'));

//Pegar determinada parte da string
console.log(nome.substring(0, 7));

//Igual ao substring porem permite comecar do final
console.log(nome.slice(-0));

//Igual ao slice porem o primeiro parametro e a posicao inicial e o segundo paremetro e a quantidade de caracteres
console.log(nome.substr(0, 10));

//Substituir texto
console.log(nome.replace('Matheus', 'Felipe'));

//Colocar texto maisculo
console.log(nome.toUpperCase(nome));

//Colocar texto minusculo
console.log(nome.toLowerCase(nome));

//Concater
console.log(nome.concat(' tem 20 anos'));

//Remover espacos do inicio e do fim
console.log('        oi          '.trim());

//Retorna o caracter em determinada posicao
console.log(nome.charAt(8));

//Transformar string em array
console.log(nome.split(' '));

//Diz de palavra esta na string
console.log(nome.includes('oi'));

//Repete letra x vezes
console.log('x'.repeat(100));

//Preenche string no final com um caracter ate atingir determinada quantidade
console.log('x'.padEnd(9, '*'));

//Preenche string no inicio com um caracter ate atingir determinada quantidade
console.log('x'.padStart(9, '*'));