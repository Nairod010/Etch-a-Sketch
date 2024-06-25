const body = document.querySelector("body");
const container = document.querySelector("div");
const gridSquare = document.createElement("div");
gridSquare.className = "grid";


const resetButton = document.createElement("button");
resetButton.className = "reset";
resetButton.textContent = "RESET";
resetButton.addEventListener("click", () => {

    createGrid(16);
});
body.insertBefore(resetButton, container);

let grid = document.createElement("div");
grid.className = "square";
grid.addEventListener("hover", () => {
    grid.style.backgroundColor= "blue";
});


function createGrid(num){
for(i=0;i<num;i++) {
    for(j=0;j<num;j++) {
        let grid = document.createElement("div");

        grid.className = "square";
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor= "blue";
        });
       
        container.appendChild(grid);
    };
};
};


createGrid(16);



