"use strict";

const button = document.querySelector("button");
const body = document.querySelector("body");
const message = document.querySelector(".message");

const timeStorage = localStorage.getItem("time");
const currentTheme = localStorage.getItem("lightTheme");
let lightTheme;
// Функія додавання 0 , якщо дата менше 10

function addZero(number) {
  return number < 10 ? `0${number}` : `${number}`;
}

// Дізнаємось поточну дату

function getCurrentTime() {
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
    message.textContent = `Last turn off: ${getCurrentTime()}`;
    lightTheme = false;
  } else {
    button.textContent = "Turn off";
    message.textContent = `Last turn on: ${getCurrentTime()}`;
    lightTheme = true;
  }

  localStorage.setItem("time", getCurrentTime());
  localStorage.setItem("lightTheme", lightTheme);
});

// Виводимо зі стореджу останній час виконання події
if (timeStorage !== null) {
  if (currentTheme === "true") {
    message.textContent = `Last turn on: ${timeStorage} `;
  } else {
    message.textContent = `Last turn off: ${timeStorage} `;
    body.classList.add("active-body");
    button.classList.add("active-button");
    message.classList.add("message-active");
    button.textContent = "Turn on";
  }
}
