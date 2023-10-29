const box = document.querySelector(".box");
const button = document.querySelector("button");
const h1 = document.querySelector("h1");
let cell = document.querySelectorAll(".cell");
// EVOCARE FUNZIONE

button.addEventListener("click", function () {
  box.style.display = "flex";
  h1.style.display = "none";

  const difficulty = document.querySelector("select").value;

  generator(difficulty);
  Listener(difficulty);
});

// FUNZIONI

function generator(numberofcell) {
  let insert = "";

  for (i = 1; i <= numberofcell; i++) {
    insert += "<div class='cell cell-easy'>" + i + "</div>";
  }

  box.innerHTML = insert;
}

function Listener(numberofcell) {
  let cell = document.querySelectorAll(".cell");
  for (i = 1; i < numberofcell; i++) {
    cell[i].addEventListener("click", function () {
      this.style.backgroundColor = "blue";
      console.log(this.innerHTML);
    });
  }
  // if (numberofcell === "64") {
  //   cell.classList.add("cell-normal");
  // } else if (numberofcell === "49") {
  //   cell.style.width = "calc(100%/7)";
  // }
}

// let test = (document.createElement("h1").innerHTML = "hey");

// let cell = document.querySelector(".box");
// cell.append(test);
