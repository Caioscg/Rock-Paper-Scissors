const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
let random
const draw = document.querySelector(".draw")
const you = document.querySelector("#you")
const computer = document.querySelector("#computer")
let computerScore = 0
let youScore = 0
const youSpan = document.createElement("span")
const computerSpan = document.createElement("span")

function hide() {
    draw.style.visibility = "hidden"
}
function getRandom() {
    random = Math.floor(Math.random() * 3)
    return random  // 0 = rock;  1 = paper;  2 = scissors
}
function Rock() {
    getRandom()
    if (random === 0) {
        draw.style.visibility = "visible"
        alert("COMPUTER: rock")
        setTimeout(hide, 1000)
    }
    else if (random === 1) {
        computerScore++;
        alert("COMPUTER: paper")
    }
    else if (random === 2) {
        youScore ++;
        alert("COMPUTER: scissors")
    }
    youSpan.innerHTML = youScore
    you.append(youSpan)
    
    computerSpan.innerHTML = computerScore
    computer.append(computerSpan)
}
function Paper() {
    getRandom()
    if (random === 1) {
        draw.style.visibility = "visible"
        alert("COMPUTER: paper")
        setTimeout(hide, 1000)
    }
    else if (random === 2) {
        computerScore++;
        alert("COMPUTER: scissors")
    }
    else if (random === 0) {
        youScore++;
        alert("COMPUTER: rock")
    }
    youSpan.innerHTML = youScore
    you.append(youSpan)
    
    computerSpan.innerHTML = computerScore
    computer.append(computerSpan)
}
function Scissors() {
    getRandom()
    if (random === 2) {
        draw.style.visibility = "visible"
        alert("COMPUTER: scissors")
        setTimeout(hide, 1000)
        
    }
    else if (random === 0) {
        computerScore++;
        alert("COMPUTER: rock")
    }
    else if (random === 1) {
        youScore++;
        alert("COMPUTER: paper")
    }
    youSpan.innerHTML = youScore
    you.append(youSpan)
    
    computerSpan.innerHTML = computerScore
    computer.append(computerSpan)
}
rock.addEventListener("click", Rock)
paper.addEventListener("click", Paper)
scissors.addEventListener("click", Scissors)