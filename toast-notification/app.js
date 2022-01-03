const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");

  const length = 20;
  let password = "";
  let xs = [];
  xs.push(getUppercase);
  xs.push(getLowercase);
  xs.push(getNumber);
  xs.push(getSymbol);

  for (let i = 0; i < length; i++) {
    password += xs[Math.floor(Math.random() * xs.length)]();
  }

  notif.innerText = password;

  container.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(e) {
  pwEL.innerHTML = password;
}
