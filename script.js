"use strict";

const button = document.querySelector("button");
const body = document.querySelector("body");
const message = document.querySelector(".message");

const item = localStorage.getItem("time");
const savedButtonState = localStorage.getItem("buttonState");

// Функія додавання 0 , якщо дата менше 10

function addZero(number) {
  return number < 10 ? "0" + number : number;
}

// Дізнаємось поточну дату

function currentTime() {
  const time = new Date();
  const day = addZero(time.getDate());
  const month = addZero(time.getMonth() + 1);
  const year = addZero(time.getFullYear());
  const hours = addZero(time.getHours());
  const minutes = addZero(time.getMinutes());
  const seconds = addZero(time.getSeconds());
  const correctTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  return correctTime;
}

// Виконання подіїї

button.addEventListener("click", () => {
  button.classList.toggle("active-button");
  body.classList.toggle("active-body");
  message.classList.toggle("message-active");

  const currentText = button.textContent;
  if (currentText === "Turn off") {
    button.textContent = "Turn on";
    message.textContent = `Last turn off: ${currentTime()}`;
  } else {
    button.textContent = "Turn off";
    message.textContent = `Last turn on: ${currentTime()}`;
  }

  localStorage.setItem("time", message.textContent);
  localStorage.setItem("buttonState", button.textContent);
  localStorage.setItem("backgroundColor", document.body.style.backgroundColor);
});

// Виводимо зі стореджу останній час виконання події

if (item !== null) {
  message.textContent = `${item}`;

  if (savedButtonState === "Turn off") {
    body.classList.add("active-body");
    button.classList.toggle("active-button");
    message.classList.add("message-active");
    button.textContent = "Turn on";
  }
}

console.log(savedButtonState);
