const body = document.querySelector("body");
const container = document.querySelector("div");
const gridSquare = document.createElement("div");
const buttonsContainer = document.createElement("div");

gridSquare.className = "grid";
buttonsContainer.className = "buttonsContainer";
container.appendChild(buttonsContainer);
container.appendChild(gridSquare);


let grid = document.createElement("div");
grid.className = "square";
grid.addEventListener("hover", () => {
    grid.style.backgroundColor= "blue";
});


const changeColorButton = document.createElement("button");
changeColorButton.className = "changeColor";
changeColorButton.textContent = "Random Colors";

changeColorButton.addEventListener("click",randomColorChange);

const RevertToBlackButton = document.createElement("button");
RevertToBlackButton.className = "revertBlack";
RevertToBlackButton.textContent = "Black Color";

//RevertToBlackButton.addEventListener("click", backToBlackChange);

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
                square.style.backgroundColor= "black";
                                

            });

            gridSquare.appendChild(square);
        };
    };
    
};


createGrid(16);

function randomColorChange(){
    let divSquares = document.querySelectorAll("div.square"); 
    const squareNumbers = Object.keys(divSquares).length;
    for(let i = 0; i <squareNumbers; i++){
        divSquares[i].addEventListener("mouseover", () => {
            divSquares[i].style.backgroundColor= "#" + Math.floor(Math.random() * 16777215).toString(16);

        });
    };
};

function revertColorToBlack(){
    let divSquares = document.querySelectorAll("div.square"); 
    const squareNumbers = Object.keys(divSquares).length;
    for(let i = 0; i <squareNumbers; i++){
        divSquares[i].addEventListener("mouseover", () => {
            divSquares[i].style.backgroundColor= "black"; 

        });
    };
};

RevertToBlackButton.addEventListener("click", revertColorToBlack);

changeColorButton.addEventListener("click",randomColorChange);

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
buttonsContainer.appendChild(resetButton);
//container.insertBefore(resetButton, gridSquare);


buttonsContainer.appendChild(changeColorButton);
buttonsContainer.appendChild(RevertToBlackButton);
