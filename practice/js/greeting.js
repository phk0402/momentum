const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");

function handleLodId(e) {
  e.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  localStorage.setItem("username", username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = username;
  greeting.classList.remove("hidden");
}


// username이 없을때? 로그인폼 나타남
// username이 있을때? greeting 인사말 나타남

const savedUsername = localStorage.getItem("username");

if(savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", handleLodId);
} else {
  paintGreeting(savedUsername);
}