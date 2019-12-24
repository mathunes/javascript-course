let lista = ['Ovo', 'Farinha', 'Fermento', 'Leite'];

//Converter array em string
console.log(lista.toString());

//Converter array em string usando um separar especifico
console.log(lista.join(', '));

//Retorna a posicao de um item
console.log(lista.indexOf('Ovo'));

//Remover ultimo item do array e retorna-lo
console.log(lista.pop());

//Remover ultimo item do array e retorna-lo
console.log(lista.shift());

//Adicionar item no array
lista.push('Corante');
console.log(lista);

//Remover item do array, o primeiro parametro e a posicao do item e o segundo e a quantidade de itens
console.log(lista.splice(0, 1));

let lista2 = ['Fogão', 'forma'];

//Concatenar dois arrays
console.log(lista.concat(lista2));

//Ordenar array
console.log(lista.sort());

lista = [1, 2, 3, 4, 5, 6];
lista2 = [];

//Gravar um novo array com o dobro dos itens
lista2 = lista.map(function(item) {
    return item*2;
});
console.log(lista2);

//Filtrar itens do array - nesse caso retornando apenas itens pares
lista2 = lista.filter(function(item) {
    return (item % 2) == 0;
});
console.log(lista2);

//Verificar se todos itens do array atendem a determinada condicao - retorna true ou false
lista2 = lista.every(function(item) {
    return (item < 3);
});
console.log(lista2);

//Verificar se pelo menos um item do array atende a determinada condicao
lista2 = lista.some(function(item) {
    return (item < 3);
});
console.log(lista2);

//Retorna o primeiro item que satisfaz determinada condicao
lista2 = lista.find(function(item) {
    return (item < 3);
});
console.log(lista2);

//Retorna a posicao do primeiro item que satisfaz determinada condicao
lista2 = lista.findIndex(function(item) {
    return (item < 3);
});
console.log(lista2);