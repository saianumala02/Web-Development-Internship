function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Task should enter ");
        return;
    }

    const date = new Date();
    const dateString = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

    const task = document.createElement("li");
    task.innerHTML = `<span class="task-text">${taskText}</span>
                      <span class="date">${dateString}</span>
                      <button onclick="completeTask(this)">Complete</button>
                      <button onclick="editTask(this)">Edit</button> <br>
                      <button onclick="deleteTask(this)">Delete</button>`;

    document.getElementById("UncheckedTasks").appendChild(task);
    taskInput.value = "";
}

function completeTask(button) {
    const task = button.parentElement;
    task.classList.toggle("completed");
    const completedTasks = document.getElementById("completedTasks");
    completedTasks.appendChild(task);
}

function editTask(button) {
    const task = button.parentElement;
    const taskText = task.querySelector(".task-text");
    const newTaskText = prompt("Edit task:", taskText.innerText);

    if (newTaskText !== null) {
        taskText.innerText = newTaskText;
    }
}

function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
}
