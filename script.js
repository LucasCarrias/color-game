var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");


init();

function init(){
    setupModeButtons();

    setupSquares();

    resetBtn.addEventListener("click", function(){
        reset();
    });

    reset();
}

function setupModeButtons(){
    for (var i = 0; i < modeBtns.length; i++){
        modeBtns[i].addEventListener("click", function(){
            for (var j = 0; j < modeBtns.length; j++){
                modeBtns[j].classList.remove("selected");
            }
            this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        reset();
        });
    }
}

function setupSquares(){
    for (var index = 0; index < squares.length; index++) {
        squares[index].style.backgroundColor = colors[index];
        squares[index].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if (clickedColor == pickedColor){
                change_colors(pickedColor);
                message.textContent = "Correct!";
                resetBtn.textContent = "Play Again?";
            } else {
                message.textContent = "Try Again";
                this.style.backgroundColor = "#232323";
            }        
        });
    }
}

function reset(){
    message.textContent = "";
    colors = generateRandomColors(numSquares);
    resetBtn.textContent = "New Colors";
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var index = 0; index < squares.length; index++) {
        if (colors[index]){
            squares[index].style.backgroundColor = colors[index];
            squares[index].style.display = "block";
        } else {
            squares[index].style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "steelblue"
}

function change_colors(color){
    for (square of squares){
        square.style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
};

function pickColor(){
    let randIdx = Math.floor(Math.random() * colors.length);
    return colors[randIdx];
}

function generateRandomColors(amount){
    var arr = [];
    for (let i = 0; i < amount; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function toggleBtnClass(){
    easyBtn.classList.toggle("selected");
    hardBtn.classList.toggle("selected");
}