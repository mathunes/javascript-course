let data = new Date();

console.log(data);

//Retorna data resumida
console.log(data.toDateString());

//Retorna o horario de greenwich
console.log(data.toUTCString());

//Converte data para uma string
console.log(data.toString());

//Pre-definicao da data
let data2 = new Date('2020/01/01 12:12:12');
console.log(data2);

//Retorna o ano
console.log(data.getFullYear());