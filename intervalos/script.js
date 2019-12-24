function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    document.querySelector("#time").innerHTML = hour+':'+minutes+':'+seconds;
}

let botao = document.createElement('button');
document.body.appendChild(botao);
let iniciar = document.createTextNode('Iniciar')
botao.appendChild(iniciar);

let botao2 = document.createElement('button');
document.body.appendChild(botao2);
let parar = document.createTextNode('Parar')
botao2.appendChild(parar);

let interval = setInterval(showTime, 1000);