//Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions

function addTodo(event) {
  //prevent to reload app
  event.preventDefault();

  //Creating TODO
  //making div <div></div>
  const todoDiv = document.createElement("div");
  // Giving the class <div class="todo"></div>
  todoDiv.classList.add("todo");

  //Creating LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  saveLocalTodos(todoInput.value);

  //CHECK MARK Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fa fa-check"></i>';
  completedButton.classList.add("completed-btn");
  todoDiv.appendChild(completedButton);

  //CHECK Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fa fa-trash"></i>';
  trashButton.classList.add("delete-btn");
  todoDiv.appendChild(trashButton);

  //Append to LIST
  todoList.appendChild(todoDiv);
  
  //Clear todoinput text
  todoInput.value = "";
}

function deleteCheck(e){
  const item = e.target;

  if(item.classList[0] === "delete-btn"){
    const todo = item.parentElement;
    todo.classList.add('fall');
    todo.addEventListener('transitionend', ()=>{
      todo.remove();
    })
  }

  if(item.classList[0] === "completed-btn"){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }

}

function filterTodo(e){
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch(e.target.value){
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if(todo.classList.contains('completed')){
          todo.style.display = "flex";
        }else{
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if(!todo.classList.contains('completed')){
          todo.style.display = "flex";
        }else{
          todo.style.display = "none";
        }
        break;
    }
  })
}

function saveLocalTodos(todo){
  //Check
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem("todos"))
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos))
}