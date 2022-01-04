const btn = document.getElementById("btn");

function randomBg() {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = randomBg();
});
