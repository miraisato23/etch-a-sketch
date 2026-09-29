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