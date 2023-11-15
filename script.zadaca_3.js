let createBtn = document.getElementById("addTaskBtn");
let inputTask = document.getElementById("newTask");
let taskList = document.getElementById("taskList");

function onClickCreateTask() {
  console.log(inputTask.value);

  if (inputTask.value != "") {
    let listElement = document.createElement("li");

    let spanElement = document.createElement("span");
    spanElement.textContent = inputTask.value;
    listElement.appendChild(spanElement);

    let buttonElement = document.createElement("button");
    buttonElement.innerHTML = "✔️";
    listElement.appendChild(buttonElement);
    buttonElement.addEventListener("click", onClickComplete);

    let buttonElementDelete = document.createElement("button");
    buttonElementDelete.textContent = "❌";
    listElement.appendChild(buttonElementDelete);
    buttonElementDelete.addEventListener("click", onClickDelete);

    taskList.appendChild(listElement);

    inputTask.value = "";
  } else {
    let errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.textContent = "Enter your task";
  }
}

function clearErrorMessage() {
  // Get the error message element
  let errorMessageElement = document.getElementById("errorMessage");

  // Clear the error message when the user starts typing
  errorMessageElement.textContent = "";
}

createBtn.addEventListener("click", onClickCreateTask);

function onClickComplete(event) {
  let listElement = event.target.parentElement;
  //Add a class to the task item to indicate it's completed
  console.log(event.target.parentElement);
  listElement.classList.toggle("completed");
}

//function onClickComplete(event) {
//   let listElement = event.target.parentElement;
// }

function onClickDelete(event) {
  let listElement = event.target.parentElement;
  taskList.removeChild(listElement);
}
