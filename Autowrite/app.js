const text =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores optio ducimus assumenda itaque, consequuntur unde voluptatibus voluptatem numquam, blanditiis ex aut suscipit tempore expedita libero facilis. Facere distinctio sint quod.";

let index = 0;

function writeText() {
  document.body.innerText = text.slice(0, index);
  index++;

  if (index > text.length - 1) {
    index = 0;
  }
}

setInterval(writeText, 100);
