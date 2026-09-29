const container = document.querySelector("#container");
const button = document.querySelector("#new-grid");

// Returns a random color like "rgb(120, 45, 200)"
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function createGrid(size) {
  const totalSquares = size * size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = 100 / size + "%";
    square.style.height = 100 / size + "%";

    // Each square remembers how many times it has been touched
    let hits = 0;

    square.addEventListener("mouseenter", function () {
      // First touch: give the square a random color
      if (hits === 0) {
        square.style.backgroundColor = getRandomColor();
      }

      // Each touch makes it 10% more solid, up to 10 touches
      if (hits < 10) {
        hits++;
        square.style.opacity = hits / 10;
      }
    });

    container.appendChild(square);
  }
}

createGrid(16);

button.addEventListener("click", function () {
  const input = prompt("How many squares per side? (1 to 100)");

  if (input === null) {
    return;
  }

  const size = Number(input);

  if (!Number.isInteger(size) || size < 1 || size > 100) {
    alert("Please enter a whole number from 1 to 100.");
    return;
  }

  container.innerHTML = "";
  createGrid(size);
});