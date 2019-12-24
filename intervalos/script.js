function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    document.querySelector("#time").innerHTML = hour+':'+minutes+':'+seconds;
}

let interval = setInterval(showTime, 1000);