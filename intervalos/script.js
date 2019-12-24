function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    document.querySelector("#time").innerHTML = hour+':'+minutes+':'+seconds;
}

var interval;
var timeOut;

let botao = document.createElement('button');
document.body.appendChild(botao);
let iniciar = document.createTextNode('Iniciar')
botao.appendChild(iniciar);

botao.addEventListener('click', function() {
    interval = setInterval(showTime, 1000);
})

let botao2 = document.createElement('button');
document.body.appendChild(botao2);
let parar = document.createTextNode('Parar')
botao2.appendChild(parar);

botao2.addEventListener('click', function() {
    clearInterval(interval);
    clearTimeout(timeOut);
})

let botao3 = document.createElement('button');
document.body.appendChild(botao3);
let pararDepois = document.createTextNode('Parar depois de 5 segundos');
botao3.appendChild(pararDepois);

botao3.addEventListener('click', function() {
    timeOut = setTimeout(function() {
        clearInterval(interval);
    }, 5000);
})