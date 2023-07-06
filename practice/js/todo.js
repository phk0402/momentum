const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const toDos = [];

function deleteToDo(event) {
  const li = event.target.parentElement; // 버튼을 눌렀을때 어떤 li가 선택되는지 확인
  li.remove();
}

function painToDo(newTodo) { // toDo를 그리는 역할
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  todoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
}

function handleToDoSubmit(event) {
  event.preventDefault(); // submit의 기본동작됨은 제출하고 새로고침됨
  const newTodo = todoInput.value; // input의 현재 value를 새로운 변수에 복사
  todoInput.value = ""; // enter누를 때 inputb 비워지게
  painToDo(newTodo);
}

todoForm.addEventListener("submit", handleToDoSubmit);