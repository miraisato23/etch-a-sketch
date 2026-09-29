const container = document.querySelector("#container");

function createGrid(size) {
  const totalSquares = size * size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    // Each square takes up 1/size of the container's width and height
    square.style.width = 100 / size + "%";
    square.style.height = 100 / size + "%";

    square.addEventListener("mouseenter", function () {
      square.classList.add("colored");
    });

    
    container.appendChild(square);
  }
}

createGrid(16);


const button = document.querySelector("#new-grid");

button.addEventListener("click", function () {
  const input = prompt("How many squares per side? (1 to 100)");

  // If the user clicked Cancel, stop here
  if (input === null) {
    return;
  }

  const size = Number(input);

  // Check that it's a whole number between 1 and 100
  if (!Number.isInteger(size) || size < 1 || size > 100) {
    alert("Please enter a whole number from 1 to 100.");
    return;
  }

  // Remove the old grid
  container.innerHTML = "";

  // Create the new grid
  createGrid(size);
});