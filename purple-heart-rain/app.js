function createHeart() {
  const hrt = document.createElement("div");
  hrt.classList.add("heart");
  hrt.style.left = Math.random() * 100 + "vw";
  //   hrt.style.backgroundColor = "Black";
  hrt.style.animationDuration = Math.random() * 2 + 3 + "s";
  hrt.innerText = "❤️";

  const hrt1 = document.createElement("div");
  hrt1.classList.add("emoji");
  hrt1.style.left = Math.random() * 100 + "vw";
  hrt1.style.animationDuration = Math.random() * 2 + 3 + "s";
  hrt1.innerText = "😍";

  document.body.appendChild(hrt);
  document.body.appendChild(hrt1);
  setTimeout(() => {});
}

setInterval(createHeart, 300);
