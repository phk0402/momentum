const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input")
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo; // span의 텍스트는 handleToDoSubmit에서 온 newTodo 텍스트가 됨
  toDoList.appendChild(li);
}

function handleToDoSubmit(evnet) {
  evnet.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  paintToDo(newTodo);
}

todoForm.addEventListener("submit", handleToDoSubmit)