const container = document.querySelector(".container");

const makeCells = () => {
  container.innerHTML = "";
  Array.from({ length: 10 }).forEach((_, row) => {
    Array.from({ length: 10 }).forEach((_, col) => {
      const div = document.createElement("div");
      // div.className=`cell ${row} ${col} `;
      div.className = `cell`;
      div.dataset.row = `${row}`;
      div.dataset.col = `${col}`;
      container.append(div);
    });
  });
};

makeCells();    

const getDivBydataSet = (row, col) => {
  return container.querySelector(`div[data-row="${row}"][data-col="${col}"]`);
};

container.addEventListener("mousemove", (e) => {
  const target = e.target;

  container.addEventListener("mouseleave",makeCells);

//   if (!target) return;
  const row = target.dataset.row;
  const col = target.dataset.col;
  console.log(row, col);

  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      const div = getDivBydataSet(r, c);
      if (c <= col && r >= row) {
        div.style.background = "red";
      } else {
        div.style.background = "white";
      }
    }
  }
});
