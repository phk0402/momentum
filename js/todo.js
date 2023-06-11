const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input")
const toDoList = document.getElementById("todo-list");


function handleToDoSubmit(evnet) {
  evnet.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
}

todoForm.addEventListener("submit", handleToDoSubmit)