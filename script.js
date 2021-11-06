const LOSE = "You Lose! ";
const WIN = "You Win! ";
const TIE = "Tie! Both players selection is "

const labelResult = document.querySelector(".round-result");
const scoreTable = document.querySelector(".score");
const btnPlayAgain = document.querySelector(".play-again");
const buttons = Array.from(document.querySelectorAll(".buttons-container__button"));
const btnsContainer = document.querySelector(".buttons-container");
const title = document.querySelector(".make-choice");
const playerScore = document.querySelector(".your-score");
const oppsScore = document.querySelector(".opps-score");
const scoreHeader = document.querySelector(".score__header");
const restartBtn = document.querySelector(".play-again");
const divLose = document.querySelector(".icon-holder-lose");
const divWin = document.querySelector(".icon-holder-win");

buttons.forEach(button => {
    button.addEventListener("click",
        () => playRound(button.textContent.trim(), computerPlay()))
});

function addHidden(...elems) {
    elems.forEach(elem =>
        elem.classList.add("hidden"));
}

function removeHidden(...elems) {
    elems.forEach(elem =>
        elem.classList.remove("hidden"));
}

function addOnePoint(elem) {
    if (scoreTable.classList[1])
        removeHidden(scoreTable);
    elem.value = (parseInt(elem.value) + 1).toString();
    if (elem.value == 5)
        gameOver();
}

function changeLabel(text) {
    if (labelResult.classList[1])
        removeHidden(labelResult);
    labelResult.value = text;
}

function gameOver() {
    let winner = playerScore.value > oppsScore.value ? WIN : LOSE;
    changeLabel(`Game over! ${winner}`);
    scoreHeader.textContent = "Final Score:";
    addHidden(btnsContainer, title);
    if (oppsScore.value == "5")
        removeHidden(restartBtn, divLose);
    else
        removeHidden(restartBtn, divWin);
        
}

function playAgain() {
    oppsScore.value = "0";
    playerScore.value = "0";
    scoreHeader.textContent = "Score:";
    addHidden(scoreTable, labelResult, restartBtn, divLose, divWin);

    removeHidden(btnsContainer, title);
}

restartBtn.addEventListener("click", playAgain);

function computerPlay() {
    const tmp = Math.random();
    return tmp < 0.33 ? "scissors" : tmp < 0.66 ? "paper" : "rock";
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    switch (computerSelection) {
        case "scissors":
            switch (playerSelection) {
                case "scissors":
                    changeLabel(TIE + `${playerSelection}`);
                    break;
                case "paper":
                    changeLabel(LOSE + `${computerSelection} beats ${playerSelection}`);
                    addOnePoint(oppsScore);
                    break;
                case "rock":
                    changeLabel(WIN + `${playerSelection} beats ${computerSelection}`);
                    addOnePoint(playerScore);
                    break;
                default:
                    break;
            }
            break;
        case "paper":
            switch (playerSelection) {
                case "paper":
                    changeLabel(TIE + `${playerSelection}`);
                    break;
                case "rock":
                    changeLabel(LOSE + `${computerSelection} beats ${playerSelection}`);
                    addOnePoint(oppsScore);
                    break;
                case "scissors":
                    changeLabel(WIN + `${playerSelection} beats ${computerSelection}`);
                    addOnePoint(playerScore);
                    break;
                default:
                    break;
            }
            break;
        case "rock":
            switch (playerSelection) {
                case "rock":
                    changeLabel(TIE + `${playerSelection}`);
                    break;
                case "scissors":
                    changeLabel(LOSE + `${computerSelection} beats ${playerSelection}`);
                    addOnePoint(oppsScore);
                    break;
                case "paper":
                    changeLabel(WIN + `${playerSelection} beats ${computerSelection}`);
                    addOnePoint(playerScore);
                    break;
                default:
                    break;
            }
            break;
        default: break;
    }
}