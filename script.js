var taskCounter = 0;

function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;   
    taskCounter++;
    var taskId = "task-" + taskCounter;

    var taskList = document.getElementById("taskList");
    var newTask = "<li id='" + taskId + "'>" + task + 
                  " <button onclick='removeTask(\"" + taskId + "\")'>Remove</button></li>";
    taskList.innerHTML += newTask;
    
    
}

function removeTask(taskId) {
    var taskToRemove = document.getElementById(taskId);
    
        taskToRemove.remove();
    
}