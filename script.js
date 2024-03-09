"use strict";

const button = document.querySelector("button");
const body = document.querySelector("body");
const message = document.querySelector(".message");

const item = localStorage.getItem("time");

// Дізнаємось поточну дату

function currentTime() {
  const time = new Date();
  const correctTime = `${time.toLocaleDateString()} ${time.toLocaleTimeString()}`;
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
});

// Виводимо зі стореджу останній час виконання події

if (item !== null) {
  message.textContent = `${item}`;
}
