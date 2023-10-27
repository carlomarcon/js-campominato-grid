const box = document.querySelector(".box");
const button = document.querySelector("button");
const h1 = document.querySelector("h1");
// EVOCARE FUNZIONE

generator(100);
Listener(100);

button.addEventListener("click", function () {
  box.style.display = "flex";
  h1.style.display = "none";
});

// FUNZIONI

function generator(numberofcell) {
  let insert = "";

  for (i = 1; i <= numberofcell; i++) {
    insert += "<div class='cell-easy'>" + i + "</div>";
  }
  return (box.innerHTML = insert);
}

function Listener(numberofcell) {
  let cell = document.querySelectorAll(".cell");
  for (i = 1; i < numberofcell; i++) {
    cell[i].addEventListener("click", function () {
      this.style.backgroundColor = "blue";
      console.log(this.innerHTML);
    });
  }
}

// let test = (document.createElement("h1").innerHTML = "hey");

// let cell = document.querySelector(".box");
// cell.append(test);
