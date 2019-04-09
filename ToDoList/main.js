/**
* Todo list Verstion 2
*
* DOM
*/

let textField = document.getElementById('textField');
let button = document.getElementbyId('taskButton');
let taskList = document.querySelector('#taskList');

button.onclick = function() {
    let newTask = document.createElement('LI');
    let taskText = textField.nodeValue;
    let taskTextNode = document.createTextNode(taskText);

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.unclick = function() {
            newTask.setAttribute('style', 'text-decoration: line-through;');
            newTask.setAttribute('style', 'opacity: 0');

            window.setTimeout(function() {
                taskList.removeChild(newTask);
            }, 2000);
            
    };

    newTask.appendChild(checkbox);
    newTask.appendChild(taskTextNode);
    taskList.appendChild(newTask);

    textField.value = '';
}