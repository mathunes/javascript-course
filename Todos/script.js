
var addTodo = document.querySelector('button');

function randomColor() {

    var newColor = 'rgba(';
    for (var i = 0; i < 3; i++) {
        newColor += Math.floor(Math.random() * 254);
        newColor += ',';
    }
    newColor += '.2)';

    return newColor;
}

addTodo.addEventListener('click', function() {
    var todo = document.querySelector('input').value;
    document.querySelector('input').value = "";

    if (todo) {
        var boxArea = document.querySelector('#boxArea');
        var color = randomColor();

        var box = document.createElement('div');
        box.style.width = '250px';
        box.style.height = '100px';
        box.style.backgroundColor = color;
        box.style.margin = '10px';
        box.setAttribute('class', 'box');

        boxArea.appendChild(box);

        var p = document.createElement('p');
        
        
        box.appendChild(p);
        p.appendChild(document.createTextNode(todo));

        var deleteTodo = document.createElement('button');
        
        box.appendChild(deleteTodo);

        deleteTodo.appendChild(document.createTextNode('Done'));

        deleteTodo.addEventListener('click', function() {
            deleteTodo.parentElement.style.display = 'none';
        })

    }
})