let createBtn = document.getElementById("addTaskBtn");
let inputTask = document.getElementById("newTask");

function onClickCreateTask() {
  let taskList = document.getElementById("taskList");

  let listElement = document.createElement("li");
  let spanElement = document.createElement("span");
  spanElement.textContent = inputTask.value;

  listElement.appendChild(spanElement);
  taskList.appendChild(listElement);
}

createBtn.addEventListener("click", onClickCreateTask);
