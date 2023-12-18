document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

function loadTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    
    // Recupérer les tâches du local storage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function (task, index) {
        addTaskToDOM(task, index);
    });
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    addTaskToDOM(taskText, tasks.length - 1);

    taskInput.value = "";
}

function removeTask(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    loadTasks();
}

function addTaskToDOM(taskText, index) {
    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("li");

    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(${index})">Spprimer</button>
    `;

    taskList.appendChild(taskItem);
}