/**
* Todo list Verstion 1
*
* Constole
*/

let tasks = [];

do {
    var taskInput = prompt('Enter Task: ');
    if (taskInput !== 'quit') {
        tasks.push(taskInput);
    }
} while (taskInput !== 'quit');
tasks.forEach(function (e) {
    console.loge(e);
});
