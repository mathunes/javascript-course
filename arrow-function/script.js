//Primeira opcao
function somar(x, y) {
    return x+y;
}

console.log(somar(2, 4));

//Segunda opcao
let somar2 = function(x, y) {
    return x+y;
}

console.log(somar2(4, 9));

//Terceira opcao - se nao precisar do parametro this
const somar3 = (x, y) => {
    return x+y;
}

console.log(somar3(2, 1));

//Variacao da terceira opcao
const somar4 = (x, y) => x + y;

console.log(somar4(2, 7));

//Variacao da quarta opcao
const raizQuadrada = x => Math.sqrt(x);

console.log(raizQuadrada(9));