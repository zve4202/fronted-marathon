const board = document.querySelector("#board");
const colors = ['#9e2929', '#9e7929', '#7b9e29', '#299e46', '#29879e', '#2b299e', '#73299e', '#9e2942'];
const SQURE_BOARD = 625;

for (let i = 0; i < SQURE_BOARD; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor (){
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}