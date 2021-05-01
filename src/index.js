//Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners

todoButton.addEventListener("click", addTodo);

//Functions
function addTodo(e) {
  //prevent to reload app
  e.preventDefault();

  //Creating TODO
  //making div <div></div>
  const todoDiv = document.createElement("div");
  // Giving the class <div class="todo"></div>
  todoDiv.classList.add("todo");

  //Creating LI
  const newTodo = document.createElement("li");
  newTodo.innerText = "This is todo";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //CHECK MARK Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fa fa-check-square"></i>';
  completedButton.classList.add("completed-btn");
  todoDiv.appendChild(completedButton);

  //CHECK Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fa fa-trash"></i>';
  trashButton.classList.add("delete-btn");
  todoDiv.appendChild(trashButton);

  //Append to LIST
  todoList.appendChild(todoDiv);
}
