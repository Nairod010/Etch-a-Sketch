const body = document.querySelector("body");
const container = document.querySelector("div");
const gridSquare = document.createElement("div");
gridSquare.className = "grid";
container.appendChild(gridSquare);



let grid = document.createElement("div");
grid.className = "square";
grid.addEventListener("hover", () => {
    grid.style.backgroundColor= "blue";
});


function createGrid(num){
    let dimension = 640/num
    for(i=0;i<num;i++) {
        for(j=0;j<num;j++) {
            let square = document.createElement("div");
            
            square.className = "square";
            square.style.height = dimension+"px";
            square.style.width = dimension+"px";
            square.style.backgroundColor = "white";
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor= "blue";
            });

            gridSquare.appendChild(square);
        };
    };
};


createGrid(16);

function deleteSquares() {
    let element = document.querySelector("div.grid");
    
    let child = element.lastElementChild;
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
};
};


const resetButton = document.createElement("button");
resetButton.className = "reset";
resetButton.textContent = "RESET";
resetButton.addEventListener("click", () => {
    let changeAlert = prompt("Choose the density of the squares between 16 to 100", 16);
    if(changeAlert > 100){
        alert("The density can not be bigger than 100, it's been set to maximum")
        changeAlert = 100;
    } else if (changeAlert < 16){
        alert("The density can not be smaller than 16, it's been set to minimum")
        changeAlert = 16;
    }
    deleteSquares();
    createGrid(changeAlert);
});
container.insertBefore(resetButton, gridSquare);


