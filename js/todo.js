const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input")
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;

}

function handleToDoSubmit(evnet) {
  evnet.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  paintToDo(newToDo);
}

todoForm.addEventListener("submit", handleToDoSubmit)