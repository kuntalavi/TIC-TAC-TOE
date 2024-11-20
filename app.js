let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
let resultDiv = document.querySelector(".result");
let resultPara = document.querySelector(".resultPara");
let newBtn = document.querySelector(".newBtn");

let turnX = true;
let ct= 0;
let winner = "";

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnX){
            box.innerText = "X";
            box.style.color = "black";
            turnX = false;
        }
        else{
            box.innerText = "O";
            box.style.color = "white";
            turnX = true;
        }
        box.disabled = true;
        ct++;
        if(!winner){
            checkWinner();
        }
        if(winner){
            win();
        }
        if(ct === 9 && !winner){
            draw();
        }
    });
});

let draw = () => {
    resultDiv.style.display = "flex";
    resultDiv.style.alignItems = "center";
    resultDiv.style.justifyContent = "center";
    resultDiv.style.flexDirection = "column"
    resultPara.innerText = "It's a Draw!";
    resultPara.style.fontSize = "100px";
}

let win = () => {
    resultDiv.style.display = "flex";
    resultDiv.style.alignItems = "center";
    resultDiv.style.justifyContent = "center";
    resultDiv.style.flexDirection = "column"
    resultPara.innerText = `Winner: ${winner}`;
    resultPara.style.fontSize = "100px";
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    turnX = true;
    enableBoxes();
    resultDiv.style.display = "none";
    winner = "";
    ct=0;
}

const checkWinner = () => {
    for(pattern of winPatterns){
        let po1 = boxes[pattern[0]].innerText;
        let po2 = boxes[pattern[1]].innerText;
        let po3 = boxes[pattern[2]].innerText;

        if(po1 != "" && po2 != " " && po3 != " "){
            if(po1 === po2 && po1 == po3){
                winner = `${po1}`;
                return;
            }
        }
    }
}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);