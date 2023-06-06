const clock = document.querySelector("h2.clock");

function getClock() {
  const date = new Date(); // 현재시간
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}` // formatting
}

getClock(); // 현재 시간만 찍힘
setInterval(getClock, 1000); // 시간 업데이트